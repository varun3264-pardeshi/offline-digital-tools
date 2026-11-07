# Prompts Log - Project 09: YouTube Focus Board
**Project**: Project 9 (Section C: Chrome Extensions) - YouTube Focus Board (Medium)

---

### Prompt 1: Manifest V3 Architecture & Distraction Reducers
> "Create a Chrome extension (Manifest V3) that removes entertainment distractions from YouTube (Shorts, recommended sidebar shelves, and comments section) so it becomes a dedicated study environment. Include a content script that persistently watches DOM changes."

### Prompt 2: SPA Navigation & Dynamic Mutation Observer
> "YouTube dynamically transitions between videos without a full page reload (`yt-navigate-finish` event). Implement a MutationObserver in `content.js` to ensure distraction filters and hiding rules re-apply instantly as the user navigates across different videos."

### Prompt 3: Timestamp-linked Study Notes
> "Build timestamped notes linking directly to specific video seconds. When a note is clicked, seek the active YouTube video player to that exact moment."

### Prompt 4: 60-Minute Intention Gate
> "Before allowing recreational or open browsing, present an unskippable 'Why are you here?' intention gate. The user must type their specific study goal (e.g., 'Revising Thermodynamics') to unlock access for 60 minutes."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-09-youtube-focus-board to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "terracotta" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Watch YouTube Lectures Without Distractions — Hides YouTube Shorts, recommendations, and comments. Type your study goal to unlock a 60-minute session and take timestamped notes.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
