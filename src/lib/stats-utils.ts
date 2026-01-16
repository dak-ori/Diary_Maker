import { 
  format, 
  isSameMonth, 
  subMonths, 
  parseISO, 
  differenceInCalendarDays,
  startOfDay
} from 'date-fns'
import { DiaryEntry, StatsSnapshot, PersonaStat } from '@/types/diary'

/**
 * Calculates the current writing streak.
 * A streak is consecutive calendar days with at least one entry, ending today or yesterday.
 */
export function calculateStreak(entries: DiaryEntry[]): number {
  if (entries.length === 0) return 0

  // Get unique sorted dates (YYYY-MM-DD) in descending order
  const uniqueDates = Array.from(
    new Set(entries.map(e => format(new Date(e.created_at), 'yyyy-MM-dd')))
  ).sort((a, b) => b.localeCompare(a))

  const today = startOfDay(new Date())
  const lastEntryDate = startOfDay(parseISO(uniqueDates[0]))
  
  const diffToLatest = differenceInCalendarDays(today, lastEntryDate)
  
  // If the last entry was more than 1 day ago, the streak is broken (0)
  if (diffToLatest > 1) return 0

  let streak = 1
  for (let i = 0; i < uniqueDates.length - 1; i++) {
    const current = parseISO(uniqueDates[i])
    const next = parseISO(uniqueDates[i + 1])
    
    if (differenceInCalendarDays(current, next) === 1) {
      streak++
    } else {
      break
    }
  }

  return streak
}

/**
 * Calculates monthly stats and growth rate.
 */
export function calculateMonthlyStats(entries: DiaryEntry[]): { current: number, previous: number, growth: number } {
  const now = new Date()
  const lastMonth = subMonths(now, 1)

  const currentMonthEntries = entries.filter(e => isSameMonth(new Date(e.created_at), now))
  const previousMonthEntries = entries.filter(e => isSameMonth(new Date(e.created_at), lastMonth))

  const currentCount = currentMonthEntries.length
  const previousCount = previousMonthEntries.length

  let growth = 0
  if (previousCount === 0) {
    growth = currentCount > 0 ? 100 : 0 // 100% growth if starting from zero
  } else {
    growth = Math.round(((currentCount - previousCount) / previousCount) * 100)
  }

  return { current: currentCount, previous: previousCount, growth }
}

/**
 * Aggregates persona usage counts and returns top 3.
 */
export function getTopPersonas(entries: DiaryEntry[]): PersonaStat[] {
  const counts: Record<string, number> = {}
  
  entries.forEach(e => {
    const p = e.mood_persona || 'Neutral'
    counts[p] = (counts[p] || 0) + 1
  })

  return Object.entries(counts)
    .map(([persona, count]) => ({ persona, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
}

/**
 * Main utility to generate a full snapshot.
 */
export function getStatsSnapshot(entries: DiaryEntry[]): StatsSnapshot {
  const monthly = calculateMonthlyStats(entries)
  
  return {
    currentMonthCount: monthly.current,
    previousMonthCount: monthly.previous,
    growthRate: monthly.growth,
    currentStreak: calculateStreak(entries),
    topPersonas: getTopPersonas(entries),
    totalEntries: entries.length
  }
}
