# Implementation Plan: Core MVP Setup

**Branch**: `001-diary-core-mvp` | **Date**: 2026-01-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-diary-core-mvp/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation of the Core MVP for Diary Maker, focusing on secure user authentication via Google Sign-in, AI-augmented diary entry generation using Google Gemini, and secure persistence of entries with Row Level Security (RLS) in Supabase. The frontend will be built with Next.js 14+ and Tailwind CSS, adhering to the "Emotional Fidelity" design principle with a paper-like aesthetic.

## Technical Context

**Language/Version**: TypeScript 5.x (Strict)
**Primary Dependencies**: Next.js 14+ (App Router), Tailwind CSS, Supabase Client, Google Gemini SDK (`@google/generative-ai`)
**Storage**: Supabase (PostgreSQL)
**Testing**: Jest + React Testing Library (Unit/Component), Playwright (E2E/Critical Flows)
**Target Platform**: Web (Vercel Deployment)
**Project Type**: Web Application (Next.js Fullstack)
**Performance Goals**: AI Generation < 8s (p90), TTI < 2s
**Constraints**: Google Sign-in only for MVP, Strict RLS, Mobile-responsive
**Scale/Scope**: MVP (Single User Focus, scalable to 10k+)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. AI-Augmented Creativity**: AI acts as a facilitator (expands brief thought), user retains control (edit capability).
- [x] **II. Emotional Fidelity**: Plan includes paper texture and handwriting font implementation.
- [x] **III. Privacy & Security**: Supabase Auth + RLS mandated. Google Sign-in selected.
- [x] **IV. Simplicity**: streamlined flow (Auth -> Input -> Generate -> Save). Google Sign-in reduces friction.
- [x] **V. Modern Web Standards**: Next.js 14, Tailwind, TypeScript specified.

## Project Structure

### Documentation (this feature)

```text
specs/001-diary-core-mvp/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── (auth)/          # Authentication routes
│   │   └── login/
│   ├── (dashboard)/     # Protected routes
│   │   ├── dashboard/
│   │   └── new-entry/
│   ├── api/             # Next.js API Routes
│   │   └── generate/    # AI generation endpoint
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   ├── ui/              # Reusable UI components (buttons, inputs)
│   ├── diary/           # Feature-specific components (EntryCard, PaperBackground)
│   └── auth/            # Auth components (GoogleSignInButton)
├── lib/
│   ├── supabase/        # Supabase client configuration
│   ├── gemini/          # Gemini API client wrapper
│   └── utils.ts         # Utility functions
└── types/               # TypeScript definitions
    └── database.ts      # Supabase generated types
```

**Structure Decision**: Standard Next.js 14 App Router structure with feature-grouped components and shared libraries.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      | N/A        | N/A                                 |
