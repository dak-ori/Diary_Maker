# Tasks: Landing Page

**Feature**: Landing Page
**Status**: Draft

## Phase 1: Setup
**Goal**: Install dependencies and prepare the project structure.

- [x] T001 Install `framer-motion` for organic animations
- [x] T002 Create `src/components/landing` directory for modular components

## Phase 2: Foundational
**Goal**: Implement the core redirection logic and page structure.

- [x] T003 Implement server-side authentication check and redirection in `src/app/page.tsx`
- [x] T004 Create base layout for the landing page with `bg-paper-pattern` in `src/app/page.tsx`

## Phase 3: User Story 1 - Value Discovery (P1)
**Goal**: Create a visually warm and clear hero section.
**Independent Test**: Root URL displays Hero section with headline and CTA.

- [x] T005 [P] [US1] Create `Hero` component with headline and sub-headline in `src/components/landing/hero.tsx`
- [x] T006 [US1] Implement "시작하기" CTA button with link to login in `src/components/landing/hero.tsx`
- [x] T007 [US1] Add paper-textured styling and organic animations to `Hero` component in `src/components/landing/hero.tsx`

## Phase 4: User Story 2 - Feature Understanding (P2)
**Goal**: Explain key features with visuals.
**Independent Test**: Scrolling shows Feature section with AI, Persona, and Export highlights.

- [x] T008 [P] [US2] Create `Features` component structure in `src/components/landing/features.tsx`
- [x] T009 [US2] Implement "AI 일기 생성" feature card with Lucide icons in `src/components/landing/features.tsx`
- [x] T010 [US2] Implement "감성 페르소나" feature card with specific persona mentions in `src/components/landing/features.tsx`
- [x] T011 [US2] Implement "이미지 내보내기" feature card with Polaroid mockup visual in `src/components/landing/features.tsx`

## Phase 5: User Story 3 - Seamless Conversion (P3)
**Goal**: Provide multiple conversion points.
**Independent Test**: Bottom CTA and Header (if applicable) allow easy login.

- [x] T012 [P] [US3] Create `Footer` component with project info and final CTA in `src/components/landing/footer.tsx`
- [x] T013 [US3] Integrate all landing components into the main page in `src/app/page.tsx`

## Phase 6: Polish & Cross-cutting
**Goal**: Refine responsiveness and accessibility.

- [x] T014 [P] Ensure mobile responsiveness across all landing sections
- [x] T015 Verify Lighthouse accessibility score and load performance targets (SC-001, SC-003)

## Dependencies

- Phase 1 & 2 MUST complete before Phase 3, 4, 5.
- Phase 3 (Hero) is the highest priority for initial value delivery.
- Phase 6 (Polish) should be done after all components are integrated.

## Implementation Strategy

1. **Redirection First**: Ensure authenticated users never see the landing page by implementing the server-side check.
2. **Hero Segment**: Focus on the first impression (US1) to establish the brand voice.
3. **Features & Integration**: Build out the remaining sections and assemble the full page.
4. **Animation Polish**: Use `framer-motion` to add the "Emotional Fidelity" touch (gentle fades, floating elements).
