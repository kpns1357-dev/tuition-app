import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload({ onFilesSelected, multiple = true, label = 'Upload files', accept = {} }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFilesSelected(acceptedFiles);
    }
  }, [onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    multiple,
    accept: accept || {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      'application/pdf': ['.pdf'],
    },
    maxSize: 10 * 1024 * 1024, // 10MB per file
  });

  return (
    <div>
      {label && <label className="label">{label}</label>}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-primary-400 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-2">
          <svg
            className={`w-10 h-10 ${isDragActive ? 'text-primary-500' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          {isDragActive ? (
            <p className="text-primary-600 font-medium">Drop files here...</p>
          ) : (
            <>
              <p className="text-gray-600 font-medium">
                Drag & drop files here, or <span className="text-primary-600">browse</span>
              </p>
              <p className="text-xs text-gray-400">
                Images (PNG, JPG) or PDF files, max 10MB each
              </p>
            </>
          )}
        </div>
      </div>

      {/* File previews */}
      {acceptedFiles.length > 0 && (
        <div className="mt-3 space-y-2">
          {acceptedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2"
            >
              <span className="text-lg">
                {file.type.startsWith('image/') ? '🖼️' : '📄'}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <span className="text-green-500">✓</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
