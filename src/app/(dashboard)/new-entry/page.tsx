'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BriefThoughtInput } from '@/components/diary/brief-thought-input'
import { PersonaSelector, type Persona } from '@/components/diary/persona-selector'
import { EntryDisplay } from '@/components/diary/entry-display'
import { Sparkles, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewEntryPage() {
  const router = useRouter()
  const [briefThought, setBriefThought] = useState('')
  const [persona, setPersona] = useState<Persona>('Neutral')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [step, setStep] = useState<'input' | 'review'>('input')

  const handleGenerate = async () => {
    if (!briefThought.trim()) return

    setIsGenerating(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief_thought: briefThought, persona }),
      })

      if (!res.ok) throw new Error('Generation failed')

      const data = await res.json()
      setGeneratedContent(data.content)
      setStep('review')
    } catch (error) {
      console.error('Error:', error)
      alert('일기 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = async () => {
    if (!generatedContent.trim()) return

    setIsSaving(true)
    try {
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brief_thought: briefThought,
          content: generatedContent,
          mood_persona: persona,
        }),
      })

      if (!res.ok) throw new Error('Save failed')

      router.push('/dashboard')
    } catch (error) {
      console.error('Error saving:', error)
      alert('저장 중 오류가 발생했습니다.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="mb-6 flex items-center gap-2">
        <Link 
          href="/dashboard"
          className="text-brand-700 hover:text-brand-900 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </Link>
      </div>

      <div className="space-y-8">
        {step === 'input' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-hand font-bold text-brand-900 mb-2">오늘의 기록</h1>
              <p className="text-brand-700">하루의 조각들을 모아 일기를 만들어보세요.</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-brand-100 shadow-sm space-y-6">
              <BriefThoughtInput 
                value={briefThought}
                onChange={setBriefThought}
                disabled={isGenerating}
              />
              
              <PersonaSelector 
                value={persona}
                onChange={setPersona}
                disabled={isGenerating}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!briefThought.trim() || isGenerating}
              className="w-full flex items-center justify-center gap-2 py-4 bg-brand-500 text-white rounded-xl hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg font-medium text-lg"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  일기 쓰는 중...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  AI 일기 생성하기
                </>
              )}
            </button>
          </div>
        )}

        {step === 'review' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-hand font-bold text-brand-900">작성된 일기 확인</h2>
              <p className="text-brand-600 text-sm">내용을 자유롭게 수정할 수 있어요.</p>
            </div>

            <EntryDisplay 
              content={generatedContent}
              onContentChange={setGeneratedContent}
            />

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setStep('input')}
                disabled={isSaving}
                className="flex-1 py-3 px-4 border border-brand-300 text-brand-700 rounded-lg hover:bg-brand-50 transition-colors font-medium"
              >
                다시 쓰기
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || !generatedContent.trim()}
                className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-sm font-medium"
              >
                {isSaving ? '저장 중...' : (
                  <>
                    <Save className="w-4 h-4" />
                    일기장 저장하기
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
