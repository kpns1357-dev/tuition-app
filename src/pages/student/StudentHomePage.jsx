import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar';
import SubjectCard from '../../components/SubjectCard';
import { db } from '../../lib/firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';

export default function StudentHomePage() {
  const { user, profile } = useAuth();
  const [dailyLog, setDailyLog] = useState(null);
  const [submissions, setSubmissions] = useState({});
  const [loading, setLoading] = useState(true);

  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const displayDate = format(new Date(), 'EEEE, MMMM do, yyyy');

  useEffect(() => {
    async function fetchData() {
      if (!user || !profile?.class) return;
      setLoading(true);

      try {
        const logRef = doc(db, 'classes', profile.class, 'dailyLogs', todayStr);
        const logSnap = await getDoc(logRef);
        let logData = null;
        if (logSnap.exists()) {
          logData = logSnap.data();
          setDailyLog(logData);
        } else {
          setDailyLog({ status: 'no_homework' });
        }

        const subsRef = collection(db, 'submissions');
        const q = query(
          subsRef,
          where('studentId', '==', user.uid),
          where('date', '==', todayStr)
        );
        const subsSnap = await getDocs(q);
        
        const subsMap = {};
        subsSnap.forEach(doc => {
          const data = doc.data();
          if (!subsMap[data.subject]) {
            subsMap[data.subject] = [];
          }
          subsMap[data.subject].push(data);
        });
        setSubmissions(subsMap);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [user, profile, todayStr]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const getSubjectStatus = (subjectId) => {
    if (dailyLog?.status === 'holiday' || dailyLog?.status === 'no_homework') {
      return 'not_required';
    }
    
    const isRequired = dailyLog?.subjects?.includes(subjectId);
    if (!isRequired) return 'not_required';

    const subjectSubs = submissions[subjectId] || [];
    
    if (subjectId === 'maths') {
      return subjectSubs.length > 0 ? 'completed' : 'required';
    } else {
      const hasReflection = subjectSubs.some(s => s.type === 'reflection');
      const hasCorrection = subjectSubs.some(s => s.type === 'correction');
      const hasRewrite = subjectSubs.some(s => s.type === 'rewrite');
      
      if (hasReflection && hasCorrection && hasRewrite) return 'completed';
      if (hasReflection || hasCorrection) return 'pending';
      return 'required';
    }
  };

  const isNoHomework = dailyLog?.status === 'holiday' || dailyLog?.status === 'no_homework';

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back, {profile?.displayName || 'Student'}!
            </h1>
            <p className="text-slate-600 mt-1">Class: {profile?.class}</p>
            <p className="text-slate-500 text-sm mt-1">{displayDate}</p>
          </div>

          {isNoHomework && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
              <span className="text-xl mr-2">🎉</span>
              <span>No homework today! Enjoy your day.</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SubjectCard 
              subject={{ id: 'maths', name: 'Mathematics' }}
              status={getSubjectStatus('maths')}
              linkTo="/student/upload/maths"
            />
            <SubjectCard 
              subject={{ id: 'science', name: 'Science' }}
              status={getSubjectStatus('science')}
              linkTo="/student/upload/science"
            />
            <SubjectCard 
              subject={{ id: 'sst', name: 'Social Studies' }}
              status={getSubjectStatus('sst')}
              linkTo="/student/upload/sst"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
