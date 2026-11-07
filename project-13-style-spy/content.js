// Content script: Inspects computed styles of visible elements
function scanPageStyles() {
  const elements = document.querySelectorAll('body *');
  const colorCounts = {};
  const fontCounts = {};

  elements.forEach((el) => {
    // Only visible elements
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const style = window.getComputedStyle(el);
    const color = style.color;
    const bg = style.backgroundColor;
    const font = style.fontFamily.split(',')[0].replace(/['"]/g, '').trim();
    const weight = style.fontWeight;
    const size = style.fontSize;

    // Track colors
    if (color && color !== 'rgba(0, 0, 0, 0)') {
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    }
    if (bg && bg !== 'rgba(0, 0, 0, 0)') {
      colorCounts[bg] = (colorCounts[bg] || 0) + 1;
    }

    // Track fonts
    if (font) {
      const key = `${font} (${weight}) · ${size}`;
      fontCounts[key] = (fontCounts[key] || 0) + 1;
    }
  });

  // Sort by popularity
  const sortedColors = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([col, cnt]) => ({ color: col, count: cnt }));

  const sortedFonts = Object.entries(fontCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([f, cnt]) => ({ font: f, count: cnt }));

  return { colors: sortedColors, fonts: sortedFonts, title: document.title };
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'scanStyles') {
    sendResponse(scanPageStyles());
  }
});
