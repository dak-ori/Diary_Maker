'use client'

import { cn } from '@/lib/utils'
import { Sparkles, BookOpen, Sun, Coffee } from 'lucide-react'

export type Persona = 'Gratitude' | 'Reflective' | 'Optimistic' | 'Neutral'

interface PersonaSelectorProps {
  value: Persona
  onChange: (value: Persona) => void
  disabled?: boolean
}

const personas: { id: Persona; label: string; icon: typeof Sparkles }[] = [
  { id: 'Neutral', label: '기본', icon: Coffee },
  { id: 'Gratitude', label: '감사', icon: Sparkles },
  { id: 'Reflective', label: '성찰', icon: BookOpen },
  { id: 'Optimistic', label: '긍정', icon: Sun },
]

export function PersonaSelector({ value, onChange, disabled }: PersonaSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-brand-700">
        일기 분위기 선택
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {personas.map((persona) => {
          const Icon = persona.icon
          const isSelected = value === persona.id
          
          return (
            <button
              key={persona.id}
              onClick={() => onChange(persona.id)}
              disabled={disabled}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200",
                isSelected
                  ? "bg-brand-100 border-brand-500 text-brand-900 shadow-sm"
                  : "bg-white/50 border-brand-200 text-gray-600 hover:bg-brand-50 hover:border-brand-300",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <Icon className={cn("w-5 h-5 mb-1", isSelected ? "text-brand-600" : "text-gray-400")} />
              <span className="text-sm font-medium">{persona.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
