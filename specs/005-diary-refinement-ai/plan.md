# Implementation Plan: Conversational Diary Refinement

**Feature Branch**: `005-diary-refinement-ai`  
**Spec**: [spec.md](./spec.md)  
**Status**: Planning

## Technical Context

- **Framework**: Next.js 14 (App Router)
- **AI SDK**: `@google/generative-ai`
- **Context Handling**: Gemini AI Chat Session
- **State Management**: React `useState` for refinement history (Undo support)

## Constitution Check

- **I. AI-Augmented Creativity**: ✅ The refinement process enhances user control and collaborative creation.
- **II. Emotional Fidelity**: ✅ Refinement UI will use handwritten fonts and paper textures.
- **III. Privacy & Security First**: ✅ Refinement data is session-based and not persisted, matching privacy goals.
- **IV. Simplicity & Accessibility**: ✅ Persona buttons simplify tone adjustment.
- **V. Modern Web Standards**: ✅ Implementing via Server Actions or API routes with TypeScript.

## Phase 0: Outline & Research

### Research Tasks
- **R-001**: Investigate `ChatSession` in Gemini SDK for maintaining context during refinement.
- **R-002**: Determine the best way to handle "Undo" logic in a client component state.
- **R-003**: Research UI patterns for "Chat-like" feedback within a static form layout.

## Phase 1: Design & Contracts

### Data Model (`data-model.md`)
- Define `RefinementHistory` structure for client-side state.

### API Contracts (`/contracts/`)
- **POST /api/generate/refine**: New endpoint for handling conversation history and feedback.

### Quickstart (`quickstart.md`)
- Steps to test the new conversational flow.

## Phase 2: Implementation

### UI Components
- `RefinementInput`: Feedback text area and submit button.
- `UndoButton`: Revert to previous AI response.
- Update `NewEntryPage`: Integrate refinement flow.

### Backend
- Update `lib/gemini/client.ts`: Add support for chat sessions/history.
- Create `api/generate/refine/route.ts`.