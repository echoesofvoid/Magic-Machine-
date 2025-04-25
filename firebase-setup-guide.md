# Firebase Project Setup Guide

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter "Chronicles of Magic and Machine" as the project name
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click "Create project"

## Step 2: Register Your Web App

1. In the Firebase Console, click the gear icon and select "Project settings"
2. Scroll down to "Your apps" and click the web icon (</>) 
3. Register your app with the name "Chronicles Web App"
4. Copy the Firebase configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 3: Set Up Firebase Authentication

1. In the Firebase Console, go to "Authentication"
2. Click "Get started"
3. Enable the "Email/Password" sign-in method (for admin access)
4. Add a user with your email and a secure password

## Step 4: Set Up Firestore Database

1. In the Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in production mode
4. Choose a location closest to you
5. Click "Enable"

## Step 5: Set Up Firebase Storage

1. In the Firebase Console, go to "Storage"
2. Click "Get started"
3. Follow the setup steps
4. Click "Done"

## Step 6: Set Up Firebase Security Rules

1. In the Firebase Console, go to "Firestore Database" > "Rules"
2. Update the rules to:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to all collections
    match /{document=**} {
      allow read: if true;
    }
    
    // Restrict write access to authenticated users
    match /chapters/{chapterId} {
      allow write: if request.auth != null;
    }
    
    match /characters/{characterId} {
      allow write: if request.auth != null;
    }
    
    match /worldInfo/{categoryId} {
      allow write: if request.auth != null;
    }
    
    match /settings/{document} {
      allow write: if request.auth != null;
    }
    
    match /admin/{document} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Similarly, update Storage rules to allow public read access and authenticated write access:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
