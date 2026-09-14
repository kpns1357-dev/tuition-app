const statusConfig = {
  pending: {
    label: 'Pending',
    classes: 'bg-yellow-100 text-yellow-800',
    icon: '⏳',
  },
  verified: {
    label: 'Verified',
    classes: 'bg-green-100 text-green-800',
    icon: '✓',
  },
  needs_review: {
    label: 'Needs Review',
    classes: 'bg-orange-100 text-orange-800',
    icon: '⚠️',
  },
  rejected: {
    label: 'Rejected',
    classes: 'bg-red-100 text-red-800',
    icon: '✗',
  },
  overridden: {
    label: 'Approved (Override)',
    classes: 'bg-blue-100 text-blue-800',
    icon: '✓',
  },
  pass: {
    label: 'Pass',
    classes: 'bg-green-100 text-green-800',
    icon: '✓',
  },
  fail: {
    label: 'Fail',
    classes: 'bg-red-100 text-red-800',
    icon: '✗',
  },
  borderline: {
    label: 'Borderline',
    classes: 'bg-yellow-100 text-yellow-800',
    icon: '~',
  },
  maths_verified: {
    label: 'Maths OK',
    classes: 'bg-green-100 text-green-800',
    icon: '✓',
  },
  maths_rejected: {
    label: 'Not Maths',
    classes: 'bg-red-100 text-red-800',
    icon: '✗',
  },
};

export default function StatusBadge({ status, size = 'sm' }) {
  const config = statusConfig[status] || {
    label: status || 'Unknown',
    classes: 'bg-gray-100 text-gray-800',
    icon: '?',
  };

  const sizeClasses = {
    xs: 'px-1.5 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${config.classes} ${sizeClasses[size]}`}
    >
      <span className="mr-1">{config.icon}</span>
      {config.label}
    </span>
  );
}
