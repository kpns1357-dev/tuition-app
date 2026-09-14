const admin = require('firebase-admin');

// Initialize Firebase Admin app globally
admin.initializeApp();

// Import all functions
const authFunctions = require('./auth');
const aiVerificationFunctions = require('./aiVerification');
const notificationsFunctions = require('./notifications');
const parentAccessFunctions = require('./parentAccess');

// Export all functions at root level for seamless httpsCallable name matching
module.exports = {
  ...authFunctions,
  ...aiVerificationFunctions,
  ...notificationsFunctions,
  ...parentAccessFunctions,
};

