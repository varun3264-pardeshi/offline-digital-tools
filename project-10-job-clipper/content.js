// Content script to scrape job page details
function detectJobDetails() {
  let role = '';
  let company = '';
  const url = window.location.href;

  // Strategy 1: OpenGraph or meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && ogTitle.content) {
    role = ogTitle.content;
  }

  // Strategy 2: Common job board selectors
  const h1 = document.querySelector('h1, .job-title, .jobsearch-JobInfoHeader-title, .top-card-layout__title');
  if (h1) {
    role = h1.innerText.trim();
  }

  const compEl = document.querySelector('.company-name, .jobsearch-CompanyInfoContainer, .topcard__flavor, [data-company-name]');
  if (compEl) {
    company = compEl.innerText.trim();
  }

  // Fallback to page title
  if (!role) {
    role = document.title;
  }

  return { role, company, url, deadline: '' };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrapeJob') {
    sendResponse(detectJobDetails());
  }
});
