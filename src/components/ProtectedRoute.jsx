import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    // Redirect to appropriate dashboard based on role
    if (role === 'admin') return <Navigate to="/admin" replace />;
    if (role === 'student') return <Navigate to="/student" replace />;
    return <Navigate to="/" replace />;
  }

  return children;
}
