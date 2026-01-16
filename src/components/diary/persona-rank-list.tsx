'use client'

import { PersonaStat } from '@/types/diary'

const personaLabels: Record<string, string> = {
  'Neutral': '담담하게',
  'Gratitude': '감사하며',
  'Reflective': '성찰하며',
  'Optimistic': '밝게',
}

interface PersonaRankListProps {
  stats: PersonaStat[]
}

export function PersonaRankList({ stats }: PersonaRankListProps) {
  if (stats.length === 0) return null

  return (
    <div className="bg-white p-4 shadow-lg border border-gray-100 transform rotate-[0.5deg]">
      <div className="tape absolute -top-2 right-6 w-14 h-5 -rotate-3"></div>
      <h4 className="text-gray-400 text-xs uppercase tracking-widest text-center mb-3 font-sans">자주 쓰는 분위기</h4>
      <div className="space-y-2">
        {stats.map((item, index) => (
          <div key={item.persona} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">{index + 1}.</span>
              <span className="text-slate-700 text-sm">{personaLabels[item.persona] || item.persona}</span>
            </div>
            <span className="text-gray-400 text-xs">{item.count}회</span>
          </div>
        ))}
      </div>
    </div>
  )
}
