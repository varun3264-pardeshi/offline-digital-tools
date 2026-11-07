# Everyday Digital Toolkit — 17-Tool Master Roadmap
**Goal:** Build 17 self-contained, offline-capable tools across documents, exam photos, billing, browser productivity, video editing, and web design.

---

## Core Quality Standards (Enforced on Every Tool)
- [x] **Strict Offline Execution**: 100% works with Wi-Fi disconnected. No external CDN dependencies that fail offline; all core scripts/styles inlined or local.
- [x] **Prompt Logging**: Every tool folder contains a chronological `prompts.md` documenting prompts.
- [x] **Sample/Harmless Data**: Every tool comes with ready-to-use sample data or mock files.
- [x] **Multi-Color Studio UI**: Warm ivory/sand/terracotta/emerald/coral/amber/mulberry/espresso palettes with simple, readable functional headings.
- [x] **Feature Completeness**: Every feature in the 19-page specification is built and verified.

---

## Roadmap Phases

### Phase 0: Master Toolkit Hub & Architecture Setup
- [x] Create Master Hub (`index.html`) connecting all 17 tools (`Tool 01` – `Tool 17`).

### Phase 1: Section A - Web Tools
- [x] **Tool 01: PDF Studio** (Organise, Edit, Stamp, Convert + OCR, Finish)
- [x] **Tool 02: Form Photo Fixer** (Photo/Sign resize, UPSC/SSC/IBPS/NTA presets, face guide, KB compression)
- [x] **Tool 03: Resume Builder** (Live A4 preview, 3 distinct themes, reorderable sections, PDF export, JSON save/load)
- [x] **Tool 04: CBT Mock Test Engine** (Timer persistence across refresh, question palette, negative marking, results)
- [x] **Tool 05: Scribbly Notes** (Typed to handwriting, 3 font styles, natural line variation, multi-page split)

### Phase 2: Section B - Phone Apps and Games
- [x] **Tool 06: Reel Monster** (Floating monster counter, taunts & moods, 7-day stats, offline PWA)
- [x] **Tool 07: Bill Book** (Shop ledger, item catalog, dynamic UPI QR generator, WhatsApp image receipt, flight mode ready)
- [x] **Tool 08: Auto Rally** (60FPS Canvas Auto-rickshaw racer, 3 laps, obstacles, coins, best time persistence, audio synth)

### Phase 3: Section C - Chrome Extensions
- [x] **Tool 09: YouTube Focus Board** (Shorts/comments blocker, study queue, timestamped notes, 60-min focus gate)
- [x] **Tool 10: Job Clipper** (1-click job scraper, editable fields, 4-stage Kanban board, deadline alerts, CSV export)
- [x] **Tool 11: Circle to Fix** (Canvas screen markup, element DOM/CSS inspector, live Before/After page fix toggle, bug prompt generator)
- [x] **Tool 12: Chat Saver** (Multi-platform AI chat exporter for ChatGPT/Claude/Gemini, clean Markdown & PDF formatting, code blocks & tables preserved)
- [x] **Tool 13: Style Spy** (Color ranking & usage analyzer, typography inspector, 1-click CSS variable kit generator)
- [x] **Tool 14: Tab Goblin** (Animated tab devourer, tab age ranking, memory discarder, session save/restore)

### Phase 4: Section D - Video, Skills and Design
- [x] **Tool 15: One-Minute Reel Cut** (Interactive 20-line transcript editor, live 60s preview player, silence/filler cutter, 9:16 portrait cropper, subtitles generator)
- [x] **Tool 16: Your Own Skill (`/viva`)** (Interactive AI viva examiner skill, custom notes input, With vs Without Skill mode toggle, scoring engine)
- [x] **Tool 17: Same Page, New Design** (Before vs After side-by-side showcase, Desktop vs 375px Mobile toggle, identical word-for-word copy)

### Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth
- [x] **Master Hub (`index.html`)**: Clean professional heading (`Everyday Digital Toolkit`), `Tool 01`–`Tool 17` labels, multi-color palette switcher, and Security & Authentication center.
- [x] **Shared Security & Auth Engine (`assets/security-auth.js` + `assets/studio-ui.css`)**: SHA-256 PIN lock, Role-based access, XSS sanitizer, Signed Audit JSON export, and 6 non-blue color palettes.
- [x] **Clean Polish & Zero Institution Branding**: Removed all institution/course names, removed redundant theory banners, replaced test-harness button labels with clean user-friendly sample loaders, and verified 100% via `verify_suite.py`.
