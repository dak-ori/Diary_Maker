'use client'

import { Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StreakCounterProps {
  streak: number
}

export function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-orange-50 rounded-lg border border-orange-200">
      <div className="relative">
        <Flame className={cn(
          "w-6 h-6 transition-colors duration-500",
          streak > 0 ? "text-orange-500 fill-orange-200" : "text-gray-300"
        )} />
        {streak > 0 && (
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        )}
      </div>
      <div className="mt-1 text-center">
        <span className="block text-xl font-bold text-slate-800 leading-none">{streak}</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-tight">연속</span>
      </div>
    </div>
  )
}
