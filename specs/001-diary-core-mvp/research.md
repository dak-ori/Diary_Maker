# Phase 0: Research & Key Decisions

**Feature**: Core MVP Setup
**Date**: 2026-01-15

## 1. Handwriting Font Selection

**Context**: The "Emotional Fidelity" principle requires a font that mimics personal handwriting.
**Findings**:
- **Kalam**: Informal, optimized for web, casual felt-tip style. Good readability.
- **Shadows Into Light**: Very popular, legible, but slightly more "neat" than organic.
- **Caveat**: Excellent balance of readability and handwriting aesthetic. Used widely.
- **Patrick Hand**: Based on actual handwriting, very friendly and readable.

**Decision**: **Kalam** (Primary) and **Patrick Hand** (Fallback).
**Rationale**: Kalam offers the most natural "felt-tip pen on paper" feel which aligns with the diary aesthetic. It has multiple weights (Light, Regular, Bold) allowing for hierarchy within the handwritten text.
**Implementation**: Use `next/font/google` to optimize loading.

## 2. Supabase Auth with Next.js 14 (App Router)

**Context**: Need secure authentication compatible with Server Components and SSR.
**Findings**:
- **`@supabase/ssr`**: The official package for Next.js App Router. Replaces the older `auth-helpers`.
- **Middleware pattern**: Critical for refreshing sessions before Server Components load.
- **Client/Server Factories**: Need distinct `createClient` functions for:
  - **Client Components**: `createBrowserClient`
  - **Server Components/Actions**: `createServerClient` with cookie handling.
- **Google OAuth Flow**: Requires a callback route (`/auth/callback`) to exchange the code for a session.

**Decision**: Use `@supabase/ssr` with the standard Middleware + Client/Server factory pattern.
**Rationale**: Official recommendation, handles cookie security (HttpOnly), and supports the latest Next.js caching/streaming architecture.

## 3. AI Generation (Gemini)

**Context**: Need to generate diary entries from brief thoughts.
**Findings**:
- **Model**: `gemini-1.5-flash` is sufficient for text generation and faster/cheaper than Pro.
- **Prompting**: System instructions should enforce the "Persona" (Gratitude, etc.) and the "Handwriting" formatting (though font handles visual, structure matters).
- **Safety**: Standard safety settings should be applied but "diary" content might trigger over-sensitive filters (e.g., venting). Need to tune thresholds or handle block errors gracefully.

**Decision**: Start with `gemini-1.5-flash`.
**Rationale**: Speed is critical (SC-002 target < 8s). Flash is optimized for high-volume, low-latency tasks.

## 4. Icons

**Context**: Need UI icons that match the "hand-drawn" or "paper" aesthetic.
**Decision**: **Lucide React**.
**Rationale**: While not strictly "hand-drawn", its clean stroke style blends well with handwriting fonts if stroke width is adjusted. True "hand-drawn" icon sets often lack consistency or component support.
