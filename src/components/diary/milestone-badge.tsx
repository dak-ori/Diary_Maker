'use client'

import { Award } from 'lucide-react'
import { motion } from 'framer-motion'

interface MilestoneBadgeProps {
  total: number
}

export function MilestoneBadge({ total }: MilestoneBadgeProps) {
  // Milestones: 10, 50, 100
  const milestones = [100, 50, 10]
  const currentMilestone = milestones.find(m => total >= m)

  if (!currentMilestone) return null

  return (
    <motion.div 
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 12 }}
      className="relative flex flex-col items-center justify-center w-24 h-24 bg-brand-800 text-brand-50 rounded-full shadow-lg border-4 border-double border-brand-400 p-2"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] rounded-full" />
      <Award className="w-6 h-6 text-brand-200 mb-1" />
      <div className="text-center leading-none">
        <span className="block font-hand text-xl font-bold">{currentMilestone}</span>
        <span className="text-[8px] font-sans uppercase tracking-tighter opacity-70">Chapters</span>
      </div>
      <div className="absolute -bottom-2 bg-yellow-400 text-yellow-900 text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm rotate-[-12deg]">
        BRONZE SEAL
      </div>
    </motion.div>
  )
}
