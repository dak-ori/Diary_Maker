# Feature Specification: Diary Statistics & Insights

**Feature Branch**: `008-diary-stats-insights`  
**Created**: 2026-01-16  
**Status**: Draft  
**Input**: User description: "일기 작성 통계 및 인사이트 (Diary Statistics & Insights)"

## Clarifications

### Session 2026-01-16
- Q: 통계 위젯의 대시보드 내 위치 → A: 대시보드 상단(인사말 아래)에 가로형 배너/위젯 형태로 배치합니다.
- Q: 스트릭(Streak) 계산 기준 → A: 작성 횟수와 상관없이 일기 기록이 있는 '날짜'를 기준으로 연속성을 계산합니다.
- Q: 페르소나 분포 시각화 방식 → A: "가장 많이 기록한 기분: 새벽 감성 (12회)"와 같은 텍스트 기반 순위 목록 형식을 사용합니다.

## User Scenarios & Testing (mandatory)

### User Story 1 - Monthly Writing Habit Visualization (Priority: P1)

The user can see their writing frequency for the current month on the dashboard. This includes the total count of entries and a percentage increase/decrease compared to the previous month.

**Why this priority**: Directly supports the core goal of "habit formation" by giving immediate feedback on consistency.

**Independent Test**: Dashboard displays "You've written 15 entries this month!" and a streak counter.

**Acceptance Scenarios**:

1. **Given** the user has 10 entries in January and 5 entries in December, **When** they view the dashboard in January, **Then** it should display "10 entries" and a positive growth indicator.

---

### User Story 2 - Persona Distribution Insight (Priority: P1)

The user can view a text-based ranking of which "Mood Personas" they have used most frequently (e.g., "Top Mood: Dawn Sentiment - 12 times"). This helps them understand their dominant emotional states without complex technical charts.

**Why this priority**: Adds a layer of "Self-Discovery" to the app, making the data gathered through AI feel more meaningful while staying true to the analog aesthetic.

**Independent Test**: Use "Reflective" 5 times and "Optimistic" 2 times -> Stats show "Reflective" at the top of the list.

**Acceptance Scenarios**:

1. **Given** a history of entries with various personas, **When** the user checks the insights section, **Then** they should see a clear text ranking of their most used personas.

---

### User Story 3 - "Memory Lane" Milestone (Priority: P2)

The system highlights milestones such as "10th entry written" or "7-day streak" through small celebratory widgets or banners on the dashboard.

**Why this priority**: Gamifies the experience slightly to increase user retention and satisfaction.

**Independent Test**: Write the 10th entry -> Dashboard shows a "Congratulations on 10 entries!" badge.

**Acceptance Scenarios**:

1. **Given** a user reaches a specific count milestone, **When** they visit the dashboard, **Then** a celebratory UI element is displayed.

---

### Edge Cases

- **Zero Entries**: If no entries exist, show an encouraging empty state: "Your memory journey starts with the first word. Start writing today!"
- **First Month of Use**: Growth indicators should be hidden or show a "Starting out" message since there is no previous month for comparison.
- **Large Data Spans**: Stats should default to the current month but allow for "Last 30 Days" or "All Time" views if needed.

## Requirements (mandatory)

### Functional Requirements

- **FR-001**: System MUST calculate total entries for the current month and the previous month.
- **FR-002**: System MUST aggregate persona usage counts and present them as a ranked text list.
- **FR-003**: System MUST identify the current writing streak, defined as the number of consecutive calendar days with at least one entry.
- **FR-004**: System MUST display these insights in a dedicated "Statistics" section or widget placed at the top of the Dashboard, directly below the greeting.
- **FR-005**: Statistics MUST follow the analog/handwritten visual style (Principle II).

### Key Entities (include if feature involves data)

- **Statistics Snapshot**: A calculated object containing counts, percentages, and streaks derived from the `entries` table.

## Success Criteria (mandatory)

### Measurable Outcomes

- **SC-001**: Statistics widgets load and calculate within 500ms of dashboard opening.
- **SC-002**: Streak calculations are accurate to the calendar day according to the user's local timezone.
- **SC-003**: 80% of users interact with (click/expand) the statistics section at least once a week.
- **SC-004**: The UI remains consistent with the paper/ink theme (no overly clinical or "techy" charts).