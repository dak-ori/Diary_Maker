# Feature Specification: Core MVP Setup

**Feature Branch**: `001-diary-core-mvp`
**Created**: 2026-01-15
**Status**: Draft
**Input**: User description: "아까 작성한 constitution.md 를 참고해서 작성해줘."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Secure Access (Priority: P1)

Users must authenticate to access the application, ensuring their personal diary entries remain private and secure.

**Why this priority**: Privacy is a core principle (III). No functionality should be accessible without authentication.

**Independent Test**: Can be tested by verifying that unauthenticated users are redirected to login, and authenticated users can access the dashboard.

**Acceptance Scenarios**:

1. **Given** a visitor on the landing page, **When** they click "Start Journaling", **Then** they are presented with a login/signup screen.
2. **Given** a new user, **When** they sign up with valid credentials, **Then** a user account is created and they are redirected to the dashboard.
3. **Given** an unauthenticated user, **When** they attempt to access a protected route (e.g., `/dashboard`), **Then** they are redirected to the login page.

---

### User Story 2 - AI-Augmented Entry Creation (Priority: P1)

Users can input a brief thought and have the AI expand it into a rich, expressive diary entry, maintaining their intent while reducing effort.

**Why this priority**: This is the core value proposition (I. AI-Augmented Creativity) and primary interaction flow.

**Independent Test**: Can be tested by mocking the AI response and verifying the UI transitions from "brief input" to "generated entry" display.

**Acceptance Scenarios**:

1. **Given** an authenticated user on the dashboard, **When** they click "New Entry", **Then** they see a simple input field for their brief thought.
2. **Given** a user has entered a brief thought, **When** they click "Generate", **Then** the system sends the prompt to the AI and displays a loading state.
3. **Given** the AI has returned content, **When** the generation completes, **Then** the full entry is displayed in a handwriting-style font.
4. **Given** a generated entry, **When** the user edits the text, **Then** the changes are reflected in the final entry.

---

### User Story 3 - Persistence & Review (Priority: P1)

Users can save their generated entries and view them later, building a digital journal over time.

**Why this priority**: A diary is useless if entries are not saved and retrievable.

**Independent Test**: Can be tested by saving an entry and verifying it appears in the entry list after a page refresh.

**Acceptance Scenarios**:

1. **Given** a generated (and potentially edited) entry, **When** the user clicks "Save", **Then** the entry is persisted to the database and the user sees a success confirmation.
2. **Given** an authenticated user with saved entries, **When** they view the dashboard, **Then** they see a chronological list of their past entries.
3. **Given** a user viewing the list, **When** they click an entry, **Then** the full details of that entry are displayed.
4. **Given** user A and user B, **When** user A views their dashboard, **Then** they do NOT see user B's entries (Row Level Security).

### Edge Cases

- What happens when the AI service is down or times out? -> Show a user-friendly error message and allow the user to write manually or retry.
- What happens if the user navigates away while generating? -> Warn the user that progress will be lost.
- What happens if the brief thought is empty? -> Disable the "Generate" button.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support user authentication to identify and verify users.
- **FR-002**: System MUST enforce data privacy so users can strictly access only their own data.
- **FR-003**: System MUST accept a text input (brief thought) from the user.
- **FR-004**: System MUST integrate with a Generative AI service to expand the brief thought into a full diary entry.
- **FR-005**: System MUST allow users to select a "persona" or tone (e.g., Gratitude, Reflective) to influence generation (defaulting to a neutral/supportive tone).
- **FR-006**: System MUST display the generated content using a handwriting-style visual presentation.
- **FR-007**: Users MUST be able to edit the generated content before saving.
- **FR-008**: System MUST persist the final entry (original thought, generated text, timestamp, user identification) to persistent storage.
- **FR-009**: System MUST provide a dashboard listing past entries, sorted by date (newest first).
- **FR-010**: System MUST use a paper-like texture for the background of the entry view/creation components to ensure emotional fidelity.

### Assumptions

- The implementation will strictly follow the technical stack (Supabase, Gemini, Next.js) defined in the project Constitution.

### Key Entities

- **User**: Represents the authenticated account holder.
- **DiaryEntry**:
    - `id`: Unique Identifier.
    - `user_id`: Reference to the User who owns the entry.
    - `brief_thought`: Text, the original user input.
    - `content`: Text, the final (AI-generated + edited) entry.
    - `mood_persona`: String/Enum, the tone selected (optional).
    - `created_at`: Timestamp.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can sign up and land on the "New Entry" screen in under 2 minutes.
- **SC-002**: AI generation completes and renders in under 8 seconds (p90).
- **SC-003**: 100% of data access attempts by a user for another user's data are denied (verified via security tests).
- **SC-004**: UI rendering passes visual inspection for "Emotional Fidelity" (paper texture, handwriting font present).
- **SC-005**: Users can successfully save an entry and see it in their list (Critical User Journey completion).