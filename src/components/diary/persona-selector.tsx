'use client'

import { cn } from '@/lib/utils'
import { Sparkles, BookOpen, Sun, Coffee } from 'lucide-react'

export type Persona = 'Gratitude' | 'Reflective' | 'Optimistic' | 'Neutral'

interface PersonaSelectorProps {
  value: Persona
  onChange: (value: Persona) => void
  disabled?: boolean
}

const personas: { id: Persona; label: string; icon: typeof Sparkles; color: string }[] = [
  { id: 'Neutral', label: '담담하게', icon: Coffee, color: 'bg-gray-50 border-gray-200 text-gray-700' },
  { id: 'Gratitude', label: '감사하며', icon: Sparkles, color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { id: 'Reflective', label: '성찰하며', icon: BookOpen, color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { id: 'Optimistic', label: '밝게', icon: Sun, color: 'bg-pink-50 border-pink-200 text-pink-700' },
]

export function PersonaSelector({ value, onChange, disabled }: PersonaSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        일기 분위기 선택 🎭
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {personas.map((persona) => {
          const Icon = persona.icon
          const isSelected = value === persona.id
          
          return (
            <button
              key={persona.id}
              onClick={() => onChange(persona.id)}
              disabled={disabled}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200",
                isSelected
                  ? `${persona.color} shadow-md scale-[1.02]`
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <Icon className={cn("w-5 h-5 mb-1", isSelected ? "" : "text-gray-400")} />
              <span className="text-xs font-medium">{persona.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
