import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

/**
 * Create a new student account (admin only).
 */
export async function createStudentAccount(data) {
  const fn = httpsCallable(functions, 'createStudentAccount');
  const result = await fn(data);
  return result.data;
}

/**
 * Create a new admin account (admin only).
 */
export async function createAdminAccount(data) {
  const fn = httpsCallable(functions, 'createAdminAccount');
  const result = await fn(data);
  return result.data;
}

/**
 * Trigger AI verification for a submission.
 */
export async function triggerVerification(submissionId) {
  const fn = httpsCallable(functions, 'triggerVerification');
  const result = await fn({ submissionId });
  return result.data;
}

/**
 * Get parent status (no auth required, uses token).
 */
export async function getParentStatus(token) {
  const fn = httpsCallable(functions, 'getParentStatus');
  const result = await fn({ token });
  return result.data;
}

/**
 * Admin override a submission status.
 */
export async function overrideSubmission(submissionId, notes) {
  const fn = httpsCallable(functions, 'overrideSubmission');
  const result = await fn({ submissionId, notes });
  return result.data;
}

/**
 * Regenerate parent access token for a student.
 */
export async function regenerateParentToken(studentId) {
  const fn = httpsCallable(functions, 'regenerateParentToken');
  const result = await fn({ studentId });
  return result.data;
}
