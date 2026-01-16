import Link from 'next/link'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Sparkles, BookOpen, Sun, Coffee, ArrowRight, LucideIcon } from 'lucide-react'

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

export function EntryCard({ id, brief_thought, mood_persona, created_at }: EntryCardProps) {
  const Icon = personaIcons[mood_persona] || Coffee
  
  return (
    <Link 
      href={`/entry/${id}`}
      className="group block bg-white border border-brand-200 rounded-lg p-6 hover:shadow-md hover:border-brand-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-brand-600">
          <Icon className="w-4 h-4" />
          <span className="text-xs font-medium">{mood_persona}</span>
        </div>
        <time className="text-xs text-brand-400 font-mono">
          {format(new Date(created_at), 'yyyy. MM. dd', { locale: ko })}
        </time>
      </div>
      
      <p className="text-ink font-body line-clamp-2 mb-4 group-hover:text-brand-900 transition-colors">
        {brief_thought}
      </p>

      <div className="flex items-center text-brand-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
        읽기 <ArrowRight className="w-3 h-3 ml-1" />
      </div>
    </Link>
  )
}
