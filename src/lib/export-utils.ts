import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'

export const generateImage = async (node: HTMLElement): Promise<Blob | null> => {
  try {
    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 2, // High quality for sharing
    })
    
    // Convert Data URL to Blob
    const res = await fetch(dataUrl)
    return await res.blob()
  } catch (error) {
    console.error('Failed to generate image:', error)
    return null
  }
}

export const downloadImage = (blob: Blob, filename: string) => {
  saveAs(blob, filename)
}

export const shareImage = async (blob: Blob, title: string, text: string) => {
  const file = new File([blob], 'diary-entry.png', { type: 'image/png' })

  if (navigator.share && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title,
        text,
        files: [file],
      })
      return true
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error)
      }
      return false
    }
  }
  return false
}
