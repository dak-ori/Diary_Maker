'use client'

import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RefinementInputProps {
  onRefine: (feedback: string) => Promise<void>
  isLoading: boolean
}

export function RefinementInput({ onRefine, isLoading }: RefinementInputProps) {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim() || isLoading) return
    
    await onRefine(feedback)
    setFeedback('')
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-6 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-200 to-brand-300 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-[#fdfbf7] border-2 border-brand-200 rounded-[12px_25px_15px_30px] p-2 flex items-center gap-2 shadow-[5px_5px_15px_rgba(0,0,0,0.05)] transform rotate-[-0.5deg]">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="AI에게 수정 요청을 남겨보세요... (예: 좀 더 밝은 분위기로 바꿔줘)"
          rows={1}
          className="flex-1 bg-transparent border-none focus:ring-0 font-hand text-xl placeholder:text-brand-300 resize-none py-2 px-3 scrollbar-hide text-ink"
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(e)
            }
          }}
        />
        <button
          type="submit"
          disabled={!feedback.trim() || isLoading}
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            feedback.trim() && !isLoading 
              ? "bg-brand-500 text-white shadow-md hover:bg-brand-600 active:scale-95" 
              : "bg-brand-100 text-brand-300 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-brand-400 font-hand px-2">
        Enter를 누르면 수정 요청이 전송됩니다.
      </p>
    </form>
  )
}
