import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar';
import SubjectCard from '../../components/SubjectCard';
import StatusBadge from '../../components/StatusBadge';
import { format } from 'date-fns';
import { demoStore } from '../../lib/demoStore';

export default function StudentHomePage() {
  const { user, profile } = useAuth();
  const [dailyLog, setDailyLog] = useState(null);
  const [submissions, setSubmissions] = useState({});
  const [recentList, setRecentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const displayDate = format(new Date(), 'EEEE, MMMM do, yyyy');

  useEffect(() => {
    const studentClass = profile?.class || '6th';
    const logData = demoStore.getDailyLog(studentClass);
    setDailyLog(logData);

    const loadSubs = () => {
      const allSubs = demoStore.getSubmissions({ studentId: user?.uid });
      setRecentList(allSubs.slice(0, 5));
      const subsMap = {};
      allSubs.forEach(s => {
        if (!subsMap[s.subject]) subsMap[s.subject] = [];
        subsMap[s.subject].push(s);
      });
      setSubmissions(subsMap);
    };

    loadSubs();
    return demoStore.subscribe(loadSubs);
  }, [user, profile, todayStr]);

  const getSubjectStatus = (subjectId) => {
    if (dailyLog?.status === 'holiday' || dailyLog?.status === 'no_homework') {
      return 'not_required';
    }

    const subjectInfo = dailyLog?.subjects?.[subjectId];
    const isRequired = subjectInfo?.required ?? true;
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
  const currentClass = profile?.class || '6th';

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Student Welcome Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎓</span>
                <h1 className="text-2xl font-bold text-slate-900">
                  Welcome back, {profile?.displayName || 'Rahul Sharma'}!
                </h1>
              </div>
              <p className="text-slate-600 mt-1">
                Standard: <span className="font-semibold text-blue-600">{currentClass} Class</span> • {displayDate}
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-right">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wide block">Verification Target</span>
              <span className="text-sm font-bold text-blue-700">60% – 70% Concept Match</span>
            </div>
          </div>
        </div>

        {/* Holiday Banner if active */}
        {isNoHomework && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 px-5 py-4 rounded-xl mb-6 flex items-center shadow-sm">
            <span className="text-2xl mr-3">🎉</span>
            <div>
              <h3 className="font-bold">No Homework Today!</h3>
              <p className="text-sm text-emerald-700">Sir marked today as a {dailyLog?.status === 'holiday' ? 'Holiday' : 'No-Homework Day'}. Relax and enjoy!</p>
            </div>
          </div>
        )}

        {/* Subjects Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Today's Subjects to Upload</h2>
            <span className="text-xs text-slate-500">Pick a subject to submit</span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <SubjectCard
              subject="maths"
              status={getSubjectStatus('maths')}
              linkTo="/student/upload/maths"
            />
            <SubjectCard
              subject="science"
              status={getSubjectStatus('science')}
              linkTo="/student/upload/science"
            />
            <SubjectCard
              subject="sst"
              status={getSubjectStatus('sst')}
              linkTo="/student/upload/sst"
            />
          </div>
        </div>

        {/* Today's Taught Lessons from Sir */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
              <span className="mr-2">📖</span> Today's Class Topics &amp; Sources
            </h2>
            <p className="text-xs text-slate-500 mb-4">Logged by Sir for your class ({currentClass}):</p>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-800">🔬 Science</span>
                  <span className="text-xs bg-green-100 text-green-800 font-medium px-2 py-0.5 rounded">
                    {dailyLog?.subjects?.science?.sourcePages || 'Chapter 4'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {dailyLog?.subjects?.science?.taught || 'Photosynthesis, Chloroplasts, and light reactions'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-800">🌍 SST</span>
                  <span className="text-xs bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded">
                    {dailyLog?.subjects?.sst?.sourcePages || 'pp. 42-48'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {dailyLog?.subjects?.sst?.taught || 'The Harappan Civilization & Urban Planning'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-800">🔢 Maths</span>
                  <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded">
                    {dailyLog?.subjects?.maths?.source === 'website' ? 'Website Practice' : 'Tuition Exercise'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {dailyLog?.subjects?.maths?.required
                    ? (dailyLog?.subjects?.maths?.taught || 'Fractions, mixed numbers and decimal conversions')
                    : 'No Maths homework assigned today.'}
                </p>
              </div>
            </div>
          </div>

          {/* Recent AI Verification Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
              <span className="mr-2">⚡</span> Live AI Verification Results
            </h2>
            <p className="text-xs text-slate-500 mb-4">Your recent homework checks:</p>

            {recentList.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                No submissions yet. Click a subject above to submit your first homework!
              </div>
            ) : (
              <div className="space-y-3">
                {recentList.map(item => (
                  <div key={item.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-800 capitalize">
                        {item.subject} <span className="text-xs font-normal text-slate-500">({item.type})</span>
                      </span>
                      <StatusBadge status={item.status} size="xs" />
                    </div>
                    {item.aiScore && (
                      <div className="flex items-center space-x-2 text-xs mb-1">
                        <span className="text-slate-500">Concept Match:</span>
                        <span className={`font-bold ${item.aiScore >= 65 ? 'text-green-600' : 'text-amber-600'}`}>
                          {item.aiScore}%
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">({item.aiModel})</span>
                      </div>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.aiFeedback || 'Uploaded and pending review.'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
