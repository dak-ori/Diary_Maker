'use client'

import { useState, useMemo } from 'react'
import { EntryCard } from './entry-card'
import { DashboardFilter } from './dashboard-filter'
import { filterEntries } from '@/lib/filter-utils'
import { SearchX } from 'lucide-react'
import { DashboardToggle, type ViewMode } from './dashboard-toggle'
import { CalendarView } from './calendar-view'
import { CalendarEntryMap } from '@/types/diary'
import { format } from 'date-fns'

interface Entry {
  id: string
  brief_thought: string
  content: string
  mood_persona: string
  created_at: string
}

interface EntryListProps {
  initialEntries: Entry[]
}

export function EntryList({ initialEntries }: EntryListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePersona, setActivePersona] = useState<string | null>(null)

  const filteredEntries = useMemo(() => {
    return filterEntries(initialEntries, searchQuery, activePersona)
  }, [initialEntries, searchQuery, activePersona])

  const entryMap = useMemo(() => {
    const map: CalendarEntryMap = {}
    initialEntries.forEach((entry) => {
      const dateKey = format(new Date(entry.created_at), 'yyyy-MM-dd')
      if (!map[dateKey]) {
        map[dateKey] = []
      }
      map[dateKey].push({
        id: entry.id,
        brief_thought: entry.brief_thought
      })
    })
    return map
  }, [initialEntries])

  const clearFilters = () => {
    setSearchQuery('')
    setActivePersona(null)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <DashboardFilter 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activePersona={activePersona}
          onPersonaChange={setActivePersona}
        />
        <div className="flex justify-end">
          <DashboardToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
      </div>

      {viewMode === 'list' ? (
        filteredEntries.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-500">
            {filteredEntries.map((entry) => (
              <EntryCard
                key={entry.id}
                id={entry.id}
                brief_thought={entry.brief_thought}
                mood_persona={entry.mood_persona}
                created_at={entry.created_at}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/30 rounded-2xl border-2 border-dashed border-brand-200">
            <div className="flex justify-center mb-4">
              <SearchX className="w-12 h-12 text-brand-300" />
            </div>
            <p className="text-brand-600 font-medium mb-2">검색 결과가 없습니다.</p>
            <p className="text-brand-400 text-sm mb-6">다른 키워드나 필터를 선택해보세요.</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-brand-100 text-brand-700 rounded-full hover:bg-brand-200 transition-colors text-sm font-medium"
            >
              필터 초기화
            </button>
          </div>
        )
      ) : (
        <CalendarView entryMap={entryMap} />
      )}
    </div>
  )
}