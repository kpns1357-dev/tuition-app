import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import StatusBadge from '../../components/StatusBadge';
import { useAuth } from '../../contexts/AuthContext';
import { useSubmissions } from '../../hooks/useSubmissions';

export default function MyStatus() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('All');
  
  const { submissions, loading, error } = useSubmissions({ studentId: user?.uid });

  const filteredSubmissions = submissions?.filter(sub => {
    if (filter === 'All') return true;
    return sub.subject.toLowerCase() === filter.toLowerCase();
  });

  const subjects = ['All', 'Maths', 'Science', 'SST'];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">My Submissions</h1>
        
        <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
          {subjects.map(subj => (
            <button
              key={subj}
              onClick={() => setFilter(subj)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                filter === subj 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-lg border border-red-200">
            Failed to load submissions.
          </div>
        ) : filteredSubmissions?.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-500">
            No submissions found.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions?.map(sub => (
              <div key={sub.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="capitalize font-bold text-lg text-slate-800">
                        {sub.subject}
                      </span>
                      <span className="text-sm px-2 py-1 bg-slate-100 text-slate-600 rounded capitalize">
                        {sub.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Date: {sub.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {sub.aiScore && (
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Score: {sub.aiScore}
                      </div>
                    )}
                    <StatusBadge status={sub.status} />
                  </div>
                </div>
                
                {sub.aiFeedback && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-md border border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Feedback</h4>
                    <p className="text-sm text-slate-600 whitespace-pre-wrap">{sub.aiFeedback}</p>
                  </div>
                )}
                
                {sub.files && sub.files.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Attached Files</h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {sub.files.map((fileUrl, idx) => (
                        <a 
                          key={idx} 
                          href={fileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-shrink-0 w-24 h-24 bg-slate-100 rounded border border-slate-200 flex items-center justify-center overflow-hidden hover:opacity-80"
                        >
                          {fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
                            <img src={fileUrl} alt="Homework" className="object-cover w-full h-full" />
                          ) : (
                            <span className="text-xs text-slate-500">View File</span>
                          )}
                        </a>
                      ))}
                    </div>
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
