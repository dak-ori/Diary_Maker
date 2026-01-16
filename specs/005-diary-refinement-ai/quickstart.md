# Quickstart: Conversational Diary Refinement

## Setup
1. Ensure `GOOGLE_GENERATIVE_AI_API_KEY` is set in `.env.local`.
2. Run `npm run dev`.

## Test Scenarios

### 1. Initial Generation
- Go to `/new-entry`.
- Enter "Had a busy day at work but the sunset was beautiful."
- Select "Reflective" persona.
- Click "Generate".

### 2. Add Content
- In the refinement input, type: "Mention that I ate a sandwich for dinner."
- Click "Update Entry".
- **Verify**: The new entry should contain both the sunset and the sandwich.

### 3. Change Tone
- Select "Optimistic" persona button.
- Type: "Make it more energetic."
- Click "Update Entry".
- **Verify**: The tone becomes more positive.

### 4. Undo Refinement
- Click the "Undo" (↺) button.
- **Verify**: The entry reverts to the version before the last update.

### 5. Finalize
- Click "Save Entry".
- **Verify**: Redirected to dashboard, and the final refined version is stored.
