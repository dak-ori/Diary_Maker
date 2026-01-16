import { model } from '@/lib/gemini/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Check auth
  const supabase = await createClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  
  if (authError) {
    console.error('Auth Error:', authError)
    return NextResponse.json({ error: 'Auth error', details: authError.message }, { status: 401 })
  }
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { brief_thought, persona } = await req.json()

    if (!brief_thought || brief_thought.length > 300) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const prompt = `
      You are a diary writing assistant. Write a heartfelt, personal diary entry in Korean.
      
      Persona/Tone: ${persona || 'Neutral'}
      - Neutral: 담담하고 일상적인 톤
      - Gratitude: 감사하는 마음이 담긴 따뜻한 톤
      - Reflective: 깊이 생각하고 성찰하는 톤
      - Optimistic: 밝고 긍정적인 톤
      
      User's brief thought: "${brief_thought}"
      
      Instructions:
      - Write 3-5 paragraphs
      - Make it personal and emotional
      - Include specific details that expand on the brief thought
      - Write in first person
      - Keep it authentic and warm
      - Output ONLY the diary entry text, no titles or metadata
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const content = response.text()

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Generation Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Generation failed', details: errorMessage }, { status: 500 })
  }
}
