import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen bg-paper-pattern text-ink">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
