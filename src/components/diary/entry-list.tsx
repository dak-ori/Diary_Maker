'use client'

import { useState, useMemo } from 'react'
import { EntryCard } from './entry-card'
import { DashboardFilter } from './dashboard-filter'
import { filterEntries } from '@/lib/filter-utils'
import { SearchX, BookText } from 'lucide-react'
import { DashboardToggle, type ViewMode } from './dashboard-toggle'
import { CalendarView } from './calendar-view'
import { BookModeOverlay } from './book-mode-overlay'
import { StatsWidget } from './stats-widget'
import { CalendarEntryMap, DiaryEntry } from '@/types/diary'
import { format } from 'date-fns'
import { getStatsSnapshot } from '@/lib/stats-utils'

interface EntryListProps {
  initialEntries: DiaryEntry[]
  userName: string
}

export function EntryList({ initialEntries, userName }: EntryListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activePersona, setActivePersona] = useState<string | null>(null)

  const filteredEntries = useMemo(() => {
    return filterEntries(initialEntries, searchQuery, activePersona)
  }, [initialEntries, searchQuery, activePersona])

  // Calculate statistics from initialEntries (all user entries)
  const stats = useMemo(() => {
    return getStatsSnapshot(initialEntries)
  }, [initialEntries])

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
      {/* Statistics Widget at the top */}
      <StatsWidget stats={stats} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <DashboardFilter 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activePersona={activePersona}
          onPersonaChange={setActivePersona}
        />
        <div className="flex items-center gap-3 justify-end">
          <button
            onClick={() => setIsBookOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-800 text-brand-50 rounded-lg hover:bg-brand-900 transition-all shadow-md active:scale-95 font-hand text-lg"
          >
            <BookText className="w-5 h-5" />
            책으로 읽기
          </button>
          <DashboardToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
      </div>

      <BookModeOverlay 
        isOpen={isBookOpen} 
        onClose={() => setIsBookOpen(false)} 
        entries={filteredEntries}
        userName={userName}
      />

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
