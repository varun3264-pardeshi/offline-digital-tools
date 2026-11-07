# Prompts Log - Project 05: Scribbly Notes
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 5 (Section A: Web Tools) - Scribbly Notes (Medium)

---

### Prompt 1: Core Note-taking & Real-time Canvas Rendering
> "Build an offline web tool that transforms typed lecture notes into realistic hand-drawn notebook pages. Include a left text editor pane and a right live-paginated notebook sheet. Provide 3 ink color choices (Gel Blue, Midnight Black, Crimson Red) and 3 authentic paper textures (College Ruled Lined, Engineering Grid, Blank Parchment)."

### Prompt 2: Natural Handwriting Variation Engine
> "To prevent text from appearing robotic or machine-typed, implement a natural variation engine:
> 1. Jitter the baseline of every individual word slightly (-1.5px to +1.5px).
> 2. Apply minute rotational variance (-1.2deg to +1.2deg) across words.
> 3. Inject subtle letter-spacing fluctuations and stroke-weight variance."

### Prompt 3: Strict Multi-Page Line-Break Logic (Done When Requirement)
> "Implement an intelligent page-breaker algorithm. Calculate the line height relative to notebook ruling. When content exceeds the page height, push full lines to Page 2, Page 3, etc., ensuring that no single line of text is ever sliced or cut in half across a page boundary."

### Prompt 4: Offline Guarantee & Multi-format Export
> "Ensure all font definitions and styling operate 100% offline with Wi-Fi disabled. Provide instant exports to high-res PNG images per page and print-to-PDF."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-05-scribbly-notes to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "coral" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Convert Typed Text into Handwritten Pages — Type or paste your study notes on the left to generate realistic handwritten notebook pages with 3 handwriting styles and 4 paper types.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
