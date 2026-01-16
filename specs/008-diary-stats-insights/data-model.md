# Data Model: Diary Statistics & Insights

## Derived Statistics Structure

### `StatsSnapshot`
This object is calculated on the fly from the user's entries list.

| Field | Type | Description |
|-------|------|-------------|
| `currentMonthCount` | `number` | Total entries in the current calendar month. |
| `previousMonthCount` | `number` | Total entries in the previous calendar month. |
| `growthRate` | `number` | Percentage change between months. |
| `currentStreak` | `number` | Consecutive days recorded up to today. |
| `topPersonas` | `PersonaStat[]` | Ranked list of persona usage. |
| `totalEntries` | `number` | Lifetime entry count for milestone checking. |

### `PersonaStat`
| Field | Type | Description |
|-------|------|-------------|
| `persona` | `string` | Name of the persona. |
| `count` | `number` | Usage frequency. |
