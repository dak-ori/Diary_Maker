# Implementation Plan: Export Diary Entry as Image

**Branch**: `002-export-entry-image` | **Date**: 2026-01-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/002-export-entry-image/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation of the "Export as Image" feature, allowing users to save their diary entries as PNG images in "Polaroid" or "Note Page" styles. The solution leverages client-side rendering with `html2canvas` (or `html-to-image`) to capture the DOM component, ensuring privacy (no server processing) and preserving the application's "Emotional Fidelity" design. The export flow includes a preview modal, style selection, and native sharing integration.

## Technical Context

**Language/Version**: TypeScript 5.x (Strict)
**Primary Dependencies**: `html-to-image` (or `html2canvas`), `file-saver`
**Storage**: Client-side temporary blob (no permanent server storage for exports)
**Testing**: Jest + React Testing Library (Component/Unit), Playwright (E2E)
**Target Platform**: Web (Mobile-First responsive)
**Project Type**: Web Application (Next.js Fullstack)
**Performance Goals**: Image generation < 3s, Resolution > 1080px width
**Constraints**: Client-side only capture (Privacy), Native Web Share API support
**Scale/Scope**: Single feature extension to existing Entry Detail view

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. AI-Augmented Creativity**: N/A (Visual output of previously generated content).
- [x] **II. Emotional Fidelity**: Export styles (Polaroid/Note) extend the physical diary metaphor.
- [x] **III. Privacy & Security**: Client-side generation ensures diary content doesn't leave the user's device/browser context for rendering.
- [x] **IV. Simplicity**: 3-click flow (Export -> Select Style -> Share/Download).
- [x] **V. Modern Web Standards**: Using standard DOM-to-Canvas techniques and Web Share API.

## Project Structure

### Documentation (this feature)

```text
specs/002-export-entry-image/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (N/A for this feature, but file kept for consistency)
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A, client-side feature)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/
│   └── (dashboard)/
│       └── entry/
│           └── [id]/
│               └── export-modal.tsx  # New Component: Modal for preview & selection
├── components/
│   └── diary/
│       ├── export-templates/         # New Directory: Visual templates
│       │   ├── polaroid-template.tsx
│       │   └── note-template.tsx
│       └── export-button.tsx         # New Component: Trigger button
└── lib/
    └── export-utils.ts               # New Utility: Image generation & download logic
```

**Structure Decision**: Standard Next.js Component structure. New export logic encapsulated in `src/components/diary/export-templates` and `src/lib/export-utils.ts` to keep `page.tsx` clean.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      | N/A        | N/A                                 |
