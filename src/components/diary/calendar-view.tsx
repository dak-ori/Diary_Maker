'use client'

import { useState } from 'react'
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isToday 
} from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { CalendarDay } from './calendar-day'
import { CalendarEntryMap } from '@/types/diary'
import { useRouter } from 'next/navigation'

interface CalendarViewProps {
  entryMap: CalendarEntryMap
}

export function CalendarView({ entryMap }: CalendarViewProps) {
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState(new Date())

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const handleDateClick = (dateKey: string) => {
    const entries = entryMap[dateKey]
    if (entries && entries.length > 0) {
      // If multiple entries exist, for now just go to the first one.
      // This matches User Story 3 priority flow.
      router.push(`/entry/${entries[0].id}`)
    }
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="bg-[#fdfbf7] rounded-2xl border-2 border-brand-100 shadow-[10px_10px_20px_rgba(0,0,0,0.05)] overflow-hidden animate-in fade-in zoom-in-95 duration-500 relative">
      {/* Decorative notebook lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px)] bg-[size:100%_2rem]"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b-2 border-brand-100 relative z-10 bg-white/40">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-hand font-bold text-brand-900 tracking-tight">
            {format(currentDate, 'yyyy년 M월', { locale: ko })}
          </h2>
        </div>
        <div className="flex gap-1">
          <button 
            onClick={prevMonth}
            className="p-2.5 hover:bg-brand-50 rounded-full transition-all text-brand-600 active:scale-90"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2.5 hover:bg-brand-50 rounded-full transition-all text-brand-600 active:scale-90"
            aria-label="Next month"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* WeekDays */}
      <div className="grid grid-cols-7 bg-brand-50/50 border-b border-brand-100 relative z-10">
        {weekDays.map((day) => (
          <div key={day} className="py-3 text-center text-sm font-bold text-brand-500 font-hand">
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 border-l border-brand-100 relative z-10">
        {days.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const entries = entryMap[dateKey] || []
          
          return (
            <CalendarDay 
              key={day.toString()}
              day={day.getDate()}
              isCurrentMonth={isSameMonth(day, monthStart)}
              isToday={isToday(day)}
              entryCount={entries.length}
              onClick={() => handleDateClick(dateKey)}
            />
          )
        })}
      </div>
      
      {/* Footer hint */}
      <div className="p-4 bg-brand-50/20 text-center border-t border-brand-100">
        <p className="text-xs text-brand-400 font-hand">동그라미가 그려진 날짜를 클릭하여 일기를 확인하세요.</p>
      </div>
    </div>
  )
}