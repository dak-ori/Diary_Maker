<!--
Sync Impact Report:
- Version change: Template → 1.0.0 (Initial Ratification)
- List of modified principles:
  - Defined I. AI-Augmented Creativity
  - Defined II. Emotional Fidelity (Design)
  - Defined III. Privacy & Security First
  - Defined IV. Simplicity & Accessibility
  - Defined V. Modern Web Standards
- Added sections: Technical Constraints, Development Workflow
- Templates requiring updates: ✅ None (Initial setup)
- Follow-up TODOs: None
-->

# Diary Maker Constitution

## Core Principles

### I. AI-Augmented Creativity
AI serves as a bridge between brief thoughts and rich expression. It must preserve the user's intent and tone while minimizing effort. Users always retain final editorial control over generated content. The AI is a facilitator, not the author.

### II. Emotional Fidelity (Design)
The UI/UX must mimic the warmth and intimacy of a physical diary. Use paper textures, handwriting-style fonts, and organic animations (e.g., page turning) to foster emotional connection. The digital experience should feel tactile and grounded.

### III. Privacy & Security First
Diary entries are deeply personal. Authentication (via Supabase) is mandatory for access. Data access must be strictly scoped to the owner (RLS). No public sharing capabilities exist unless explicitly triggered by the user (e.g., export as image).

### IV. Simplicity & Accessibility
The barrier to entry must be minimal. Key interactions (input -> generate) should be streamlined. The interface should be intuitive for non-writers, avoiding complex configurations in favor of sensible defaults and clear "personas".

### V. Modern Web Standards
Leverage Next.js 14+ App Router, Server Components, and Tailwind CSS. Code should be modular, strictly type-safe (TypeScript), and follow idiomatic React patterns to ensure maintainability and performance.

## Technical Constraints

- **Frontend Framework**: Next.js 14+ (App Router) is required.
- **Styling**: Tailwind CSS for utility-first styling; custom assets for "paper" textures.
- **Database & Auth**: Supabase (PostgreSQL) and Supabase Auth.
- **AI Integration**: Google Gemini API (gemini-1.5-flash or pro) for content generation.
- **Deployment**: Vercel.

## Development Workflow

- **Code Quality**: All code must pass linting (ESLint) and type checking (TypeScript) before merge.
- **Testing**: Critical flows (Auth, AI Generation, Data Persistence) must be verified.
- **Git Flow**: Feature branches merged via Pull Request. Commit messages should be semantic.

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan if architectural constraints change.

All PRs/reviews must verify compliance with these principles. Complexity must be justified against the "Simplicity & Accessibility" principle.

**Version**: 1.0.0 | **Ratified**: 2026-01-15 | **Last Amended**: 2026-01-15