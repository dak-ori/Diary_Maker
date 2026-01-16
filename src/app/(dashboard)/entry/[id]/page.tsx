import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ArrowLeft } from 'lucide-react'
import { DeleteEntryButton } from '@/components/diary/delete-entry-button'
import { ExportButton } from '@/components/diary/export-button'
import { EditForm } from './edit-form'

export default async function EntryPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: entry } = await supabase
    .from('entries')
    .select('*')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single()

  if (!entry) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="mb-6 flex items-center justify-between">
        <Link 
          href="/dashboard"
          className="text-brand-700 hover:text-brand-900 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          목록으로
        </Link>
        
        <div className="flex items-center gap-2">
          <time className="text-sm text-brand-500 font-mono">
            {format(new Date(entry.created_at), 'yyyy년 M월 d일 HH:mm', { locale: ko })}
          </time>
          <ExportButton 
            content={entry.content}
            date={entry.created_at}
            mood={entry.mood_persona}
            userName={user?.user_metadata?.full_name || '나'}
          />
          <DeleteEntryButton id={entry.id} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-medium text-brand-500 mb-2">오늘의 짧은 생각</h2>
        <div className="bg-white/40 p-4 rounded-lg border border-brand-100 text-brand-800 italic">
          &quot;{entry.brief_thought}&quot;
        </div>
      </div>

      <EditForm 
        id={entry.id} 
        initialContent={entry.content} 
      />
    </div>
  )
}
