# Data Model: Dashboard Search and Filtering

This feature uses the existing `Entry` model. No schema changes are required.

## Existing Schema Reference (from `src/types/database.ts`)

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | UUID (PK) |
| `user_id` | `string` | UUID (FK) |
| `brief_thought` | `string` | User's original short input |
| `content` | `string` | AI-generated diary content |
| `mood_persona` | `string` | Persona used (Neutral, Gratitude, Reflective, Optimistic) |
| `created_at` | `string` | Timestamp |

## Client-side State Model (UI State)

The following state will be managed in the `DashboardPage` or a dedicated `DashboardFilter` component:

- `searchQuery`: `string` (default: `""`)
- `activePersona`: `string | null` (default: `null`)

## Filtering Logic

```typescript
const filteredEntries = entries.filter(entry => {
  const matchesSearch = 
    entry.brief_thought.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchQuery.toLowerCase());
  
  const matchesPersona = 
    !activePersona || entry.mood_persona === activePersona;

  return matchesSearch && matchesPersona;
});
```
