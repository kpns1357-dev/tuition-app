import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && role && role !== requiredRole) {
    if (role === 'admin') return <Navigate to="/admin" replace />;
    if (role === 'student') return <Navigate to="/student" replace />;
  }

  return children;
}
