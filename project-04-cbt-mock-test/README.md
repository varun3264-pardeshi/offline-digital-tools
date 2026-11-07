# Project 4: CBT Mock Test Engine

## Overview
Authentic offline NTA/JEE computer-based test platform featuring LocalStorage mid-test state persistence, dynamic question loader, subject sections, positive/negative scoring engine, and audit breakdown.

## Done When Verification Checklist
- [x] **Zero Data Loss on Mid-Test Refresh**: Every answer selection, timer countdown second, marked-for-review status, and question index persists in LocalStorage. Refreshing the browser mid-test loses nothing.
- [x] **Hand Calculation Verification for 15 Questions**:
  - Positive Marks: +4 per correct answer
  - Negative Marks: -1 per incorrect answer
  - Unattempted: 0 marks
  - The audit report table provides row-by-row scoring matching manual hand calculation.
- [x] **Second Question File Operates with No Code Changes**:
  - File 1: `sample-exam-physics.json` (15 questions: Physics, Chemistry, Math)
  - File 2: `sample-exam-general.json` (5 questions: AI Fundamentals, Data Structures)
  - Seamlessly toggled from top navigation bar with identical UI logic.
- [x] **100% Offline Functionality**: Wi-Fi disabled execution verified.
