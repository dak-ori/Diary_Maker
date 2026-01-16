# Tasks: Diary Statistics & Insights

**Feature**: Diary Statistics & Insights
**Status**: Draft

## Phase 1: Setup
**Goal**: Initialize types and prepare utility structures.

- [x] T001 Define `StatsSnapshot` and `PersonaStat` types in `src/types/diary.ts`

## Phase 2: Foundational (Blocking)
**Goal**: Implement the core calculation logic for habit tracking and insights.

- [x] T002 Create `src/lib/stats-utils.ts` with `calculateStreak` algorithm (descending sort + gap check)
- [x] T003 Implement `calculateMonthlyStats` (current vs previous month growth) in `src/lib/stats-utils.ts`
- [x] T004 Implement `getTopPersonas` aggregation logic in `src/lib/stats-utils.ts`

## Phase 3: User Story 1 - Monthly Writing Habit (P1)
**Goal**: Visualize monthly entry counts and growth on the dashboard.
**Independent Test**: Load dashboard with 5 entries this month and 2 last month -> Show "5 entries" and "+150% growth".

- [x] T005 [P] [US1] Create `StatsWidget` container component with analog styling in `src/components/diary/stats-widget.tsx`
- [x] T006 [US1] Create `StreakCounter` component using hand-drawn border style in `src/components/diary/streak-counter.tsx`
- [x] T007 [US1] Integrate `StatsWidget` and `StreakCounter` into the dashboard header (integrated in `src/components/diary/entry-list.tsx`)

## Phase 4: User Story 2 - Persona Distribution (P1)
**Goal**: Show a ranked list of the user's most used diary personas.
**Independent Test**: Have 3 "Dawn" entries and 1 "Optimistic" entry -> "Dawn" appears at #1 in the rank list.

- [x] T008 [P] [US2] Create `PersonaRankList` component with handwritten font styles in `src/components/diary/persona-rank-list.tsx`
- [x] T009 [US2] Connect `PersonaRankList` to the calculated stats in `src/components/diary/stats-widget.tsx`

## Phase 5: User Story 3 - Milestones (P2)
**Goal**: Celebrate writing achievements with "Sticker" style badges.
**Independent Test**: User has 10 total entries -> A "10th Chapter Written!" sticker appears.

- [x] T010 [US3] Create `MilestoneBadge` component with "Wax Seal" or "Sticker" visual effects in `src/components/diary/milestone-badge.tsx`
- [x] T011 [US3] Implement milestone check logic (10, 50, 100 entries) in `src/components/diary/stats-widget.tsx`

## Phase 6: Polish & Cross-Cutting
**Goal**: Ensure visual consistency and performance.

- [x] T012 [P] Apply `bg-paper-pattern` and organic shadows to all stats components
- [x] T013 Verify that stats calculation runs within 500ms using `useMemo` in `src/components/diary/entry-list.tsx`
- [x] T014 Ensure mobile responsiveness for the stats banner grid in `src/components/diary/stats-widget.tsx`

## Dependencies

- Phase 2 MUST complete before Phases 3, 4, and 5.
- US1 (Phase 3) is the primary container for US2 and US3.
- All US phases can be verified independently once calculations (Phase 2) are ready.

## Implementation Strategy

1. **Standalone Utils**: Build and test the calculation logic first to ensure streak and growth math is correct.
2. **Dashboard Integration**: Add the container (`StatsWidget`) to the dashboard to establish the layout.
3. **Incremental Insights**: First add habit counts (US1), then persona rankings (US2), and finally celebratory milestones (US3).
4. **Visual Refinement**: Polish the "Sticker" and "Handwritten" aesthetics at the end.
