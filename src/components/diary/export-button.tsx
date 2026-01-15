'use client'

import { useState } from 'react'
import { Share } from 'lucide-react'
import { ExportModal } from '@/app/(dashboard)/entry/[id]/export-modal'

interface ExportButtonProps {
  content: string
  date: string
  mood: string
  userName: string
}

export function ExportButton({ content, date, mood, userName }: ExportButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 text-brand-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors"
        title="이미지로 내보내기"
      >
        <Share className="w-5 h-5" />
      </button>

      {isModalOpen && (
        <ExportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={content}
          date={date}
          mood={mood}
          userName={userName}
        />
      )}
    </>
  )
}
