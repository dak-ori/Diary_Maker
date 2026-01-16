'use client'

import { Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StreakCounterProps {
  streak: number
}

export function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-orange-50/50 rounded-2xl border-2 border-dashed border-orange-200 rotate-1 shadow-sm">
      <div className="relative">
        <Flame className={cn(
          "w-8 h-8 transition-colors duration-500",
          streak > 0 ? "text-orange-500 fill-orange-200" : "text-brand-200"
        )} />
        {streak > 0 && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        )}
      </div>
      <div className="mt-1 text-center">
        <span className="block font-hand text-2xl font-bold text-brand-900 leading-none">{streak}</span>
        <span className="text-[10px] font-hand text-brand-400 uppercase tracking-tighter">Day Streak</span>
      </div>
    </div>
  )
}
