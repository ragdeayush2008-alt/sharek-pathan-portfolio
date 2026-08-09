# PRD — Sharek Pathan | AI Avatar & Done-For-You Content System Portfolio

## Original Problem Statement
Build a premium, modern, high-converting 3-slide portfolio website for Sharek Pathan's AI Avatar Content / Done-For-You Content System service. Premium dark palette (near-black/charcoal, champagne-gold accents, warm off-white text), editorial typography, subtle professional animations, fully responsive (mobile-first), NO pricing anywhere, no stock photos, no fake testimonials/stats. Focus: 50M+ views credibility, 15+ clients, 4 real reels, client social proof, results-first guarantee, direct WhatsApp conversion.

## Architecture
- Frontend-only React SPA (FastAPI backend template left running, unused by the site)
- Single-page 3-section experience: Hero (#home), Work (#work), Contact (#contact)
- Styling: Tailwind CSS + custom CSS (grain overlay, gold radials, card hovers)
- Animation: framer-motion (scroll reveals, scroll progress bar, mobile menu)
- Fonts: Cabinet Grotesk (headings), Satoshi (body), Fraunces italic (accents) via Fontshare/Google Fonts
- Content centralized in `/app/frontend/src/data/content.js` (reels, clients, links, capabilities) for easy reel swapping

## User Personas
- Creators and brands visiting from Instagram (@editors_edit_8) who want a done-for-you content system
- Potential clients on mobile (primary) clicking through to WhatsApp

## Core Requirements (static)
1. Slide 1: Hero — "Your Content System. Done For You.", 50M+ views, 15+ clients, "Not generic content & reels.", capabilities list, RESULTS FIRST guarantee card, CTAs
2. Slide 2: "Work That Speaks." — 4 vertical 9:16 reel cards + "Worked With" client Instagram handles
3. Slide 3: CTA — WhatsApp click-to-chat (+91 9356927723, prefilled message) + Instagram button
4. Nav: Home/Work/Contact, smooth scroll, mobile hamburger, scroll progress indicator
5. No pricing, no fake content, premium dark/gold aesthetic

## Implemented (2026-08-09)
- Full 3-section portfolio with all copy from brief
- 4 REAL reels embedded (user-uploaded artifacts, H.264 verified) with glassmorphic play overlay, click-to-play, sibling auto-pause, lazy loading (preload=metadata)
- Results First guarantee card, capabilities card, stats (50M+ / 15+)
- 5 client social-proof cards linking to real Instagram profiles
- WhatsApp CTA: https://wa.me/919356927723 with prefilled professional message
- Instagram CTAs → https://instagram.com/editors_edit_8
- Fixed glass nav + mobile hamburger overlay menu + gold scroll progress bar
- SEO: title "Sharek Pathan | AI Avatar & Done-For-You Content System" + meta description
- Grain texture, gold radial glows, editorial typography, micro-animations

## Verification
- Desktop + mobile screenshots: all 3 sections render correctly
- Mobile menu, smooth scroll nav, client links, WhatsApp/Instagram hrefs confirmed
- Video codec verified H.264 (avc1) — plays in real browsers; headless test browser lacks H.264 codecs so in-test playback could not be confirmed

## Backlog
- P0: None
- P1: Custom video poster thumbnails (first-frame capture) for reel cards
- P2: View-count/results captions per reel, more reels as client grows, OG share image, custom favicon

## Next Tasks
- Add poster thumbnails to reel cards
- Add per-reel result metrics if Sharek provides them
- Custom favicon + OG image for social sharing
