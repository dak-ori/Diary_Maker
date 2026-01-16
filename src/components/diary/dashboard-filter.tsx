'use client'

import { Search, X, Coffee, Sparkles, BookOpen, Sun, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Persona = 'Neutral' | 'Gratitude' | 'Reflective' | 'Optimistic'

interface DashboardFilterProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  activePersona: string | null
  onPersonaChange: (persona: string | null) => void
}

const personas: { label: string; value: Persona; icon: LucideIcon }[] = [
  { label: '전체', value: 'Neutral', icon: Coffee }, // Special case for 'All' or just Neutral? Let's follow spec.
  { label: '감사', value: 'Gratitude', icon: Sparkles },
  { label: '성찰', value: 'Reflective', icon: BookOpen },
  { label: '긍정', value: 'Optimistic', icon: Sun },
]

export function DashboardFilter({
  searchQuery,
  onSearchChange,
  activePersona,
  onPersonaChange,
}: DashboardFilterProps) {
  return (
    <div className="space-y-6 mb-8">
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-brand-400 group-focus-within:text-brand-600 transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="기억하고 싶은 키워드를 검색해보세요..."
          className="w-full pl-12 pr-12 py-4 bg-white/50 backdrop-blur-sm border-2 border-brand-100 rounded-2xl focus:border-brand-300 focus:ring-0 outline-none transition-all font-hand text-lg placeholder:text-brand-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-4 flex items-center text-brand-400 hover:text-brand-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Persona Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onPersonaChange(null)}
          className={cn(
            "px-4 py-2 rounded-full border-2 text-sm font-medium transition-all",
            !activePersona 
              ? "bg-brand-500 border-brand-500 text-white shadow-md" 
              : "bg-white/40 border-brand-100 text-brand-600 hover:border-brand-200"
          )}
        >
          전체
        </button>
        {personas.map((p) => (
          <button
            key={p.value}
            onClick={() => onPersonaChange(p.value)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all",
              activePersona === p.value
                ? "bg-brand-500 border-brand-500 text-white shadow-md"
                : "bg-white/40 border-brand-100 text-brand-600 hover:border-brand-200"
            )}
          >
            <p.icon className="w-4 h-4" />
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
