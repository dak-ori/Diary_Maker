# Research: Dashboard Search and Filtering

## Decision 1: Client-side vs Server-side Filtering
- **Decision**: Client-side filtering using `useMemo`.
- **Rationale**: 
    - **Performance**: Instantaneous updates (FR-004) without network latency.
    - **Complexity**: Avoids complex Supabase query builders or extra API endpoints.
    - **Scale**: Requirement specifies "hundreds of entries", which comfortably fits in client memory (a few hundred KB of JSON).
- **Alternatives considered**: 
    - **Server-side `ilike`**: Slower UI feedback (SC-001 < 300ms might be harder with network).
    - **Supabase Full Text Search**: Overkill for the current requirement.

## Decision 2: Combined Filter Logic
- **Decision**: Intersection logic (AND).
- **Rationale**: 
    - Users expect search AND filter to narrow down results (User Story 3).
    - Implementation: `entries.filter(e => matchesText(e) && matchesPersona(e))`.

## Decision 3: UI/UX Placement
- **Decision**: Search bar and Filter chips placed above the entry grid, styled with a handwritten/sketched border to match "Emotional Fidelity".
- **Rationale**: 
    - Keeps the "Diary" feel while adding "Modern" utility.
    - Uses existing Lucide icons for personas to maintain visual consistency.

## Decision 4: Handling Edge Cases
- **Decision**: "No Results" state with a clear "Reset" button.
- **Rationale**: Essential for UX when users over-filter.
