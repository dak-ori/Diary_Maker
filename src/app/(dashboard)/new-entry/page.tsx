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

      const data = await res.json()

      if (!res.ok) {
        console.error('API Error:', data)
        throw new Error(data.details || data.error || 'Generation failed')
      }

      setGeneratedContent(data.content)

      // Initialize history
      setHistory([
        { role: 'user', parts: [{ text: briefThought }] },
        { role: 'model', parts: [{ text: data.content }] }
      ])

      setStep('review')
    } catch (error) {
      console.error('Error:', error)
      const errorMsg = error instanceof Error ? error.message : ''

      if (errorMsg.includes('429') || errorMsg.includes('quota') || errorMsg.includes('Too Many Requests')) {
        alert('API 요청 한도를 초과했습니다. 잠시 후(30초~1분) 다시 시도해주세요.')
      } else if (errorMsg.includes('Unauthorized')) {
        alert('로그인이 필요합니다. 다시 로그인해주세요.')
      } else {
        alert('일기 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      }
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
    <div className="h-full flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center gap-4 animate-in slide-in-from-top-2 duration-300">
        <Link
          href="/dashboard"
          className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {step === 'input' ? '오늘의 기록' : '일기 확인 및 수정'}
          </h1>
          <p className="text-slate-500 text-sm">
            {step === 'input'
              ? '하루의 조각들을 모아 일기를 만들어보세요'
              : 'AI와 대화하며 내용을 다듬을 수 있습니다'
            }
          </p>
        </div>
      </div>

      {/* Main Content Card - Fills remaining height, internal scroll */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-500">
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          {step === 'input' && (
            <div className="space-y-8 max-w-2xl mx-auto py-4">
              <BriefThoughtInput
                value={briefThought}
                onChange={setBriefThought}
                disabled={isGenerating}
              />

              <div className="pt-4 border-t border-slate-100">
                <span className="block text-sm font-medium text-slate-700 mb-4">문체 선택</span>
                <PersonaSelector
                  value={persona}
                  onChange={setPersona}
                  disabled={isGenerating}
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!briefThought.trim() || isGenerating}
                className="w-full flex items-center justify-center gap-3 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-indigo-200 font-medium text-lg mt-8"
              >
                {isGenerating ? (
                  <LoadingPen />
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
            <div className="flex flex-col lg:flex-row gap-8 h-full">
              {/* Left Column: Preview */}
              <div className="flex-1 space-y-6">
                <div className="relative group">
                  {isRefining && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-lg">
                      <LoadingPen />
                    </div>
                  )}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 min-h-[400px]">
                    <EntryDisplay
                      content={generatedContent}
                      onContentChange={setGeneratedContent}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Controls */}
              <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 pb-10">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-medium text-slate-700 mb-3">문체 변경</h3>
                  <PersonaSelector
                    value={persona}
                    onChange={setPersona}
                    disabled={isRefining}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-slate-700">AI에게 수정 요청</h3>
                  <RefinementInput
                    onRefine={handleRefine}
                    isLoading={isRefining}
                  />
                </div>

                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-100">
                  <button
                    onClick={handleSave}
                    disabled={isSaving || isRefining || !generatedContent.trim()}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md font-medium"
                  >
                    {isSaving ? '저장 중...' : (
                      <>
                        <Save className="w-4 h-4" />
                        일기장 저장하기
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('모든 수정 내용이 사라집니다. 다시 작성하시겠습니까?')) {
                        setStep('input')
                        setHistory([])
                      }
                    }}
                    disabled={isSaving || isRefining}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    처음부터 다시
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}