// Content script for Circle to Fix
let isDrawingMode = false;
let overlayCanvas = null;
let octx = null;
let startX = 0, startY = 0;
let isDrawing = false;
let shapeType = 'circle'; // circle, rect, arrow

function toggleDrawingOverlay() {
  isDrawingMode = !isDrawingMode;
  if (isDrawingMode) {
    createOverlay();
  } else {
    removeOverlay();
  }
}

function createOverlay() {
  if (overlayCanvas) return;
  overlayCanvas = document.createElement('canvas');
  overlayCanvas.id = 'circle-to-fix-canvas';
  overlayCanvas.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 99999999; cursor: crosshair; background: rgba(0,0,0,0.15);
  `;
  overlayCanvas.width = window.innerWidth;
  overlayCanvas.height = window.innerHeight;
  document.body.appendChild(overlayCanvas);
  octx = overlayCanvas.getContext('2d');

  overlayCanvas.addEventListener('mousedown', onMouseDown);
  overlayCanvas.addEventListener('mousemove', onMouseMove);
  overlayCanvas.addEventListener('mouseup', onMouseUp);
}

function removeOverlay() {
  if (overlayCanvas) {
    overlayCanvas.remove();
    overlayCanvas = null;
  }
}

function onMouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  isDrawing = true;
}

function onMouseMove(e) {
  if (!isDrawing) return;
  octx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  octx.strokeStyle = '#ff3b30';
  octx.lineWidth = 3;

  const curX = e.clientX;
  const curY = e.clientY;
  const rx = Math.abs(curX - startX) / 2;
  const ry = Math.abs(curY - startY) / 2;
  const cx = Math.min(startX, curX) + rx;
  const cy = Math.min(startY, curY) + ry;

  octx.beginPath();
  octx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  octx.stroke();
}

function onMouseUp(e) {
  if (!isDrawing) return;
  isDrawing = false;

  const endX = e.clientX;
  const endY = e.clientY;
  const centerX = (startX + endX) / 2;
  const centerY = (startY + endY) / 2;

  // Temporarily hide overlay to find DOM element underneath
  overlayCanvas.style.display = 'none';
  const targetElement = document.elementFromPoint(centerX, centerY);
  overlayCanvas.style.display = 'block';

  if (targetElement) {
    promptForBugReport(targetElement);
  }
}

function promptForBugReport(el) {
  const note = prompt('Describe the issue with this circled element:', 'Text overflows button on mobile screen');
  if (note === null) return;

  const tag = el.tagName.toLowerCase();
  const cls = el.className ? '.' + el.className.split(' ').join('.') : '';
  const id = el.id ? '#' + el.id : '';
  const selector = `${tag}${id}${cls}`;
  const htmlSnippet = el.outerHTML.slice(0, 300);

  const compStyle = window.getComputedStyle(el);
  const relevantCss = `width: ${compStyle.width}; height: ${compStyle.height}; font-size: ${compStyle.fontSize}; display: ${compStyle.display}; overflow: ${compStyle.overflow};`;

  const fullPrompt = `Fix ${selector}: ${note}\n\nElement HTML:\n${htmlSnippet}\n\nComputed CSS:\n${relevantCss}\n\n[Screenshot attached of circled region]`;

  navigator.clipboard.writeText(fullPrompt).then(() => {
    alert(`✓ Ready Prompt Copied to Clipboard!\n\n` + fullPrompt);
    removeOverlay();
  });
}

// Global keyboard shortcut: Ctrl+Shift+X
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyX') {
    toggleDrawingOverlay();
  }
});
