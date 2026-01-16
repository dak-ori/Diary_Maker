'use client'

import { StatsSnapshot } from '@/types/diary'
import { StreakCounter } from './streak-counter'
import { PersonaRankList } from './persona-rank-list'
import { MilestoneBadge } from './milestone-badge'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsWidgetProps {
  stats: StatsSnapshot
}

export function StatsWidget({ stats }: StatsWidgetProps) {
  const isPositive = stats.growthRate > 0
  const isNegative = stats.growthRate < 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-700 mb-8">
      {/* Monthly Habit Summary */}
      <div className="md:col-span-2 bg-[#fdfbf7] p-6 rounded-2xl border-2 border-brand-100 shadow-[5px_5px_15px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px)] bg-[size:100%_1.5rem] pointer-events-none" />
        
        <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
          <h3 className="font-hand text-brand-400 text-sm uppercase tracking-widest">Writing Habit</h3>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-hand text-5xl font-bold text-brand-900">{stats.currentMonthCount}</span>
            <span className="font-hand text-brand-600 text-xl">entries this month</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
            <div className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold",
              isPositive ? "bg-green-100 text-green-700" : 
              isNegative ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"
            )}>
              {isPositive ? <TrendingUp className="w-3 h-3" /> : 
               isNegative ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              {Math.abs(stats.growthRate)}%
            </div>
            <span className="text-xs text-brand-400 font-hand">vs. last month ({stats.previousMonthCount})</span>
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-10">
          <StreakCounter streak={stats.currentStreak} />
          <MilestoneBadge total={stats.totalEntries} />
        </div>
      </div>

      {/* Mood Insights */}
      <PersonaRankList stats={stats.topPersonas} />
    </div>
  )
}
