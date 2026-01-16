# Diary_Maker Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-01-15

## Active Technologies
- TypeScript 5.x (Strict) + `html-to-image` (or `html2canvas`), `file-saver` (002-export-entry-image)
- Client-side temporary blob (no permanent server storage for exports) (002-export-entry-image)
- TypeScript 5.x, Next.js 14+ (App Router) + `lucide-react`, `clsx`, `tailwind-merge` (003-dashboard-search-filter)
- Client-side memory (derived from Supabase entries) (003-dashboard-search-filter)

- TypeScript 5.x (Strict) + Next.js 14+ (App Router), Tailwind CSS, Supabase Client, Google Gemini SDK (`@google/generative-ai`) (001-diary-core-mvp)

## Project Structure

```text
src/
tests/
```

## Commands

npm test && npm run lint

## Code Style

TypeScript 5.x (Strict): Follow standard conventions

## Recent Changes
- 003-dashboard-search-filter: Added TypeScript 5.x, Next.js 14+ (App Router) + `lucide-react`, `clsx`, `tailwind-merge`
- 003-dashboard-search-filter: Added [if applicable, e.g., PostgreSQL, CoreData, files or N/A]
- 002-export-entry-image: Added TypeScript 5.x (Strict) + `html-to-image` (or `html2canvas`), `file-saver`


<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
