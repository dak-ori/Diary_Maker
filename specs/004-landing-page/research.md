# Research: Landing Page

## Decision 1: Authentication Redirection
- **Decision**: Server-side session check in `src/app/page.tsx`.
- **Rationale**: Next.js App Router allows fetching the user session directly in the Page component. If a user is logged in, we can call `redirect('/dashboard')` immediately, preventing the landing page from flickering before redirection.
- **Alternatives considered**: Middleware (more complex for a single page), Client-side redirection (causes UI flicker).

## Decision 2: Visual Aesthetic (Emotional Fidelity)
- **Decision**: Use `bg-paper-pattern` (existing) with additional "floating" paper elements and CSS-based handwritten highlights.
- **Rationale**: Aligns with Constitution Principle II. We want the user to feel like they are stepping into a physical diary space even before they log in.

## Decision 3: Component Modularization
- **Decision**: Split the landing page into `Hero`, `Features`, and `Footer` components.
- **Rationale**: Improves maintainability and allows for clean responsive styling using Tailwind.
