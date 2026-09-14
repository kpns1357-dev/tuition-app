const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const OpenAI = require('openai');

const OPENROUTER_API_KEY = defineSecret('OPENROUTER_API_KEY');

async function downloadFileAsBase64(storagePath) {
    if (!storagePath) return null;
    const bucket = admin.storage().bucket();
    const file = bucket.file(storagePath);
    try {
        const [buffer] = await file.download();
        return buffer.toString('base64');
    } catch (error) {
        console.error(`Error downloading file ${storagePath}:`, error);
        return null;
    }
}

async function callOpenRouter(model, systemPrompt, userContent, apiKey) {
    const client = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: apiKey,
    });
    
    try {
        const response = await client.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userContent }
            ],
            // We want JSON if possible, but parsing standard response is fine too
            response_format: { type: 'json_object' }
        });
        
        return JSON.parse(response.choices[0].message.content);
    } catch (error) {
        console.error(`Error calling OpenRouter with model ${model}:`, error);
        // Try fallback parsing if not valid JSON
        try {
            // Rough parsing if the model didn't return proper JSON despite format request
            return JSON.parse(response.choices[0].message.content.replace(/```json/g, '').replace(/```/g, ''));
        } catch(e) {
             throw new HttpsError('internal', 'AI returned invalid format', error.message);
        }
    }
}

function constructImageMessage(text, sourceB64s, studentB64s) {
    const content = [{ type: 'text', text: text }];
    for (const b64 of sourceB64s) {
        if (b64) content.push({ type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } });
    }
    for (const b64 of studentB64s) {
        if (b64) content.push({ type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } });
    }
    return content;
}

