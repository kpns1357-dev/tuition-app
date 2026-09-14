import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { demoStore } from '../lib/demoStore';

export default function PrototypeBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const { demoLogin, role } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleSwitchToAdmin = () => {
    demoLogin('admin');
    navigate('/admin');
  };

  const handleSwitchToStudent = () => {
    demoLogin('student');
    navigate('/student');
  };

  const handleOpenParent = () => {
    const students = demoStore.getStudents();
    const token = students[0]?.parentToken || 'token-rahul-6th';
    navigate(`/parent/${token}`);
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo data (students, logs, submissions) to initial defaults?')) {
      demoStore.reset();
      window.location.reload();
    }
  };

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 bg-indigo-900 text-white text-xs font-bold px-3 py-2 rounded-full shadow-2xl border border-indigo-700 hover:bg-indigo-800 transition-all flex items-center space-x-1"
        title="Open Prototype Control Bar"
      >
        <span>⚡ Prototype Mode</span>
      </button>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 sticky top-0 z-50 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="font-bold text-white tracking-wide uppercase">
            Interactive Prototype for Sir
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">
            Active: <strong className="text-emerald-300 capitalize">{role || 'Guest'}</strong>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleSwitchToAdmin}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              role === 'admin'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            👨‍🏫 Sir (Admin)
          </button>

          <button
            onClick={handleSwitchToStudent}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              role === 'student'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            🎓 Student Portal
          </button>

          <button
            onClick={handleOpenParent}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              location.pathname.startsWith('/parent')
                ? 'bg-amber-600 text-white shadow-sm font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            👨‍👩‍👧 Parent View
          </button>

          <button
            onClick={handleResetData}
            className="px-2 py-1 bg-slate-800 hover:bg-red-900/60 text-slate-400 hover:text-red-200 rounded-md transition-colors"
            title="Reset prototype state"
          >
            🔄 Reset
          </button>

          <button
            onClick={() => setCollapsed(true)}
            className="px-2 py-1 text-slate-400 hover:text-white"
            title="Minimize bar"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
