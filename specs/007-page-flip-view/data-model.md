# Data Model: Page Flip Animation View

## Component Props Structure

### `DiaryPage` Props
This component represents a single page in the `react-pageflip` component.

| Field | Type | Description |
|-------|------|-------------|
| `entry` | `Entry | null` | The diary entry data to display. If null, show a blank page or cover. |
| `pageNum` | `number` | The page index for internal tracking. |
| `isLeft` | `boolean` | Whether this is the left or right page of the spread. |

## Data Flow
1. Dashboard fetches entries (already implemented).
2. Filtered list is passed to `DiaryBook`.
3. `DiaryBook` iterates through entries and renders `DiaryPage` components.
