'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Image as ImageIcon, CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'AI 일기 생성',
    description: '단어 몇 개, 짧은 문장 하나만으로도 감성이 듬뿍 담긴 일기를 작성해 드립니다.',
    icon: Sparkles,
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    title: '감성 페르소나',
    description: '성찰, 감사, 긍정 등 당신의 기분에 맞는 톤으로 일기를 완성해보세요.',
    icon: Users,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: '이미지 내보내기',
    description: '완성된 일기를 폴라로이드나 노트 스타일 이미지로 저장하고 공유해보세요.',
    icon: ImageIcon,
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-hand font-bold text-brand-900 mb-4"
          >
            기록이 즐거워지는 기능들
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-700 text-lg max-w-xl mx-auto font-body"
          >
            Diary Maker는 당신의 사소한 생각도 소중한 기록으로 만들어 드립니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-hand font-bold text-brand-900 mb-4">{feature.title}</h3>
              <p className="text-brand-600 leading-relaxed font-body break-keep">
                {feature.description}
              </p>
              
              <ul className="mt-6 space-y-2">
                 {[1, 2].map((i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-brand-400">
                     <CheckCircle2 className="w-4 h-4 text-brand-300" />
                     <span>쉽고 빠른 기록 경험</span>
                   </li>
                 ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
