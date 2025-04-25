# Vercel Deployment Guide

## Step 1: Prepare Your Project

1. Ensure you have completed the Firebase setup according to the Firebase Setup Guide
2. Make sure you have the Firebase configuration values ready

## Step 2: Create a Vercel Account

1. Go to [Vercel](https://vercel.com/) and sign up for an account if you don't have one
2. Verify your email address and complete the account setup

## Step 3: Install Vercel CLI (Optional)

If you prefer using the command line:

```bash
npm install -g vercel
vercel login
```

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your Git repository or upload your project files
4. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

5. Add Environment Variables:
   - NEXT_PUBLIC_FIREBASE_API_KEY: [Your Firebase API Key]
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: [Your Firebase Auth Domain]
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID: [Your Firebase Project ID]
   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: [Your Firebase Storage Bucket]
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: [Your Firebase Messaging Sender ID]
   - NEXT_PUBLIC_FIREBASE_APP_ID: [Your Firebase App ID]

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Navigate to your project directory
2. Run:
```bash
vercel
```
3. Follow the prompts to configure your project
4. When asked about environment variables, add the Firebase configuration values

## Step 5: Configure Custom Domain (Optional)

1. In the Vercel Dashboard, go to your project
2. Click on "Settings" > "Domains"
3. Add your custom domain and follow the instructions to set up DNS

## Step 6: Verify Deployment

1. Once deployment is complete, Vercel will provide you with a URL (e.g., https://your-project.vercel.app)
2. Visit the URL to ensure your site is working correctly
3. Test the admin functionality by navigating to /admin
4. Verify that you can add and edit content, and that it persists after page refresh

## Troubleshooting

If you encounter issues:

1. Check the Vercel deployment logs for errors
2. Verify that all environment variables are correctly set
3. Ensure your Firebase project is properly configured with the correct security rules
4. Check that your Firebase project has Firestore Database and Storage enabled
