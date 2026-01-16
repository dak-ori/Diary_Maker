'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookHeart, PenLine, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Decorative Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-[10%] text-brand-200 hidden md:block"
      >
        <Sparkles size={120} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white p-4 rounded-3xl shadow-soft rotate-3">
            <BookHeart size={64} className="text-brand-600" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-hand font-bold text-brand-900 mb-6 tracking-tight"
        >
          Diary Maker
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-3xl text-brand-800 font-body max-w-2xl mx-auto leading-relaxed mb-12 break-keep"
        >
          당신의 짧은 생각들이<br />
          <span className="relative inline-block px-2">
            AI의 따뜻한 시선
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-1 left-0 h-3 bg-brand-200/50 -z-10" 
            />
          </span>
          을 통해<br />
          아름다운 일기로 재탄생합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/login"
            className="group relative flex items-center gap-3 px-10 py-5 bg-brand-600 text-white rounded-full text-xl font-hand font-bold shadow-lg hover:bg-brand-700 transition-all hover:scale-105 active:scale-95"
          >
            <PenLine size={24} />
            시작하기
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Link>
          
          <Link
            href="#features"
            className="px-10 py-5 bg-white/50 text-brand-700 rounded-full text-xl font-hand font-bold hover:bg-white/80 transition-all"
          >
            기능 더보기
          </Link>
        </motion.div>
      </div>

      {/* Hero Paper Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotate: -5 }}
        animate={{ opacity: 1, y: 40, rotate: -2 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 relative w-full max-w-md mx-auto"
      >
        <div className="bg-white p-8 shadow-xl rounded-sm border border-brand-100 aspect-[3/4] flex flex-col">
          <div className="border-b border-brand-100 pb-4 mb-6 flex justify-between items-end">
            <div className="space-y-1">
              <div className="w-24 h-4 bg-brand-50 rounded" />
              <div className="w-16 h-3 bg-brand-50/50 rounded" />
            </div>
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center">
              <Sparkles className="text-brand-300" />
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="w-full h-4 bg-brand-50/70 rounded" />
            <div className="w-full h-4 bg-brand-50/70 rounded" />
            <div className="w-3/4 h-4 bg-brand-50/70 rounded" />
            <div className="pt-4 space-y-4">
               <div className="w-full h-4 bg-brand-100/50 rounded" />
               <div className="w-full h-4 bg-brand-100/50 rounded" />
               <div className="w-full h-4 bg-brand-100/50 rounded" />
               <div className="w-5/6 h-4 bg-brand-100/50 rounded" />
            </div>
          </div>
        </div>
        {/* Tape decoration */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-100/60 rotate-1 shadow-sm mix-blend-multiply" />
      </motion.div>
    </section>
  )
}
