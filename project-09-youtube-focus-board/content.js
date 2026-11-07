// Content script running on YouTube pages
console.log('YouTube Focus Board Active');

let settings = {
  hideShorts: true,
  hideRecommendations: true,
  hideComments: true
};

// Check intention gate lock
function checkGateLock() {
  chrome.storage.local.get(['unlockedUntil', 'focusIntent'], (data) => {
    const now = Date.now();
    if (!data.unlockedUntil || now > data.unlockedUntil) {
      showFocusWall();
    } else {
      removeFocusWall();
      applyDistractionFilters();
    }
  });
}

function showFocusWall() {
  if (document.getElementById('yt-focus-wall')) return;
  const wall = document.createElement('div');
  wall.id = 'yt-focus-wall';
  wall.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(7, 9, 19, 0.95); backdrop-filter: blur(25px);
    z-index: 9999999; display: flex; flex-direction: column;
    align-items: center; justify-content: center; color: #fff;
    font-family: sans-serif; text-align: center; padding: 2rem;
  `;
  wall.innerHTML = `
    <div style="max-width: 480px; background: rgba(22, 27, 46, 0.9); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 2.5rem; box-shadow: 0 20px 50px rgba(0,0,0,0.8);">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎯</div>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; font-weight: 800; background: linear-gradient(135deg, #00f2fe, #4facfe); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Why Are You Here?</h2>
      <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5;">YouTube is locked to protect your focus. State your study intention to unlock for 60 minutes.</p>
      <input type="text" id="focus-wall-input" placeholder="e.g., Revising Thermodynamics Lecture 4" style="width: 100%; padding: 0.8rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); color: #fff; font-size: 0.95rem; margin-bottom: 1rem; outline: none;">
      <button id="focus-wall-btn" style="width: 100%; padding: 0.8rem; border-radius: 10px; border: none; background: linear-gradient(135deg, #00f2fe, #0088ff); color: #070913; font-weight: 800; font-size: 1rem; cursor: pointer;">Unlock for 60 Minutes →</button>
    </div>
  `;
  document.body.appendChild(wall);

  document.getElementById('focus-wall-btn').onclick = () => {
    const intent = document.getElementById('focus-wall-input').value.trim() || 'Studying';
    const unlockedUntil = Date.now() + (60 * 60 * 1000);
    chrome.storage.local.set({ focusIntent: intent, unlockedUntil: unlockedUntil }, () => {
      removeFocusWall();
      applyDistractionFilters();
    });
  };
}

function removeFocusWall() {
  const wall = document.getElementById('yt-focus-wall');
  if (wall) wall.remove();
}

function applyDistractionFilters() {
  // Hide shorts elements
  const shortsSelectors = [
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-reel-shelf-renderer',
    'a[title="Shorts"]',
    'ytd-guide-entry-renderer:has(a[title="Shorts"])'
  ];
  shortsSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
  });

  // Hide recommendations sidebar if enabled
  const related = document.getElementById('related');
  if (related && settings.hideRecommendations) related.style.display = 'none';

  // Hide comments if enabled
  const comments = document.getElementById('comments');
  if (comments && settings.hideComments) comments.style.display = 'none';
}

// Re-apply when navigating between videos without reload (SPA change)
const observer = new MutationObserver(() => {
  applyDistractionFilters();
});
observer.observe(document.body, { childList: true, subtree: true });

window.addEventListener('yt-navigate-finish', () => {
  checkGateLock();
  applyDistractionFilters();
});

checkGateLock();
