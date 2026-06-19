# Design System — Solvrin Group Website

## Color Palette
Strictly monochromatic. Do not introduce any new colors under any circumstances.

| Token | Hex | Usage |
|---|---|---|
| Primary background | `#0b0b0b` | Page background |
| Section background | `#050505` | Services section |
| Surface | `#111` | Cards, icon backgrounds |
| Deep surface | `#030303` | Subtle variants |
| White | `#ffffff` | Text, borders, CTAs |

Use standard Tailwind `gray-*` for text: `text-gray-300` (body), `text-gray-400` (secondary), `text-white` (emphasis).
Never add `text-blue-*`, `text-emerald-*`, or any chromatic color.

## Corner Radius Rules
- Default: `rounded-none` or `rounded-sm` only
- Never use `rounded-lg`, `rounded-xl`, `rounded-2xl`, or higher
- Named exceptions (do not change these):
  - Phone mockup chrome in Hero.tsx: `rounded-[3rem]` — intentional device frame
  - Team member images: `rounded-sm` — acceptable
  - Icon button circles (navbar hamburger, modal close): `rounded-full` — acceptable for icon buttons only, not content cards or CTAs

## CTA Copy Rules
Primary CTAs must use exactly one of these two labels:
- **"Contact"** — used in the navbar button
- **"Work With Us"** — used in Hero and as the primary scroll CTA

Never use: "Initiate", "Transmit", "Engage", "Begin", "Launch", "Activate", or any action-thriller language.

Form submit button exception: may say **"Send Message"** since it is a form action, not a navigation CTA.

Success state copy: use plain, direct language. "Message sent." not "Transmission Received." Reset button: "Send another" or "Back", not "Acknowledge."

## Typography
- Headings (h1–h6): Space Grotesk via `font-display` class (enforced globally in index.css)
- Body: Inter via `font-sans`
- Body weight: `font-light` as default, `font-medium` for emphasis
- Heading tracking: `tracking-tighter` for large display headings
- Secondary labels / metadata: `text-sm font-bold uppercase tracking-widest` — the "[ BRACKET ]" style used in ContactForm for field labels

## Section Divider (Animated Underline)
The canonical section divider is a thin white line that scales in from the left:
```tsx
<motion.div
  initial={{ scaleX: 0, opacity: 0 }}
  whileInView={{ scaleX: 1, opacity: 1 }}
  viewport={{ once: false, margin: "-50px" }}
  transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.2 }}
  className="w-24 h-0.5 bg-white mb-10 origin-left"
/>
```
Always `h-0.5` (2px). Never `h-1` (4px). Never change the width or color.

## Borders
- Card borders: `border border-white/5` default, `hover:border-white/40` on hover
- Section dividers: `border-b border-white/5`
- Never use colored borders