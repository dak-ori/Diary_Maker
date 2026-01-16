import { createClient } from '@/lib/supabase/server'
import { EntryList } from '@/components/diary/entry-list'
import { Plus } from 'lucide-react'
import Link from 'next/link'

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

  const userName = user?.user_metadata?.full_name || '나'

  return (
    <div className="space-y-8 h-full">
      {/* Modern Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-in slide-in-from-top-4 duration-500">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            안녕하세요, {userName}님 👋
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            오늘 하루는 어떠셨나요? 당신의 이야기를 들려주세요.
          </p>
        </div>

        <Link
          href="/new-entry"
          className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>새 일기 쓰기</span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-1">
        <EntryList
          initialEntries={entries || []}
          userName={userName}
        />
      </div>
    </div>
  )
}
