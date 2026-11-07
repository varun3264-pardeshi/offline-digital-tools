# Project 11: Circle to Fix (Chrome Extension)

## Overview
Screen markup tool enabling developers to circle visual bugs directly in the browser and instantly synthesize formatted prompts for AI coding agents containing exact CSS selectors, HTML snippets, computed styling properties, and screenshots.

## Installation Guide (Unpacked Extension)
1. Navigate to `chrome://extensions` in Google Chrome.
2. Toggle on **Developer mode** (top right).
3. Click **Load unpacked** and select:
   `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-11-circle-to-fix`
4. Use the shortcut **Ctrl+Shift+X** on any page to begin circling bugs.

## Instant Live Simulator
Open `index.html` directly in your browser to interactively test drawing circles, boxes, and arrows over 5 sample web UI components, inspect computed styles, copy ready-to-run prompts, and inspect the real Before vs After bug fix.

## Done When Verification Checklist
- [x] **Works on 5 different websites/widgets**: Verified across Pricing Cards, Navbar links, Form inputs, Rating stars, and Article headers.
- [x] **Prompt includes element's code & developer note**: Extracts HTML tags, classes, and computed properties (`width`, `height`, `overflow`).
- [x] **Real Bug Fix Showcase (Before and After)**: Resolved text overflow bug in `.btn-buy-broken` with complete side-by-side verification.
- [x] **100% Offline / Zero Server Transmission**: Pure client-side DOM inspection and local clipboard writing.
