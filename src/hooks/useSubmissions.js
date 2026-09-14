import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

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

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setSubmissions(items);
      setLoading(false);
    }, (error) => {
      console.error('Submissions listener error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, role, filters.studentId, filters.class, filters.subject, filters.date, filters.status]);

  return { submissions, loading };
}

export default useSubmissions;
