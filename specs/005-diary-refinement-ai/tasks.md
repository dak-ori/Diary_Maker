# Tasks: Conversational Diary Refinement

**Feature**: Conversational Diary Refinement
**Status**: Draft

## Phase 1: Setup
**Goal**: Initialize types and prepare shared utilities.

- [x] T001 Define `ChatMessage` and `RefinementSession` types in `src/types/diary.ts`

## Phase 2: Foundational (Blocking)
**Goal**: Implement the backend infrastructure for conversational AI.

- [x] T002 Update Gemini client wrapper or helper for chat session support in `src/lib/gemini/client.ts`
- [x] T003 Create API route for refinement handling in `src/app/api/generate/refine/route.ts`

## Phase 3: User Story 1 - Add or Modify Content (P1)
**Goal**: Allow users to refine entries via natural language feedback.
**Independent Test**: Generate entry -> Send feedback -> Entry updates with new details.

- [x] T004 [P] [US1] Create `RefinementInput` component with paper styling in `src/components/diary/refinement-input.tsx`
- [x] T005 [US1] Implement state management for `history` session in `src/app/(dashboard)/new-entry/page.tsx`
- [x] T006 [US1] Wire up `RefinementInput` to the refinement API and handle content updates in `src/app/(dashboard)/new-entry/page.tsx`

## Phase 4: User Story 2 - Tone and Style Adjustment (P2)
**Goal**: Enable tone switching during the refinement phase.
**Independent Test**: After generation, change persona and type "Apply this persona" -> AI updates entry tone.

- [x] T007 [US2] Update `handleRefine` to pass current `persona` to the API in `src/app/(dashboard)/new-entry/page.tsx`
- [x] T008 [US2] Ensure `PersonaSelector` remains interactive and syncs with refinement in `src/app/(dashboard)/new-entry/page.tsx`

## Phase 5: User Story 3 - Length and Structure Refinement (P3)
**Goal**: Support structural commands via feedback.
**Independent Test**: Input "Make it 3 sentences" -> AI provides condensed 3-sentence version.

- [x] T009 [US3] Verify and test structural command support in the refinement loop in `src/app/(dashboard)/new-entry/page.tsx`

## Phase 6: Polish & Cross-Cutting
**Goal**: Refine UX and visual fidelity.

- [x] T010 [P] Add handwriting font and organic borders to refinement UI in `src/components/diary/refinement-input.tsx`
- [x] T011 Implement loading animations (Pen writing) for the refinement phase in `src/app/(dashboard)/new-entry/page.tsx`

## Dependencies

- Phase 1 & 2 MUST complete before Phase 3.
- US1 (Phase 3) is the foundation for US2 and US3.
- US2 and US3 can be tested once the core refinement loop in US1 is functional.

## Implementation Strategy

1. **MVP (US1)**: Focus on the text-based feedback loop first. This provides the most value.
2. **Interactive Persona (US2)**: Layer persona-based refinements on top of the text feedback.
3. **Refinement (US3)**: Ensure the system handles edge cases like length constraints.
4. **Visual Polish**: Finalize the "Emotional Fidelity" at the end.