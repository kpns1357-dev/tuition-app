const { onCall, HttpsError } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const crypto = require('crypto');

/**
 * Validates if the caller is an admin.
 * @param {Object} auth - The auth object from request
 */
function verifyAdmin(auth) {
    if (!auth) {
        throw new HttpsError('unauthenticated', 'User must be authenticated.');
    }
    if (auth.token.role !== 'admin') {
        throw new HttpsError('permission-denied', 'Only admins can perform this action.');
    }
}

exports.createStudentAccount = onCall(async (request) => {
    verifyAdmin(request.auth);

    const { email, password, displayName, class: studentClass, parentPhone } = request.data;
    if (!email || !password || !displayName || !studentClass || !parentPhone) {
        throw new HttpsError('invalid-argument', 'Missing required parameters: email, password, displayName, class, parentPhone');
    }

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName,
        });

        await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'student' });

        const parentToken = crypto.randomBytes(32).toString('hex');

        await admin.firestore().collection('users').doc(userRecord.uid).set({
            role: 'student',
            displayName,
            email,
            class: studentClass,
            parentPhone,
            parentToken,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        return { uid: userRecord.uid, parentToken };
    } catch (error) {
        console.error('Error creating student account:', error);
        throw new HttpsError('internal', 'Error creating student account', error.message);
    }
});

exports.createAdminAccount = onCall(async (request) => {
    verifyAdmin(request.auth);

    const { email, password, displayName } = request.data;
    if (!email || !password || !displayName) {
        throw new HttpsError('invalid-argument', 'Missing required parameters: email, password, displayName');
    }

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName,
        });

        await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'admin' });

        await admin.firestore().collection('users').doc(userRecord.uid).set({
            role: 'admin',
            displayName,
            email,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        return { uid: userRecord.uid };
    } catch (error) {
        console.error('Error creating admin account:', error);
        throw new HttpsError('internal', 'Error creating admin account', error.message);
    }
});

exports.regenerateParentToken = onCall(async (request) => {
    verifyAdmin(request.auth);

    const { studentId } = request.data;
    if (!studentId) {
        throw new HttpsError('invalid-argument', 'Missing required parameter: studentId');
    }

    try {
        const parentToken = crypto.randomBytes(32).toString('hex');

        await admin.firestore().collection('users').doc(studentId).update({
            parentToken,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        return { parentToken };
    } catch (error) {
        console.error('Error regenerating parent token:', error);
        throw new HttpsError('internal', 'Error regenerating parent token', error.message);
    }
});
