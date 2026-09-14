/**
 * Create First Admin Account
 * 
 * Run this script once to bootstrap the first admin account.
 * After the first admin is created, additional admins can be
 * created from the admin dashboard.
 * 
 * Usage:
 *   node scripts/create-first-admin.js <email> <password> <displayName>
 * 
 * Prerequisites:
 *   - Firebase project configured
 *   - GOOGLE_APPLICATION_CREDENTIALS env var set to service account key path
 *   - Or run: firebase login && firebase use <project-id>
 */

const admin = require('firebase-admin');

// Initialize with default credentials (uses GOOGLE_APPLICATION_CREDENTIALS or ADC)
admin.initializeApp();

async function createFirstAdmin(email, password, displayName) {
  try {
    // Create the auth user
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    console.log(`✅ Auth user created: ${userRecord.uid}`);

    // Set admin custom claims
    await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'admin' });
    console.log('✅ Admin role set');

    // Create Firestore user document
    await admin.firestore().collection('users').doc(userRecord.uid).set({
      role: 'admin',
      displayName,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log('✅ Firestore user document created');
    console.log('\n🎉 First admin account created successfully!');
    console.log(`   Email: ${email}`);
    console.log(`   UID: ${userRecord.uid}`);
    console.log('\nYou can now log in to the admin dashboard.');
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node scripts/create-first-admin.js <email> <password> <displayName>');
  console.log('Example: node scripts/create-first-admin.js admin@example.com MySecurePass123 "Sir Admin"');
  process.exit(1);
}

const [email, password, displayName] = args;

createFirstAdmin(email, password, displayName)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
