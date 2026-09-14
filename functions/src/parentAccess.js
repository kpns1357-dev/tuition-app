const { onCall, HttpsError } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');

function getIstDateString(date = new Date()) {
    const opts = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
    // Format comes out as DD/MM/YYYY or MM/DD/YYYY depending on locale, safer to build it
    const formatter = new Intl.DateTimeFormat('en-CA', opts); // en-CA gives YYYY-MM-DD
    const parts = formatter.formatToParts(date);
    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day = parts.find(p => p.type === 'day').value;
    return `${year}-${month}-${day}`;
}

exports.getParentStatus = onCall(async (request) => {
    const { token } = request.data;
    if (!token) {
        throw new HttpsError('invalid-argument', 'Missing parent token.');
    }

    const db = admin.firestore();
    const usersQuery = await db.collection('users').where('parentToken', '==', token).limit(1).get();

    if (usersQuery.empty) {
        throw new HttpsError('not-found', 'Invalid parent token.');
    }

    const studentDoc = usersQuery.docs[0];
    const student = studentDoc.data();
    const studentId = studentDoc.id;

    const todayDateStr = getIstDateString();

    let todayLogStatus = 'unknown';
    const logDoc = await db.collection(`classes/${student.class}/dailyLogs`).doc(todayDateStr).get();
    if (logDoc.exists) {
        todayLogStatus = logDoc.data().status || 'active';
    }

    // Last 7 days calculations
    const dates = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(now.getTime());
        d.setDate(d.getDate() - i);
        dates.push(getIstDateString(d));
    }
    const oldestDate = dates[dates.length - 1];

    // Submissions for last 7 days
    const subsQuery = await db.collection('submissions')
        .where('studentId', '==', studentId)
        .where('date', '>=', oldestDate)
        .orderBy('date', 'desc')
        .get();
        
    const submissions = subsQuery.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            subject: data.subject,
            date: data.date,
            status: data.status,
            aiFeedback: data.aiFeedback,
            adminNotes: data.adminNotes
        };
    });

    // Attendance for last 7 days
    // Since attendance is structured as attendance/{classId}/{date}/{studentId},
    // we need to fetch individually or use a collection group query.
    // Given the structure, collection group or 7 document fetches:
    const attendanceRecords = [];
    for (const date of dates) {
        const attDoc = await db.collection(`attendance/${student.class}/${date}`).doc(studentId).get();
        if (attDoc.exists) {
            attendanceRecords.push({
                date: date,
                present: attDoc.data().present
            });
        }
    }

    // Recent notifications (limit 10)
    const notifQuery = await db.collection('notifications')
        .where('recipientId', '==', studentId)
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get();

    const notifications = notifQuery.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            type: data.type,
            message: data.message,
            createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : null
        };
    });

    return {
        student: {
            name: student.displayName,
            class: student.class
        },
        todayLogStatus,
        submissions,
        attendance: attendanceRecords,
        notifications
    };
});
