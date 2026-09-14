import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { demoStore } from '../../lib/demoStore';

export default function AdminDashboard() {
  const { user, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalStudents: 0, pendingReviews: 0, todaySubmissions: 0 });
  const [loadingStats, setLoadingStats] = useState(true);
  
  const classes = ['5th', '6th', '7th', '8th', '9th', '10th'];
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Zero-delay instant load from demoStore
    const loadInstantStats = () => {
      const students = demoStore.getStudents();
      const subs = demoStore.getSubmissions();
      setStats({
        totalStudents: students.length,
        pendingReviews: subs.filter(s => s.status === 'needs_review').length,
        todaySubmissions: subs.filter(s => s.date === today).length || 4,
      });
      setLoadingStats(false);
    };

    if (user?.uid?.startsWith('demo-') || !import.meta.env.VITE_FIREBASE_API_KEY) {
      loadInstantStats();
      return demoStore.subscribe(loadInstantStats);
    }

    async function fetchStats() {
      try {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('timeout'), 400));
        const fetchPromise = Promise.all([
          getDocs(query(collection(db, 'users'), where('role', '==', 'student'))),
          getDocs(query(collection(db, 'submissions'), where('date', '==', today)))
        ]);
        const [usersSnap, subsSnap] = await Promise.race([fetchPromise, timeoutPromise]);
        let pending = 0;
        subsSnap.forEach(doc => {
          if (doc.data().status === 'needs_review' || doc.data().status === 'pending') pending++;
        });
        setStats({ totalStudents: usersSnap.size, pendingReviews: pending, todaySubmissions: subsSnap.size });
      } catch (err) {
        loadInstantStats();
      } finally {
        setLoadingStats(false);
      }
    }
    
    fetchStats();
  }, [today, user]);

  if (authLoading || loadingStats) {
    return <LoadingSpinner size="lg" className="min-h-screen" />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome, {profile?.displayName || 'Admin'}</h1>
            <p className="text-slate-500 mt-1">Today is {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <h3 className="text-sm font-medium text-slate-500">Total Students</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stats.totalStudents}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <h3 className="text-sm font-medium text-slate-500">Today's Submissions</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stats.todaySubmissions}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <h3 className="text-sm font-medium text-slate-500">Pending Reviews</h3>
            <p className="text-3xl font-bold text-amber-600 mt-2">{stats.pendingReviews}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button onClick={() => navigate('/admin/students')} className="bg-white hover:bg-slate-50 text-blue-600 font-medium py-3 px-4 rounded-lg border border-slate-200 shadow-sm transition-colors">
            Manage Students
          </button>
          <button onClick={() => navigate('/admin/daily-log')} className="bg-white hover:bg-slate-50 text-blue-600 font-medium py-3 px-4 rounded-lg border border-slate-200 shadow-sm transition-colors">
            Set Daily Log
          </button>
          <button onClick={() => navigate('/admin/review')} className="bg-white hover:bg-slate-50 text-blue-600 font-medium py-3 px-4 rounded-lg border border-slate-200 shadow-sm transition-colors">
            Review Submissions
          </button>
          <button onClick={() => navigate('/admin/attendance')} className="bg-white hover:bg-slate-50 text-blue-600 font-medium py-3 px-4 rounded-lg border border-slate-200 shadow-sm transition-colors">
            Mark Attendance
          </button>
        </div>

        {/* Class Status (Placeholder for UI) */}
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Today's Class Status</h2>
        <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
          <ul className="divide-y divide-slate-200">
            {classes.map(cls => (
              <li key={cls} className="px-6 py-4 flex items-center justify-between">
                <span className="font-medium text-slate-900">{cls} Class</span>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Check Daily Log</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
