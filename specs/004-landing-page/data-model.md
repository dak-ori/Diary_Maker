# Data Model: Landing Page

This feature does not introduce new database entities. It primarily deals with UI state and authentication flow.

## UI State (Client-side)
The landing page will be primarily static but may include simple hover/scroll animations.

## Authentication Flow
- **Unauthenticated**: Displays landing page content.
- **Authenticated**: Automatically redirects to `/dashboard` via server-side session check.
