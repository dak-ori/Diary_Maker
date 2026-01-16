# Research: Diary Statistics & Insights

## R-001: Streak Calculation Algorithm
- **Decision**: Sort unique dates in descending order and iterate until a gap larger than 1 day is found.
- **Rationale**: Efficient and handles multiple entries per day by using a `Set` of dates (YYYY-MM-DD format).
- **Edge Case**: If the most recent entry is not today or yesterday, the current streak is 0.

## R-002: Analog Celebratory UI
- **Decision**: Use "Sticker" or "Wax Seal" style badges using CSS transforms and hand-drawn borders.
- **Rationale**: Matches the "Emotional Fidelity" principle. Avoid shiny gold metallic gradients in favor of "Pen and Ink" or "Post-it Note" colors.

## R-003: Monthly Comparison Logic
- **Decision**: Use `date-fns` `isSameMonth` and `subMonths` to group entries into "Current Month" and "Previous Month" buckets.
- **Rationale**: Reliable handling of leap years and month length variations.
