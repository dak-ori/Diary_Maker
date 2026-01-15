import { createClient } from '@/lib/supabase/server'
import { EntryCard } from '@/components/diary/entry-card'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: entries } = await supabase
    .from('entries')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-hand font-bold text-brand-900">
            {user?.user_metadata?.full_name || '나'}의 일기장
          </h1>
          <p className="text-brand-700 mt-2">
            오늘 하루는 어떠셨나요?
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entries && entries.length > 0 ? (
          entries.map((entry) => (
            <EntryCard
              key={entry.id}
              id={entry.id}
              brief_thought={entry.brief_thought}
              mood_persona={entry.mood_persona}
              created_at={entry.created_at}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 border-2 border-dashed border-brand-200 rounded-lg bg-white/30">
            <p className="text-brand-500 mb-4">아직 작성된 일기가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
