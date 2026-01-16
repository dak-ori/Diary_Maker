'use client'

import { PersonaStat } from '@/types/diary'

interface PersonaRankListProps {
  stats: PersonaStat[]
}

export function PersonaRankList({ stats }: PersonaRankListProps) {
  if (stats.length === 0) return null

  return (
    <div className="space-y-2 p-4 bg-blue-50/30 rounded-2xl border-2 border-brand-100 -rotate-1 shadow-sm">
      <h4 className="font-hand text-brand-400 text-xs uppercase tracking-widest text-center mb-2">My Favorite Moods</h4>
      <div className="space-y-1">
        {stats.map((item, index) => (
          <div key={item.persona} className="flex justify-between items-center group">
            <div className="flex items-center gap-2">
              <span className="font-hand text-brand-300 text-sm">{index + 1}.</span>
              <span className="font-hand text-brand-800 text-lg group-hover:text-brand-600 transition-colors">{item.persona}</span>
            </div>
            <span className="font-hand text-brand-400 text-sm">{item.count}회</span>
          </div>
        ))}
      </div>
    </div>
  )
}
