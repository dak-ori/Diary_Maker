'use client'

import { forwardRef } from 'react'
import { DiaryEntry } from '@/types/diary'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { cn } from '@/lib/utils'

interface DiaryPageProps {
  entry: DiaryEntry | null
  pageNum: number
}

export const DiaryPage = forwardRef<HTMLDivElement, DiaryPageProps>(({ entry, pageNum }, ref) => {
  return (
    <div className="bg-[#fdfbf7] w-full h-full shadow-inner relative overflow-hidden" ref={ref} data-density="soft">
      {/* Decorative notebook lines */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px)] bg-[size:100%_2rem] pointer-events-none" />
      
      {/* Page Content */}
      <div className="p-12 h-full flex flex-col relative z-10">
        {entry ? (
          <>
            <div className="flex justify-between items-baseline mb-8 border-b border-brand-100 pb-2">
              <span className="font-hand text-brand-600 text-lg">
                {format(new Date(entry.created_at), 'yyyy. MM. dd (EEEE)', { locale: ko })}
              </span>
              <span className="text-brand-400 font-hand italic">{entry.mood_persona}</span>
            </div>
            
            <div className="flex-1 font-pen text-2xl text-ink leading-relaxed whitespace-pre-wrap">
              {entry.content}
            </div>
            
            <div className="mt-4 pt-4 border-t border-brand-50">
              <p className="font-hand text-brand-400 text-sm italic">
                &ldquo;{entry.brief_thought}&rdquo;
              </p>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="w-16 h-1 bg-brand-100/30 rounded-full" />
          </div>
        )}
        
        {/* Page Number */}
        <div className={cn(
          "absolute bottom-6 font-hand text-brand-300 text-sm",
          pageNum % 2 === 0 ? "left-8" : "right-8"
        )}>
          {pageNum}
        </div>
      </div>
    </div>
  )
})

DiaryPage.displayName = 'DiaryPage'
