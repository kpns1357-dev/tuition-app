import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

/**
 * Login with email and password.
 * Returns user data with role from custom claims.
 */
export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Force token refresh to get custom claims
  const tokenResult = await user.getIdTokenResult(true);
  const role = tokenResult.claims.role || null;

  if (!role) {
    await signOut(auth);
    throw new Error('Account has no assigned role. Contact your administrator.');
  }

  return { user, role };
}

/**
 * Logout the current user.
 */
export async function logoutUser() {
  await signOut(auth);
}

/**
 * Get the current user's role from custom claims.
 */
export async function getUserRole(user) {
  if (!user) return null;
  const tokenResult = await user.getIdTokenResult();
  return tokenResult.claims.role || null;
}

/**
 * Get the current user's Firestore profile.
 */
export async function getUserProfile(uid) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
}
