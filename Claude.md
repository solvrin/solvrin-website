# Solvrin Group — Website

## Stack
React, TypeScript, Vite, Tailwind CSS. Deployed to GitHub Pages at solvringroup.com.
Contact form posts to Formspree endpoint: https://formspree.io/f/mpqezjvp

## Components
- Navbar.tsx — sticky nav, glassmorphic on scroll, mobile menu
- Hero.tsx — primary conversion section, parallax background, phone mockup with video
- Services.tsx — three service cards, modal on click for process steps
- Team.tsx — partner grid
- ContactForm.tsx — FSM-driven form (IDLE → SUBMITTING → SUCCESS/ERROR)
- Footer.tsx — links and legal

## Design Rules
- Monochrome only: black (#0b0b0b), white, grays. No tertiary colors.
- sharp corners (rounded-none or rounded-sm), never rounded-lg or above
- Typography: Space Grotesk for headings, Inter for body
- All CTAs must say "Contact" or "Work With Us" — never "Initiate" anything
- Animations use SMOOTH_EASE from utils.ts — do not hardcode easing values
- motion/react for all animations, not framer-motion directly

## Constraints
- Do not add new dependencies without flagging it first
- Do not touch index.css or vite.config.ts without reason
- Keep all data (servicesData, teamMembers) colocated in their component files

## Session Changes (2026-06-25)

### Logo replacement
- `public/White Logo Horizontal.png` and `public/Black Logo No Name.png` added by user
- Navbar.tsx + Footer.tsx: replaced `<Logo>` SVG component with `<img src="/White%20Logo%20Horizontal.png">` (h-12 navbar, h-10 footer); Logo import removed
- Hero.tsx, Services.tsx, Team.tsx: replaced `<LogoMark>` background watermarks with `<img src="/Black%20Logo%20No%20Name.png" style={{ filter: 'invert(1)' }}>` preserving existing sizing/opacity; LogoMark import removed from Services and Team (Hero keeps it for phone mockup)
- index.html: all favicon PNG hrefs replaced with `/Black%20Logo%20No%20Name.png`; `.ico` entry removed
- public/site.webmanifest: icon srcs updated to `/Black%20Logo%20No%20Name.png`, name/theme filled in

### Core Capabilities spacing (Services.tsx)
- Description paragraph (`motion.p`) moved from inside the heading block to after the card grid — it was creating ~90px of phantom dead space (opacity:0 but still in layout flow)
- Heading block: `mb-12` → `mb-16`, divider `mb-10` → `mt-4` (matches Meet the Partners structure exactly)
- h2 retains `mb-6` — required for the `overflow-hidden pb-4` animation wrapper to clip the slide-in correctly; removing it causes h2 to be invisible

### Contact form (ContactForm.tsx)
- Primary Scope dropdown: wrapped in `relative` div, added `<ChevronDown>` icon absolutely positioned right (`pointer-events-none`)
- "Project Abstract" label renamed to "Additional Details"
- Textarea: `maxLength={500}` added; live counter `{formData.message.length} / 500` shown below in `text-xs text-gray-500 font-mono`

### Footer nav (Footer.tsx)
- Added "Partners" button (`scrollToElement('team')`) between Capabilities and Contact, matching Navbar order