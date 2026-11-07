# Prompts Log - Project 02: Form Photo Fixer
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 2 (Section A: Web Tools) - Form Photo Fixer (Medium)

---

### Prompt 1: Requirements & Core Mechanics
> "Build an offline browser-based Form Photo & Signature Fixer that prepares images to strictly adhere to government exam and job application guidelines (UPSC, SSC, IBPS, NTA JEE/NEET). Features must include dual upload for photo and signature, interactive biometrics face guide overlay, dynamic KB compressor slider, custom preset creator, and verified direct download."

### Prompt 2: Presets & Official Notification Anchors
> "Include at least 4 verified presets based on real government notices:
> 1. UPSC Civil Services: 350x450 px (3.5x4.5 cm), Max 50 KB, Min 20 KB. Link: https://upsconline.nic.in
> 2. SSC CGL: 3.5x4.5 cm, Max 50 KB, Min 20 KB. Link: https://ssc.gov.in
> 3. IBPS Bank PO: 4.5x3.5 cm, Max 50 KB, Signature max 20 KB. Link: https://www.ibps.in
> 4. NTA JEE/NEET: 10 KB to 200 KB passport format. Link: https://jeemain.nta.nic.in
> Provide a Custom Preset panel to let users set custom width, height, and target KB limit."

### Prompt 3: Adaptive Binary Search Compression Loop
> "Implement an adaptive step-by-step canvas JPEG compressor loop: starting from quality 0.95 down to 0.1 in discrete intervals, calculate exact Blob byte size until the file is just under the specified KB limit (e.g., 42 KB for a 50 KB limit) without degrading clarity or causing distortion."

### Prompt 4: Verification & Offline Guarantee
> "Verify with Wi-Fi off on high-resolution camera images. Ensure the downloaded file byte size matches OS filesystem inspection, face proportions match the oval guide, and the app functions 100% locally."


---

## Prompt — Phase 5: Multi-Color UI/UX Overhaul, Simple Headings & Security/Auth Assurance
```text
Upgrade project-02-form-photo-fixer to remove all dark-blue/cyan vibe-coding aesthetics and replace with the "emerald" warm multi-color studio palette.
Change the main heading to state clearly what the project does in simple language: "Resize Photo & Signature for Exam Forms — Choose UPSC, SSC, IBPS, or NTA preset, align your face inside the oval guide, add Name/Date strip, and compress under 20–50 KB.".
Integrate strict Content-Security-Policy (CSP), SHA-256 PIN Authentication & Session Lock, Role Switcher, XSS Input Sanitizer, Live SHA-256 Integrity Checksum Verifier, and Signed Audit JSON Export.
```
