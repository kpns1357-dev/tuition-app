import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getUserRole, getUserProfile, loginUser, logoutUser } from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userRole = await getUserRole(firebaseUser);
          const userProfile = await getUserProfile(firebaseUser.uid);
          setUser(firebaseUser);
          setRole(userRole);
          setProfile(userProfile);
        } catch (err) {
          console.error('Error fetching user data:', err);
          setUser(null);
          setRole(null);
          setProfile(null);
        }
      } else {
        setUser(null);
        setRole(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const result = await loginUser(email, password);
    const userProfile = await getUserProfile(result.user.uid);
    setUser(result.user);
    setRole(result.role);
    setProfile(userProfile);
    return result;
  };

  const logout = async () => {
    await logoutUser();
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
