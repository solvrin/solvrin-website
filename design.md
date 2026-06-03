# Design Ledger: Solvrin Group

## 1. Architectural Patterns
The application follows a strictly modular front-end architecture, utilizing React's component-based model. The monolith `App.tsx` has been decomposed into feature-specific sections:
- **Navbar**: Handles global navigation, utilizing a sticky, glassmorphic layout for persistent availability without obscuring content.
- **Hero**: The primary conversion section, implementing dynamic background animations and clear Call-To-Action (CTA) paths.
- **Services**: An interactive grid system leveraging modals to progressively disclose complex technical information (process steps) without overwhelming the initial view.
- **Team**: A clean, grid-based presentation of key personnel.
- **ContactForm**: A state-driven interactive funnel for discovery.

## 2. State Management Choices
- **Service Modals**: Controlled via a localized React state (`selectedService : Service | null`). This allows the modal to open when a service is assigned and smoothly transition out when `null`.
- **Contact Funnel**: Implements a strict Finite State Machine (FSM) pattern using a `status` state variable typed as `'IDLE' | 'VALIDATING' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'`. This prevents race conditions (e.g., multiple submissions) and guarantees deterministic UI rendering for loading spinners and success states.

## 3. Logo Translation & Theming
Based on the provided corporate logos for Solvrin Group:
- **Visual Analysis**: The logo is a highly precise, minimalist geometric construction featuring rigorous circles and sharp linear intersections. The color palette is strictly monochromatic (black and white).
- **Color Strategy**: The application adopts a "high-contrast monochrome" theme. 
  - Primary: Deep Black (`#0b0b0b`)
  - Secondary/Background: Pure White (`#ffffff`) and Off-White (`#f5f5f5`)
  - Accent: Since the brand uses no tertiary colors, accents are achieved through inversion (e.g., white text on black buttons) and structural shadows (`zinc-900`).
- **Typography**: Space Grotesk is selected for headings to mirror the geometric, technical feel of the logo, while Inter is used for body copy to ensure maximum legibility.
- **Geometry**: UI elements feature clean lines, sharp or slightly rounded corners (using `rounded-none` or `rounded-sm`), mirroring the precision of the logo.

## 4. TypeScript Contracts
All core data structures (`Service`, `TeamMember`, `ContactData`) are strictly typed in `src/types.ts` to ensure data integrity across components, particularly in the contact funnel and service map.
