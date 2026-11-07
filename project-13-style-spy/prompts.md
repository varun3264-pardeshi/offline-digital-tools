# Prompts Log - Project 13: Style Spy
**Project**: Project 13 (Section C: Chrome Extensions) - Style Spy (Medium)

---

### Prompt 1: DOM Computed Style Crawler & Frequency Ranker
> "Create a Chrome extension that scans all visible DOM elements on any website. Extract `color`, `backgroundColor`, `fontFamily`, `fontWeight`, and `fontSize`. Calculate a frequency histogram ranking each color by how much of the page utilizes it."

### Prompt 2: Interactive Swatches & Clipboard Helpers
> "Display the ranked color swatches alongside hex codes and usage percentages. Allow users to click any color or font to copy it directly to their clipboard."

### Prompt 3: CSS Variable Exporter & Kit Persistence
> "Synthesize the extracted design tokens into a standardized `:root` CSS variables block. Allow users to save named kits (e.g. 'Stripe Theme') to LocalStorage so they survive browser restarts."

### Prompt 4: Live Plain Page Demonstration (Core Feature)
> "Build a test bench showing how a plain, unstyled HTML page instantly picks up the exact colors, typography, and button styling when applying the extracted kit. Verify across 5 distinct websites (Stripe, Linear, Medium, Spotify, Notion)."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-13-style-spy to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "mulberry" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Inspect Colors & Fonts on Any Webpage — Scan any webpage to rank its most-used colors by screen area, inspect heading and body fonts, and copy a ready-to-use CSS variables kit.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
