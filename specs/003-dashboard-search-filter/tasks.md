# Tasks: Dashboard Search and Filtering

**Feature**: Dashboard Search and Filtering
**Status**: Draft

## Phase 1: Setup
**Goal**: Prepare utility functions for filtering.

- [x] T001 Create `src/lib/filter-utils.ts` for text matching logic

## Phase 2: Foundational
**Goal**: Create component skeletons and refactor dashboard.

- [x] T002 [P] Create `src/components/diary/dashboard-filter.tsx` skeleton with basic styling
- [x] T003 [P] Create `src/components/diary/entry-list.tsx` to handle filtered display logic
- [x] T004 Refactor `src/app/(dashboard)/dashboard/page.tsx` to use `EntryList` component

## Phase 3: User Story 1 - Instant Text Search (P1)
**Goal**: Users can search entries by keyword.
**Independent Test**: Type "memory" in search bar; only entries containing "memory" appear.

- [x] T005 [P] [US1] Implement search input UI in `src/components/diary/dashboard-filter.tsx`
- [x] T006 [US1] Implement `searchQuery` state and `useMemo` filtering in `src/components/diary/entry-list.tsx`
- [x] T007 [US1] Connect search input to filtering state in `src/components/diary/entry-list.tsx`

## Phase 4: User Story 2 - Persona Filtering (P2)
**Goal**: Users can filter entries by mood persona.
**Independent Test**: Click "Gratitude" chip; only Gratitude entries appear.

- [x] T008 [P] [US2] Implement persona chip UI in `src/components/diary/dashboard-filter.tsx`
- [x] T009 [US2] Add `activePersona` state and update `useMemo` logic in `src/components/diary/entry-list.tsx`
- [x] T010 [US2] Connect persona chips to filtering state in `src/components/diary/entry-list.tsx`

## Phase 5: User Story 3 - Combined Logic (P3)
**Goal**: Search and filter work together (AND logic).
**Independent Test**: Select "Optimistic" and type "Sun"; only Optimistic entries with "Sun" appear.

- [x] T011 [US3] Verify intersection logic (AND) in `src/components/diary/entry-list.tsx`
- [x] T012 [US3] Add "Clear Filters" functionality in `src/components/diary/dashboard-filter.tsx`

## Phase 6: Polish & Cross-cutting
**Goal**: Refine UI and handle edge cases.

- [x] T013 [P] Implement "No results found" empty state in `src/components/diary/entry-list.tsx`
- [x] T014 [P] Apply handwriting font and organic border styles to search bar in `src/components/diary/dashboard-filter.tsx`
- [x] T015 Verify mobile responsiveness and performance with mock entries

## Dependencies

- Phase 2 (Foundational) MUST complete before US1 and US2.
- US1 and US2 can be developed in parallel after Foundational.
- US3 depends on both US1 and US2 completion.

## Implementation Strategy

1. **Foundational**: Move the current entry mapping from `page.tsx` to `entry-list.tsx` first.
2. **Incremental**: Add search (US1) first as it's the highest priority.
3. **Refinement**: Add persona filtering (US2) and then combine them.
4. **Visuals**: Polish the search bar aesthetic at the end to match the app's "Emotional Fidelity".
