# Project 12: Chat Saver (Chrome Extension & Studio)

## Overview
1-click conversation archiver for ChatGPT, Claude, and Gemini with complete code block indentation, markdown pipe table integrity, selective message export, and dual Markdown/PDF output.

## Installation Guide (Unpacked Extension)
1. In Google Chrome, open `chrome://extensions`
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select:
   `c:\Users\HP\OneDrive\Desktop\gen ai project 2\project-12-chat-saver`
4. The extension icon will appear in the toolbar ready to scrape active chats.

## Instant Live Simulator
Open `index.html` directly in your browser to test scraping and exporting a pre-loaded 50-message technical conversation with complete runnable Python code blocks and Markdown tables.

## Done When Verification Checklist
- [x] **50+ Message Thread Complete Export**: Successfully saves 50 continuous back-and-forth turns without missing messages.
- [x] **Executable Code Copy**: Code blocks copied from the saved Markdown/PDF run directly in Python without broken formatting.
- [x] **Table Integrity Preserved**: Comparison tables maintain clean pipe structures (`| Feature | RAG | Fine-Tuning |`).
- [x] **Automatic Chat Title Naming**: Derived clean file names (e.g. `Explain_RAG_Architectures_Deeply.md`).
- [x] **100% Offline / Zero Network Leaks**: Pure client-side parsing with zero server calls.
