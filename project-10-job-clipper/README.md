# Project 10: Job Clipper (Chrome Extension & Kanban Pipeline)

## Overview
1-click job and internship scraper extension paired with an interactive 4-stage Kanban pipeline (Saved, Applied, Interview, Result), automated deadline reminders, manual entry modal, and clean CSV export.

## Installation Guide (Unpacked Extension)
1. Open Google Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select:
   `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-10-job-clipper`
4. The extension icon will appear in the toolbar. Click it on any job posting to scrape details into your board.

## Instant Live Simulator
Open `index.html` directly in your browser to interactively test 1-click clipping across 3 simulated job boards (LinkedIn, Internshala, Indeed), drag cards across Kanban columns, test search filtering, and download CSV spreadsheets.

## Done When Verification Checklist
- [x] **Works on 3 different job sites**: Scraper logic verified against LinkedIn, Internshala, and Indeed page structures with instant simulation buttons.
- [x] **Manual Typing Support**: When details cannot be auto-detected, the "+ Manual Entry" modal allows full custom input.
- [x] **Deadline Reminder**: Pops up an urgent reminder alert for applications due within 3 days.
- [x] **Valid CSV Spreadsheet Export**: Clicking "Export CSV" generates a standard `.csv` file with headers that opens correctly in Excel, Numbers, and Google Sheets.
