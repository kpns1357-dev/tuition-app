import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingSpinner from './components/LoadingSpinner';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStudents from './pages/admin/ManageStudents';
import DailyLogForm from './pages/admin/DailyLogForm';
import ReviewSubmissions from './pages/admin/ReviewSubmissions';
import AttendancePage from './pages/admin/AttendancePage';
import StudentHomePage from './pages/student/StudentHomePage';
import UploadHomework from './pages/student/UploadHomework';
import MyStatus from './pages/student/MyStatus';
import ParentView from './pages/ParentView';
import PrototypeBanner from './components/PrototypeBanner';

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <PrototypeBanner />
      <Routes>
      {/* Public routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/parent/:token" element={<ParentView />} />

      {/* Admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/students"
        element={
          <ProtectedRoute requiredRole="admin">
            <ManageStudents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/daily-log"
        element={
          <ProtectedRoute requiredRole="admin">
            <DailyLogForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/review"
        element={
          <ProtectedRoute requiredRole="admin">
            <ReviewSubmissions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/attendance"
        element={
          <ProtectedRoute requiredRole="admin">
            <AttendancePage />
          </ProtectedRoute>
        }
      />

      {/* Student routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentHomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/upload/:subject"
        element={
          <ProtectedRoute requiredRole="student">
            <UploadHomework />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/status"
        element={
          <ProtectedRoute requiredRole="student">
            <MyStatus />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}
