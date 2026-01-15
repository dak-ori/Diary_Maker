'use client'

import { PenLine } from 'lucide-react'

export function LoadingPen() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-brand-500">
      <div className="relative">
        <PenLine className="w-8 h-8 animate-bounce" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-200 rounded-full animate-pulse" />
      </div>
      <span className="text-sm font-hand animate-pulse">작성 중...</span>
    </div>
  )
}
