import { model } from '@/lib/gemini/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Check auth
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { brief_thought, persona } = await req.json()

    if (!brief_thought || brief_thought.length > 300) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const prompt = `
      Role: Professional Writer / Ghostwriter
      Task: Expand the following brief thought into a rich, expressive diary entry.
      Persona/Tone: ${persona || 'Neutral'}
      Language: Korean (Keep the user's original nuances but improve flow and expression)
      Format: Return ONLY the diary entry text. No intro/outro.
      Context: This is a personal diary entry. It should feel authentic, warm, and handwritten-ready.

      Brief Thought:
      "${brief_thought}"
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const content = response.text()

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Generation Error:', error)
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
  }
}
