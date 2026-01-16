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

export interface CalendarEntryMap {

  [dateKey: string]: {

    id: string;

    brief_thought: string;

  }[];

}



export interface DiaryEntry {

  id: string;

  brief_thought: string;

  content: string;

  mood_persona: string;

  created_at: string;

}



export interface DiaryPageProps {

  entry: DiaryEntry | null;

  pageNum: number;

  isLeft: boolean;

}
