# Prompts Log - Project 06: Reel Monster
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 6 (Section B: Phone Apps and Games) - Reel Monster (Level 1 & Level 2)

---

### Prompt 1: Mobile App Architecture & PWA Standalone Setup
> "Build a mobile app for phones with PWA manifest and service worker enabling offline installation to home screens. Create an animated Tamagotchi-style monster bubble with dynamic speech balloons and physics."

### Prompt 2: Floating Monster Bubble & Growth Stages
> "Design the floating monster bubble with interactive drag and touch physics. Implement progressive visual scaling (monster gets bigger, rounder, and changes facial expressions) and humorous quotes as the reel count increases:
> - 1-10: 'Just warming up... 12 reels down'
> - 11-30: 'Yum! Your evening tastes delicious!'
> - 31-60: 'Are you seriously still swiping?!'
> - 60+: 'BURP! Your unfinished homework says hi.'"

### Prompt 3: Dual Level Engine (Manual vs Automatic)
> "Support both Level 1 and Level 2 tracking:
> - Level 1 (Manual): Tap the floating monster bubble after each reel to increment count by 1.
> - Level 2 (Automatic): Detect vertical scroll/swipe gestures on an interactive simulated feed using TouchEvent distance thresholds, automatically counting reels with >95% accuracy over 20+ reels."

### Prompt 4: 7-Day Analytics & Persistence Across Phone Restarts
> "Store historical reel tallies in LocalStorage indexed by date (YYYY-MM-DD). Build an in-app dashboard showing: Today's tally, estimated time lost (minutes/hours), and an animated 7-day SVG bar chart."
