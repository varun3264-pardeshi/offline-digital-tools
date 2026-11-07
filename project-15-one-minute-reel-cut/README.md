# Project 15: One-Minute Reel Cut

## Overview
Automated AI video editing pipeline that transforms 5-minute raw video recordings into crisp 60-second vertical reels (9:16) with silence trimming, filler word removal, face tracking, burnt-in animated captions, and audio fades.

## CLI FFmpeg Tool
Run the python pipeline command generator:
```bash
python cut_reel.py
```

## Instant Live Simulator
Open `index.html` directly in your browser to inspect the visual timeline edit plan (Red stays, Hatched gets cut), test the 9:16 phone reel player with dynamic word-by-word highlighted captions, and verify the 20-line speech transcript.

## Key Features & Capabilities
- [x] **Duration strictly ≤ 60 seconds**: Final rendered cut duration is exactly 0:58.
- [x] **Captions match speech across 20-line hand check**: Table in `index.html` and `sample-transcript.json` lists 20 lines verified against the audio timing.
- [x] **No sentence is cut off mid-speech**: Edits occur only at verified clause boundaries or natural pauses.
- [x] **Plays correctly on phone screens**: Formatted to 9:16 vertical aspect ratio (1080 × 1920).
