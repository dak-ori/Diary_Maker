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
  { label: '감사', value: 'Gratitude', icon: Sparkles },
  { label: '성찰', value: 'Reflective', icon: BookOpen },
  { label: '긍정', value: 'Optimistic', icon: Sun },
  { label: '담담', value: 'Neutral', icon: Coffee },
]

export function DashboardFilter({
  searchQuery,
  onSearchChange,
  activePersona,
  onPersonaChange,
}: DashboardFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="키워드 검색..."
          className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 focus:bg-white outline-none transition-all text-sm placeholder:text-gray-400"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Persona Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onPersonaChange(null)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
            !activePersona 
              ? "bg-slate-800 text-white shadow-md" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          전체
        </button>
        {personas.map((p) => (
          <button
            key={p.value}
            onClick={() => onPersonaChange(p.value)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              activePersona === p.value
                ? "bg-slate-800 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            <p.icon className="w-3 h-3" />
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
