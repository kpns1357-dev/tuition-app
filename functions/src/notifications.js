const { onSchedule } = require('firebase-functions/v2/scheduler');
const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const twilio = require('twilio');

const TWILIO_ACCOUNT_SID = defineSecret('TWILIO_ACCOUNT_SID');
const TWILIO_AUTH_TOKEN = defineSecret('TWILIO_AUTH_TOKEN');
const TWILIO_PHONE_NUMBER = defineSecret('TWILIO_PHONE_NUMBER');

async function sendSmsNotification(to, message) {
    if (!to) return false;
    
    try {
        const client = twilio(TWILIO_ACCOUNT_SID.value(), TWILIO_AUTH_TOKEN.value());
        await client.messages.create({
            body: message,
            from: TWILIO_PHONE_NUMBER.value(),
            to: to
        });
        return true;
    } catch (error) {
        console.error('Error sending SMS:', error);
        return false;
    }
}

exports.checkMissedDays = onSchedule({
    schedule: '30 15 * * *', // 15:30 UTC = 9:00 PM IST
    secrets: [TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER]
}, async (event) => {
    const db = admin.firestore();
    const usersSnapshot = await db.collection('users').where('role', '==', 'student').get();
    
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        // Format YYYY-MM-DD
        dates.push(d.toISOString().split('T')[0]);
    }

    for (const userDoc of usersSnapshot.docs) {
        const student = userDoc.data();
        const studentId = userDoc.id;
        const studentClass = student.class;

        if (!studentClass) continue;

        let activeDaysCount = 0;
        let missedDaysCount = 0;

        // Check last 7 days from newest to oldest
        for (const date of dates) {
            const logDoc = await db.collection(`classes/${studentClass}/dailyLogs`).doc(date).get();
            if (!logDoc.exists) continue;
            
            const log = logDoc.data();
            if (log.status === 'holiday' || log.status === 'no_homework') continue;
            
            activeDaysCount++;

            const subsQuery = await db.collection('submissions')
                .where('studentId', '==', studentId)
                .where('date', '==', date)
                .get();
                
            if (subsQuery.empty) {
                missedDaysCount++;
            } else {
                // If they submitted on a recent day, break consecutive streak count
                break;
            }
        }

        if (missedDaysCount >= 3) {
            // Notify Admin
            await db.collection('notifications').add({
                recipientId: 'admin',
                type: 'consecutive_missed',
                message: `${student.displayName} (${studentClass}) has not submitted homework for ${missedDaysCount} consecutive active days.`,
                relatedStudent: studentId,
                read: false,
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
            
            // Optionally send SMS to admin if we have admin phone, hardcoded or fetched.
            // Assuming we just send to a default admin number or skip if not available.
        }
    }
});

exports.notifyParentOnAttendance = onDocumentCreated({
    document: 'attendance/{classId}/{date}/{studentId}',
    secrets: [TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER]
}, async (event) => {
    const data = event.data.data();
    const studentId = event.params.studentId;
    const date = event.params.date;
    
    const db = admin.firestore();
    const userDoc = await db.collection('users').doc(studentId).get();
    
    if (userDoc.exists) {
        const user = userDoc.data();
        const parentPhone = user.parentPhone;
        const statusStr = data.present ? 'present' : 'absent';
        
        const message = `Attendance update: ${user.displayName} was marked ${statusStr} on ${date}.`;
        
        await db.collection('notifications').add({
            recipientId: studentId, // Or parent specific ID, but parent shares student ID view
            type: 'attendance_update',
            message: message,
            relatedStudent: studentId,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        if (parentPhone) {
            await sendSmsNotification(parentPhone, message);
        }
        
        await event.data.ref.update({ parentNotified: true });
    }
});

exports.notifyParentOnAttendanceUpdate = onDocumentUpdated({
    document: 'attendance/{classId}/{date}/{studentId}',
    secrets: [TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER]
}, async (event) => {
    const data = event.data.after.data();
    const previousData = event.data.before.data();
    
    if (data.present === previousData.present) return; // Status didn't change
    
    const studentId = event.params.studentId;
    const date = event.params.date;
    
    const db = admin.firestore();
    const userDoc = await db.collection('users').doc(studentId).get();
    
    if (userDoc.exists) {
        const user = userDoc.data();
        const parentPhone = user.parentPhone;
        const statusStr = data.present ? 'present' : 'absent';
        
        const message = `Attendance update: ${user.displayName} was marked ${statusStr} on ${date}.`;
        
        await db.collection('notifications').add({
            recipientId: studentId,
            type: 'attendance_update',
            message: message,
            relatedStudent: studentId,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        if (parentPhone) {
            await sendSmsNotification(parentPhone, message);
        }
        
        await event.data.after.ref.update({ parentNotified: true });
    }
});


exports.notifyParentOnHomeworkStatus = async function(submissionId) {
    const db = admin.firestore();
    const submissionDoc = await db.collection('submissions').doc(submissionId).get();
    if (!submissionDoc.exists) return;
    
    const submission = submissionDoc.data();
    
    let message = `Homework for ${submission.subject} on ${submission.date} is now ${submission.status}.`;
    if (submission.status === 'overridden') {
        message = `Homework for ${submission.subject} on ${submission.date} has been reviewed and verified by admin.`;
    }
    
    await db.collection('notifications').add({
        recipientId: submission.studentId, // Parent view uses student notifications or its own
        type: 'homework_status',
        message: message,
        relatedStudent: submission.studentId,
        read: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
};
