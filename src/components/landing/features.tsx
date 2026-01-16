'use client'

import { motion } from 'framer-motion'

export function Features() {
  return (
    <section className="mt-32 space-y-24">
      {/* Feature 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform -rotate-1 relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-md z-10">✍️</div>
          <h3 className="text-2xl font-bold mb-4 font-sans text-slate-800">키워드만 입력하세요</h3>
          <div className="bg-gray-100 p-4 rounded text-gray-600 font-mono text-sm leading-loose">
            &gt; 야근<br />
            &gt; 버스 놓침<br />
            &gt; 밤하늘 별
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">찰떡같이 알아듣는 AI</h3>
          <p className="text-lg text-slate-600 font-hand">
            단어 몇 개만 툭 던져도, 문맥을 파악해서 <br />
            가장 자연스러운 문장으로 이어줍니다.
          </p>
        </div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row-reverse gap-8 items-center"
      >
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform rotate-1 relative">
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-2xl shadow-md z-10">🎭</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-pink-50 border border-pink-200 p-3 rounded text-center text-pink-700 text-sm font-hand">새벽 감성 🌙</div>
            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center text-blue-700 text-sm font-hand">담백하게 📝</div>
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-center text-yellow-700 text-sm font-hand">귀엽게 🐥</div>
            <div className="bg-purple-50 border border-purple-200 p-3 rounded text-center text-purple-700 text-sm font-hand">소설가처럼 🖋️</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-right pr-4">
          <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">오늘의 기분에 맞춰서</h3>
          <p className="text-lg text-slate-600 font-hand">
            같은 일도 기분에 따라 다르게 기록되죠.<br />
            원하는 페르소나를 선택해보세요.
          </p>
        </div>
      </motion.div>

      {/* Feature 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 items-center pb-20"
      >
        <div className="w-full md:w-1/2 text-center bg-gray-800 p-2 pb-8 shadow-2xl relative rotate-1">
          <div className="bg-white h-48 flex items-center justify-center text-gray-400">
            <span className="text-4xl text-gray-300 font-hand">Image Preview</span>
          </div>
          <p className="text-white mt-4 text-xl font-pen">나만의 일기장 ✨</p>
          <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <h3 className="text-3xl font-bold text-slate-800 mb-3 font-pen">간직하고 싶은 순간</h3>
          <p className="text-lg text-slate-600 font-hand">
            작성한 일기는 폴라로이드 감성의 이미지로 <br />
            저장해서 공유할 수 있어요.
          </p>
        </div>
      </motion.div>
    </section>
  )
}