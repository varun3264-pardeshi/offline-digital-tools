# Prompts Log - Project 15: One-Minute Reel Cut
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 15 (Section D: Video, Skills and Design) - One-Minute Reel Cut (Tough)

---

### Prompt 1: Silence & Filler Word Detection Pipeline
> "Analyze a 5-minute raw video clip. Detect pauses greater than 0.5s and filler phrases ('umm', 'basically', duplicate sentence retakes). Generate a visual Edit Plan displaying segments to keep (Red) vs segments to trim (Hatched)."

### Prompt 2: 9:16 Vertical Cropping & Face Centering
> "Configure an FFmpeg cropping pipeline (`crop=ih*(9/16):ih,scale=1080:1920`) that converts landscape or wide camera footage into a vertical 9:16 phone reel while keeping the speaker's face centered throughout."

### Prompt 3: Burnt-In Subtitle Captions with Highlighted Words
> "Generate synchronized subtitle captions burned directly into the video stream. Highlight active spoken words with bright gold text (`#f6d365`) to optimize audience engagement on Instagram Reels and YouTube Shorts."

### Prompt 4: Title Card, Audio Fades & 60-Second Constraint
> "Add an introductory title card during the first 2 seconds, and apply 0.5s audio and video fade-in/fade-out transitions. Guarantee that the final output reel length is strictly 60 seconds or less (0:58) with zero abrupt sentence cutoffs."
