import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NotificationBell from './NotificationBell';

export default function Navbar() {
  const { user, role, profile, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const adminLinks = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/students', label: 'Students' },
    { path: '/admin/daily-log', label: 'Daily Log' },
    { path: '/admin/review', label: 'Review' },
    { path: '/admin/attendance', label: 'Attendance' },
  ];

  const studentLinks = [
    { path: '/student', label: 'Home' },
    { path: '/student/status', label: 'My Status' },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Links */}
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto">
            <Link
              to={role === 'admin' ? '/admin' : '/student'}
              className="flex-shrink-0 flex items-center mr-2 sm:mr-4"
            >
              <div className="bg-primary-600 text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                T
              </div>
              <span className="ml-2 font-semibold text-gray-900 hidden sm:block">
                Tuition Tracker
              </span>
            </Link>

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 sm:px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <NotificationBell />
            <div className="hidden sm:block text-sm text-gray-600">
              {profile?.displayName || user?.email}
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
