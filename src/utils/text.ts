// Tiny inline formatting for texts in src/data/site.ts (rendered with set:html).

/** [text](url) → <a href="url">text</a> */
export const mdLinks = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

/** **text** → <strong>text</strong> */
export const bold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
