import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { demoStore } from '../lib/demoStore';

export function useSubmissions(filters = {}) {
  const { user, role } = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubmissions([]);
      setLoading(false);
      return;
    }

    const constraints = [];

    // Students only see their own submissions
    if (role === 'student') {
      constraints.push(where('studentId', '==', user.uid));
    }

    // Optional filters
    if (filters.studentId && role === 'admin') {
      constraints.push(where('studentId', '==', filters.studentId));
    }
    if (filters.class) {
      constraints.push(where('class', '==', filters.class));
    }
    if (filters.subject) {
      constraints.push(where('subject', '==', filters.subject));
    }
    if (filters.date) {
      constraints.push(where('date', '==', filters.date));
    }
    if (filters.status) {
      constraints.push(where('status', '==', filters.status));
    }

    constraints.push(orderBy('createdAt', 'desc'));

    const q = query(collection(db, 'submissions'), ...constraints);

    const updateFromDemo = () => {
      const demoList = demoStore.getSubmissions({
        studentId: role === 'student' ? user.uid : filters.studentId,
        class: filters.class,
        subject: filters.subject,
        status: filters.status,
      });
      setSubmissions(demoList);
      setLoading(false);
    };

    let unsubscribeFirestore = () => {};
    let unsubscribeDemo = demoStore.subscribe(updateFromDemo);

    try {
      unsubscribeFirestore = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setSubmissions(items);
        } else {
          updateFromDemo();
        }
        setLoading(false);
      }, (error) => {
        console.warn('Using prototype submissions:', error);
        updateFromDemo();
      });
    } catch (e) {
      updateFromDemo();
    }

    return () => {
      unsubscribeFirestore();
      unsubscribeDemo();
    };
  }, [user, role, filters.studentId, filters.class, filters.subject, filters.date, filters.status]);

  return { submissions, loading };
}

export default useSubmissions;
