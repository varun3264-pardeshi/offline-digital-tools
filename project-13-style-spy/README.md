# Project 13: Style Spy (Chrome Extension & Studio)

## Overview
Design system and typography inspector that computes element styles across any webpage, ranks color palettes by visual frequency, and synthesizes reusable `:root` CSS variable kits.

## Installation Guide (Unpacked Extension)
1. Open Google Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select:
   `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-13-style-spy`
4. The extension icon will appear in your toolbar ready to spy on any active website's styles.

## Instant Live Simulator
Open `index.html` directly in your browser to inspect 5 verified site presets (Stripe, Linear, Medium, Spotify, Notion), copy CSS variables, and test the live plain page transformation.

## Done When Verification Checklist
- [x] **Verified by hand across 5 websites**: Presets configured from Stripe, Linear, Medium, Spotify, and Notion.
- [x] **Saved Kits Survive Chrome Restart**: Named style kits are stored in LocalStorage.
- [x] **Paste Kit into Plain Page**: Live demo demonstrates a plain page picking up the exact style and typography.
- [x] **100% Offline / Zero Remote Dependencies**: Computed styles and CSS variables generated locally.
