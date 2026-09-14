import { Link } from 'react-router-dom';

const subjectConfig = {
  maths: {
    label: 'Maths',
    icon: '🔢',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    description: 'Mathematics homework',
  },
  science: {
    label: 'Science',
    icon: '🔬',
    color: 'from-green-500 to-green-600',
    bgLight: 'bg-green-50',
    description: 'Reflection → Correction → Rewrite',
  },
  sst: {
    label: 'SST',
    icon: '🌍',
    color: 'from-amber-500 to-amber-600',
    bgLight: 'bg-amber-50',
    description: 'Reflection → Correction → Rewrite',
  },
};

export default function SubjectCard({ subject, status, linkTo }) {
  const config = subjectConfig[subject] || {};

  const getStatusDisplay = () => {
    if (!status) return null;
    if (status === 'not_required') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
          Not required today
        </span>
      );
    }
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
          ✓ Completed
        </span>
      );
    }
    if (status === 'pending') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
          Pending review
        </span>
      );
    }
    if (status === 'required') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
          Due today
        </span>
      );
    }
    return null;
  };

  const isDisabled = status === 'not_required';

  const content = (
    <div
      className={`card hover:shadow-md transition-all duration-200 ${
        isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center text-2xl flex-shrink-0`}
        >
          {config.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">{config.label}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{config.description}</p>
          <div className="mt-2">{getStatusDisplay()}</div>
        </div>
        {!isDisabled && (
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  );

  if (isDisabled || !linkTo) {
    return content;
  }

  return <Link to={linkTo}>{content}</Link>;
}
