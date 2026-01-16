'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { DiaryBook } from './diary-book'
import { DiaryEntry } from '@/types/diary'
import { useRef } from 'react'

interface BookModeOverlayProps {
  isOpen: boolean
  onClose: () => void
  entries: DiaryEntry[]
  userName: string
}

export function BookModeOverlay({ isOpen, onClose, entries, userName }: BookModeOverlayProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null)

  const flipNext = () => bookRef.current?.pageFlip()?.flipNext()
  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        >
          {/* Header */}
          <div className="absolute top-0 inset-x-0 h-20 flex items-center justify-between px-8 bg-gradient-to-b from-black/50 to-transparent z-[110]">
            <div className="text-brand-50/60 font-hand text-2xl">
              {userName}의 기억 보관함
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all active:scale-95"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* The Book Container */}
          <div className="w-full flex-1 flex items-center justify-center relative group">
            {/* Nav Arrows */}
            <button 
              onClick={flipPrev}
              className="absolute left-4 md:left-12 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="w-full max-w-6xl flex items-center justify-center">
              <DiaryBook entries={entries} userName={userName} ref={bookRef} />
            </div>

            <button 
              onClick={flipNext}
              className="absolute right-4 md:right-12 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          
          {/* Footer hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-hand text-sm flex items-center gap-4">
            <span className="md:hidden">좌우로 스와이프하여 넘기기</span>
            <span className="hidden md:inline">키보드 방향키 또는 모서리 드래그로 넘기기</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
