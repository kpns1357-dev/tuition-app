import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { demoStore } from '../lib/demoStore';

export function useSubmissions(filters = {}) {
  const { user, role } = useAuth();
  const [submissions, setSubmissions] = useState(() => {
    return demoStore.getSubmissions({
      studentId: role === 'student' ? user?.uid : filters.studentId,
      class: filters.class,
      subject: filters.subject,
      status: filters.status,
    });
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateFromDemo = () => {
      const demoList = demoStore.getSubmissions({
        studentId: role === 'student' ? user?.uid : filters.studentId,
        class: filters.class,
        subject: filters.subject,
        status: filters.status,
      });
      setSubmissions(demoList);
      setLoading(false);
    };

    updateFromDemo();
    const unsubscribeDemo = demoStore.subscribe(updateFromDemo);

    let unsubscribeFirestore = () => {};

    // Only attempt Firestore listener if a real Firebase API key is configured
    if (import.meta.env.VITE_FIREBASE_API_KEY && user && !user.uid?.startsWith('demo-')) {
      try {
        const constraints = [];
        if (role === 'student') constraints.push(where('studentId', '==', user.uid));
        if (filters.studentId && role === 'admin') constraints.push(where('studentId', '==', filters.studentId));
        if (filters.class) constraints.push(where('class', '==', filters.class));
        if (filters.subject) constraints.push(where('subject', '==', filters.subject));
        if (filters.date) constraints.push(where('date', '==', filters.date));
        if (filters.status) constraints.push(where('status', '==', filters.status));
        constraints.push(orderBy('createdAt', 'desc'));

        const q = query(collection(db, 'submissions'), ...constraints);
        unsubscribeFirestore = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            setSubmissions(items);
          }
        }, (err) => {
          console.warn('Firestore fallback to demo:', err);
        });
      } catch (e) {
        // ignore
      }
    }

    return () => {
      unsubscribeDemo();
      unsubscribeFirestore();
    };
  }, [user, role, filters.studentId, filters.class, filters.subject, filters.date, filters.status]);

  const refetch = () => {
    const demoList = demoStore.getSubmissions({
      studentId: role === 'student' ? user?.uid : filters.studentId,
      class: filters.class,
      subject: filters.subject,
      status: filters.status,
    });
    setSubmissions(demoList);
  };

  return { submissions, loading, refetch };
}

export default useSubmissions;
