import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import StatusBadge from '../../components/StatusBadge';
import LoadingSpinner from '../../components/LoadingSpinner';
import { overrideSubmission } from '../../lib/api';
import { useSubmissions } from '../../hooks/useSubmissions';

export default function ReviewSubmissions() {
  const [filters, setFilters] = useState({ class: '', subject: '', status: '', date: '' });
  const { submissions, loading, refetch } = useSubmissions(filters);
  const [expandedId, setExpandedId] = useState(null);
  
  const [notes, setNotes] = useState({});
  const [actionLoading, setActionLoading] = useState(null);

  const handleOverride = async (subId) => {
    setActionLoading(subId);
    try {
      await overrideSubmission({ submissionId: subId, status: 'verified', notes: notes[subId] || '' });
      alert('Submission verified');
      refetch();
    } catch (e) {
      alert(e.message);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Review Submissions</h1>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <select value={filters.class} onChange={e => setFilters({...filters, class: e.target.value})} className="border rounded p-2">
            <option value="">All Classes</option>
            {['5th', '6th', '7th', '8th', '9th', '10th'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filters.subject} onChange={e => setFilters({...filters, subject: e.target.value})} className="border rounded p-2">
            <option value="">All Subjects</option>
            {['sst', 'science', 'maths'].map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
          </select>
          <select value={filters.status} onChange={e => setFilters({...filters, status: e.target.value})} className="border rounded p-2">
            <option value="">All Statuses</option>
            <option value="needs_review">Needs Review (AI Flagged)</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="overridden">Overridden</option>
          </select>
          <input type="date" value={filters.date} onChange={e => setFilters({...filters, date: e.target.value})} className="border rounded p-2" />
        </div>

        {loading ? (
          <LoadingSpinner size="lg" />
        ) : submissions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
            <p className="text-slate-500">No submissions found matching filters.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map(sub => (
              <div key={sub.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-slate-50 flex flex-wrap justify-between items-center"
                  onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                >
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">{sub.studentName || 'Student'} <span className="text-sm font-normal text-slate-500">({sub.studentClass})</span></h3>
                    <p className="text-sm text-slate-600 capitalize">{sub.subject} - {sub.submissionType} | {sub.date}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    {sub.aiScore !== undefined && (
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-500">AI Score</span>
                        <div className="w-24 bg-slate-200 rounded-full h-2.5">
                          <div className={`h-2.5 rounded-full ${sub.aiScore > 70 ? 'bg-green-600' : sub.aiScore > 40 ? 'bg-amber-500' : 'bg-red-600'}`} style={{ width: `${sub.aiScore}%` }}></div>
                        </div>
                      </div>
                    )}
                    <StatusBadge status={sub.status} />
                  </div>
                </div>

                {expandedId === sub.id && (
                  <div className="p-4 border-t border-slate-200 bg-slate-50">
                    {sub.aiFeedback && (
                      <div className="mb-4 bg-amber-50 p-3 rounded border border-amber-200">
                        <p className="text-sm text-amber-800 font-semibold mb-1">AI Feedback ({sub.aiModel}):</p>
                        <p className="text-sm text-amber-900">{sub.aiFeedback}</p>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Uploaded Files:</p>
                      <div className="flex flex-wrap gap-2">
                        {sub.fileUrls?.map((url, i) => (
                          <a key={i} href={url} target="_blank" rel="noreferrer" className="block w-24 h-24 bg-slate-200 border rounded overflow-hidden">
                            {url.includes('.pdf') ? (
                              <div className="w-full h-full flex items-center justify-center bg-red-100 text-red-600 text-xs font-bold">PDF</div>
                            ) : (
                              <img src={url} alt="submission" className="w-full h-full object-cover" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>

                    {(sub.status === 'needs_review' || sub.status === 'pending') && (
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <textarea 
                          placeholder="Admin notes (optional)" 
                          className="w-full border rounded p-2 mb-2 text-sm"
                          value={notes[sub.id] || ''}
                          onChange={e => setNotes({...notes, [sub.id]: e.target.value})}
                        ></textarea>
                        <button 
                          onClick={() => handleOverride(sub.id)} 
                          disabled={actionLoading === sub.id}
                          className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 disabled:opacity-50"
                        >
                          {actionLoading === sub.id ? 'Saving...' : 'Override to Verified'}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
