import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { demoStore } from '../lib/demoStore';

export function useNotifications() {
  const { user, role } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      setLoading(false);
      return;
    }

    let q;
    if (role === 'admin') {
      // Admins see notifications targeted to "admin" or their specific uid
      q = query(
        collection(db, 'notifications'),
        where('recipientId', 'in', ['admin', user.uid]),
        orderBy('createdAt', 'desc')
      );
    } else {
      // Students see their own notifications
      q = query(
        collection(db, 'notifications'),
        where('recipientId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
    }

    const updateFromDemo = () => {
      const demoList = demoStore.getNotifications(role === 'admin' ? 'admin' : user.uid);
      setNotifications(demoList);
      setUnreadCount(demoList.filter((n) => !n.read).length);
      setLoading(false);
    };

    let unsubscribeFirestore = () => {};
    let unsubscribeDemo = demoStore.subscribe(updateFromDemo);

    try {
      unsubscribeFirestore = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setNotifications(items);
          setUnreadCount(items.filter((n) => !n.read).length);
        } else {
          updateFromDemo();
        }
        setLoading(false);
      }, (error) => {
        console.warn('Using prototype notifications:', error);
        updateFromDemo();
      });
    } catch (e) {
      updateFromDemo();
    }

    return () => {
      unsubscribeFirestore();
      unsubscribeDemo();
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
