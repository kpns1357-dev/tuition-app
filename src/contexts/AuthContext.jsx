import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getUserRole, getUserProfile, loginUser, logoutUser } from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tuition_demo_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem('tuition_demo_role') || null;
  });
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('tuition_demo_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(() => {
    return !localStorage.getItem('tuition_demo_user');
  });

  useEffect(() => {
    // If demo session is active, no need to wait for Firebase
    if (localStorage.getItem('tuition_demo_user')) {
      setLoading(false);
      return;
    }

    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 150);

    let unsubscribe = () => {};
    try {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        clearTimeout(safetyTimer);
        if (firebaseUser) {
          try {
            const userRole = await getUserRole(firebaseUser);
            const userProfile = await getUserProfile(firebaseUser.uid);
            setUser(firebaseUser);
            setRole(userRole);
            setProfile(userProfile);
          } catch (err) {
            console.error('Error fetching user data:', err);
          }
        } else {
          // If no Firebase user and no active demo session
          const hasDemo = localStorage.getItem('tuition_demo_user');
          if (!hasDemo) {
            setUser(null);
            setRole(null);
            setProfile(null);
          }
        }
        setLoading(false);
      });
    } catch (e) {
      console.warn('Auth listener init notice:', e);
      setLoading(false);
    }

    return () => {
      clearTimeout(safetyTimer);
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const result = await loginUser(email, password);
    const userProfile = await getUserProfile(result.user.uid);
    setUser(result.user);
    setRole(result.role);
    setProfile(userProfile);
    return result;
  };

  const demoLogin = (roleType) => {
    if (roleType === 'admin') {
      const demoAdmin = { uid: 'demo-admin-sir', email: 'sir@tuition.edu' };
      const demoProfile = { displayName: 'Sir (Tuition Admin)', email: 'sir@tuition.edu', role: 'admin' };
      localStorage.setItem('tuition_demo_user', JSON.stringify(demoAdmin));
      localStorage.setItem('tuition_demo_role', 'admin');
      localStorage.setItem('tuition_demo_profile', JSON.stringify(demoProfile));
      setUser(demoAdmin);
      setRole('admin');
      setProfile(demoProfile);
    } else {
      const demoStudent = { uid: 'demo-student-rahul', email: 'rahul@student.edu' };
      const demoProfile = { displayName: 'Rahul Sharma', class: '6th', role: 'student', parentPhone: '+91 98765 43210', parentToken: 'demo-parent-token-6th' };
      localStorage.setItem('tuition_demo_user', JSON.stringify(demoStudent));
      localStorage.setItem('tuition_demo_role', 'student');
      localStorage.setItem('tuition_demo_profile', JSON.stringify(demoProfile));
      setUser(demoStudent);
      setRole('student');
      setProfile(demoProfile);
    }
  };

  const logout = async () => {
    localStorage.removeItem('tuition_demo_user');
    localStorage.removeItem('tuition_demo_role');
    localStorage.removeItem('tuition_demo_profile');
    try {
      await logoutUser();
    } catch (e) {
      // ignore
    }
    setUser(null);
    setRole(null);
    setProfile(null);
  };

  const value = {
    user,
    role,
    profile,
    loading,
    login,
    demoLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
