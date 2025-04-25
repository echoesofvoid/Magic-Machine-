# Firebase Database Schema for Chronicles of Magic and Machine

## Overview
This document outlines the Firebase Firestore database schema for the Chronicles of Magic and Machine website. The schema is designed to support all user requirements including rich text for chapters, character profiles with images, categorized world info sections, and simple password protection.

## Collections

### 1. `admin`
Stores admin authentication information.

```
admin/
  ├── credentials
  │   ├── password: string (hashed)
```

### 2. `chapters`
Stores all chapter content with rich text formatting.

```
chapters/
  ├── chapter01
  │   ├── title: string
  │   ├── content: string (rich text HTML)
  │   ├── order: number (1)
  │   ├── createdAt: timestamp
  │   ├── updatedAt: timestamp
  ├── chapter02
  │   ├── title: string
  │   ├── content: string (rich text HTML)
  │   ├── order: number (2)
  │   ├── createdAt: timestamp
  │   ├── updatedAt: timestamp
  └── ...
```

### 3. `characters`
Stores character information including optional image URLs.

```
characters/
  ├── character1
  │   ├── name: string
  │   ├── role: string
  │   ├── description: string
  │   ├── specialTraits: string (optional)
  │   ├── relationships: string (optional)
  │   ├── imageUrl: string (optional)
  │   ├── initial: string (single letter for display)
  │   ├── order: number
  │   ├── createdAt: timestamp
  │   ├── updatedAt: timestamp
  ├── character2
  │   ├── ...
  └── ...
```

### 4. `worldInfo`
Stores categorized world information.

```
worldInfo/
  ├── category1
  │   ├── title: string (e.g., "Magic System")
  │   ├── content: string (rich text HTML)
  │   ├── order: number
  │   ├── createdAt: timestamp
  │   ├── updatedAt: timestamp
  ├── category2
  │   ├── title: string (e.g., "Races")
  │   ├── content: string (rich text HTML)
  │   ├── order: number
  │   ├── createdAt: timestamp
  │   ├── updatedAt: timestamp
  └── ...
```

### 5. `settings`
Stores website settings and metadata.

```
settings/
  ├── general
  │   ├── title: string
  │   ├── subtitle: string
  │   ├── welcomeMessage: string
  │   ├── updatedAt: timestamp
```

## Firebase Storage Structure

For storing character images and any other media files:

```
/
├── characters/
│   ├── character1.jpg
│   ├── character2.png
│   └── ...
└── other-assets/
    └── ...
```

## Indexes

The following indexes will be created to optimize queries:

1. `chapters` collection:
   - Index on `order` field (ascending) for proper chapter ordering

2. `characters` collection:
   - Index on `order` field (ascending) for proper character ordering

3. `worldInfo` collection:
   - Index on `order` field (ascending) for proper category ordering

## Security Rules

Firebase security rules will be implemented to:
1. Allow public read access to all collections
2. Restrict write access to authenticated admin only
3. Validate data structure and required fields
4. Prevent deletion of essential documents

## Data Validation

The following validation rules will be enforced:
1. Chapter numbers must be between 1 and 59
2. Character names must not be empty
3. World info categories must have titles
4. Admin password must meet minimum security requirements
