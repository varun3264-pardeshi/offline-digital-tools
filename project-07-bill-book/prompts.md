# Prompts Log - Project 07: Bill Book
**Mandate**: Week 2 GenAI Internship · Bharat Space Education Research Centre  
**Instructor**: Karan Bagul  
**Project**: Project 7 (Section B: Phone Apps and Games) - Bill Book (Medium)

---

### Prompt 1: Offline Merchant Ledger Architecture
> "Build a 100% offline billing application for local small shops. The app must run on phone browsers in flight mode and be installable as a PWA. Feature a shop profile (Shop Name, Owner Name, UPI ID), default grocery item price catalog, and persistent LocalStorage ledger."

### Prompt 2: Accurate Itemised Billing Engine
> "Implement an invoice builder supporting item selection, quantity adjustments, item discounts, and tax (GST 0%, 5%, 12%, 18%). Verify exact mathematical totals across 5 test bills with zero floating-point discrepancies."

### Prompt 3: Dynamic Offline UPI QR Code Engine
> "Generate a dynamic offline UPI string: `upi://pay?pa={upiId}&pn={shopName}&am={totalAmount}&cu=INR&tn=Bill-{billId}`. Render this string locally via offline QR Code generator (`qrcode.min.js`), allowing GPay/PhonePe to scan and auto-populate the exact amount without internet connectivity."

### Prompt 4: Receipt Image Generator & WhatsApp Sharing
> "Render the finalized invoice onto an offscreen HTML5 canvas, styling it like a crisp thermal paper receipt with shop header, item table, tax summary, total in INR, and payment QR code. Provide a direct 'Share on WhatsApp' button using the Web Share API with image attachment and fallback download."
