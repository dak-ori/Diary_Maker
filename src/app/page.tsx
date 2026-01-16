import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen p-4 md:p-8 overflow-x-hidden">
      {/* Main Notebook Container */}
      <div className="max-w-4xl mx-auto notebook-page min-h-[90vh] p-8 md:p-16 rounded-sm relative transform rotate-[0.5deg]">
        
        {/* Binder Rings */}
        <div className="absolute -left-3 top-0 bottom-0 flex flex-col justify-evenly h-full py-10 z-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 shadow-inner mb-4"></div>
          ))}
        </div>

        {/* Header / Nav */}
        <nav className="flex justify-between items-center mb-12 relative z-20 pl-8">
          <div className="text-3xl font-bold text-slate-800 tracking-tighter transform -rotate-2 font-hand">
            Diary Maker ✏️
          </div>
          <Link 
            href="/login"
            className="bg-slate-800 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all shadow-lg hover:shadow-xl font-sans text-sm tracking-wide"
          >
            로그인하기
          </Link>
        </nav>

        {/* Content Section */}
        <div className="pl-8 relative z-20">
          <Hero />
          <Features />
          <Footer />
        </div>
      </div>
    </main>
  )
}