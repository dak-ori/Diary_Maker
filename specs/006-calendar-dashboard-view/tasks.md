# Tasks: Calendar Dashboard View

**Feature**: Calendar Dashboard View
**Status**: Draft

## Phase 1: Setup
**Goal**: Initialize types and prepare data mapping structures.

- [x] T001 Define `CalendarEntryMap` and related types in `src/types/diary.ts`

## Phase 2: Foundational (Blocking)
**Goal**: Build core calendar components before integrating with the dashboard.

- [x] T002 Create `CalendarDay` component with hand-drawn ink circle style in `src/components/diary/calendar-day.tsx`
- [x] T003 Create `CalendarView` grid logic using `date-fns` in `src/components/diary/calendar-view.tsx`

## Phase 3: User Story 1 - View Toggling (P1)
**Goal**: Allow users to switch between list and calendar layouts.
**Independent Test**: Navigate to dashboard -> Click toggle -> Switch between List and Calendar grid.

- [x] T004 [US1] Create `DashboardToggle` component with List/Calendar icons in `src/components/diary/dashboard-toggle.tsx`
- [x] T005 [US1] Add view state management (list vs calendar) (integrated in `src/components/diary/entry-list.tsx`)
- [x] T006 [US1] Integrate `DashboardToggle` and conditional rendering (integrated in `src/components/diary/entry-list.tsx`)

## Phase 4: User Story 2 - Calendar Visualization (P1)
**Goal**: Highlight dates with existing entries using ink circle markers.
**Independent Test**: Open calendar -> Dates with entries show a light ink circle marker.

- [x] T007 [US2] Implement entry-to-date mapping logic (integrated in `src/components/diary/entry-list.tsx`)
- [x] T008 [US2] Pass the date map to `CalendarView` and render `CalendarDay` markers in `src/components/diary/calendar-view.tsx`

## Phase 5: User Story 3 - Navigation (P2)
**Goal**: Navigate to specific entry details from the calendar.
**Independent Test**: Click a date with a marker -> Navigates to the corresponding entry detail page.

- [x] T009 [US3] Implement navigation logic in `CalendarDay` using `next/navigation` in `src/components/diary/calendar-day.tsx`
- [x] T009-1 [US3] Handle multiple entries on a single day (e.g., show a simple list or tool-tip) in `src/components/diary/calendar-day.tsx`

## Phase 6: Polish & Cross-Cutting
**Goal**: Ensure smooth navigation and mobile fidelity.

- [x] T010 Implement month navigation (Next/Previous) in `src/components/diary/calendar-view.tsx`
- [x] T011 [P] Ensure calendar grid responsiveness and paper texture styling in `src/components/diary/calendar-view.tsx`

## Dependencies

- Phase 2 MUST complete before Phase 3 and 4.
- US1 (Phase 3) is required to view the calendar.
- US2 (Phase 4) depends on the basic grid from Phase 2.
- US3 (Phase 5) depends on markers being visible (US2).

## Implementation Strategy

1. **Foundational Components**: Build the calendar grid and the "Ink Circle" style first as isolated components.
2. **Dashboard Integration**: Add the toggle logic to the dashboard to enable switching.
3. **Data Wiring**: Transform the existing entries list into a date-map for the calendar markers.
4. **Navigation & Navigation**: Add the click-to-detail flow.
5. **Mobile Refinement**: Ensure the grid doesn't break on small screens.
