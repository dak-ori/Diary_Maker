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
    <div className="max-w-4xl mx-auto h-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {format(new Date(entry.created_at), 'yyyy년 M월 d일 EEEE', { locale: ko })}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ExportButton
            content={entry.content}
            date={entry.created_at}
            mood={entry.mood_persona}
            userName={user?.user_metadata?.full_name || '나'}
          />
          <DeleteEntryButton id={entry.id} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 pb-20 pr-2">
        {/* Brief Thought */}
        <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
          <h2 className="text-sm font-medium text-indigo-900 mb-2">오늘의 짧은 생각</h2>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            &quot;{entry.brief_thought}&quot;
          </p>
        </div>

        {/* Diary Content */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[50vh]">
          <EditForm
            id={entry.id}
            initialContent={entry.content}
          />
        </div>
      </div>
    </div>
  )
}
