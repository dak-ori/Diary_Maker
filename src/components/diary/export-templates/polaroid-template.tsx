import { forwardRef } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

interface PolaroidTemplateProps {
  content: string
  date: string
  mood: string
  userName: string
}

export const PolaroidTemplate = forwardRef<HTMLDivElement, PolaroidTemplateProps>(
  ({ content, date, mood, userName }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[400px] bg-white p-4 shadow-xl text-center"
        style={{ aspectRatio: '3.5/4.2' }}
      >
        <div className="bg-[#FDFBF7] w-full h-[80%] border border-gray-100 p-6 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-paper-pattern opacity-50" />
          <div className="relative z-10 font-hand text-ink text-xl leading-relaxed whitespace-pre-wrap line-clamp-[10]">
            {content}
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center h-[15%]">
          <div className="font-hand text-gray-500 text-sm mb-1">{userName}의 일기</div>
          <div className="font-mono text-xs text-gray-400">
            {format(new Date(date), 'yyyy. MM. dd', { locale: ko })} • {mood}
          </div>
        </div>
      </div>
    )
  }
)

PolaroidTemplate.displayName = 'PolaroidTemplate'
