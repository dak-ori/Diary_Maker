'use client'

import { useRef, useMemo, forwardRef, useImperativeHandle } from 'react'
import dynamic from 'next/dynamic'
import { DiaryEntry } from '@/types/diary'
import { DiaryPage } from './diary-page'
import { DiaryCover } from './diary-cover'

// Dynamic import to avoid SSR issues with react-pageflip
const HTMLPageFlip = dynamic(() => import('react-pageflip').then((mod) => mod.default), {
  ssr: false,
})

interface DiaryBookProps {
  entries: DiaryEntry[]
  userName: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DiaryBook = forwardRef<any, DiaryBookProps>(({ entries, userName }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    pageFlip: () => bookRef.current?.pageFlip()
  }))

  const pages = useMemo(() => {
    const result: React.ReactNode[] = []
    
    // 1. Front Cover
    result.push(
      <DiaryCover key="cover-front">
        {userName}의 일기장
      </DiaryCover>
    )

    // 2. Blank page after cover (optional, but helps with 2-page spread feel)
    result.push(<DiaryPage key="page-blank-1" entry={null} pageNum={0} />)

    // 3. Entries
    entries.forEach((entry, index) => {
      result.push(
        <DiaryPage key={entry.id} entry={entry} pageNum={index + 1} />
      )
    })

    // 4. Ensure even number of pages for back cover
    if ((result.length) % 2 !== 0) {
      result.push(<DiaryPage key="page-blank-last" entry={null} pageNum={entries.length + 1} />)
    }

    // 5. Back Cover
    result.push(
      <DiaryCover key="cover-back" isBack>
        끝
      </DiaryCover>
    )

    return result
  }, [entries, userName])

  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full">
      {/* Central Spine Crease Overlay (R-003) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/10 to-black/5 z-20 pointer-events-none" />
      
      {/* @ts-expect-error - react-pageflip typing issues */}
      <HTMLPageFlip
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl"
        ref={bookRef}
      >
        {pages}
      </HTMLPageFlip>
    </div>
  )
})

DiaryBook.displayName = 'DiaryBook'
