# Prompts Log - Project 14: Tab Goblin
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 14 (Section C: Chrome Extensions) - Tab Goblin (Medium)

---

### Prompt 1: Background Tab Age Tracker & Discard Engine
> "Build a Chrome extension utilizing Manifest V3 with `tabs` and `storage` permissions. Track `lastAccessed` timestamps for all browser tabs in the background service worker, and leverage Chrome's native `chrome.tabs.discard()` API to free physical RAM without closing tabs."

### Prompt 2: Animated Goblin Persona & Mood State
> "Design an animated Tab Goblin mascot whose mood shifts dynamically depending on active tab count and RAM bloat:
> - <10 active tabs: 😊 Happy & serene (laptop fan silent).
> - 11-25 active tabs: 😋 Satisfied after eating tabs.
> - >25 active tabs: 👺 Hungry / enraged ('Fan is screaming! Feed him!')."

### Prompt 3: Protected Keep List & Half-filled Form Safety
> "Implement a Whitelist ('Keep List') feature ensuring the goblin never touches pinned tabs, music players, or active forms with unsaved user entries."

### Prompt 4: 30-Tab Stress Test & Session Save/Restore
> "Stress-test the system smoothly handling 30 open tabs. Implement 1-click Session Save and Restore persisting all tab URLs and sleep states across browser restarts in LocalStorage."
