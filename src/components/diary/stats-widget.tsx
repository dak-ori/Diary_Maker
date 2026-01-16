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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Monthly Habit Summary - Polaroid Style */}
      <div className="md:col-span-2 bg-white p-5 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-6 relative transform -rotate-[0.5deg]">
        <div className="tape absolute -top-2 left-8 w-16 h-5 rotate-2"></div>
        
        <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest font-sans">이번 달 기록</h3>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="text-4xl font-bold text-slate-800 handwritten">{stats.currentMonthCount}</span>
            <span className="text-gray-600 text-sm">개의 일기</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 pt-1">
            <div className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
              isPositive ? "bg-green-100 text-green-700" : 
              isNegative ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"
            )}>
              {isPositive ? <TrendingUp className="w-3 h-3" /> : 
               isNegative ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              {Math.abs(stats.growthRate)}%
            </div>
            <span className="text-xs text-gray-400">지난달 {stats.previousMonthCount}개</span>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <StreakCounter streak={stats.currentStreak} />
          <MilestoneBadge total={stats.totalEntries} />
        </div>
      </div>

      {/* Mood Insights */}
      <PersonaRankList stats={stats.topPersonas} />
    </div>
  )
}
