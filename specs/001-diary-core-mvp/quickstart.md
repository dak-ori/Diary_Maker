# Quickstart: Core MVP

## Prerequisites

- Node.js 18+
- Supabase Account
- Google Cloud Account (for Gemini API)

## Setup Steps

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL="<your-supabase-url>"
NEXT_PUBLIC_SUPABASE_ANON_KEY="<your-anon-key>"
GEMINI_API_KEY="<your-gemini-api-key>"
```

### 2. Supabase Setup

Run the SQL migration in `supabase/migrations/` (or via SQL Editor):

1. **Enable Auth Providers**: Go to Authentication > Providers and enable Google.
2. **Create Tables**: Run the SQL to create `profiles` and `entries`.
3. **Enable RLS**: Ensure RLS is enabled on all tables.
4. **Apply Policies**: Run the SQL to add RLS policies.
5. **Set up Triggers**: Create the `handle_new_user` trigger for profile creation.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to start.