exports.triggerVerification = onCall({ secrets: [OPENROUTER_API_KEY] }, async (request) => {
    const auth = request.auth;
    if (!auth) throw new HttpsError('unauthenticated', 'User must be authenticated.');

    const { submissionId } = request.data;
    if (!submissionId) throw new HttpsError('invalid-argument', 'Missing submissionId.');

    const db = admin.firestore();
    const submissionRef = db.collection('submissions').doc(submissionId);
    const submissionDoc = await submissionRef.get();

    if (!submissionDoc.exists) throw new HttpsError('not-found', 'Submission not found.');
    const submission = submissionDoc.data();

    if (submission.studentId !== auth.uid) {
        throw new HttpsError('permission-denied', 'You do not own this submission.');
    }

    const dailyLogRef = db.collection(`classes/${submission.class}/dailyLogs`).doc(submission.date);
    const dailyLogDoc = await dailyLogRef.get();
    
    let sourcePaths = [];
    let logSource = 'tuition';
    if (dailyLogDoc.exists) {
        const dailyLog = dailyLogDoc.data();
        const subjectLog = dailyLog.subjects ? dailyLog.subjects[submission.subject] : null;
        if (subjectLog) {
            sourcePaths = subjectLog.files || [];
            if (subjectLog.source) logSource = subjectLog.source; 
        }
    }

    // Download files
    const sourceB64s = await Promise.all(sourcePaths.map(downloadFileAsBase64));
    const studentB64s = await Promise.all((submission.files || []).map(downloadFileAsBase64));

    const apiKey = OPENROUTER_API_KEY.value();
    const primaryModel = 'thudm/glm-5.3-flash';
    const escalationModel = 'google/gemini-2.5-pro';

    let finalScore = 0;
    let finalFeedback = '';
    let finalModel = primaryModel;
    let aiStatus = 'pending';
    let docStatus = 'pending';

    if (submission.subject === 'maths' && logSource === 'website') {
        const prompt = "Is this student work genuinely related to mathematics? Score 0-100 where 100 means definitely math content. Return JSON: {\"score\": number, \"feedback\": \"string\"}";
        const msg = constructImageMessage("Please check this student work.", [], studentB64s);
        
        const res = await callOpenRouter(primaryModel, prompt, msg, apiKey);
        finalScore = res.score || 0;
        finalFeedback = res.feedback || '';
        
        if (finalScore >= 50) {
            aiStatus = 'pass';
            docStatus = 'verified';
        } else {
            aiStatus = 'fail';
            docStatus = 'needs_review';
            
            // Flag admin
            await db.collection('notifications').add({
                recipientId: 'admin',
                type: 'maths_rejected',
                message: `Maths submission from ${submission.studentName} rejected by AI.`,
                relatedStudent: submission.studentId,
                read: false,
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
        }
    } else if (submission.type === 'correction') {
        const prompt = "Verify if the student has identified and attempted some corrections. Score 0-100. Be lenient. Return JSON: {\"score\": number, \"feedback\": \"string\"}";
        const msg = constructImageMessage("Source material vs student corrections.", sourceB64s, studentB64s);
        const res = await callOpenRouter(primaryModel, prompt, msg, apiKey);
        
        finalScore = res.score || 0;
        finalFeedback = res.feedback || '';
        if (finalScore >= 50) {
            aiStatus = 'pass';
            docStatus = 'verified';
        } else {
            aiStatus = 'fail';
            docStatus = 'needs_review';
        }
    } else {
        // SST/Science or Maths from tuition
        const prompt = "You are a homework verification AI. Compare the student's work with the source material. Score the concept match from 0-100 (not exact wording match - look for whether the student captured the key concepts and ideas). Also identify any minor issues the student can fix themselves. Return exactly JSON format: {\"score\": number, \"feedback\": \"string\", \"minorIssues\": [\"issue1\", \"issue2\"]}";
        const msg = constructImageMessage("Compare these source materials (first set) with the student's work (second set).", sourceB64s, studentB64s);
        
        let res = await callOpenRouter(primaryModel, prompt, msg, apiKey);
        
        if (res.score >= 55 && res.score <= 75) {
            // Escalate
            finalModel = escalationModel;
            res = await callOpenRouter(escalationModel, prompt, msg, apiKey);
        }
        
        finalScore = res.score || 0;
        finalFeedback = res.feedback || '';
        const minorIssues = res.minorIssues || [];
        
        if (finalScore >= 65) {
            aiStatus = 'pass';
            docStatus = 'verified';
        } else if (finalScore < 65 && minorIssues.length > 0 && finalScore >= 40) { // Arbitrary threshold for 'only minor issues'
            aiStatus = 'borderline';
            docStatus = 'pending';
            finalFeedback = `Please fix: ${minorIssues.join(', ')}. ` + finalFeedback;
        } else {
            aiStatus = 'fail';
            docStatus = 'needs_review';
            
            // Notify Admin
            await db.collection('notifications').add({
                recipientId: 'admin',
                type: 'ai_fail',
                message: `Submission from ${submission.studentName} failed AI verification with score ${finalScore}.`,
                relatedStudent: submission.studentId,
                read: false,
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
            // trigger SMS via another system or here directly if we had Twilio. We'll rely on the notification system to pick it up or we can import the helper if needed.
        }
    }

    await submissionRef.update({
        aiScore: finalScore,
        aiModel: finalModel,
        aiFeedback: finalFeedback,
        aiStatus: aiStatus,
        status: docStatus,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    // Call helper if needed for parent notification (we'll implement this helper in notifications.js and require it here, but circular dependencies might be an issue. Better to just trigger it via Firestore or call it here.)
    if (docStatus === 'verified') {
        const notificationsHelper = require('./notifications');
        if (notificationsHelper.notifyParentOnHomeworkStatus) {
            await notificationsHelper.notifyParentOnHomeworkStatus(submissionId);
        }
    }

    return { success: true, aiScore: finalScore, aiStatus, status: docStatus };
});

exports.overrideSubmission = onCall(async (request) => {
    const auth = request.auth;
    if (!auth || auth.token.role !== 'admin') {
        throw new HttpsError('permission-denied', 'Only admins can override.');
    }

    const { submissionId, notes } = request.data;
    if (!submissionId) throw new HttpsError('invalid-argument', 'Missing submissionId.');

    const db = admin.firestore();
    const submissionRef = db.collection('submissions').doc(submissionId);
    
    await submissionRef.update({
        status: 'overridden',
        adminOverride: true,
        adminNotes: notes || '',
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    const submissionDoc = await submissionRef.get();
    const submission = submissionDoc.data();

    await db.collection('notifications').add({
        recipientId: submission.studentId,
        type: 'admin_override',
        message: `Your submission for ${submission.subject} has been overridden by an admin. Notes: ${notes}`,
        relatedStudent: submission.studentId,
        read: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    const notificationsHelper = require('./notifications');
    if (notificationsHelper.notifyParentOnHomeworkStatus) {
        await notificationsHelper.notifyParentOnHomeworkStatus(submissionId);
    }

    return { success: true };
});
