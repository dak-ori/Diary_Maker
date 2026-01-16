import { createClient } from '@/lib/supabase/server'
import { EntryList } from '@/components/diary/entry-list'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: entries } = await supabase
    .from('entries')
    .select('*')
    .eq('user_id', user.id)
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

      <EntryList initialEntries={entries || []} />
    </div>
  )
}
