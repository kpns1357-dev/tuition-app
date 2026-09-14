import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar';
import FileUpload from '../../components/FileUpload';
import { db, storage } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { triggerVerification } from '../../lib/api';
import { format } from 'date-fns';

export default function UploadHomework() {
  const { subject } = useParams();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
  const isMaths = subject === 'maths';

  useEffect(() => {
    if (!user) return;
    
    const q = query(
      collection(db, 'submissions'),
      where('studentId', '==', user.uid),
      where('subject', '==', subject),
      where('date', '==', todayStr)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const subs = [];
      snapshot.forEach(doc => {
        subs.push({ id: doc.id, ...doc.data() });
      });
      setSubmissions(subs);
    });

    return () => unsubscribe();
  }, [user, subject, todayStr]);

  const handleUpload = async (files, type) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    
    try {
      const storagePaths = [];
      for (const file of files) {
        const filename = `${Date.now()}_${file.name}`;
        const storageRef = ref(storage, `submissions/${user.uid}/${todayStr}/${subject}/${filename}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        storagePaths.push(url);
      }

      const submissionData = {
        studentId: user.uid,
        studentName: profile?.displayName || 'Unknown',
        class: profile?.class || 'Unknown',
        subject,
        date: todayStr,
        type,
        files: storagePaths,
        status: 'pending',
        aiScore: null,
        aiFeedback: '',
        aiStatus: 'pending',
        adminOverride: false,
        adminNotes: '',
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'submissions'), submissionData);
      
      // Fire and forget verification
      try {
        await triggerVerification(docRef.id);
      } catch (vErr) {
        console.error('Trigger verification failed:', vErr);
        // Do not block UI for this failure
      }
      
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload homework. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const hasSubmission = (type) => submissions.some(s => s.type === type);
  const getSubmission = (type) => submissions.find(s => s.type === type);

  const Step = ({ number, title, description, type }) => {
    const sub = getSubmission(type);
    const isCompleted = !!sub;

    return (
      <div className={`p-6 bg-white shadow-sm rounded-lg border ${isCompleted ? 'border-green-200 bg-green-50' : 'border-slate-200'}`}>
        <div className="flex items-center mb-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3 ${isCompleted ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-600'}`}>
            {isCompleted ? '✓' : number}
          </div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        </div>
        
        {!isCompleted ? (
          <div>
            <p className="text-slate-600 mb-4">{description}</p>
            <FileUpload 
              label="Select Files" 
              multiple 
              accept="image/*,.pdf" 
              onFilesSelected={(files) => handleUpload(files, type)} 
            />
            {uploading && <p className="text-sm text-blue-600 mt-2">Uploading...</p>}
          </div>
        ) : (
          <div>
            <p className="text-green-700 font-medium">Completed</p>
            {sub.aiFeedback && (
              <div className="mt-4 p-4 bg-white rounded border border-slate-200 shadow-sm">
                <h4 className="text-sm font-semibold text-slate-700 mb-1">AI Feedback</h4>
                <p className="text-sm text-slate-600">{sub.aiFeedback}</p>
                {sub.aiScore && (
                  <p className="text-sm font-medium mt-2 text-blue-600">Score: {sub.aiScore}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center">
          <button 
            onClick={() => navigate('/student')}
            className="mr-4 text-slate-500 hover:text-slate-700"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-slate-900">
            Upload {subjectName} Homework
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {isMaths ? (
            <Step 
              number={1} 
              title="Maths Homework" 
              description="Upload your maths homework." 
              type="maths" 
            />
          ) : (
            <>
              <Step 
                number={1} 
                title="Reflection" 
                description="Write what was taught today without looking at the source. Then upload your work here." 
                type="reflection" 
              />
              {hasSubmission('reflection') && (
                <Step 
                  number={2} 
                  title="Correction" 
                  description="Now check the source material. Note what you missed. Upload your corrections." 
                  type="correction" 
                />
              )}
              {hasSubmission('correction') && (
                <Step 
                  number={3} 
                  title="Rewrite" 
                  description="Write the final combined version without looking at the source. Upload here." 
                  type="rewrite" 
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
