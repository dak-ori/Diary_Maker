import Link from 'next/link'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Sparkles, BookOpen, Sun, Coffee, LucideIcon } from 'lucide-react'

interface EntryCardProps {
  id: string
  brief_thought: string
  mood_persona: string
  created_at: string
}

const personaIcons: Record<string, LucideIcon> = {
  'Neutral': Coffee,
  'Gratitude': Sparkles,
  'Reflective': BookOpen,
  'Optimistic': Sun,
}

const personaLabels: Record<string, string> = {
  'Neutral': '담담하게',
  'Gratitude': '감사하며',
  'Reflective': '성찰하며',
  'Optimistic': '밝게',
}

export function EntryCard({ id, brief_thought, mood_persona, created_at }: EntryCardProps) {
  const Icon = personaIcons[mood_persona] || Coffee

  return (
    <Link
      href={`/entry/${id}`}
      className="group flex flex-col justify-between bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-200 h-full"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
            <Icon className="w-3.5 h-3.5" />
            {personaLabels[mood_persona] || mood_persona}
          </span>
          <time className="text-slate-400">
            {format(new Date(created_at), 'yyyy. MM. dd')}
          </time>
        </div>

        <p className="text-slate-800 text-base leading-relaxed line-clamp-3 font-medium">
          {brief_thought}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
        <span className="text-xs font-medium text-slate-400 group-hover:text-indigo-600 transition-colors">
          일기 읽기 →
        </span>
      </div>
    </Link>
  )
}
