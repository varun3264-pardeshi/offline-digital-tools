# Project 14: Tab Goblin (Chrome Extension & Studio)

## Overview
Memory-saving browser extension featuring an animated Goblin character that devours forgotten tabs using Chrome's native tab discard API, protecting active forms while recovering gigabytes of memory.

## Installation Guide (Unpacked Extension)
1. Go to `chrome://extensions` in Google Chrome.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select:
   `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-14-tab-goblin`
4. The Goblin icon will appear in your toolbar.

## Instant Live Simulator
Open `index.html` directly in your browser to experience the Goblin managing 30 live tabs, test putting tabs to sleep, wake them up with 1 click, protect form entries, and save/restore sessions.

## Key Features & Capabilities
- [x] **Smoothly Handles 30 Open Tabs**: Tested with 30 simulated browser tabs with instant rendering and filtering.
- [x] **Half-Filled Form is Never Lost**: Forms flagged with protection or placed on the Keep list are preserved.
- [x] **Saved Session Restores After Restart**: Full tab session state is safely serialized in LocalStorage.
- [x] **Sleeping Tabs Wake Correctly**: Clicking any sleeping tab immediately wakes it back into active memory.
