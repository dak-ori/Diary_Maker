# Tasks: Export Diary Entry as Image

**Feature**: Export Diary Entry as Image
**Status**: Draft

## Phase 1: Setup & Dependencies
**Goal**: Install necessary libraries and prepare utility functions.

- [x] T001 Install `html-to-image` and `file-saver` dependencies `package.json`
- [x] T002 Create `src/lib/export-utils.ts` with image generation logic (using html-to-image) `src/lib/export-utils.ts`
- [x] T003 Implement `downloadImage` helper function in `src/lib/export-utils.ts` `src/lib/export-utils.ts`
- [x] T004 Implement `shareImage` helper function (Web Share API) in `src/lib/export-utils.ts` `src/lib/export-utils.ts`

## Phase 2: Foundational Components (Templates)
**Goal**: Create the visual templates for the exported images.

- [x] T005 [P] Create directory `src/components/diary/export-templates` `src/components/diary/export-templates/`
- [x] T006 [P] Implement `PolaroidTemplate` component (Square, White Border) `src/components/diary/export-templates/polaroid-template.tsx`
- [x] T007 [P] Implement `NoteTemplate` component (Lined Paper, Full Page) `src/components/diary/export-templates/note-template.tsx`
- [x] T008 [P] Ensure templates support dynamic height for long content (FR-002, Edge Case) `src/components/diary/export-templates/note-template.tsx`

## Phase 3: User Story 1 & 2 - Export UI & Style Selection (P1, P2)
**Goal**: Allow users to open export modal, select style, and preview the image.
**Independent Test**: Click Export -> Modal opens -> Switch styles -> Preview updates.

- [x] T009 [US1] Create `ExportModal` component skeleton `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T010 [US1] Add "Export" button to Entry Detail Page Header `src/app/(dashboard)/entry/[id]/page.tsx`
- [x] T011 [US2] Implement Style Selector (Polaroid vs Note) in Modal `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T012 [US1] Implement Live Preview logic (render template hidden/visible) `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T013 [US1] Wire up "Download" button to `export-utils` `src/app/(dashboard)/entry/[id]/export-modal.tsx`

## Phase 4: User Story 3 - Social Sharing (P3)
**Goal**: Integrate native sharing functionality.
**Independent Test**: Click Share -> Native Share Sheet appears (mobile) or fallback behavior.

- [x] T014 [US3] Implement "Share" button logic in `ExportModal` using `shareImage` helper `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T015 [US3] Handle "Share" button visibility/state based on browser support `src/app/(dashboard)/entry/[id]/export-modal.tsx`

## Phase 5: Polish & Integration
**Goal**: Ensure quality, performance, and error handling.

- [x] T016 Verify handwriting font rendering in exported image (FR-003) `src/components/diary/export-templates/polaroid-template.tsx`
- [x] T017 Add loading state while generating image (SC-001) `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T018 Handle errors (generation failure, share failure) gracefully `src/app/(dashboard)/entry/[id]/export-modal.tsx`
- [x] T019 Check mobile responsiveness of the Modal `src/app/(dashboard)/entry/[id]/export-modal.tsx`

## Dependencies

- Phase 1 MUST complete before Phase 3 & 4.
- Phase 2 (Templates) MUST complete before Phase 3 (Preview).
- T009 (Modal) is required for T011, T012, T013, T014.

## Implementation Strategy

1.  **Core Lib**: Build the generation logic first to verify `html-to-image` works with the fonts.
2.  **Templates**: Build the visual component to be captured.
3.  **UI Flow**: Integrate the modal and buttons into the existing page.
4.  **Sharing**: Add the sharing layer on top.
