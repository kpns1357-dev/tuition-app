# Tuition Homework Verification App

A web-based homework verification system for tuition teachers, powered by AI. Students submit homework, AI checks concept coverage against source material, and parents get real-time status updates.

## Features

- **Admin Dashboard**: Manage students, set daily taught content per class (5th-10th), review AI-flagged submissions, mark attendance
- **Student Portal**: Subject selection (Maths/Science/SST), three-step homework upload (Reflection → Correction → Rewrite), instant AI feedback
- **Parent Access**: Secure shared link — no login required — showing homework status and attendance
- **AI Verification**: Tiered model approach — fast/cheap primary check with automatic escalation for borderline scores
- **Notifications**: In-website real-time notifications + SMS alerts for critical events

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + Tailwind CSS + React Router v7 |
| Backend | Firebase Cloud Functions v2 (Node.js 20) |
| Database | Cloud Firestore |
| Storage | Firebase Storage |
| Auth | Firebase Authentication (custom claims) |
| AI | OpenRouter API (GLM-5.3-Flash + Gemini 2.5 Pro) |
| SMS | Twilio |

## Quick Start

### Prerequisites

- Node.js 20+
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project with Blaze plan (required for Cloud Functions)
- OpenRouter API key
- Twilio account (for SMS)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/kpns1357-dev/tuition-app.git
   cd tuition-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd functions && npm install && cd ..
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Firebase project config values
   ```

4. **Set Cloud Functions secrets**
   ```bash
   firebase functions:secrets:set OPENROUTER_API_KEY
   firebase functions:secrets:set TWILIO_ACCOUNT_SID
   firebase functions:secrets:set TWILIO_AUTH_TOKEN
   firebase functions:secrets:set TWILIO_PHONE_NUMBER
   ```

5. **Create the first admin account**
   ```bash
   # Set GOOGLE_APPLICATION_CREDENTIALS to your service account key
   export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account-key.json"
   node scripts/create-first-admin.js admin@example.com YourPassword123 "Sir Admin"
   ```

6. **Start local development**
   ```bash
   npm run dev
   ```

   For full local testing with emulators:
   ```bash
   firebase emulators:start
   # In another terminal:
   VITE_USE_EMULATORS=true npm run dev
   ```

### Production Deployment

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy everything**
   ```bash
   firebase deploy
   ```

   Or deploy individually:
   ```bash
   firebase deploy --only hosting    # Frontend
   firebase deploy --only functions  # Cloud Functions
   firebase deploy --only firestore  # Security rules
   firebase deploy --only storage    # Storage rules
   ```

## Secret Management

**Approach: Firebase Cloud Functions Secrets**

All sensitive keys are stored as Firebase Cloud Functions secrets, never in source code or environment files:

| Secret | Purpose | How to Set |
|---|---|---|
| `OPENROUTER_API_KEY` | AI model API access | `firebase functions:secrets:set OPENROUTER_API_KEY` |
| `TWILIO_ACCOUNT_SID` | SMS service account | `firebase functions:secrets:set TWILIO_ACCOUNT_SID` |
| `TWILIO_AUTH_TOKEN` | SMS service auth | `firebase functions:secrets:set TWILIO_AUTH_TOKEN` |
| `TWILIO_PHONE_NUMBER` | SMS sender number | `firebase functions:secrets:set TWILIO_PHONE_NUMBER` |

**Why this approach?**
- Firebase Functions secrets are encrypted at rest and injected as environment variables only at function runtime
- They never appear in source code, build artifacts, or client-side bundles
- They integrate natively with Firebase deploy workflows
- No additional secret management infrastructure needed

**Firebase client config** (API key, project ID, etc.) is intentionally public — Firebase security is enforced by Firestore/Storage rules and Auth, not by hiding these values.

## Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
│   Frontend   │────▶│  Cloud Functions  │────▶│  OpenRouter  │
│  React+Vite  │     │   (Node.js 20)   │     │   AI API     │
└──────────────┘     └──────────────────┘     └──────────────┘
       │                      │                       
       │              ┌──────────────┐     ┌──────────────┐
       └─────────────▶│  Firestore   │     │   Twilio     │
                      │  Database    │◀────│   SMS API    │
                      └──────────────┘     └──────────────┘
                             │
                      ┌──────────────┐
                      │   Firebase   │
                      │   Storage    │
                      └──────────────┘
```

## Project Structure

```
tuition-app/
├── src/                    # Frontend source
│   ├── components/         # Shared React components
│   ├── contexts/           # Auth context
│   ├── hooks/              # Custom hooks (notifications, submissions)
│   ├── lib/                # Firebase init, auth helpers, API wrappers
│   └── pages/              # Page components
│       ├── admin/          # Admin dashboard, students, daily log, review, attendance
│       └── student/        # Student home, upload, status
├── functions/              # Firebase Cloud Functions
│   └── src/                # Function source files
├── scripts/                # Utility scripts
├── firestore.rules         # Firestore security rules
├── storage.rules           # Storage security rules
└── firebase.json           # Firebase project config
```

## License

Private — all rights reserved.
