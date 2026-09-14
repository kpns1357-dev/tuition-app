import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import LoadingSpinner from '../../components/LoadingSpinner';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { demoStore } from '../../lib/demoStore';

export default function AttendancePage() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('5th');
  const classes = ['5th', '6th', '7th', '8th', '9th', '10th'];

  const [students, setStudents] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({}); // { studentId: { present: bool, marked: bool } }
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Instant zero-delay load
    const loadFromDemo = () => {
      const stList = demoStore.getStudents().filter(s => s.class === selectedClass);
      setStudents(stList);
      const savedMap = demoStore.data.attendance[selectedClass] || {};
      const attMap = {};
      stList.forEach(st => {
        attMap[st.id] = { present: savedMap[st.id] ?? true, marked: savedMap[st.id] !== undefined };
      });
      setAttendanceMap(attMap);
      setLoading(false);
    };

    loadFromDemo();
  }, [date, selectedClass]);

  const toggleAttendance = (id) => {
    setAttendanceMap(prev => ({
      ...prev,
      [id]: { ...prev[id], present: !prev[id].present }
    }));
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const saveMap = {};
      for (let st of students) {
        saveMap[st.id] = attendanceMap[st.id]?.present ?? true;
      }
      demoStore.saveAttendance(selectedClass, saveMap);

      const updatedMap = { ...attendanceMap };
      for (let k in updatedMap) { updatedMap[k].marked = true; }
      setAttendanceMap(updatedMap);
      alert('Attendance saved successfully! Simulated parent SMS notifications triggered.');
    } catch (e) {
      alert('Error saving: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Mark Attendance</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border border-slate-300 rounded-md p-2" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Class</label>
              <div className="flex flex-wrap gap-2">
                {classes.map(c => (
                  <button key={c} onClick={() => setSelectedClass(c)} className={`px-4 py-2 rounded-md border ${selectedClass === c ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {loading ? (
            <LoadingSpinner />
          ) : students.length === 0 ? (
            <p className="text-slate-500 py-4">No students found in this class.</p>
          ) : (
            <div>
              <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {students.map(st => {
                      const att = attendanceMap[st.id] || { present: true, marked: false };
                      return (
                        <tr key={st.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                            {st.displayName}
                            {att.marked && <span className="ml-2 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Saved</span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${att.present ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {att.present ? 'Present' : 'Absent'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => toggleAttendance(st.id)}
                              className={`px-3 py-1 rounded border ${att.present ? 'bg-white text-red-600 border-red-200 hover:bg-red-50' : 'bg-white text-green-600 border-green-200 hover:bg-green-50'}`}
                            >
                              Mark {att.present ? 'Absent' : 'Present'}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button 
                onClick={handleSaveAll} 
                disabled={saving}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save All Attendance'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
