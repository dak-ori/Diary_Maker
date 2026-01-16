'use client'

import { LayoutList, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ViewMode = 'list' | 'calendar'

interface DashboardToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export function DashboardToggle({ viewMode, onViewModeChange }: DashboardToggleProps) {
  return (
    <div className="flex bg-brand-100/50 p-1 rounded-lg border border-brand-200">
      <button
        onClick={() => onViewModeChange('list')}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium font-hand",
          viewMode === 'list' 
            ? "bg-white text-brand-700 shadow-sm" 
            : "text-brand-400 hover:text-brand-600"
        )}
      >
        <LayoutList className="w-4 h-4" />
        목록
      </button>
      <button
        onClick={() => onViewModeChange('calendar')}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium font-hand",
          viewMode === 'calendar' 
            ? "bg-white text-brand-700 shadow-sm" 
            : "text-brand-400 hover:text-brand-600"
        )}
      >
        <Calendar className="w-4 h-4" />
        달력
      </button>
    </div>
  )
}
