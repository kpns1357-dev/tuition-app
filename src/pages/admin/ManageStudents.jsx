import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import LoadingSpinner from '../../components/LoadingSpinner';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { createStudentAccount, createAdminAccount, regenerateParentToken } from '../../lib/api';
import { demoStore } from '../../lib/demoStore';

export default function ManageStudents() {
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  // Student Form
  const [sEmail, setSEmail] = useState('');
  const [sPassword, setSPassword] = useState('');
  const [sName, setSName] = useState('');
  const [sClass, setSClass] = useState('5th');
  const [sPhone, setSPhone] = useState('');
  const [sLoading, setSLoading] = useState(false);

  // Admin Form
  const [aEmail, setAEmail] = useState('');
  const [aPassword, setAPassword] = useState('');
  const [aName, setAName] = useState('');
  const [aLoading, setALoading] = useState(false);

  const fetchUsers = async () => {
    // Instant zero-delay load
    const loadFromDemo = () => {
      setStudents(demoStore.getStudents());
      setAdmins(demoStore.getAdmins());
      setLoading(false);
    };

    if (!import.meta.env.VITE_FIREBASE_API_KEY) {
      loadFromDemo();
      return;
    }

    try {
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('timeout'), 400));
      const fetchPromise = Promise.all([
        getDocs(query(collection(db, 'users'), where('role', '==', 'student'))),
        getDocs(query(collection(db, 'users'), where('role', '==', 'admin')))
      ]);
      const [studentSnap, adminSnap] = await Promise.race([fetchPromise, timeoutPromise]);
      if (studentSnap.empty) {
        loadFromDemo();
      } else {
        setStudents(studentSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        setAdmins(adminSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    } catch (e) {
      loadFromDemo();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    return demoStore.subscribe(() => {
      setStudents(demoStore.getStudents());
      setAdmins(demoStore.getAdmins());
    });
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setSLoading(true);
    try {
      try {
        await createStudentAccount({ email: sEmail, password: sPassword, displayName: sName, class: sClass, parentPhone: sPhone });
      } catch (err) {
        demoStore.addStudent({ displayName: sName, email: sEmail, class: sClass, parentPhone: sPhone });
      }
      setShowAddStudent(false);
      fetchUsers();
    } finally {
      setSLoading(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setALoading(true);
    try {
      await createAdminAccount({ email: aEmail, password: aPassword, displayName: aName });
      setShowAddAdmin(false);
      fetchUsers();
    } catch (e) {
      alert(e.message);
    } finally {
      setALoading(false);
    }
  };

  const handleCopyLink = (token) => {
    if (!token) return alert('No token found');
    const link = `${window.location.origin}/parent/${token}`;
    navigator.clipboard.writeText(link);
    alert('Link copied!');
  };

  const handleRegenerate = async (studentId) => {
    if (window.confirm('Regenerate token? Old link will be invalid.')) {
      try {
        await regenerateParentToken({ studentId });
        fetchUsers();
      } catch (e) {
        alert(e.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Manage Accounts</h1>

        <div className="border-b border-slate-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('students')}
              className={`${activeTab === 'students' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('admins')}
              className={`${activeTab === 'admins' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Admins
            </button>
          </nav>
        </div>

        {loading ? (
          <LoadingSpinner size="lg" />
        ) : activeTab === 'students' ? (
          <div>
            <div className="mb-4">
              <button onClick={() => setShowAddStudent(!showAddStudent)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                {showAddStudent ? 'Cancel' : 'Add Student'}
              </button>
            </div>
            
            {showAddStudent && (
              <form onSubmit={handleAddStudent} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" value={sName} onChange={e => setSName(e.target.value)} className="border p-2 rounded" />
                <input required type="email" placeholder="Email" value={sEmail} onChange={e => setSEmail(e.target.value)} className="border p-2 rounded" />
                <input required type="password" placeholder="Password" value={sPassword} onChange={e => setSPassword(e.target.value)} className="border p-2 rounded" />
                <select required value={sClass} onChange={e => setSClass(e.target.value)} className="border p-2 rounded">
                  {['5th', '6th', '7th', '8th', '9th', '10th'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input required type="tel" placeholder="Parent Phone" value={sPhone} onChange={e => setSPhone(e.target.value)} className="border p-2 rounded md:col-span-2" />
                <button disabled={sLoading} type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700 md:col-span-2">
                  {sLoading ? 'Adding...' : 'Save Student'}
                </button>
              </form>
            )}

            <div className="bg-white shadow overflow-hidden border-b border-slate-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Parent Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {students.map(student => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{student.displayName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{student.class}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{student.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{student.parentPhone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button onClick={() => handleCopyLink(student.parentToken)} className="text-blue-600 hover:text-blue-900">Copy Link</button>
                        <button onClick={() => handleRegenerate(student.id)} className="text-amber-600 hover:text-amber-900">Regen Token</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <button onClick={() => setShowAddAdmin(!showAddAdmin)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                {showAddAdmin ? 'Cancel' : 'Add Admin'}
              </button>
            </div>

            {showAddAdmin && (
              <form onSubmit={handleAddAdmin} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" value={aName} onChange={e => setAName(e.target.value)} className="border p-2 rounded" />
                <input required type="email" placeholder="Email" value={aEmail} onChange={e => setAEmail(e.target.value)} className="border p-2 rounded" />
                <input required type="password" placeholder="Password" value={aPassword} onChange={e => setAPassword(e.target.value)} className="border p-2 rounded md:col-span-2" />
                <button disabled={aLoading} type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700 md:col-span-2">
                  {aLoading ? 'Adding...' : 'Save Admin'}
                </button>
              </form>
            )}

            <div className="bg-white shadow overflow-hidden border-b border-slate-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {admins.map(admin => (
                    <tr key={admin.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{admin.displayName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{admin.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
