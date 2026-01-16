import Link from 'next/link'
import { Github, Mail, PenLine } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-900 text-paper py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4 max-w-sm">
            <h2 className="text-3xl font-hand font-bold">Diary Maker</h2>
            <p className="text-brand-200/80 font-body break-keep">
              AI와 함께하는 감성 일기 쓰기 서비스. 당신의 평범한 하루가 특별한 기록이 됩니다.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <Link
              href="/login"
              className="group flex items-center gap-3 px-8 py-4 bg-paper text-brand-900 rounded-full text-lg font-hand font-bold hover:bg-brand-50 transition-all shadow-lg"
            >
              <PenLine size={20} />
              지금 바로 시작하기
            </Link>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-brand-800 rounded-full hover:bg-brand-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-brand-800 rounded-full hover:bg-brand-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-800 text-center text-brand-400 text-sm font-body">
          <p>© 2026 Diary Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
