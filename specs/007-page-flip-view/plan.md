# Implementation Plan: Page Flip Animation View

**Feature Branch**: `007-page-flip-view`  
**Spec**: [spec.md](./spec.md)  
**Status**: Planning

## Technical Context

- **Framework**: Next.js 14+ (App Router)
- **Library**: `react-pageflip` for the physical paper animation.
- **Styling**: Tailwind CSS for notebook texture and layout.
- **Data Source**: Fetched entries from Supabase, filtered by the dashboard's current state.

## Constitution Check

- **I. AI-Augmented Creativity**: N/A (Reader feature).
- **II. Emotional Fidelity**: ✅ The primary goal is to provide a tactile, physical feel through page flipping.
- **III. Privacy & Security First**: ✅ Book Mode will be a protected route/component, respecting user auth and RLS.
- **IV. Simplicity & Accessibility**: ✅ Navigation via simple clicks/drags. Mobile fallback to 1-page flip.
- **V. Modern Web Standards**: ✅ Using Next.js Client Components for interactive elements.

## Phase 0: Outline & Research

### Research Tasks
- **R-001**: Research `react-pageflip` documentation for dynamic page addition and Next.js SSR compatibility.
- **R-002**: Best practices for implementing a "Full Screen" or "Focus Mode" overlay in Next.js.
- **R-003**: Investigate CSS `box-shadow` and `linear-gradient` for realistic paper crease effects in the middle of the book.

## Phase 1: Design & Contracts

### Data Model (`data-model.md`)
- Define the structure of the `BookPage` component props (mapping entry fields to the visual page).

### API Contracts (`/contracts/`)
- No new API routes; will reuse existing `supabase` client queries.

### Quickstart (`quickstart.md`)
- Steps to trigger and navigate the Book Mode.

## Phase 2: Implementation

### UI Components
- `BookModeOverlay`: The main full-screen container.
- `DiaryBook`: The `react-pageflip` wrapper.
- `DiaryPage`: The component representing a single physical page.
- `BookControls`: Navigation arrows and "Close" button.

### Integration
- Add "Read as Book" button to the Dashboard.
- Pass filtered entries from `EntryList` to `DiaryBook`.