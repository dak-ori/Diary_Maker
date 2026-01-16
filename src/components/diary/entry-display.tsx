'use client'

interface EntryDisplayProps {
  content: string
  onContentChange: (newContent: string) => void
  isEditing?: boolean
}

export function EntryDisplay({ content, onContentChange, isEditing = true }: EntryDisplayProps) {
  return (
    <div className="relative min-h-[300px] w-full h-full">
      {isEditing ? (
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="w-full h-full min-h-[300px] bg-transparent border-none p-0 text-lg leading-loose text-slate-700 placeholder:text-slate-300 focus:ring-0 resize-none outline-none"
          placeholder="AI가 일기를 작성해줍니다..."
        />
      ) : (
        <div className="text-lg leading-loose text-slate-700 whitespace-pre-wrap">
          {content}
        </div>
      )}
    </div>
  )
}
