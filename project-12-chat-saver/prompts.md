# Prompts Log - Project 12: Chat Saver
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

### Prompt 4: Multi-Turn Thread Export & Offline Guarantee
> "Verify with a 50-message conversational thread containing runnable Python scripts and multi-column comparison tables. Ensure all exported code can be directly copy-pasted into terminal/Python and executed with zero syntax errors, with zero external server communication."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-12-chat-saver to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "emerald" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Save AI Chats as Clean PDF or Markdown — Select specific messages from ChatGPT, Claude, or Gemini conversations and export them cleanly with code blocks and tables preserved.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
