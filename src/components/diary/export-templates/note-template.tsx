import { forwardRef } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

interface NoteTemplateProps {
  content: string
  date: string
  mood: string
  userName: string
}

export const NoteTemplate = forwardRef<HTMLDivElement, NoteTemplateProps>(
  ({ content, date, mood, userName }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[450px] bg-[#FDFBF7] p-8 shadow-xl min-h-[600px] relative"
      >
        {/* Notebook Lines Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)',
            backgroundAttachment: 'local',
            marginTop: '6rem'
          }}
        />
        
        {/* Header */}
        <div className="border-b-2 border-brand-200 pb-4 mb-6 relative z-10">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-hand text-brand-900 font-bold">Diary</h1>
            <div className="text-right">
              <div className="text-sm font-hand text-brand-700">{userName}</div>
              <div className="text-xs font-mono text-brand-400">
                {format(new Date(date), 'yyyy. MM. dd', { locale: ko })} | {mood}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 font-hand text-ink text-xl leading-[32px] whitespace-pre-wrap">
          {content}
        </div>
      </div>
    )
  }
)

NoteTemplate.displayName = 'NoteTemplate'
