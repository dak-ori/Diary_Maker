'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Download, Share2, Image as ImageIcon, FileText } from 'lucide-react'
import { PolaroidTemplate } from '@/components/diary/export-templates/polaroid-template'
import { NoteTemplate } from '@/components/diary/export-templates/note-template'
import { generateImage, downloadImage, shareImage } from '@/lib/export-utils'
import { cn } from '@/lib/utils'

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
  content: string
  date: string
  mood: string
  userName: string
}

type ExportStyle = 'polaroid' | 'note'

export function ExportModal({ isOpen, onClose, content, date, mood, userName }: ExportModalProps) {
  const [style, setStyle] = useState<ExportStyle>('polaroid')
  const [isGenerating, setIsGenerating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const templateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen || !mounted) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleDownload = async () => {
    if (!templateRef.current) return
    setIsGenerating(true)
    try {
      // Small delay to ensure styles are applied
      await new Promise(resolve => setTimeout(resolve, 100))
      const blob = await generateImage(templateRef.current)
      if (blob) {
        downloadImage(blob, `diary-${date}.png`)
      }
    } catch (error) {
      console.error(error)
      alert('이미지 생성에 실패했습니다.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleShare = async () => {
    if (!templateRef.current) return
    setIsGenerating(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 100))
      const blob = await generateImage(templateRef.current)
      if (blob) {
        const shared = await shareImage(blob, 'Diary Entry', '나의 일기')
        if (!shared) {
          alert('공유하기를 지원하지 않는 브라우저이거나 실패했습니다. 다운로드를 이용해주세요.')
        }
      }
    } catch (error) {
      console.error(error)
      alert('공유 생성에 실패했습니다.')
    } finally {
      setIsGenerating(false)
    }
  }

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">일기 내보내기</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-50 flex flex-col items-center">
          {/* Hidden Container for Generation */}
          <div className="absolute left-[-9999px] top-[-9999px] pointer-events-none">
             {style === 'polaroid' ? (
                <PolaroidTemplate ref={templateRef} content={content} date={date} mood={mood} userName={userName} />
              ) : (
                <NoteTemplate ref={templateRef} content={content} date={date} mood={mood} userName={userName} />
              )}
          </div>

          {/* Live Preview (Responsive Scale) */}
          <div className="w-full flex justify-center items-start min-h-[300px]">
            <div className="transform scale-[0.6] sm:scale-75 lg:scale-90 origin-top transition-all duration-300 shadow-lg">
               {style === 'polaroid' ? (
                  <PolaroidTemplate content={content} date={date} mood={mood} userName={userName} />
                ) : (
                  <NoteTemplate content={content} date={date} mood={mood} userName={userName} />
                )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-gray-100 bg-white space-y-4">
          {/* Style Selector */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStyle('polaroid')}
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all w-24",
                style === 'polaroid' ? "border-brand-500 bg-brand-50 text-brand-700" : "border-transparent hover:bg-gray-50 text-gray-600"
              )}
            >
              <ImageIcon className="w-6 h-6" />
              <span className="text-xs font-medium">폴라로이드</span>
            </button>
            <button
              onClick={() => setStyle('note')}
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all w-24",
                style === 'note' ? "border-brand-500 bg-brand-50 text-brand-700" : "border-transparent hover:bg-gray-50 text-gray-600"
              )}
            >
              <FileText className="w-6 h-6" />
              <span className="text-xs font-medium">노트</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              disabled={isGenerating}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-100 text-brand-700 rounded-lg hover:bg-brand-200 transition-colors font-medium disabled:opacity-50"
            >
              <Share2 className="w-4 h-4" />
              공유하기
            </button>
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium disabled:opacity-50"
            >
              {isGenerating ? '생성 중...' : (
                <>
                  <Download className="w-4 h-4" />
                  이미지 저장
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
