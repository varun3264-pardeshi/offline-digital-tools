# Project 3: Resume Builder

## Overview
100% offline-first responsive Resume Builder with live A4 rendering, 3 distinct visual templates, drag/drop section reordering, JSON backup/restore, and selectable PDF export.

## Key Features & Capabilities
- [x] **Clean 2-page print breaks**: Content uses CSS `page-break-inside: avoid;` to ensure headings and paragraphs are never cut in half across pages.
- [x] **Selectable & Searchable PDF**: Exporting via browser Print dialog produces true vector text that can be highlighted, selected, and copied.
- [x] **Save & Restore via File**: Download as `.json` and load back via the file picker to fully restore data state.
- [x] **3 Truly Distinct Templates**:
  1. *Modern Tech*: Clean blue accents, structured headers, dual column skills.
  2. *Executive Classic*: Serif typography, centered formal headers, elegant dividers.
  3. *Creative Minimalist*: Bold dark navy sidebar with high-contrast text and spacious main body.
- [x] **Wi-Fi Disconnected Operation**: Zero CDN calls, pure offline HTML5/CSS3/Vanilla JS.
