# Research: Calendar Dashboard View

## R-001: Hand-drawn Ink Circle Implementation
- **Decision**: Use a custom SVG overlay with a slightly randomized path or a CSS `border-radius` with irregular values.
- **Rationale**: An SVG path allows for a more "organic" and unique feel per date, matching Principle II.
- **Example CSS**: `border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;` for an irregular circle.

## R-002: Calendar Grid Logic
- **Decision**: Build a custom grid using `date-fns` functions (`eachDayOfInterval`, `startOfMonth`, `endOfMonth`, `startOfWeek`, `endOfWeek`).
- **Rationale**: External calendar libraries are often too bulky or difficult to style with the specific analog theme required. Custom logic is lightweight and highly controllable.

## R-003: Performance and Data Fetching
- **Decision**: Fetch all entries for the user once (as already done in dashboard) and create a `Record<string, Entry[]>` where the key is the ISO date string (YYYY-MM-DD).
- **Rationale**: O(1) lookup during calendar cell rendering.
