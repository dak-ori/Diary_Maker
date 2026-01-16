/**
 * Helper function for case-insensitive text matching.
 * Returns true if the query is empty or if the text contains the query.
 */
export function matchText(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.toLowerCase().trim());
}

/**
 * Filter entries based on search query and active persona.
 */
export function filterEntries<T extends { brief_thought: string; content: string; mood_persona: string }>(
  entries: T[],
  searchQuery: string,
  activePersona: string | null
): T[] {
  return entries.filter((entry) => {
    const matchesSearch =
      matchText(entry.brief_thought, searchQuery) ||
      matchText(entry.content, searchQuery);

    const matchesPersona = !activePersona || entry.mood_persona === activePersona;

    return matchesSearch && matchesPersona;
  });
}
