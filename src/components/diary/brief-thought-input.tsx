'use client'

import { ChangeEvent } from 'react'

interface BriefThoughtInputProps {
  value: string
  onChange: (value: string) => void
  maxLength?: number
  disabled?: boolean
}

export function BriefThoughtInput({
  value,
  onChange,
  maxLength = 300,
  disabled = false,
}: BriefThoughtInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (newValue.length <= maxLength) {
      onChange(newValue)
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor="brief-thought" className="block text-sm font-medium text-brand-700">
        오늘의 짧은 생각
      </label>
      <div className="relative">
        <textarea
          id="brief-thought"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder="오늘 있었던 일이나 감정을 짧게 적어보세요..."
          className="w-full h-32 p-4 text-ink bg-white/50 backdrop-blur-sm border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none font-body placeholder:text-gray-400 disabled:opacity-50"
        />
        <div className="absolute bottom-2 right-2 text-xs text-brand-600 font-mono">
          {value.length} / {maxLength}
        </div>
      </div>
    </div>
  )
}
