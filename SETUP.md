# Tuition App — Detailed Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project**
3. Name it (e.g., `tuition-homework-app`)
4. Disable Google Analytics (not needed) or enable if desired
5. Click **Create project**

## Step 2: Enable Firebase Services

### Authentication
1. In Firebase Console → **Authentication** → **Get started**
2. Go to **Sign-in method** tab
3. Enable **Email/Password** provider
4. **Important**: Do NOT enable "Email link" — we only use password-based auth

### Firestore Database
1. Go to **Firestore Database** → **Create database**
2. Choose **Start in production mode** (we have custom rules)
3. Select a region close to your users (e.g., `asia-south1` for India)

### Storage
1. Go to **Storage** → **Get started**
2. Choose **Start in production mode**
3. Confirm the default bucket location

### Cloud Functions
1. **Requires Blaze plan** — upgrade your project to Blaze (pay-as-you-go)
2. Functions are deployed via CLI, no console setup needed

## Step 3: Register a Web App

1. In Firebase Console → **Project settings** (gear icon) → **General**
2. Scroll down to **Your apps** → Click **Web** icon (`</>`)
3. Register the app with a nickname (e.g., "Tuition Web App")
4. Copy the config object values:
   ```javascript
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```

## Step 4: Local Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Connect to your project**
   ```bash
   cd tuition-app
   firebase use --add
   # Select your project from the list
   ```

3. **Create `.env.local`**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the values from Step 3:
   ```
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=tuition-homework-app.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tuition-homework-app
   VITE_FIREBASE_STORAGE_BUCKET=tuition-homework-app.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

4. **Install dependencies**
   ```bash
   npm install
   cd functions && npm install && cd ..
   ```

## Step 5: Configure Secrets

### OpenRouter API Key
1. Go to [OpenRouter](https://openrouter.ai/) and create an account
2. Go to **Keys** → **Create Key**
3. Copy the key
4. Set it as a Firebase secret:
   ```bash
   firebase functions:secrets:set OPENROUTER_API_KEY
   # Paste the key when prompted
   ```

### Twilio SMS Credentials
1. Go to [Twilio](https://www.twilio.com/) and create an account
2. From the Twilio Console dashboard, copy:
   - **Account SID**
   - **Auth Token**
3. Buy a phone number capable of sending SMS
4. Set all as Firebase secrets:
   ```bash
   firebase functions:secrets:set TWILIO_ACCOUNT_SID
   firebase functions:secrets:set TWILIO_AUTH_TOKEN
   firebase functions:secrets:set TWILIO_PHONE_NUMBER
   ```

### Twilio DLT Compliance (India)

If sending SMS to Indian mobile numbers, TRAI regulations require DLT registration:

1. **Register on a DLT portal** (e.g., Jio, Airtel, or Vodafone Idea DLT portals)
   - Register your business entity
   - Register your Sender ID (alphanumeric, e.g., "TUITION")
   
2. **Whitelist SMS templates** on the DLT portal:
   - Template for homework alerts: `"Homework Alert: {#var#} has not submitted {#var#} homework for {#var#} days. Please follow up."`
   - Template for attendance: `"Attendance: {#var#} was marked {#var#} on {#var#}."`
   - Template for low match: `"Homework Review: {#var#}'s {#var#} submission needs review. Score: {#var#}%."`

3. **Notify Twilio**: Email `senderid@twilio.com` with your Entity ID, Sender ID, and template IDs

4. **Update Cloud Functions**: Add DLT Entity ID and Template IDs to function configuration if using domestic route

> **Note**: SMS will work internationally without DLT registration, but Indian numbers require it. The code is fully functional — only the Twilio regulatory setup is needed.

## Step 6: Create First Admin Account

Generate a Firebase service account key:

1. Firebase Console → **Project settings** → **Service accounts**
2. Click **Generate new private key**
3. Save the JSON file securely (DO NOT commit this file)

Create the admin:
```bash
# Set the service account key path
set GOOGLE_APPLICATION_CREDENTIALS=path\to\service-account-key.json

# Create the admin account
node scripts/create-first-admin.js admin@yourdomain.com YourSecurePassword "Sir Admin"
```

## Step 7: Deploy

### Deploy Everything
```bash
# Build frontend
npm run build

# Deploy all (hosting + functions + rules)
firebase deploy
```

### Deploy Individual Services
```bash
firebase deploy --only hosting      # Just the frontend
firebase deploy --only functions    # Just Cloud Functions
firebase deploy --only firestore    # Just Firestore rules
firebase deploy --only storage      # Just Storage rules
```

### Custom Domain (Optional)
1. Firebase Console → **Hosting** → **Add custom domain**
2. Follow the DNS verification steps
3. SSL is automatically provisioned

## Step 8: Verify Deployment

After deploying, verify all functionality:

1. **Admin Login**: Go to your Firebase Hosting URL → Login with admin credentials
2. **Create Student**: Admin Dashboard → Manage Students → Add a test student
3. **Daily Log**: Set today's taught content for a class
4. **Student Login**: Open incognito/different browser → Login as the test student
5. **Submit Homework**: Select a subject → Upload test images → Check AI feedback
6. **Parent Link**: Copy the parent link from Admin → Open in new tab → Verify data shows
7. **Notifications**: Check both in-app notifications and SMS delivery

## Redeployment After Changes

```bash
# Pull latest changes
git pull

# Install any new dependencies
npm install
cd functions && npm install && cd ..

# Build and deploy
npm run build
firebase deploy
```

## Troubleshooting

| Issue | Solution |
|---|---|
| Functions fail to deploy | Ensure Blaze plan is active; check `firebase deploy --debug` |
| AI verification not working | Verify OPENROUTER_API_KEY secret is set: `firebase functions:secrets:access OPENROUTER_API_KEY` |
| SMS not sending | Check Twilio credentials and balance; verify DLT compliance for India |
| Login fails | Ensure Firebase Auth Email/Password is enabled |
| Parent link shows error | Verify the parent token exists in Firestore `users` collection |
