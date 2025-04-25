# Chronicles of Magic and Machine - Website Deployment

This package contains everything you need to deploy your Chronicles of Magic and Machine website with Firebase backend integration.

## What's Included

- **Complete Source Code**: All frontend components and pages
- **Firebase Integration**: Backend services for chapters, characters, and world info
- **Deployment Guides**: Step-by-step instructions for Firebase and Vercel setup
- **Database Schema**: Documentation of the Firebase data structure

## Deployment Steps Overview

1. Set up your Firebase project (see `firebase-setup-guide.md`)
2. Update the Firebase configuration in the source code
3. Deploy to Vercel (see `vercel-deployment-guide.md`)
4. Verify the deployment works correctly

## Key Features Implemented

- **Permanent Data Storage**: All content (chapters, characters, world info) is stored in Firebase and persists across page refreshes and devices
- **Chapters Section**: Includes placeholders for all 59 chapters with rich text editing and bulk upload functionality
- **Character Section**: Fully editable character profiles with support for images, special traits, and relationships
- **World Info Section**: Categorized sections for organizing world-building content
- **Simple Password Protection**: Admin access is protected with a simple password system
- **Mobile-Friendly Design**: The site is fully responsive and works across all devices
- **Visual Style**: Maintains the dark theme with glowing/mystical UI elements

## Getting Started

1. First, read through the `firebase-setup-guide.md` to set up your Firebase project
2. Once your Firebase project is set up, update the Firebase configuration in `src/firebase/config.js`
3. Follow the `vercel-deployment-guide.md` to deploy your website to Vercel
4. After deployment, you'll have a public URL where your website is accessible

## File Structure

- `src/`: Source code for the website
  - `components/`: Reusable UI components
  - `pages/`: Next.js pages for the website
  - `firebase/`: Firebase services and configuration
  - `styles/`: CSS styles for the website
- `next.config.js`: Next.js configuration
- `vercel.json`: Vercel deployment configuration
- `package.json`: Project dependencies and scripts
- `firebase-setup-guide.md`: Instructions for setting up Firebase
- `vercel-deployment-guide.md`: Instructions for deploying to Vercel
- `database-schema.md`: Documentation of the Firebase data structure

## Using the Admin Interface

Once deployed, you can access the admin interface at `/admin`. The first time you enter a password, it will be set as the admin password for future access.

## Need Help?

If you encounter any issues during deployment, refer to the troubleshooting sections in the deployment guides or reach out for assistance.
