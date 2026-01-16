'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-lg transform -rotate-1 shadow-sm border border-yellow-200 font-hand"
        >
          ✨ 오늘도 수고한 당신에게
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl text-slate-900 leading-tight font-pen"
        >
          오늘의 짧은 생각,<br />
          <span className="marker-highlight">따뜻한 일기</span>가 되다.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-slate-600 leading-relaxed pt-4 font-hand"
        >
          &quot;야근, 비 옴, 편의점...&quot;<br />
          단어 몇 개만 던져주세요. <br />
          AI가 당신의 기분에 맞춰 일기 한 페이지를 써드릴게요.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-8 flex flex-wrap gap-4"
        >
          <Link 
            href="/login"
            className="bg-indigo-600 text-white text-xl px-8 py-4 rounded-xl shadow-md hover:bg-indigo-700 transition-colors flex items-center gap-2 font-sans"
          >
            일기 쓰러 가기 📒
          </Link>
          <button className="px-8 py-4 text-indigo-700 underline underline-offset-4 decoration-wavy decoration-indigo-300 hover:text-indigo-900 transition-colors font-hand text-xl">
            예시 보기
          </button>
        </motion.div>
      </div>

      <div className="relative mt-8 md:mt-0 h-[400px]">
        {/* Polaroid 1 */}
        <motion.div 
          initial={{ rotate: 15, opacity: 0, x: 50 }}
          animate={{ rotate: 6, opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 2, zIndex: 50 }}
          className="absolute top-0 right-4 w-64 bg-white p-3 pb-8 shadow-xl border border-gray-100 z-10 cursor-pointer"
        >
          <div className="h-48 bg-slate-200 rounded-sm mb-3 overflow-hidden relative">
            <Image 
              src="https://images.unsplash.com/photo-1515890435782-59a5bb6e0c15?q=80&w=400&auto=format&fit=crop" 
              alt="Rainy day" 
              fill
              className="object-cover opacity-80 mix-blend-multiply"
            />
          </div>
          <p className="text-xl text-center text-gray-700 font-pen">비 오는 날의 라면 🍜</p>
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 rotate-3"></div>
        </motion.div>

        {/* Polaroid 2 */}
        <motion.div 
          initial={{ rotate: -10, opacity: 0, x: -50 }}
          animate={{ rotate: -3, opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
          transition={{ delay: 0.3 }}
          className="absolute top-8 right-16 w-64 bg-white p-3 pb-8 shadow-xl border border-gray-100 z-20 cursor-pointer"
        >
          <div className="text-sm p-4 h-48 bg-gray-50 text-gray-600 overflow-hidden leading-relaxed font-sans border border-gray-100">
            &quot;오늘은 정말 정신없는 하루였다. 갑자기 쏟아진 비에 우산도 없이 편의점으로 뛰어가 컵라면을 샀다. 후두둑 떨어지는 빗소리를 들으며 먹는 따뜻한 국물... 왠지 모르게 위로받는 기분이었다.&quot;
          </div>
          <p className="text-xl text-center text-gray-700 mt-2 font-pen">2026.01.16</p>
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 -rotate-2"></div>
        </motion.div>
      </div>
    </section>
  )
}