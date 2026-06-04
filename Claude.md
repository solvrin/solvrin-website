**Full codebase audit, cleanup, optimization, and security hardening for Solvrin Group website**

You are auditing a production React/TypeScript/Vite/Tailwind website deployed at `solvringroup.com` via GitHub Pages. This is the public face of an AI consulting firm. It must be clean, fast, secure, and professional.

Work through the following in order. Do not skip steps. Fix issues as you find them — don't just report them.

---

**PHASE 1 — Security Audit**

1. Scan every file in `src/` for hardcoded secrets, API keys, tokens, or credentials
2. Check `ContactForm.tsx` — verify the Formspree endpoint is the only external call and that form inputs are properly sanitized before submission
3. Check for XSS vulnerabilities — any use of `dangerouslySetInnerHTML`, unescaped user input, or direct DOM manipulation
4. Check `vite.config.ts` and `index.html` for exposed environment variables or insecure configurations
5. Check `package.json` dependencies for known vulnerabilities — run `npm audit` and flag anything Critical or High
6. Verify `.gitignore` is correctly excluding `.env` files, `node_modules`, and sensitive config
7. Add a Content Security Policy (CSP) meta tag to `index.html` that allows only necessary sources

---

**PHASE 2 — TypeScript Cleanup**

1. Fix all TypeScript errors and warnings across every file in `src/`
2. Replace every `any` type with proper typed interfaces or types
3. Check `types.ts` — ensure all types are accurate, complete, and actually used
4. Remove unused type imports across all components
5. Enable strict mode in `tsconfig.json` if not already enabled — fix any errors that result

---

**PHASE 3 — Code Quality**

1. Remove all unused imports across every file
2. Remove all `console.log`, `console.error`, and debug statements
3. Remove dead code — unreachable branches, unused variables, unused functions
4. Remove commented-out code blocks
5. Fix any illogical or redundant logic — particularly in form state management in `ContactForm.tsx`
6. Ensure consistent code style across all components — naming conventions, spacing, structure
7. Check for duplicate logic across components and consolidate where appropriate

---

**PHASE 4 — React Best Practices**

1. Check every component for unnecessary re-renders — add `React.memo`, `useCallback`, or `useMemo` where appropriate
2. Verify all `useEffect` hooks have correct dependency arrays — no missing or unnecessary dependencies
3. Check form state management in `ContactForm.tsx` — ensure state updates are correct and there are no race conditions
4. Ensure all list renders have proper `key` props
5. Check that all async operations have proper loading, success, and error states handled
6. Verify the `AnimatePresence` and `motion` usage in `ContactForm.tsx` is correct and not causing layout issues

---

**PHASE 5 — Performance Optimization**

1. Check bundle size — run `npm run build -- --analyze` or equivalent and identify large dependencies
2. Implement lazy loading for components that are below the fold — particularly `ContactForm`, `Team`, `Services`
3. Check images and the hero video — verify they have proper loading attributes (`loading="lazy"` where appropriate)
4. Check for any synchronous operations blocking the main thread
5. Verify Tailwind is purging unused CSS correctly in production builds
6. Check `vite.config.ts` for any missing performance optimizations — code splitting, chunk strategy, minification

---

**PHASE 6 — Accessibility**

1. Verify every form input in `ContactForm.tsx` has a proper `htmlFor`/`id` association
2. Check all interactive elements are keyboard accessible — buttons, links, select dropdowns
3. Verify the contact form submit button has a proper accessible label when showing the loading spinner
4. Check color contrast on key text elements — the site uses white on dark backgrounds, flag anything that fails WCAG AA
5. Ensure the hero video has a `muted` attribute and does not autoplay with audio
6. Add `aria-label` attributes to any icon-only buttons

---

**PHASE 7 — SEO and Meta**

1. Check `index.html` for complete meta tags — title, description, og:title, og:description, og:image, og:url, twitter card
2. Add a canonical URL meta tag pointing to `https://solvringroup.com`
3. Verify the favicon and webmanifest are correctly linked
4. Add structured data (JSON-LD) for the business — organization schema with name, url, and contact info

---

**PHASE 8 — Final Build Verification**

1. Run `npm run build` — must complete with zero errors and zero warnings
2. Verify `dist/index.html` asset paths are correct for the custom domain (base `/`)
3. Run `npm audit` one final time — confirm no Critical or High vulnerabilities remain
4. Summarize every change made, by file, with a one-line description of what was fixed and why