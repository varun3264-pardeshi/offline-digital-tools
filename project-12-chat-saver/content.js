// Content script to scrape ChatGPT, Claude, and Gemini chats
function scrapeCurrentChat() {
  const url = window.location.href;
  let title = document.title.replace(/ - (ChatGPT|Claude|Gemini)/i, '').trim() || 'AI_Conversation';
  const messages = [];

  // Platform 1: ChatGPT
  if (url.includes('chatgpt.com') || url.includes('chat.openai.com')) {
    const turns = document.querySelectorAll('article, [data-message-author-role]');
    turns.forEach((turn) => {
      const isUser = turn.querySelector('[data-message-author-role="user"]') || turn.innerText.includes('You said:');
      const text = turn.innerText;
      messages.push({
        role: isUser ? 'User' : 'Assistant',
        content: text
      });
    });
  } 
  // Platform 2: Claude.ai
  else if (url.includes('claude.ai')) {
    const bubbles = document.querySelectorAll('.font-claude-message, [data-is-streaming]');
    bubbles.forEach((b) => {
      messages.push({
        role: b.classList.contains('font-user-message') ? 'User' : 'Assistant',
        content: b.innerText
      });
    });
  }
  // Generic / Fallback
  else {
    document.querySelectorAll('.chat-message, .message-bubble').forEach((m) => {
      const isUser = m.classList.contains('user');
      messages.push({
        role: isUser ? 'User' : 'Assistant',
        content: m.innerText
      });
    });
  }

  return { title, count: messages.length, messages };
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'scrapeChat') {
    sendResponse(scrapeCurrentChat());
  }
});
