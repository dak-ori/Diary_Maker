'use client'

import { cn } from '@/lib/utils'
import { ChangeEvent } from 'react'

interface EntryDisplayProps {
  content: string
  onContentChange: (newContent: string) => void
  isEditing?: boolean
}

export function EntryDisplay({ content, onContentChange, isEditing = true }: EntryDisplayProps) {
  return (
    <div className="relative p-6 md:p-8 bg-[#FDFBF7] shadow-lg rounded-sm transform rotate-[0.5deg] border border-gray-100 min-h-[300px] transition-all">
      {/* Paper Lines */}
      <div className="absolute inset-0 pointer-events-none bg-notebook-lines opacity-50 rounded-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            className="w-full min-h-[300px] bg-transparent border-none p-0 text-xl leading-[32px] font-hand text-ink focus:ring-0 resize-none outline-none"
            placeholder="일기가 이곳에 생성됩니다..."
          />
        ) : (
          <div className="text-xl leading-[32px] font-hand text-ink whitespace-pre-wrap">
            {content}
          </div>
        )}
      </div>
    </div>
  )
}
