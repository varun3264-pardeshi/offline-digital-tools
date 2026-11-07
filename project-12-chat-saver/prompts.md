# Prompts Log - Project 12: Chat Saver
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 12 (Section C: Chrome Extensions) - Chat Saver (Medium)

---

### Prompt 1: Multi-Platform DOM Parser Architecture
> "Build a Chrome extension that scrapes chat conversations from ChatGPT, Claude, and Gemini. Implement resilient selectors that differentiate user query prompts from AI responses, and preserve raw markdown code blocks (`def retrieve...`) and comparison tables without breaking line wraps."

### Prompt 2: Selective Message Filtering & Title-based Naming
> "Provide an export checklist letting users export either the full conversation or select individual messages. Auto-derive the export filename from the active conversation title (e.g. `Explain_RAG_simply.md`)."

### Prompt 3: Dual Markdown & PDF Export Pipeline
> "Implement two clean export pathways:
> 1. Clean Markdown (`.md`): Formats turns with headings, fenced code blocks, and markdown pipe tables.
> 2. Clean PDF: Uses print-optimized styling that isolates chat bubbles, preserves table borders, and maintains code indentation."

### Prompt 4: 50+ Message Stress Test & Offline Guarantee
> "Verify with a 50-message conversational thread containing runnable Python scripts and multi-column comparison tables. Ensure all exported code can be directly copy-pasted into terminal/Python and executed with zero syntax errors, with zero external server communication."
