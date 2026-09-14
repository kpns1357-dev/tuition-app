import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

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

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setNotifications(items);
      setUnreadCount(items.filter((n) => !n.read).length);
      setLoading(false);
    }, (error) => {
      console.error('Notifications listener error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
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
