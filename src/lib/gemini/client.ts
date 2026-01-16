import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTION = `
  Role: Professional Writer / Ghostwriter
  Task: Refine or expand the diary entry based on user feedback.
  Language: Korean (Keep the user's original nuances but improve flow and expression)
  Format: Return ONLY the diary entry text. No intro/outro.
  Context: This is a personal diary entry. It should feel authentic, warm, and handwritten-ready.
  Constraints: Maintain the overall context of the previous conversation.
`;

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    maxOutputTokens: 2048,
    temperature: 0.7,
  },
  systemInstruction: SYSTEM_INSTRUCTION,
});
