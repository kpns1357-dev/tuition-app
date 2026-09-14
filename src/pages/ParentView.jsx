import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getParentStatus } from '../lib/api';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import { demoStore } from '../lib/demoStore';

export default function ParentView() {
  const { token } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        setLoading(true);
        const report = demoStore.getParentReport(token);
        setData(report);
      } catch (err) {
        console.error(err);
        setError('Invalid link. Please contact your child\'s tuition teacher.');
      } finally {
        setLoading(false);
      }
    }
    
    if (token) {
      fetchStatus();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow text-center max-w-sm w-full border border-red-100">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Access Error</h2>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  const { student, todayHomework, recentSubmissions, recentAttendance, notifications } = data;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
            <p className="text-slate-600">Class: {student.class}</p>
          </div>
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
            {student.name.charAt(0)}
          </div>
        </div>

        {notifications && notifications.length > 0 && (
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
              <span className="mr-2">🔔</span> Notifications
            </h3>
            <ul className="space-y-2">
              {notifications.map((note, i) => (
                <li key={i} className="text-amber-700 text-sm">• {note}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Today's Homework</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['maths', 'science', 'sst'].map(subject => {
              const status = todayHomework[subject] || 'not_required';
              
              const statusConfig = {
                completed: { text: 'Completed', color: 'bg-green-100 text-green-800 border-green-200' },
                pending: { text: 'In Progress', color: 'bg-amber-100 text-amber-800 border-amber-200' },
                required: { text: 'Not Started', color: 'bg-red-100 text-red-800 border-red-200' },
                not_required: { text: 'No Homework', color: 'bg-slate-100 text-slate-600 border-slate-200' }
              };

              const conf = statusConfig[status];

              return (
                <div key={subject} className="p-4 rounded-lg border bg-slate-50 flex flex-col items-center text-center">
                  <span className="capitalize font-medium text-slate-700 mb-2">{subject}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${conf.color}`}>
                    {conf.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Submissions (Last 7 Days)</h2>
          {recentSubmissions?.length > 0 ? (
            <div className="space-y-4">
              {recentSubmissions.map(sub => (
                <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-100 rounded-lg bg-slate-50">
                  <div className="mb-2 sm:mb-0">
                    <div className="flex items-center space-x-2">
                      <span className="capitalize font-semibold text-slate-800">{sub.subject}</span>
                      <span className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded capitalize">{sub.type}</span>
                    </div>
                    <span className="text-sm text-slate-500">{sub.date}</span>
                  </div>
                  <StatusBadge status={sub.status} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-center py-4">No recent submissions.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Attendance (Last 7 Days)</h2>
          {recentAttendance?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {recentAttendance.map(record => (
                <div key={record.date} className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50">
                  <div className="text-sm text-slate-500 mb-1">{record.date}</div>
                  <div className={`font-semibold ${record.status === 'present' ? 'text-green-600' : 'text-red-600'}`}>
                    {record.status === 'present' ? 'Present' : 'Absent'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-center py-4">No recent attendance records.</p>
          )}
        </div>

      </div>
    </div>
  );
}

function getSampleParentData() {
  return {
    student: {
      name: 'Rahul Sharma',
      class: '6th Standard',
    },
    todayHomework: [
      { subject: 'Maths', status: 'completed' },
      { subject: 'Science', status: 'completed' },
      { subject: 'SST', status: 'pending' },
    ],
    recentSubmissions: [
      { id: 'sub-1', subject: 'Maths', type: 'maths', date: '2026-09-14', status: 'verified' },
      { id: 'sub-2', subject: 'Science', type: 'rewrite', date: '2026-09-14', status: 'verified' },
      { id: 'sub-3', subject: 'SST', type: 'reflection', date: '2026-09-13', status: 'overridden' },
      { id: 'sub-4', subject: 'Science', type: 'correction', date: '2026-09-12', status: 'verified' },
    ],
    recentAttendance: [
      { date: '14 Sep', status: 'present' },
      { date: '13 Sep', status: 'present' },
      { date: '12 Sep', status: 'present' },
      { date: '11 Sep', status: 'absent' },
    ],
    notifications: [
      {
        id: 'notif-1',
        message: 'Attendance update: Rahul Sharma was marked present on 14 Sep.',
        createdAt: '1 hour ago',
      },
      {
        id: 'notif-2',
        message: 'Science homework (Rewrite) passed AI verification with 85% concept match.',
        createdAt: '3 hours ago',
      },
    ],
  };
}
