# Feature Specification: Calendar Dashboard View

**Feature Branch**: `006-calendar-dashboard-view`  
**Created**: 2026-01-16  
**Status**: Draft  
**Input**: User description: "달력 뷰 대시보드 (Calendar Dashboard View)"

## Clarifications

### Session 2026-01-16
- Q: 보기 전환(List/Calendar) 버튼의 위치 → A: 대시보드 우측 상단(검색 바 근처)에 아이콘 버튼으로 배치합니다.
- Q: 날짜별 일기 표시 방식 → A: 날짜 위에 손으로 그린 듯한 연한 동그라미(Ink Circle) 표시를 사용합니다.

## User Scenarios & Testing (mandatory)

### User Story 1 - Toggle between List and Calendar View (Priority: P1)

The user can switch the dashboard display mode between the standard vertical list and a monthly calendar grid. The system remembers the user's view preference during the current session.

**Why this priority**: Fundamental UI interaction that introduces the calendar without breaking existing list-based navigation.

**Independent Test**: Go to dashboard -> Click "Calendar View" button -> Layout changes to a grid -> Click "List View" -> Layout returns to original.

**Acceptance Scenarios**:

1. **Given** the user is on the dashboard, **When** they click the view toggle, **Then** the interface should transition smoothly between the list of entries and a calendar grid.

---

### User Story 2 - Visualize Entry Presence in Calendar (Priority: P1)

Days in the calendar where a diary entry exists are visually highlighted with a hand-drawn, light ink circle over the date. This allows users to see their writing consistency at a glance while reinforcing the analog notebook aesthetic.

**Why this priority**: Provides the "habit tracking" value and visual emotional fidelity promised in the constitution.

**Independent Test**: Have entries on Jan 1st and Jan 5th -> Open calendar -> Observe hand-drawn circles on those specific dates.

**Acceptance Scenarios**:

1. **Given** the calendar is open, **When** a date has an associated entry, **Then** that date cell must display a hand-drawn ink circle over the date number.

---

### User Story 3 - Quick Navigation via Date Click (Priority: P2)

Clicking on a specific date in the calendar either opens that day's entry details directly or shows a preview if multiple entries (edge case) exist for that day.

**Why this priority**: Efficient navigation is key for reviewing past memories.

**Independent Test**: Click a marked date on the calendar -> System navigates to the entry detail page for that date.

**Acceptance Scenarios**:

1. **Given** a marked date on the calendar, **When** the user clicks the date, **Then** they are redirected to `/entry/[id]` for that specific diary.

---

### Edge Cases

- **No Entries for Month**: Display a clean empty calendar with a friendly prompt to "Start writing your first entry for this month."
- **Multiple Entries on One Day**: If a user writes more than one entry, the calendar should indicate "N entries" or show a small popover list before navigating.
- **Future Dates**: Future dates should be visible but non-clickable/disabled for entry creation from this view (focus on review).

## Requirements (mandatory)

### Functional Requirements

- **FR-001**: System MUST render a responsive monthly calendar grid, with a toggle button placed at the top-right of the dashboard near the search bar.
- **FR-002**: System MUST allow users to navigate between months (Next/Previous).
- **FR-003**: System MUST fetch and display entry markers based on the user's stored entries in Supabase.
- **FR-004**: System MUST maintain the "List/Calendar" toggle state within the dashboard component.
- **FR-005**: Markers on the calendar MUST be implemented as hand-drawn ink circles over the date numbers, following the analog design guide (Principle II).

### Key Entities (include if feature involves data)

- **Entry Metadata**: The `created_at` timestamp used to map entries to specific calendar dates.

## Success Criteria (mandatory)

### Measurable Outcomes

- **SC-001**: Calendar renders and loads all markers for a month within 1 second after switching views.
- **SC-002**: Users can navigate to any past entry from the calendar with a maximum of 2 clicks.
- **SC-003**: 100% of marked dates accurately correspond to existing entries in the database.
- **SC-004**: The UI remains responsive and clear on mobile devices (portrait and landscape).