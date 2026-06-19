# Animation Conventions — Solvrin Group Website

## Core Rule
Always import and use `SMOOTH_EASE` from `../utils`. Never hardcode cubic bezier values.
The inline `ease-[0.16,1,0.3,1]` found in some components is equivalent to SMOOTH_EASE — replace it with the constant if encountered.

## Pattern 1: Clip-Reveal (Section Headings)
Used for all h1 and h2 section headings. The overflow-hidden parent clips the text as it rises up into view.

```tsx
<div className="overflow-hidden pb-4">
  <motion.h2
    initial={{ y: "130%", opacity: 0, filter: "blur(10px)" }}
    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 1.2, ease: SMOOTH_EASE }}
    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter"
  >
    Heading Text
  </motion.h2>
</div>
```

Critical: the `overflow-hidden` wrapper must always be present. Removing it breaks the clip effect and the heading becomes invisible until the animation completes. This was a bug introduced in a prior session — do not repeat it.

## Pattern 2: Fade-Blur (Paragraphs and Body Content)
Used for descriptive text below headings. No y-translate — just opacity and blur.

```tsx
<div className="overflow-hidden pb-2">
  <motion.p
    initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 1.2, ease: SMOOTH_EASE, delay: 0.3 }}
    className="text-xl text-gray-300 leading-relaxed font-light"
  >
    Body text.
  </motion.p>
</div>
```

## Pattern 3: Card Entrance (Grid Items)
Used for any card or grid item that reveals on scroll. Standard stagger via `idx * 0.2`.

```tsx
<motion.div
  initial={{ opacity: 0, y: 120, scale: 0.95, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
  viewport={{ once: false, margin: "-50px" }}
  transition={{ duration: 1.4, delay: idx * 0.2, ease: SMOOTH_EASE }}
>
```

## Pattern 4: Scale-In (Underlines and Decorative Lines)
Used for the animated section underline divider.

```tsx
initial={{ scaleX: 0, opacity: 0 }}
whileInView={{ scaleX: 1, opacity: 1 }}
transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.2 }}
className="origin-left"
```

## Pattern 5: Hero Entrance (One-Time Load Animations)
Hero elements use `animate` not `whileInView` since they fire on page load, not scroll.

```tsx
initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
transition={{ duration: 1.4, ease: SMOOTH_EASE, delay: 0.1 }}
```

## Global Rules
- `once: false` — animations re-trigger every time the element enters the viewport on scroll, not just on first view
- `margin: "-50px"` on all viewport observers — triggers slightly before the element is fully visible
- Never use `transition-all` with motion components — use explicit transition properties
- Parallax backgrounds use `useScroll` + `useTransform` with `offset: ["start end", "end start"]`
- All decorative background LogoMark elements use `opacity-[0.1]` and `pointer-events-none`