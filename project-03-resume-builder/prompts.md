# Prompts Log - Project 03: Resume Builder
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 3 (Section A: Web Tools) - Resume Builder (Medium)

---

### Prompt 1: System Structure & Data Model
> "Build an offline-first Resume Builder with live dual-pane layout: on the left, an intuitive form for personal info, experience, education, projects, and skills; on the right, an exact A4 sheet preview (210mm x 297mm) that renders changes in real time."

### Prompt 2: 3 Truly Distinct Visual Templates
> "Design 3 distinct styling paradigms:
> 1. Modern Tech: Clean sans-serif, teal accent rules, dual-column structure.
> 2. Executive Classic: Traditional serif (Georgia/Times), centered header, horizontal dividers, refined corporate look.
> 3. Creative Minimalist: Charcoal sidebar with white accent text, spacious right main body."

### Prompt 3: Section Reordering & Multi-page Flow
> "Implement section reordering controls to move Experience, Projects, Skills, and Education up or down dynamically. Configure CSS `@media print` and page break rules (`page-break-inside: avoid;`) so that long resumes break cleanly across pages without cutting sentences or headings in half."

### Prompt 4: Export & Data Persistence
> "Provide two persistence options:
> 1. Direct JSON Save & Load: Download the entire resume as a `.json` file and restore it with one click.
> 2. Selectable PDF Export: Trigger `window.print()` configured specifically for A4 format, ensuring all text remains selectable, searchable, and crisp."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-03-resume-builder to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "mulberry" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Build & Print Your A4 Resume — Fill your details on the left and preview your formatted A4 resume live on the right. Switch between 3 layouts and export PDF.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
