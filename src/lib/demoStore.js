// Centralized high-performance in-memory and localStorage reactive store for the interactive prototype

const STORAGE_KEY = 'tuition_prototype_store_v1';

const INITIAL_DATA = {
  students: [
    { id: 'std-1', displayName: 'Rahul Sharma', class: '6th', email: 'rahul@student.edu', parentPhone: '+91 98765 43210', parentToken: 'token-rahul-6th' },
    { id: 'std-2', displayName: 'Priya Patel', class: '6th', email: 'priya@student.edu', parentPhone: '+91 98765 43211', parentToken: 'token-priya-6th' },
    { id: 'std-3', displayName: 'Amit Kumar', class: '7th', email: 'amit@student.edu', parentPhone: '+91 98765 43212', parentToken: 'token-amit-7th' },
    { id: 'std-4', displayName: 'Sneha Gupta', class: '8th', email: 'sneha@student.edu', parentPhone: '+91 98765 43213', parentToken: 'token-sneha-8th' },
    { id: 'std-5', displayName: 'Rohan Verma', class: '9th', email: 'rohan@student.edu', parentPhone: '+91 98765 43214', parentToken: 'token-rohan-9th' },
    { id: 'std-6', displayName: 'Ananya Singh', class: '10th', email: 'ananya@student.edu', parentPhone: '+91 98765 43215', parentToken: 'token-ananya-10th' },
  ],
  admins: [
    { id: 'adm-1', displayName: 'Sir (Tuition Head)', email: 'sir@tuition.edu' },
    { id: 'adm-2', displayName: 'Assistant Teacher', email: 'assistant@tuition.edu' },
  ],
  dailyLogs: {
    '6th': {
      status: 'active',
      subjects: {
        sst: { required: true, taught: 'The Harappan Civilization & Urban Planning', sourcePages: 'pp. 42-48', sourceFiles: ['harappa-map.pdf'] },
        science: { required: true, taught: 'Photosynthesis, Chlorophyll & Stomatal Functions', sourcePages: 'pp. 88-92', sourceFiles: ['leaves-diagram.jpg'] },
        maths: { required: true, source: 'tuition', taught: 'Fractions and Mixed Decimals', sourcePages: 'Exercise 4.2', sourceFiles: [] },
      },
    },
    '7th': {
      status: 'active',
      subjects: {
        sst: { required: true, taught: 'Delhi Sultanate - Slave Dynasty', sourcePages: 'pp. 15-20', sourceFiles: [] },
        science: { required: true, taught: 'Nutrition in Animals', sourcePages: 'pp. 12-16', sourceFiles: [] },
        maths: { required: false, source: 'website', taught: '', sourcePages: '', sourceFiles: [] },
      },
    },
    '8th': {
      status: 'no_homework',
      subjects: { sst: { required: false }, science: { required: false }, maths: { required: false } },
    },
    '9th': {
      status: 'active',
      subjects: {
        sst: { required: true, taught: 'French Revolution', sourcePages: 'Ch 1', sourceFiles: [] },
        science: { required: true, taught: 'Motion and Kinematics Equations', sourcePages: 'pp. 95-102', sourceFiles: [] },
        maths: { required: true, source: 'website', taught: 'External Online Practice Questions', sourcePages: 'Online', sourceFiles: [] },
      },
    },
    '10th': {
      status: 'holiday',
      subjects: { sst: { required: false }, science: { required: false }, maths: { required: false } },
    },
    '5th': {
      status: 'active',
      subjects: {
        sst: { required: true, taught: 'Globes and Maps', sourcePages: 'pp. 5-8', sourceFiles: [] },
        science: { required: true, taught: 'Human Skeleton and Joints', sourcePages: 'pp. 30-34', sourceFiles: [] },
        maths: { required: false, source: 'tuition', taught: '', sourcePages: '', sourceFiles: [] },
      },
    },
  },
  submissions: [
    {
      id: 'sub-101',
      studentId: 'std-1',
      studentName: 'Rahul Sharma',
      class: '6th',
      subject: 'science',
      date: new Date().toISOString().split('T')[0],
      type: 'reflection',
      files: ['homework_reflection_p1.jpg'],
      aiScore: 84,
      aiModel: 'thudm/glm-5.3-flash',
      aiFeedback: 'Excellent grasp of chloroplast functions and photosynthesis formula. Minor omission: stomata gas exchange timing.',
      aiStatus: 'pass',
      status: 'verified',
      adminOverride: false,
      adminNotes: '',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 'sub-102',
      studentId: 'std-1',
      studentName: 'Rahul Sharma',
      class: '6th',
      subject: 'sst',
      date: new Date().toISOString().split('T')[0],
      type: 'reflection',
      files: ['harappa_reflection.jpg'],
      aiScore: 61,
      aiModel: 'escalated: google/gemini-2.5-pro',
      aiFeedback: 'Borderline concept match (61%). Covers Great Bath well, but missed citadels and drainage system architecture completely.',
      aiStatus: 'borderline',
      status: 'needs_review',
      adminOverride: false,
      adminNotes: '',
      createdAt: new Date(Date.now() - 1800000).toISOString(),
    },
    {
      id: 'sub-103',
      studentId: 'std-2',
      studentName: 'Priya Patel',
      class: '6th',
      subject: 'maths',
      date: new Date().toISOString().split('T')[0],
      type: 'maths',
      files: ['fractions_work.jpg'],
      aiScore: 92,
      aiModel: 'thudm/glm-5.3-flash',
      aiFeedback: 'Genuine mathematics work confirmed. Fraction conversions solved correctly with steps.',
      aiStatus: 'maths_verified',
      status: 'verified',
      adminOverride: false,
      adminNotes: '',
      createdAt: new Date(Date.now() - 5400000).toISOString(),
    },
    {
      id: 'sub-104',
      studentId: 'std-3',
      studentName: 'Amit Kumar',
      class: '7th',
      subject: 'science',
      date: new Date().toISOString().split('T')[0],
      type: 'rewrite',
      files: ['nutrition_rewrite.jpg'],
      aiScore: 78,
      aiModel: 'thudm/glm-5.3-flash',
      aiFeedback: 'Rewrite captured missed ruminant stomach concepts effectively. Concept coverage satisfied.',
      aiStatus: 'pass',
      status: 'verified',
      adminOverride: false,
      adminNotes: '',
      createdAt: new Date(Date.now() - 7200000).toISOString(),
    },
  ],
  attendance: {
    '6th': {
      'std-1': true,
      'std-2': true,
    },
    '7th': {
      'std-3': true,
    },
    '8th': {
      'std-4': false,
    },
    '9th': {
      'std-5': true,
    },
    '10th': {
      'std-6': true,
    },
  },
  notifications: [
    {
      id: 'notif-1',
      recipientId: 'admin',
      type: 'low_match',
      message: '⚠️ AI Alert: Rahul Sharma (6th) SST concept match is 61% (borderline pass threshold). Review required.',
      relatedStudent: 'std-1',
      read: false,
      createdAt: new Date(Date.now() - 1800000).toISOString(),
    },
    {
      id: 'notif-2',
      recipientId: 'std-1',
      type: 'homework_status',
      message: 'Science Homework (Reflection) verified with 84% concept match! Proceed to Step 2 (Correction).',
      relatedStudent: 'std-1',
      read: false,
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 'notif-3',
      recipientId: 'admin',
      type: 'missed_days',
      message: '🔴 Alert: Sneha Gupta (8th) has missed homework submissions for 3 consecutive days.',
      relatedStudent: 'std-4',
      read: false,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
};

class DemoStore {
  constructor() {
    this.data = this.load();
    this.listeners = new Set();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load demo store, falling back to initial data', e);
    }
    this.save(INITIAL_DATA);
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  save(newData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.warn('Storage quota exceeded or private mode', e);
    }
    this.data = newData;
    this.notify();
  }

  reset() {
    this.save(JSON.parse(JSON.stringify(INITIAL_DATA)));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.data);
      } catch (e) {
        console.error(e);
      }
    }
  }

  // Getters
  getStudents() {
    return this.data.students || [];
  }

  getAdmins() {
    return this.data.admins || [];
  }

  getDailyLog(className) {
    return this.data.dailyLogs[className] || {
      status: 'active',
      subjects: { sst: { required: false }, science: { required: false }, maths: { required: false } }
    };
  }

  getSubmissions(filter = {}) {
    let list = [...this.data.submissions];
    if (filter.studentId) list = list.filter(s => s.studentId === filter.studentId);
    if (filter.class) list = list.filter(s => s.class === filter.class);
    if (filter.subject) list = list.filter(s => s.subject === filter.subject);
    if (filter.status && filter.status !== 'all') list = list.filter(s => s.status === filter.status);
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  getNotifications(recipientId) {
    return this.data.notifications.filter(n => {
      if (recipientId === 'admin') return n.recipientId === 'admin';
      return n.recipientId === recipientId || n.relatedStudent === recipientId;
    });
  }

  // Actions
  addStudent({ displayName, email, class: studentClass, parentPhone }) {
    const id = 'std-' + Date.now();
    const parentToken = 'token-' + displayName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Math.random().toString(36).substring(2, 7);
    const newStudent = { id, displayName, email, class: studentClass, parentPhone, parentToken };
    const newData = {
      ...this.data,
      students: [newStudent, ...this.data.students]
    };
    this.save(newData);
    return newStudent;
  }

  addAdmin({ displayName, email }) {
    const id = 'adm-' + Date.now();
    const newAdmin = { id, displayName, email };
    const newData = {
      ...this.data,
      admins: [newAdmin, ...this.data.admins]
    };
    this.save(newData);
    return newAdmin;
  }

  updateDailyLog(className, logData) {
    const newData = {
      ...this.data,
      dailyLogs: {
        ...this.data.dailyLogs,
        [className]: logData
      }
    };
    this.save(newData);
  }

  submitHomework({ studentId, studentName, class: studentClass, subject, type, files }) {
    const isMaths = subject === 'maths';
    
    // Simulate smart AI checking instantly
    let aiScore = Math.floor(Math.random() * 25) + 70; // 70-95
    let aiModel = 'thudm/glm-5.3-flash';
    let aiStatus = 'pass';
    let status = 'verified';
    let aiFeedback = `Concept match: ${aiScore}%. All key concepts identified correctly. Good handwriting and clear headings.`;

    if (type === 'reflection' && Math.random() > 0.6) {
      aiScore = 63; // Borderline
      aiModel = 'escalated: google/gemini-2.5-pro';
      aiStatus = 'borderline';
      status = 'needs_review';
      aiFeedback = `Borderline concept coverage (${aiScore}%). Escalated to Gemini 2.5 Pro. Key ideas partially captured, but missed core sub-topics. Flagged for Sir's review.`;
    }

    if (isMaths) {
      aiScore = 95;
      aiStatus = 'maths_verified';
      status = 'verified';
      aiFeedback = 'Mathematics content confirmed. Accurate formulas and calculation steps shown.';
    }

    const newSub = {
      id: 'sub-' + Date.now(),
      studentId,
      studentName,
      class: studentClass,
      subject,
      date: new Date().toISOString().split('T')[0],
      type,
      files: files && files.length ? files.map(f => f.name || 'document.jpg') : ['page_upload.jpg'],
      aiScore,
      aiModel,
      aiFeedback,
      aiStatus,
      status,
      adminOverride: false,
      adminNotes: '',
      createdAt: new Date().toISOString()
    };

    const newNotifs = [...this.data.notifications];
    if (status === 'needs_review') {
      newNotifs.unshift({
        id: 'notif-' + Date.now(),
        recipientId: 'admin',
        type: 'low_match',
        message: `⚠️ Low Match Alert: ${studentName} (${studentClass}) submitted ${subject.toUpperCase()} (${type}) with ${aiScore}% match.`,
        relatedStudent: studentId,
        read: false,
        createdAt: new Date().toISOString()
      });
    }

    const newData = {
      ...this.data,
      submissions: [newSub, ...this.data.submissions],
      notifications: newNotifs
    };
    this.save(newData);
    return newSub;
  }

  overrideSubmission(submissionId, notes) {
    const updatedSubmissions = this.data.submissions.map(sub => {
      if (sub.id === submissionId) {
        return {
          ...sub,
          status: 'overridden',
          adminOverride: true,
          adminNotes: notes || 'Approved manually by Sir.',
        };
      }
      return sub;
    });

    const target = this.data.submissions.find(s => s.id === submissionId);
    const newNotifs = [...this.data.notifications];
    if (target) {
      newNotifs.unshift({
        id: 'notif-' + Date.now(),
        recipientId: target.studentId,
        type: 'homework_status',
        message: `Your ${target.subject.toUpperCase()} submission has been reviewed and verified by Sir. Notes: "${notes || 'Approved'}"`,
        relatedStudent: target.studentId,
        read: false,
        createdAt: new Date().toISOString()
      });
    }

    this.save({
      ...this.data,
      submissions: updatedSubmissions,
      notifications: newNotifs
    });
  }

  saveAttendance(className, attendanceMap) {
    const newData = {
      ...this.data,
      attendance: {
        ...this.data.attendance,
        [className]: {
          ...(this.data.attendance[className] || {}),
          ...attendanceMap
        }
      }
    };
    this.save(newData);
  }

  regenerateParentToken(studentId) {
    const newToken = 'token-' + Math.random().toString(36).substring(2, 10);
    const updatedStudents = this.data.students.map(s => {
      if (s.id === studentId) return { ...s, parentToken: newToken };
      return s;
    });
    this.save({ ...this.data, students: updatedStudents });
    return newToken;
  }

  getParentReport(token) {
    const student = this.data.students.find(s => s.parentToken === token) || this.data.students[0];
    const studentSubs = this.getSubmissions({ studentId: student.id });
    const classLog = this.getDailyLog(student.class);

    const todayHomework = [
      { subject: 'Maths', status: classLog.subjects.maths?.required ? (studentSubs.find(s => s.subject === 'maths') ? 'completed' : 'pending') : 'not_required' },
      { subject: 'Science', status: classLog.subjects.science?.required ? (studentSubs.find(s => s.subject === 'science') ? 'completed' : 'pending') : 'not_required' },
      { subject: 'SST', status: classLog.subjects.sst?.required ? (studentSubs.find(s => s.subject === 'sst') ? 'completed' : 'pending') : 'not_required' },
    ];

    const isPresent = this.data.attendance[student.class]?.[student.id] ?? true;

    return {
      student: {
        name: student.displayName,
        class: `${student.class} Class`,
      },
      todayHomework,
      recentSubmissions: studentSubs.slice(0, 5),
      recentAttendance: [
        { date: 'Today', status: isPresent ? 'present' : 'absent' },
        { date: 'Yesterday', status: 'present' },
        { date: '2 days ago', status: 'present' },
        { date: '3 days ago', status: 'present' },
      ],
      notifications: this.getNotifications(student.id).slice(0, 5)
    };
  }
}

export const demoStore = new DemoStore();
