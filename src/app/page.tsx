import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  // 비로그인 사용자는 정적 랜딩 페이지로 리다이렉트
  redirect('/landing.html')
}