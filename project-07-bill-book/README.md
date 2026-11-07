# Project 7: Bill Book

## Overview
100% offline mobile shop billing ledger featuring dynamic offline UPI QR code generation (`upi://pay`), WhatsApp receipt sharing, item catalog, discount/GST calculation, and persistent daily sales tracking.

## Key Features & Capabilities
- [x] **Mathematical Accuracy Across 5 Bills**: Tested with 5 distinct invoice combinations including quantity, discounts, and GST percentages with exact totals.
- [x] **Flight Mode Execution**: Operates 100% disconnected from the internet. All past bills and daily revenue stay persisted in LocalStorage.
- [x] **UPI Scanner Amount Verification**: The QR code encodes standard `upi://pay` URI with exact calculated grand total; scanning with PhonePe, Google Pay, or Paytm automatically populates the exact amount without requiring a payment gateway.
- [x] **Mobile PWA Installation**: Standard web app manifest enables home-screen pinning on iOS & Android devices.
