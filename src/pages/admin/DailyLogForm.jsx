import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FileUpload from '../../components/FileUpload';
import LoadingSpinner from '../../components/LoadingSpinner';
import { db, storage } from '../../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function DailyLogForm() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('5th');
  const classes = ['5th', '6th', '7th', '8th', '9th', '10th'];
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [status, setStatus] = useState('Active Teaching Day');
  
  // SST
  const [sstRequired, setSstRequired] = useState(false);
  const [sstTaught, setSstTaught] = useState('');
  const [sstPages, setSstPages] = useState('');
  const [sstFiles, setSstFiles] = useState([]);
  
  // Science
  const [sciRequired, setSciRequired] = useState(false);
  const [sciTaught, setSciTaught] = useState('');
  const [sciPages, setSciPages] = useState('');
  const [sciFiles, setSciFiles] = useState([]);

  // Maths
  const [mathsRequired, setMathsRequired] = useState(false);
  const [mathsSource, setMathsSource] = useState('From tuition');

  useEffect(() => {
    async function loadLog() {
      setLoading(true);
      try {
        const docRef = doc(db, 'classes', selectedClass, 'dailyLogs', date);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStatus(data.status || 'Active Teaching Day');
          setSstRequired(data.sst?.required || false);
          setSstTaught(data.sst?.taught || '');
          setSstPages(data.sst?.pages || '');
          setSciRequired(data.science?.required || false);
          setSciTaught(data.science?.taught || '');
          setSciPages(data.science?.pages || '');
          setMathsRequired(data.maths?.required || false);
          setMathsSource(data.maths?.source || 'From tuition');
        } else {
          setStatus('Active Teaching Day');
          setSstRequired(false); setSstTaught(''); setSstPages('');
          setSciRequired(false); setSciTaught(''); setSciPages('');
          setMathsRequired(false); setMathsSource('From tuition');
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadLog();
  }, [date, selectedClass]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let sstFileUrls = [];
      let sciFileUrls = [];

      // Upload SST files
      if (sstFiles.length > 0) {
        for (let file of sstFiles) {
          const fileRef = ref(storage, `sources/${selectedClass}/${date}/sst_${file.name}`);
          await uploadBytes(fileRef, file);
          const url = await getDownloadURL(fileRef);
          sstFileUrls.push(url);
        }
      }

      // Upload Science files
      if (sciFiles.length > 0) {
        for (let file of sciFiles) {
          const fileRef = ref(storage, `sources/${selectedClass}/${date}/sci_${file.name}`);
          await uploadBytes(fileRef, file);
          const url = await getDownloadURL(fileRef);
          sciFileUrls.push(url);
        }
      }

      const logData = {
        status,
        updatedAt: serverTimestamp(),
      };

      if (status === 'Active Teaching Day') {
        logData.sst = { required: sstRequired, taught: sstTaught, pages: sstPages, fileUrls: sstFileUrls };
        logData.science = { required: sciRequired, taught: sciTaught, pages: sciPages, fileUrls: sciFileUrls };
        logData.maths = { required: mathsRequired, source: mathsSource };
      }

      await setDoc(doc(db, 'classes', selectedClass, 'dailyLogs', date), logData, { merge: true });
      alert('Daily log saved!');
      setSstFiles([]);
      setSciFiles([]);
    } catch (e) {
      alert('Error: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Daily Log</h1>
        
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

          {loading ? <LoadingSpinner /> : (
            <form onSubmit={handleSave}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                <div className="flex gap-4">
                  {['Active Teaching Day', 'No Homework', 'Holiday'].map(s => (
                    <label key={s} className="flex items-center">
                      <input type="radio" name="status" value={s} checked={status === s} onChange={e => setStatus(e.target.value)} className="mr-2" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {status === 'Active Teaching Day' && (
                <div className="space-y-8">
                  {/* SST Section */}
                  <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">SST (Social Science)</h3>
                    <label className="flex items-center mb-4">
                      <input type="checkbox" checked={sstRequired} onChange={e => setSstRequired(e.target.checked)} className="mr-2 h-4 w-4 text-blue-600 rounded" />
                      Homework Required
                    </label>
                    {sstRequired && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">What was taught?</label>
                          <textarea value={sstTaught} onChange={e => setSstTaught(e.target.value)} className="w-full border border-slate-300 rounded p-2" rows="2"></textarea>
                        </div>
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">Source Pages (e.g. Pg 12-15)</label>
                          <input type="text" value={sstPages} onChange={e => setSstPages(e.target.value)} className="w-full border border-slate-300 rounded p-2" />
                        </div>
                        <FileUpload label="Upload Source Material (Images/PDF)" multiple accept="image/*,application/pdf" onFilesSelected={setSstFiles} />
                        {sstFiles.length > 0 && <p className="text-sm text-blue-600">{sstFiles.length} file(s) selected</p>}
                      </div>
                    )}
                  </div>

                  {/* Science Section */}
                  <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Science</h3>
                    <label className="flex items-center mb-4">
                      <input type="checkbox" checked={sciRequired} onChange={e => setSciRequired(e.target.checked)} className="mr-2 h-4 w-4 text-blue-600 rounded" />
                      Homework Required
                    </label>
                    {sciRequired && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">What was taught?</label>
                          <textarea value={sciTaught} onChange={e => setSciTaught(e.target.value)} className="w-full border border-slate-300 rounded p-2" rows="2"></textarea>
                        </div>
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">Source Pages</label>
                          <input type="text" value={sciPages} onChange={e => setSciPages(e.target.value)} className="w-full border border-slate-300 rounded p-2" />
                        </div>
                        <FileUpload label="Upload Source Material (Images/PDF)" multiple accept="image/*,application/pdf" onFilesSelected={setSciFiles} />
                        {sciFiles.length > 0 && <p className="text-sm text-blue-600">{sciFiles.length} file(s) selected</p>}
                      </div>
                    )}
                  </div>

                  {/* Maths Section */}
                  <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Maths</h3>
                    <label className="flex items-center mb-4">
                      <input type="checkbox" checked={mathsRequired} onChange={e => setMathsRequired(e.target.checked)} className="mr-2 h-4 w-4 text-blue-600 rounded" />
                      Homework Required
                    </label>
                    {mathsRequired && (
                      <div>
                        <label className="block text-sm text-slate-600 mb-2">Homework Source</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input type="radio" value="From tuition" checked={mathsSource === 'From tuition'} onChange={e => setMathsSource(e.target.value)} className="mr-2" />
                            From tuition
                          </label>
                          <label className="flex items-center">
                            <input type="radio" value="From website" checked={mathsSource === 'From website'} onChange={e => setMathsSource(e.target.value)} className="mr-2" />
                            From website
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button disabled={saving} type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Daily Log'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
