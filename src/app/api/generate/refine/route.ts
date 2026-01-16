import { model } from '@/lib/gemini/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { ChatMessage } from '@/types/diary'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { history, feedback, persona }: { history: ChatMessage[], feedback: string, persona: string } = await req.json()

    if (!feedback) {
      return NextResponse.json({ error: 'Feedback is required' }, { status: 400 })
    }

    // Start chat session with history
    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: msg.parts
      })),
    })

    const prompt = `
      Persona/Tone: ${persona || 'Neutral'}
      User Feedback: "${feedback}"
      
      Please refine the entry based on this feedback.
    `

    const result = await chat.sendMessage(prompt)
    const response = await result.response
    const content = response.text()

    return NextResponse.json({ refinedContent: content })
  } catch (error) {
    console.error('Refinement Error:', error)
    return NextResponse.json({ error: 'Refinement failed' }, { status: 500 })
  }
}
