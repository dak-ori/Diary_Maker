# Implementation Plan: Diary Statistics & Insights

**Feature Branch**: `008-diary-stats-insights`  
**Spec**: [spec.md](./spec.md)  
**Status**: Planning

## Technical Context

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Date Handling**: `date-fns` (already in project)
- **State Management**: React `useMemo` for derived statistics from the fetched entries list.
- **Icons**: `lucide-react` for achievement markers.

## Constitution Check

- **I. AI-Augmented Creativity**: N/A (Analytical feature).
- **II. Emotional Fidelity**: ✅ Stats will be displayed as "Hand-written notes" or "Journal margins" rather than cold dashboard charts.
- **III. Privacy & Security First**: ✅ Statistics are computed client-side or scoped via Supabase RLS; no cross-user data leakage.
- **IV. Simplicity & Accessibility**: ✅ Ranked text lists instead of complex graphs.
- **V. Modern Web Standards**: ✅ TypeScript 5.x for robust calculation logic.

## Phase 0: Outline & Research

### Research Tasks
- **R-001**: Define an efficient algorithm for calculating streaks from an array of ISO date strings.
- **R-002**: Research UI patterns for "celebratory milestones" that fit the analog theme.
- **R-003**: Best practices for comparing monthly aggregates in a client-side context.

## Phase 1: Design & Contracts

### Data Model (`data-model.md`)
- Define the `StatsSnapshot` type for the dashboard state.

### API Contracts (`/contracts/`)
- No new external API routes required; statistics will be derived from the existing `entries` data already fetched for the dashboard. A shared utility `stats-utils.ts` will be defined.

### Quickstart (`quickstart.md`)
- Steps to verify streak and persona rankings with mock data.

## Phase 2: Implementation

### UI Components
- `StatsWidget`: The main container below the greeting.
- `StreakCounter`: Visual display of current consecutive days.
- `PersonaRankList`: Text-based insight of top moods.
- `MilestoneBadge`: Celebration component for count achievements.

### Integration
- Add the stats derivation logic to `src/app/(dashboard)/dashboard/page.tsx` or `src/components/diary/entry-list.tsx`.