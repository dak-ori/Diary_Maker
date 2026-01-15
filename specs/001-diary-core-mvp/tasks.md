# Tasks: Core MVP Setup

**Feature**: Core MVP Setup
**Status**: Draft

## Phase 1: Setup & Configuration
**Goal**: Initialize project, configure environment, and set up core dependencies.

- [x] T001 Initialize Next.js 14 project with TypeScript and Tailwind CSS (already done, verifying structure) `src/app/page.tsx`
- [x] T002 Install project dependencies (Supabase, Gemini, Lucide) `package.json`
- [x] T003 Configure environment variables (Supabase, Gemini) `.env.local`
- [x] T004 [P] Configure Tailwind CSS with "Kalam" and "Patrick Hand" fonts `tailwind.config.ts`
- [x] T005 [P] Set up `src/lib/utils.ts` for cn helper `src/lib/utils.ts`
- [x] T006 [P] Configure global CSS for paper texture background `src/app/globals.css`

## Phase 2: Foundational (Blocking)
**Goal**: Establish Authentication and Database core before features.

- [x] T007 Create Supabase Client utilities (Browser Client) `src/lib/supabase/client.ts`
- [x] T008 Create Supabase Client utilities (Server Client) `src/lib/supabase/server.ts`
- [x] T009 Implement Supabase Middleware for Session Refresh `src/middleware.ts`
- [x] T010 Define TypeScript types for Database (Profiles, Entries) `src/types/database.ts`
- [x] T011 Create migration file for Profiles and Entries tables `supabase/migrations/20260115_init_schema.sql`
- [x] T012 Apply RLS policies for Profiles and Entries `supabase/migrations/20260115_rls_policies.sql`

## Phase 3: User Story 1 - Secure Access (P1)
**Goal**: Users can authenticate via Google Sign-in and access protected routes.
**Independent Test**: Unauthenticated user redirected to /login; Authenticated user sees /dashboard.

- [x] T013 [US1] Create Login Page with Google Sign-in Button `src/app/(auth)/login/page.tsx`
- [x] T014 [US1] Implement Auth Callback Route for Code Exchange `src/app/auth/callback/route.ts`
- [x] T015 [US1] Create Dashboard Layout (Protected Route Wrapper) `src/app/(dashboard)/layout.tsx`
- [x] T016 [US1] Create basic Dashboard Page (Placeholder) `src/app/(dashboard)/dashboard/page.tsx`
- [x] T017 [US1] Implement Google Sign-in component logic `src/components/auth/google-signin-button.tsx`

## Phase 4: User Story 2 - AI-Augmented Entry Creation (P1)
**Goal**: Users can generate expanded diary entries from brief thoughts using Gemini.
**Independent Test**: Input text -> Click Generate -> Display AI result in handwriting font.

- [x] T018 [US2] Create Gemini API Client Wrapper `src/lib/gemini/client.ts`
- [x] T019 [US2] Implement API Route for Generation `src/app/api/generate/route.ts`
- [x] T020 [US2] Create "New Entry" Page UI `src/app/(dashboard)/new-entry/page.tsx`
- [x] T021 [US2] Implement "Brief Thought" Input Component (max 300 chars) `src/components/diary/brief-thought-input.tsx`
- [x] T022 [US2] Implement Persona Selector Component `src/components/diary/persona-selector.tsx`
- [x] T023 [US2] Implement Entry Display Component (Handwriting Font) `src/components/diary/entry-display.tsx`
- [x] T024 [US2] Wire up Generation Logic in New Entry Page `src/app/(dashboard)/new-entry/page.tsx`

## Phase 5: User Story 3 - Persistence & Review (P1)
**Goal**: Users can save, view, and delete their entries.
**Independent Test**: Save entry -> Appears in Dashboard list -> Can be deleted.

- [x] T025 [US3] Implement "Save Entry" Server Action/API `src/app/api/entries/route.ts`
- [x] T026 [US3] Update Dashboard to Fetch and List Entries `src/app/(dashboard)/dashboard/page.tsx`
- [x] T027 [US3] Create Entry Card Component for List View `src/components/diary/entry-card.tsx`
- [x] T028 [US3] Implement Delete Entry Logic (Client + API) `src/components/diary/delete-entry-button.tsx`
- [x] T029 [US3] Create Entry Detail View (Dynamic Route) `src/app/(dashboard)/entry/[id]/page.tsx`
- [x] T030 [US3] Implement Edit Functionality (Post-Save) `src/app/(dashboard)/entry/[id]/edit-form.tsx`

## Phase 6: Polish & Cross-Cutting
**Goal**: Ensure "Emotional Fidelity" and handling edge cases.

- [x] T031 Refine Paper Texture CSS/Image implementation `src/app/globals.css`
- [x] T032 Implement Loading States (Pen writing animation?) `src/components/ui/loading-pen.tsx`
- [x] T033 Handle AI Error States (Overload, Safety block) `src/app/(dashboard)/new-entry/page.tsx`
- [x] T034 Verify Mobile Responsiveness for Input and Reading `src/app/globals.css`

## Dependencies

- Phase 1 & 2 MUST complete before Phase 3, 4, 5.
- Phase 3 (Auth) MUST complete before Phase 4 & 5 (requires user_id).
- Phase 4 (Creation) and Phase 5 (Persistence) can be partially parallelized, but "Save" (T025) requires "Generation" (T019) to be useful.

## Implementation Strategy

1. **MVP Core**: Setup -> Auth -> Generate -> Save.
2. **Refinement**: Edit -> Delete -> Polish Visuals.
3. **Parallelism**: UI Components (T021, T022, T023) can be built while API/DB (T018, T019, T025) is being setup.
