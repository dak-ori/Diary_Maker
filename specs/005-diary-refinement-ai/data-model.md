# Data Model: Conversational Diary Refinement

## Client-Side State (Transient)

### `RefinementSession`
This object exists in the `NewEntryPage` state during the creation process.

| Field | Type | Description |
|-------|------|-------------|
| `originalPrompt` | `string` | The initial "brief thought" provided by the user. |
| `currentContent` | `string` | The latest version of the AI-generated entry. |
| `history` | `ChatMessage[]` | History of feedback and responses for the AI context. |
| `versions` | `string[]` | Stack of content versions for the Undo feature. |

### `ChatMessage` (Gemini SDK compatible)
| Field | Type | Description |
|-------|------|-------------|
| `role` | `'user' | 'model'` | Participant in the conversation. |
| `parts` | `[{ text: string }]` | The actual message content. |

## Database Persistence
No changes to the permanent `entries` table schema are required, as the refinement history is session-based and discarded after saving.
