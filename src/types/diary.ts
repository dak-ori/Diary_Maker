export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface RefinementSession {
  originalPrompt: string;
  currentContent: string;
  history: ChatMessage[];
  versions: string[];
}
