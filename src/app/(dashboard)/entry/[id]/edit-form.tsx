'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { EntryDisplay } from '@/components/diary/entry-display'
import { PenLine, Save, X } from 'lucide-react'

interface EditFormProps {
  id: string
  initialContent: string
}

export function EditForm({ id, initialContent }: EditFormProps) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    const supabase = createClient()

    try {
      const { error } = await supabase
        .from('entries')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error('Update error:', error)
      alert('저장 중 오류가 발생했습니다.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setContent(initialContent)
    setIsEditing(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-2">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1 text-brand-600 hover:text-brand-800 transition-colors text-sm font-medium"
          >
            <PenLine className="w-4 h-4" />
            수정하기
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCancel}
              disabled={isSaving}
              className="flex items-center gap-1 px-3 py-1.5 text-brand-600 hover:bg-brand-50 rounded-md transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              취소
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-1 px-3 py-1.5 bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-colors text-sm shadow-sm"
            >
              {isSaving ? '저장...' : (
                <>
                  <Save className="w-4 h-4" />
                  저장
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <EntryDisplay 
        content={content} 
        onContentChange={setContent} 
        isEditing={isEditing} 
      />
    </div>
  )
}
