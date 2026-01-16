# Implementation Plan: Calendar Dashboard View

**Feature Branch**: `006-calendar-dashboard-view`  
**Spec**: [spec.md](./spec.md)  
**Status**: Planning

## Technical Context

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Date Handling**: `date-fns` (already in project)
- **Icons**: `lucide-react`
- **State Management**: React `useState` for view toggle and month navigation.

## Constitution Check

- **I. AI-Augmented Creativity**: N/A.
- **II. Emotional Fidelity**: ✅ Using hand-drawn ink circle SVG/CSS overlays for markers.
- **III. Privacy & Security First**: ✅ Using existing Supabase Server Client and RLS for data fetching.
- **IV. Simplicity & Accessibility**: ✅ Intuitive toggle between List/Calendar.
- **V. Modern Web Standards**: ✅ Next.js Server Components for initial data fetch where possible.

## Phase 0: Outline & Research

### Research Tasks
- **R-001**: Design a reusable "Hand-drawn Ink Circle" CSS/SVG component.
- **R-002**: Determine optimal component structure for a custom calendar grid without heavy external libraries (using `date-fns`).
- **R-003**: Investigate performance of rendering markers for a full month on mobile.

## Phase 1: Design & Contracts

### Data Model (`data-model.md`)
- Map existing `entries` (created_at) to a `CalendarEntryMap` defined in `src/types/diary.ts` for fast lookup in the calendar grid.

### API Contracts (`/contracts/`)
- No new API routes required; using existing Supabase client in dashboard.

### Quickstart (`quickstart.md`)
- Steps to verify the calendar view toggle and entry markers.

## Phase 2: Implementation

### UI Components
- `CalendarView`: The main grid component.
- `CalendarDay`: Individual day cell with marker support.
- `DashboardToggle`: Icon-based view switcher.

### Integration
- Refactor `src/app/(dashboard)/dashboard/page.tsx` to handle conditional rendering of `EntryList` vs `CalendarView`.