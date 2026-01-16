# Data Model: Calendar Dashboard View

## Mapping Strategy

The existing `entries` table is sufficient. For the calendar view, the data will be transformed on the client-side for efficient rendering.

### `CalendarEntryMap` (Client-side Transformation)
A dictionary where the key is the date and the value is the entry ID for navigation.

| Field | Type | Description |
|-------|------|-------------|
| `[dateKey: string]` | `string` | Key format: `YYYY-MM-DD`. Value: `entry.id`. |

## Navigation Logic
- Clicking a day with a value in the map navigates to `/entry/[id]`.
- If multiple entries exist for one day, the first one is used as a primary link (simplified for MVP).
