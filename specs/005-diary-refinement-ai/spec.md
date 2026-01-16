# Feature Specification: Conversational Diary Refinement

**Feature Branch**: `005-diary-refinement-ai`  
**Created**: 2026-01-16  
**Status**: Draft  
**Input**: User description: "대화형 일기 수정 기능 (Conversational Refinement)"

## Clarifications

### Session 2026-01-16
- Q: 수정 이력 유지 및 취소(Undo) 기능 → A: 취소(Undo) 기능 없이 항상 최신 결과물에 대해서만 추가 수정을 진행합니다.
- Q: 수정 이력(Refinement History)의 영구 저장 여부 → A: 일기 작성 중인 현재 세션(휘발성)에서만 유지하며, 최종 저장 시 대화 기록은 버립니다.
- Q: 피드백 입력 중 페르소나(Persona) UI 노출 여부 → A: 수정 창에서도 페르소나 선택 버튼을 노출하여 클릭 한 번으로 분위기를 전환합니다.

## User Scenarios & Testing (mandatory)

### User Story 1 - Add or Modify Content via Feedback (Priority: P1)

After the AI generates an initial diary entry, the user can provide natural language feedback to add new details or modify existing parts of the entry. The AI regenerates the content while incorporating the feedback and maintaining the overall context.

**Why this priority**: This is the core value of the conversational refinement feature, allowing users to move beyond static generation to collaborative creation.

**Independent Test**: Generate a diary entry -> Input "Add that I had a delicious coffee" -> AI returns a new version including the coffee detail.

**Acceptance Scenarios**:

1. **Given** an AI-generated diary entry is displayed, **When** the user enters "Add details about a rainy afternoon walk" and submits, **Then** the system displays a revised entry that includes the walking experience.
2. **Given** an AI-generated diary entry is displayed, **When** the user enters "Remove the part about being tired" and submits, **Then** the revised entry should no longer contain references to exhaustion.

---

### User Story 2 - Tone and Style Adjustment (Priority: P2)

The user can ask the AI to change the mood or writing style of the current entry (e.g., "Make it more poetic," "Make it funny," "Change to a professional tone") without changing the core facts.

**Why this priority**: Enhances the "Emotional Fidelity" of the app, letting users match the diary's voice to their specific mood at that moment.

**Independent Test**: Generate an entry -> Input "Make it more cheerful" -> AI returns the same events but with a more positive vocabulary and tone.

**Acceptance Scenarios**:

1. **Given** a factual diary entry, **When** the user asks to "Make this sound like a detective novel," **Then** the system provides a version written in a noir/mystery style while preserving the original events.

---

### User Story 3 - Length and Structure Refinement (Priority: P3)

The user can request structural changes, such as making the entry shorter, longer, or formatting it into specific sections (e.g., "Summarize in 3 sentences").

**Why this priority**: Useful for users who have specific preferences for how much they want to read or store in their digital journal.

**Independent Test**: Generate a long entry -> Input "Summarize this into one short paragraph" -> AI returns a concise version.

**Acceptance Scenarios**:

1. **Given** a long diary entry, **When** the user requests to "Make it much shorter," **Then** the system provides a condensed version that retains the main points.

### Edge Cases

- **Ambiguous Feedback**: 사용자가 "바꿔줘"와 같이 모호한 피드백을 남길 경우 어떻게 처리하나요?
  - *가정*: 시스템은 사용자에게 "어떤 부분을 바꾸고 싶으신가요?"와 같은 안내 메시지를 표시하고, 구체적인 입력이 있을 때까지 기존 내용을 유지합니다.
- **Safety/Policy Violation**: How does the system handle feedback that requests inappropriate or harmful content?
  - *Assumption*: The underlying AI safety filters will block the generation and provide a standard refusal message.
- **Context Limit**: What happens after many rounds of refinement?
  - *Assumption*: The system maintains the last few rounds of conversation context to stay relevant.

## Requirements (mandatory)

### Functional Requirements

- **FR-001**: System MUST provide a feedback input field AND a Persona selector UI on the entry generation/preview screen.
- **FR-002**: System MUST send the original brief thought, the current generated content, and the user's feedback to the AI.
- **FR-003**: System MUST support natural language feedback without requiring specific keywords or commands.
- **FR-004**: System MUST allow multiple rounds of refinement for a single diary session.
- **FR-005**: System MUST provide an option to "Accept" the refinement, which then updates the main entry content.
- **FR-006**: System MUST maintain the selected Persona context unless explicitly asked to change it in the feedback.

### Key Entities (include if feature involves data)

- **Refinement Context**: Represents the transient history of a single session's refinements (Original Prompt + Current Content + User Feedback). This data is NOT persisted to the database after final save.
- **Refined Entry**: The transient version of the diary entry generated based on feedback, before being finalized/saved.

## Success Criteria (mandatory)

### Measurable Outcomes

- **SC-001**: Users can receive a refined version of their entry within 5 seconds of submitting feedback.
- **SC-002**: 80% of refinement requests result in content that the user eventually "Accepts" or saves.
- **SC-003**: System successfully maintains context through at least 3 rounds of refinement without losing original key facts.
- **SC-004**: 사용자의 수정 요청에 대해 AI가 맥락을 잃지 않고 응답하는 비율이 90% 이상이어야 함 (내부 테스트 기준).