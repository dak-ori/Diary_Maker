'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BriefThoughtInput } from '@/components/diary/brief-thought-input'
import { PersonaSelector, type Persona } from '@/components/diary/persona-selector'
import { EntryDisplay } from '@/components/diary/entry-display'
import { LoadingPen } from '@/components/ui/loading-pen'
import { RefinementInput } from '@/components/diary/refinement-input'
import { Sparkles, Save, ArrowLeft, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { ChatMessage } from '@/types/diary'

export default function NewEntryPage() {
  const router = useRouter()
  const [briefThought, setBriefThought] = useState('')
  const [persona, setPersona] = useState<Persona>('Neutral')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isRefining, setIsRefining] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [step, setStep] = useState<'input' | 'review'>('input')
  
  // Refinement history
  const [history, setHistory] = useState<ChatMessage[]>([])

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
      
      // Initialize history
      setHistory([
        { role: 'user', parts: [{ text: briefThought }] },
        { role: 'model', parts: [{ text: data.content }] }
      ])
      
      setStep('review')
    } catch (error) {
      console.error('Error:', error)
      alert('일기 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRefine = async (feedback: string) => {
    if (!feedback.trim() || isRefining) return

    setIsRefining(true)
    try {
      const res = await fetch('/api/generate/refine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          history, 
          feedback, 
          persona 
        }),
      })

      if (!res.ok) throw new Error('Refinement failed')

      const data = await res.json()
      const newContent = data.refinedContent
      
      setGeneratedContent(newContent)
      
      // Update history
      setHistory(prev => [
        ...prev,
        { role: 'user', parts: [{ text: feedback }] },
        { role: 'model', parts: [{ text: newContent }] }
      ])
    } catch (error) {
      console.error('Error refining:', error)
      alert('수정 중 오류가 발생했습니다.')
    } finally {
      setIsRefining(false)
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
              className="w-full flex flex-col items-center justify-center gap-2 py-6 bg-brand-500 text-white rounded-xl hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg font-medium text-lg min-h-[100px]"
            >
              {isGenerating ? (
                <div className="scale-110">
                  <LoadingPen />
                </div>
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
              <p className="text-brand-600 text-sm">AI와 대화하며 내용을 더 다듬어보세요.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-brand-100 mb-2">
                <PersonaSelector 
                  value={persona}
                  onChange={setPersona}
                  disabled={isRefining}
                />
              </div>

              <div className="relative">
                {isRefining && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-2xl">
                    <LoadingPen />
                  </div>
                )}
                <EntryDisplay 
                  content={generatedContent}
                  onContentChange={setGeneratedContent}
                />
              </div>

              <RefinementInput 
                onRefine={handleRefine}
                isLoading={isRefining}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={() => {
                  if (confirm('모든 수정 내용이 사라집니다. 다시 작성하시겠습니까?')) {
                    setStep('input')
                    setHistory([])
                  }
                }}
                disabled={isSaving || isRefining}
                className="flex-1 py-3 px-4 border border-brand-300 text-brand-700 rounded-lg hover:bg-brand-50 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-4 h-4" />
                처음부터 다시
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || isRefining || !generatedContent.trim()}
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