# Component Patterns — Solvrin Group Website

## Section Scaffold
Every below-fold section follows this structure:

```tsx
export function SectionName() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section id="section-id" ref={containerRef} className="pt-32 pb-10 bg-[#050505] relative overflow-hidden">

      {/* Decorative parallax background */}
      <motion.div
        style={{ y: yBg, rotate: rotateBg }}
        className="absolute top-0 right-0 -mr-64 opacity-[0.1] pointer-events-none origin-center"
      >
        <LogoMark className="w-250 h-250 text-white" />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="mb-12 md:w-2/3">
          <div className="overflow-hidden pb-4">
            <motion.h2 ...>Section Title</motion.h2>
          </div>
          <AnimatedUnderline />
          <div className="overflow-hidden pb-2">
            <motion.p ...>Section description.</motion.p>
          </div>
        </div>

        {/* Grid or content */}
      </div>
    </section>
  );
}
```

## Section Header Spacing
- `mb-12` between the header block and the content grid (not mb-24 — too much space)
- `md:w-2/3` on the header block to constrain paragraph width
- Heading → underline → paragraph order is fixed — never rearrange

## Data Colocation Rule
All data arrays stay in their component file. No separate data files.
- `servicesData` lives in `Services.tsx`
- `teamMembers` lives in `Team.tsx`
- If a data array exceeds ~10 items, discuss extraction then — not before

## Lazy Loading Rule
All below-fold sections are lazy-loaded in `App.tsx`:
```tsx
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
```
Any new section added to the page must follow this pattern. Do not import it directly.

## Navigation Rule
The `scrollToElement` utility in `utils.ts` must be used for all in-page navigation.
Never use raw `href="#section-id"` anchor links — this bypasses the shared scroll behavior.
This applies to Footer links as well as Navbar.

## Contact Form FSM
The form uses a strict finite state machine. Valid states are:
`'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'`

Note: CLAUDE.md previously documented a VALIDATING state — this does not exist in the implementation. Do not add it without explicit instruction.

## Services Accordion Pattern (Replaces Modal)
The Services modal has been identified for replacement with an inline accordion.
When implementing, use this state shape:

```tsx
const [expandedId, setExpandedId] = useState<string | null>(null);
```

Each card's "Primary Scope" button toggles `expandedId`. The process steps expand inline below the card description using `AnimatePresence` + `motion.div` with height animation. The modal and all its associated JSX (`fixed inset-0`, `backdrop-blur`, `AnimatePresence` overlay) should be deleted entirely.

## TypeScript Contracts
Core types live in `src/types.ts`. Current types: `Service`, `ProcessStep`, `TeamMember`, `ContactData`, `FormStatus`.

- `TeamMember.imageUrl` is required (string, not optional) — all three members always provide it
- `ContactData.projectScope` is a union type — cast `e.target.value` explicitly when handling the select onChange
- `FormStatus` does not include `'VALIDATING'` — do not add it
- Form submit handler type: `React.FormEvent<HTMLFormElement>` not `React.SubmitEvent`

## Navbar Link Rules
- Never have two nav links pointing to the same section id
- Current links: Home (hero), Capabilities (services), Partners (team), Contact CTA
- The Logo button also scrolls to hero — three routes to hero is already the maximum

## Team Cards
- Team cards are not clickable — no `onClick`, no `cursor-pointer`
- Hover effects on team cards are limited to: image desaturate → color, image subtle scale, bio text gray → white
- No arrows, no role text animation, no overlay CTAs on team cards