'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

interface DeleteEntryButtonProps {
  id: string
}

export function DeleteEntryButton({ id }: DeleteEntryButtonProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('정말로 이 일기를 삭제하시겠습니까?')) return

    setIsDeleting(true)
    const supabase = createClient()
    
    try {
      const { error } = await supabase
        .from('entries')
        .delete()
        .eq('id', id)

      if (error) throw error

      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      console.error('Delete error:', error)
      alert('삭제 중 오류가 발생했습니다.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-brand-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
      title="삭제하기"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  )
}
