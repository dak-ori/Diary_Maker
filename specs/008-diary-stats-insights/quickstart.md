# Quickstart: Diary Statistics & Insights

## Setup
1. Use a Supabase account with at least 5-10 entries spread across different days and months.
2. Run `npm run dev`.

## Test Scenarios

### 1. Habit Banner
- Open the Dashboard.
- **Verify**: A section appears below "Hello, [Name]" showing "X entries this month".
- **Verify**: A growth indicator (e.g., "+20% vs last month") is visible if data exists.

### 2. Mood Insights
- In the stats section, look for the "Mood Ranking".
- **Verify**: The personas are listed in descending order of frequency.
- **Verify**: "Handwritten" style font is used for the rankings.

### 3. Streak Counter
- Check the streak badge.
- **Verify**: It correctly counts consecutive days including today.
- **Edge Case**: If you didn't write yesterday, the streak should be 0 or 1 (if you wrote today).

### 4. Milestone Celebration
- If you have exactly 10, 50, or 100 entries, look for a "Sticker" style badge.
- **Verify**: A celebratory message like "10th Chapter Written!" appears.
