# Phase 0: Research & Key Decisions

**Feature**: Export Diary Entry as Image
**Date**: 2026-01-15

## 1. Client-Side Image Generation Library

**Context**: Need to convert the Diary Entry UI (including custom fonts and paper textures) into a high-quality image (PNG) on the client side.
**Findings**:
- **html2canvas**: The traditional standard. Robust but slower and heavier. Known issues with modern CSS, complex layouts, and font rendering (especially with external/web fonts without strict CORS).
- **html-to-image**: A more modern, lightweight alternative.
  - **Performance**: Significantly faster (up to 70x in some benchmarks) as it uses SVG foreignObject serialization.
  - **Font Handling**: Better support for embedding web fonts by converting them to data URLs before serialization. critical for "Emotional Fidelity" (handwriting fonts).
  - **React Compatibility**: Excellent, often recommended for React projects.
  - **Bundle Size**: Smaller than html2canvas.

**Decision**: **html-to-image**.
**Rationale**: Superior performance and, crucially, more reliable font rendering for our handwriting fonts (Kalam/Patrick Hand/Nanum Pen). The SVG serialization approach preserves visual fidelity better for our use case.

## 2. Image Format & Quality

**Context**: Need to balance quality with file size for sharing.
**Findings**:
- **PNG**: Lossless. Best for text and sharp lines (paper texture, handwriting). Supports transparency if needed. Larger file size than JPG.
- **JPG**: Lossy. Good for photos, but introduces compression artifacts around text (ringing), which degrades the reading experience.
- **Resolution**: `html-to-image` allows specifying a `pixelRatio` or explicit dimensions. Defaulting to 2x (Retina) or 3x ensures crisp text on mobile devices.

**Decision**: **PNG** with **2x pixel density**.
**Rationale**: Text clarity is paramount for a diary app. The "Emotional Fidelity" principle demands crisp handwriting execution.

## 3. Web Share API

**Context**: Simplify the "Export -> Share" flow on mobile devices.
**Findings**:
- **`navigator.share()`**: Supported on most modern mobile browsers (iOS Safari, Chrome on Android).
- **Limitations**:
  - Requires HTTPS (already handled by Vercel/Next.js).
  - Must be triggered by a user user interaction (click).
  - File sharing support (`files` array) is less universal than text/URL sharing but widely supported on mobile.
- **Fallback**: If `navigator.share` or `files` sharing is not supported, fall back to standard file download.

**Decision**: Implement **Progressive Enhancement**.
**Strategy**: Check `if (navigator.share && navigator.canShare({ files: [file] }))`. If true, use native share. Else, download via `file-saver`.
