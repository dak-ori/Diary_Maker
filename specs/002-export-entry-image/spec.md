# Feature Specification: Export Diary Entry as Image

**Feature Branch**: `002-export-entry-image`
**Created**: 2026-01-15
**Status**: Draft
**Input**: User description: "일기를 이미지(폴라로이드 또는 노트 페이지 형태)로 저장하여 공유할 수 있는 기능을 추가해줘."

## Clarifications

### Session 2026-01-15
- Q: What is the preferred technical approach for converting the UI to an image? → A: Client-side capture (e.g., using libraries like `html2canvas` to render the DOM to a canvas/image).
- Q: How should the system handle content that exceeds the template's standard vertical space? → A: Expand to fit (The image's vertical height will automatically increase to accommodate the full content in a single image).
- Q: Should the exported image include the user's name or profile information for branding? → A: Include user info (Display the user's name or nickname prominently on the image).
- Q: What is the preferred image format for export? → A: PNG (Ensures text clarity and preserves design details without compression artifacts).
- Q: Where should the "Export as Image" action be accessible from? → A: Detail Page Only (Users initiate export from the full entry view).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - One-Click Image Export (Priority: P1)

Users can quickly save their diary entries as high-quality images to their device, allowing them to preserve their memories visually or share them elsewhere.

**Why this priority**: This is the core functionality requested. It enables the user to "own" their content outside the application.

**Independent Test**: Can be tested by clicking the "Export" button on an entry and verifying an image file is downloaded to the local machine containing the entry text and styling.

**Acceptance Scenarios**:

1. **Given** a user viewing a saved diary entry detail page, **When** they click the "Export as Image" button, **Then** the current entry view is captured and downloaded as a PNG image file.
2. **Given** an exported image, **When** opened, **Then** it must contain the entry text, the date, and the paper-like background styling.

---

### User Story 2 - Style Selection (Polaroid vs. Note) (Priority: P2)

Users can choose between different visual formats (e.g., a classic Polaroid photo style or a full Note page style) to suit their aesthetic preference.

**Why this priority**: Enhances "Emotional Fidelity" (Core Principle II) by providing more personalized visual outcomes.

**Independent Test**: Can be tested by switching between "Polaroid" and "Note" options in the export preview and verifying the layout changes accordingly before download.

**Acceptance Scenarios**:

1. **Given** the export preview, **When** the user selects "Polaroid", **Then** the content is framed in a square format with a white border and the date at the bottom.
2. **Given** the export preview, **When** the user selects "Note", **Then** the content is rendered as a full-page notebook sheet with visible lines and margins.

---

### User Story 3 - Instant Social Sharing (Priority: P3)

Users can trigger their device's native sharing sheet directly after the image is generated, making it easy to post to social media or send to friends.

**Why this priority**: Streamlines the sharing process (Core Principle IV), reducing the steps from "diary" to "social".

**Independent Test**: Can be tested on mobile/supported environments by clicking "Share" and verifying the system sharing dialog appears with the image attached.

**Acceptance Scenarios**:

1. **Given** a generated image preview, **When** the user clicks "Share", **Then** the system sharing functionality is triggered to open the native sharing menu.

### Edge Cases

- **Long Content**: What happens if the diary entry is very long? -> The exported image will automatically expand its vertical height to ensure the entire content is visible in a single file.
- **Font Rendering**: Ensure the handwriting font is correctly rendered in the exported image.
- **Environment Compatibility**: Handle cases where the system sharing functionality is not available by falling back to simple download.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a mechanism to convert a specific UI component (the entry view) into a downloadable PNG image file via client-side rendering.
- **FR-002**: System MUST include the entry's text content, date, user identification (name/nickname), and "mood persona" indicator in the exported image.
- **FR-003**: System MUST preserve the visual aesthetic (paper texture, handwriting font) in the resulting image.
- **FR-004**: Users MUST be able to choose between at least two layout templates: "Polaroid" (square-ish, framed) and "Note Page" (lined paper style).
- **FR-005**: System MUST trigger a file download to the user's device upon export confirmation.
- **FR-006**: System SHOULD attempt to use the native sharing functionality of the operating system if available.
- **FR-007**: System MUST provide a visual preview of the image before the user confirms the export/download.

### Key Entities

- **ExportTemplate**: Represents a visual layout style (Polaroid, Note) with specific dimensions and padding.
- **DiaryEntry**: (Existing entity) The source data for the export.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Image generation (from click to download/preview) completes in under 3 seconds on average.
- **SC-002**: Exported images have a minimum resolution suitable for mobile sharing (e.g., at least 1080px wide).
- **SC-003**: 100% of exported images accurately reflect the text and styling seen on the screen.
- **SC-004**: Users can complete the sharing flow (Click Export -> Choose Style -> Share) in under 4 clicks.