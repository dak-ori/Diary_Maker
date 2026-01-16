# Tasks: Page Flip Animation View

**Feature**: Page Flip Animation View
**Status**: Draft

## Phase 1: Setup
**Goal**: Prepare the environment and define component interfaces.

- [x] T001 [P] Research and verify `react-pageflip` usage with Next.js App Router (SSR vs Client) in `src/components/diary/diary-book.tsx`
- [x] T002 Define interfaces for `DiaryPage` and `BookModeOverlay` in `src/types/diary.ts`

## Phase 2: Foundational (Blocking)
**Goal**: Build the core components for the book interface.

- [x] T003 [P] Create `DiaryPage` component representing a single physical notebook page in `src/components/diary/diary-page.tsx`
- [x] T003-1 [P] 책의 시작과 끝을 장식할 `DiaryCover` 컴포넌트 생성 (`src/components/diary/diary-cover.tsx`)
- [x] T004 Create `DiaryBook` component wrapping `react-pageflip` library in `src/components/diary/diary-book.tsx`
- [x] T005 Create `BookModeOverlay` as a full-screen focus mode container in `src/components/diary/book-mode-overlay.tsx`

## Phase 3: User Story 1 - Immersion in Analog Book Mode (P1)
**Goal**: Allow users to enter and exit the book view from the dashboard.
**Independent Test**: Click "Read as Book" -> Notebook overlay appears -> Click "Close" -> Returned to list.

- [x] T006 [US1] Add "Read as Book" button to the dashboard header in `src/components/diary/entry-list.tsx`
- [x] T007 [US1] Implement open/close state logic for the book overlay in `src/components/diary/entry-list.tsx`
- [x] T008 [US1] Add "Close" button and persistent navigation bar to `src/components/diary/book-mode-overlay.tsx`

## Phase 4: User Story 2 - Interactive Page Flipping (P1)
**Goal**: Implement realistic paper animation and touch/drag controls.
**Independent Test**: Drag right corner to left -> Page turns with curved edges and shadows.

- [x] T009 [US2] Configure `react-pageflip` settings for 3D animation, shadows, and curvature in `src/components/diary/diary-book.tsx`
- [x] T010 [US2] Implement click-to-flip and drag interactions in `src/components/diary/diary-book.tsx`

## Phase 5: User Story 3 - Chronological Memory Journey (P2)
**Goal**: Map filtered diary entries to individual book pages.
**Independent Test**: Book shows currently filtered entries in chronological order (one per page).

- [x] T011 [US3] Wire up filtered entries from `EntryList` to `BookModeOverlay` in `src/components/diary/entry-list.tsx`
- [x] T012 [US3] Implement entry-to-page mapping logic ensuring chronological order in `src/components/diary/book-mode-overlay.tsx`
- [x] T012-1 [US3] 일기 데이터 앞뒤에 표지 및 필요시 빈 페이지를 삽입하는 매핑 로직 구현 (`src/components/diary/book-mode-overlay.tsx`)

## Phase 6: Polish & Cross-Cutting
**Goal**: Enhance visual fidelity and mobile responsiveness.

- [x] T013 [P] Implement central spine crease effect using CSS linear-gradients in `src/components/diary/diary-book.tsx`
- [x] T014 Add "Previous" and "Next" navigation controls to the book footer in `src/components/diary/book-mode-overlay.tsx`
- [x] T015 [P] Optimize responsive layout for mobile (switching to single-page flip) in `src/components/diary/diary-book.tsx`
- [ ] T015-1 브라우저 개발자 도구를 사용하여 애니메이션 성능(60 FPS) 및 모드 전환 속도(500ms 이내) 검증 (`src/components/diary/diary-book.tsx`)

## Dependencies

- Phase 2 MUST complete before Phase 3 and 4.
- US1 (Phase 3) is required to trigger the book view.
- US2 (Phase 4) and US3 (Phase 5) depend on the basic book structure from Phase 2.

## Implementation Strategy

1. **Standalone Book**: Build the `DiaryBook` and `DiaryPage` first with mock data to ensure the library works correctly.
2. **Dashboard Integration**: Add the trigger button and overlay logic to connect it to the main flow.
3. **Data Mapping**: Replace mock data with the actual filtered list from the dashboard.
4. **Visual Refinement**: Add the spine crease, shadows, and navigation controls to polish the "Emotional Fidelity".
5. **Mobile Scaling**: Final pass to ensure the book is readable on small screens.
