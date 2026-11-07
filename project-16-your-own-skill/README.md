# Project 16: Your Own Skill (`/viva`)

## Overview
Standardized Antigravity Agent Skill specification (`SKILL.md`) and interactive terminal simulator that ingests study notes and conducts a rigorous 5-question oral viva examination, providing detailed professor feedback, scoring, and syllabus page diagnostic recommendations.

## Using the Skill in Antigravity / Agent
Simply type into the agent chat:
```
/viva sample-thermo-notes.txt
```
The agent will parse the syllabus notes and ask 5 questions one by one.

## Instant Live Terminal Simulator
Open `index.html` directly in your browser to run the interactive viva terminal across 3 different subjects (Thermodynamics, Data Structures, and Machine Learning) and inspect the Without Skill vs With Skill comparison matrix.

## Done When Verification Checklist
- [x] **Starts Correctly in a Fresh Session**: Triggerable via zero-shot prompt `/viva <file>`.
- [x] **Works on 3 Different Inputs**: Verified on:
  1. Thermodynamics (`sample-thermo-notes.txt`)
  2. Data Structures & Algorithms (`sample-ds-notes.txt`)
  3. Machine Learning & Transformers (`sample-ml-notes.txt`)
- [x] **Without Skill vs With Skill Comparison**: Documented side-by-side improvements in pacing, critique, and exact page remediation.
