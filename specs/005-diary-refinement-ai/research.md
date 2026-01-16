# Research: Conversational Diary Refinement

## R-001: Gemini AI Chat Session Management
- **Decision**: Use the `startChat` method from `@google/generative-ai` SDK.
- **Rationale**: It automatically manages conversation history and simplifies sending subsequent messages while keeping context.
- **Implementation**: The backend will receive the full history (role: user/model) and re-initialize the chat session for each refinement request.

## R-002: Undo Logic & State Management
- **Decision**: Use a stack-based history state (`versions: string[]`).
- **Rationale**: `versions[versions.length - 1]` is the current entry. `Undo` simply pops the last element.
- **Alternative**: Storing only the last version. Chosen stack approach as it supports future multi-level undo if needed.

## R-003: UI Integration Pattern
- **Decision**: Place the feedback input directly below the `EntryDisplay` component once the first draft is generated.
- **Rationale**: Keeps the focus on the content being edited. Use a "floating" or "sticky" style for the Persona selector to keep it accessible.
- **Design**: The input will have a paper-like texture and handwritten font to match the "Emotional Fidelity" principle.
