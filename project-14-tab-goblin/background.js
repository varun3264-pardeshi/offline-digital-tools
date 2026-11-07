// Background service worker for Tab Goblin
const tabAccessTimes = {};

chrome.tabs.onActivated.addListener((activeInfo) => {
  tabAccessTimes[activeInfo.tabId] = Date.now();
});

chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabAccessTimes[tabId];
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'discardTab') {
    // Native Chrome Tab Discard: frees RAM memory without closing
    chrome.tabs.discard(req.tabId, (discardedTab) => {
      sendResponse({ success: true, tab: discardedTab });
    });
    return true;
  }
});
