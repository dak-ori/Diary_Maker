'use client'

import { forwardRef } from 'react'
import { Book } from 'lucide-react'

interface DiaryCoverProps {
  children: React.ReactNode
  isBack?: boolean
}

export const DiaryCover = forwardRef<HTMLDivElement, DiaryCoverProps>(({ children, isBack }, ref) => {
  return (
    <div 
      className="bg-brand-900 w-full h-full shadow-2xl relative overflow-hidden flex items-center justify-center p-8" 
      ref={ref} 
      data-density="hard"
    >
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
      
      {/* Gold foil border */}
      <div className="absolute inset-4 border-2 border-brand-400/30 rounded-sm pointer-events-none" />
      
      <div className="relative z-10 text-center text-brand-50 flex flex-col items-center gap-6">
        {!isBack && (
          <div className="p-4 bg-brand-800 rounded-full shadow-lg border border-brand-700">
            <Book className="w-12 h-12 text-brand-200" />
          </div>
        )}
        <div className="font-hand text-3xl font-bold tracking-widest text-brand-100 drop-shadow-md">
          {children}
        </div>
        {!isBack && (
          <div className="w-24 h-0.5 bg-brand-400/50 rounded-full" />
        )}
      </div>
    </div>
  )
})

DiaryCover.displayName = 'DiaryCover'
