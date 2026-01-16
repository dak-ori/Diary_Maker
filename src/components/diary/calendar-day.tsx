'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CalendarDayProps {
  day: number
  isCurrentMonth: boolean
  isToday: boolean
  entryCount: number
  onClick?: () => void
}

export function CalendarDay({ 
  day, 
  isCurrentMonth, 
  isToday, 
  entryCount, 
  onClick 
}: CalendarDayProps) {
  const hasEntries = entryCount > 0

  return (
    <div 
      onClick={hasEntries ? onClick : undefined}
      className={cn(
        "relative h-20 md:h-24 border-t border-brand-100 p-2 transition-all duration-200",
        isCurrentMonth ? "bg-white/20" : "bg-transparent text-brand-300",
        hasEntries && "cursor-pointer hover:bg-brand-50/80 group"
      )}
    >
      <div className="flex justify-between items-start">
        <span className={cn(
          "relative z-10 font-hand text-lg",
          isToday && "text-brand-600 font-bold underline decoration-wavy decoration-brand-300"
        )}>
          {day}
        </span>
        
        {entryCount > 1 && (
          <span className="relative z-10 bg-brand-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-sans animate-in fade-in zoom-in duration-300">
            {entryCount}
          </span>
        )}
      </div>

      {hasEntries && (
        <motion.div 
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute inset-0 flex items-center justify-center p-2 pointer-events-none"
        >
          {/* Hand-drawn ink circle overlay */}
          <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16 text-brand-500/30 fill-current opacity-70 group-hover:text-brand-500/40 transition-colors">
            <path d="M50,10 C25,10 10,25 10,50 C10,75 25,90 50,90 C75,90 90,75 90,50 C90,25 75,10 50,10 Z M52,15 C78,17 88,35 85,55 C82,75 65,88 45,85 C25,82 12,65 15,45 C18,25 35,12 52,15 Z" fillRule="evenodd" />
          </svg>
        </motion.div>
      )}
    </div>
  )
}