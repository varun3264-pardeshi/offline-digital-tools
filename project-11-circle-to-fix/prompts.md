# Prompts Log - Project 11: Circle to Fix
**Project**: Project 11 (Section C: Chrome Extensions) - Circle to Fix (Tough)

---

### Prompt 1: Full-Screen Drawing Canvas & Keyboard Shortcut
> "Build a Chrome extension that toggles an interactive full-screen drawing canvas when pressing Ctrl+Shift+X. Support drawing Circles, Rectangular boxes, and Pointer Arrows over any web page."

### Prompt 2: DOM Hit-Testing & Computed CSS Extraction
> "When the user finishes circling an area, momentarily hide the drawing overlay and perform `document.elementFromPoint` at the circle's centroid. Extract the target element's HTML tag, CSS selector path, inner markup, and computed layout styles (`width`, `height`, `display`, `overflow`, `fontSize`)."

### Prompt 3: AI Prompt Synthesizer & Clipboard Copy
> "Combine the extracted DOM selector, HTML snippet, computed CSS attributes, and an editable developer note into a structured AI prompt ready for pair programming agents like Antigravity, Claude, or ChatGPT. Automatically copy the prompt to the clipboard."

### Prompt 4: Real Bug Fix Demonstration (Before vs After)
> "Document a real bug fix resolved using this tool (fixing an overflowing buy button inside a pricing card on mobile viewport) with side-by-side Before and After evidence. Ensure zero external network calls."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-11-circle-to-fix to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "coral" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Circle Any Website Bug to Generate a Fix — Draw a red circle around any broken element on the preview webpage to extract its HTML, CSS, coordinates, and a ready-to-paste fix prompt.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
