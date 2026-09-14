import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { demoStore } from '../lib/demoStore';

export function useNotifications() {
  const { user, role } = useAuth();
  const [notifications, setNotifications] = useState(() => {
    return demoStore.getNotifications(role === 'admin' ? 'admin' : user?.uid);
  });
  const [unreadCount, setUnreadCount] = useState(() => {
    const list = demoStore.getNotifications(role === 'admin' ? 'admin' : user?.uid);
    return list.filter((n) => !n.read).length;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateFromDemo = () => {
      const demoList = demoStore.getNotifications(role === 'admin' ? 'admin' : user?.uid);
      setNotifications(demoList);
      setUnreadCount(demoList.filter((n) => !n.read).length);
      setLoading(false);
    };

    updateFromDemo();
    const unsubscribeDemo = demoStore.subscribe(updateFromDemo);

    let unsubscribeFirestore = () => {};

    if (import.meta.env.VITE_FIREBASE_API_KEY && user && !user.uid?.startsWith('demo-')) {
      try {
        let q;
        if (role === 'admin') {
          q = query(
            collection(db, 'notifications'),
            where('recipientId', 'in', ['admin', user.uid]),
            orderBy('createdAt', 'desc')
          );
        } else {
          q = query(
            collection(db, 'notifications'),
            where('recipientId', '==', user.uid),
            orderBy('createdAt', 'desc')
          );
        }

        unsubscribeFirestore = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            setNotifications(items);
            setUnreadCount(items.filter((n) => !n.read).length);
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
  }, [user, role]);

  const markAsRead = async (notificationId) => {
    const docRef = doc(db, 'notifications', notificationId);
    await updateDoc(docRef, { read: true });
  };

  const markAllRead = async () => {
    const unread = notifications.filter((n) => !n.read);
    await Promise.all(
      unread.map((n) => updateDoc(doc(db, 'notifications', n.id), { read: true }))
    );
  };

  return { notifications, unreadCount, loading, markAsRead, markAllRead };
}

export default useNotifications;
