# Prompts Log - Project 04: CBT Mock Test Engine
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 4 (Section A: Web Tools) - CBT Mock Test Engine (Tough)

---

### Prompt 1: NTA / JEE Examination Interface Design
> "Build a Computer-Based Test (CBT) Mock Test Engine modeled after the official NTA / JEE examination interface. Include a top section for candidate information, active subject tabs, live countdown timer with auto-submit, question palette on the right displaying all question statuses, and clear action controls (Save & Next, Clear Response, Mark for Review & Next, Previous)."

### Prompt 2: State Persistence & Zero-Data-Loss Architecture
> "Implement real-time LocalStorage snapshot synchronization. Every click, answer selection, review toggle, and every ticking second must be persisted. When a candidate reloads or refreshes the page mid-test, the session must restore precisely to the current question with exact remaining seconds and all responses preserved."

### Prompt 3: Dynamic Subject Sections & Negative Marking (+4, -1)
> "Support dynamic question loading via JSON. Calculate scores based on standard positive (+4) and negative (-1) marking rules. Provide subject filtering tabs so candidates can switch between Physics, Chemistry, and Mathematics or view all."

### Prompt 4: Scorecard, Accuracy & Hand-Calculation Audit
> "Upon manual submission or timer expiration, display a detailed scorecard modal showing: Total Score, Accuracy Percentage, Breakdown of Correct/Incorrect/Unattempted, and time spent per question. Include an audit breakdown matching manual hand calculations."
