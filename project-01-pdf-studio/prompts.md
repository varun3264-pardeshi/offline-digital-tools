# Prompts Log - Project 01: PDF Studio
**Project**: Project 1 (Section A: Web Tools) - PDF Studio (29 Tools, Tough)

---

### Prompt 1: Foundation & Architecture Setup
> "Build a 100% offline-first PDF application that runs directly in the browser with zero external server uploads. Configure local vendor libraries (`pdf-lib.min.js`, `pdf.js`) so that it functions seamlessly with Wi-Fi turned off. Structure the interface with a futuristic liquid design, dark glassmorphism, responsive canvas, and a multi-tabbed modular toolbar covering 5 core categories (Organise, Edit, Stamp, Convert, Finish)."

### Prompt 2: Tool Group 1 - Organise (9 Tools)
> "Implement all 9 Organise tools: Merge (multiple PDFs), Split (custom range), Reorder (move page forward/backward), Rotate (90deg increments), Delete page, Duplicate page, Extract page, Insert blank page, and Crop viewport. Ensure page thumbnails dynamically refresh in the sidebar."

### Prompt 3: Tool Group 2 - Edit (9 Tools)
> "Implement all 9 Edit tools with interactive canvas overlay: Add text, Add image, Translucent Highlight, Freehand Draw, Shapes (Rectangle, Circle, Line), Whiteout patch, True irreversible Redact (blackout rasterization to prevent text copy), Digital Signature pad, and Form Filler fields."

### Prompt 4: Tool Group 3 - Stamp (4 Tools)
> "Implement all 4 Stamp tools: Dynamic diagonal Watermark (DRAFT, CONFIDENTIAL, Custom with opacity), Dynamic Page Numbers ('Page X of Y' with placement options), Header & Footer text, and Date Stamp with auto-formatting."

### Prompt 5: Tool Group 4 - Convert (3 Tools)
> "Implement all 3 Conversion tools: Images to PDF (multi-file compiler), PDF to Images (high-res PNG page extractor with instant download), and PDF to Text extractor (offline text scraping)."

### Prompt 6: Tool Group 5 - Finish (4 Tools) & Bonus Features
> "Implement all 4 Finish tools: PDF Compress with live before/after KB comparison, Metadata Editor (Title, Author, Subject), Metadata Stripper (privacy erase), and Side-by-Side PDF comparison. Add password locking and OCR text extraction."

### Prompt 7: Verification & Quality Testing
> "Verify with Wi-Fi off using the generated sample PDF. Ensure exported PDFs open cleanly in Chrome/Acrobat, redacted text is unsearchable, and compress displays accurate before and after sizes."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-01-pdf-studio to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "terracotta" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Edit, Merge & Convert PDF Files — Open any PDF to merge, split, rotate, compress, sign, black-out private text, or add watermarks (29 offline tools).".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
