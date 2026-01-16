# Research: Page Flip Animation View

## R-001: react-pageflip Integration
- **Decision**: Wrap the library in a Client Component (`'use client'`) since it relies on DOM manipulation.
- **Rationale**: `react-pageflip` is not compatible with Server Components.
- **Implementation Note**: Use `dynamic()` with `ssr: false` if initial load issues occur.

## R-002: Responsive 2-Page vs 1-Page Layout
- **Decision**: Use the `showCover: true` and `width/height` props to control the spread.
- **Rationale**: On mobile (width < 768px), set `size: 'stretch'` and use a single-page view if possible, or scale down the 2-page spread.
- **Alternative**: CSS media queries to adjust the book container size.

## R-003: Visual Fidelity (Crease and Texture)
- **Decision**: Add a central overlay div with a `linear-gradient` (dark to light to dark) to simulate the book's spine crease.
- **Rationale**: This adds depth and reinforces the "physical" sensation of an open notebook.
- **Texture**: Apply the same `bg-paper-pattern` or `bg-[#fdfbf7]` used in other parts of the app.
