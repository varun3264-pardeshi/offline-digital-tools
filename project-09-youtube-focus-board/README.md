# Project 9: YouTube Focus Board (Chrome Extension)

## Overview
Manifest V3 Chrome Extension that transforms YouTube into a distraction-free learning sanctuary by eliminating Shorts, comments, and clickbait recommendations, governed by a 60-minute deliberate intention gate.

## Installation Guide (For Chrome / Edge / Brave)
1. Open Google Chrome and navigate to: `chrome://extensions`
2. Enable **Developer mode** via the toggle switch in the top-right corner.
3. Click the **Load unpacked** button in the top-left toolbar.
4. Select the directory: `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-09-youtube-focus-board`
5. The **YouTube Focus Board** icon will now appear in your browser toolbar!

## Instant Live Simulator
You can also launch `index.html` directly in any web browser to test all functionality (Shorts blocker, comments toggle, timestamp jump, and 60m intention gate) immediately without installing the unpacked extension.

## Done When Verification Checklist
- [x] **Operates across video transitions without reload**: Uses a `MutationObserver` and `yt-navigate-finish` listener to automatically re-apply filters when navigating between videos in YouTube's Single Page App.
- [x] **Timestamp Jump Verification**: Clicking any timestamped note immediately updates video playback to that exact minute and second.
- [x] **State Survives Chrome Restart**: Intention unlocking state and study notes persist in `chrome.storage.local`.
- [x] **Self-Contained Installation Guide**: Complete instructions included above.
