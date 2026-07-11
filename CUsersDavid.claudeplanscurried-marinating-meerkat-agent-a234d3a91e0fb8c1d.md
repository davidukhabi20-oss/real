# Velora Website Modernization Plan

This plan transforms the Velora website into a high-end, modern, and visually dynamic experience. The focus is on establishing a robust design system, introducing innovative layouts like Bento Grids, and eliminating technical debt (inline styles).

## 1. Design System Update (CSS)

### Color Palette Refinement
Current color naming is contradictory (`--primary-green` is red). We will implement a refined, cohesive palette.

**Proposed Variables in `style.css`:**
- `--primary-green`: `#2D5A27` (Rich, professional forest green)
- `--accent-red`: `#D62828` (The current "tomato red" used for highlights)
- `--deep-forest`: `#1B3C1B` (For deep backgrounds and strong contrast)
- `--soft-sage`: `#E8F0E8` (A modern, desaturated green-gray for subtle backgrounds)
- `--warm-cream`: `#FFF8F0` (Existing - maintain for warmth)
- `--charcoal`: `#1E1E1E` (Existing - maintain for text)
- `--glass`: `rgba(255, 255, 255, 0.7)` (Enhanced with `backdrop-filter: blur(12px)`)

### Typography Overhaul
Move away from inline font sizes to a standardized, fluid typography scale.

**New Typography Classes:**
- `.display-1`: `clamp(2.5rem, 5vw, 4.5rem)` (Main hero titles)
- `.display-2`: `clamp(2rem, 4vw, 3rem)` (Section headings)
- `.text-lead`: `clamp(1.1rem, 2vw, 1.25rem)` (Intro paragraphs/subtitles)
- `.text-body`: `1rem` (Standard content)

### Visual Effects
- **Glassmorphism**: Create a `.glass-card` class with a thin 1px semi-transparent border and deep blur.
- **Shadows**: Implement a multi-layered shadow system:
    - `--shadow-soft`: `0 4px 20px rgba(0,0,0,0.05)`
    - `--shadow-medium`: `0 10px 30px rgba(0,0,0,0.08)`
    - `--shadow-deep`: `0 20px 50px rgba(0,0,0,0.12)`

## 2. Layout Innovations

### Bento Grid Implementation
Replace standard grids and lists with a modern Bento Grid layout for high-impact sections.

**New CSS Class: `.bento-grid`**
- `display: grid;`
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`
- Use `grid-column: span X` and `grid-row: span Y` to create varying cell sizes.

**Target Sections for Bento Grid:**
- **"Why Velora" (index.html)**: Convert the 6 cards into a Bento layout where the most important values take larger cells.
- **"Investment Thesis" (investors.html)**: Convert the 5 cards into a Bento layout.
- **"Growth Strategy" (investors.html)**: Convert the linear timeline into a non-linear Bento grid of milestones.

### "Breaking the Grid" Strategies
To avoid a "boxy" feel:
- **Overflow Elements**: Use absolute positioning for secondary images to overlap container boundaries.
- **Asymmetrical Split-Layouts**: Vary the `grid-template-columns` (e.g., `60% 40%` instead of `50% 50%`).
- **Floating Accents**: Add decorative elements (blobs or abstract shapes) that bleed off the edge of the screen.

### Hero Section Diversification
Eliminate repetition by creating a library of hero variants.

**New Hero Classes:**
- `.hero-full`: Full-screen (100vh) with centered content.
- `.hero-split`: Two-column layout (text left, image right) within the hero.
- `.hero-mini`: Reduced height (40-60vh) for transition sections and CTAs.
- `.hero-dark`: Uses `--deep-forest` or a dark overlay.
- `.hero-accent`: Uses `--accent-red` as the primary background.

## 3. Technical Refactoring

### Inline Style Migration
All inline `style="..."` attributes will be moved to global CSS.

**Migration Process:**
1. **Backgrounds**: Replace `style="background: ..."` with specific classes like `.bg-hero-home`, `.bg-hero-investors`, `.bg-cta-red`.
2. **Spacing**: Create utility classes for common offsets:
    - `.mt-1`: `margin-top: 10px;`
    - `.mt-2`: `margin-top: 20px;`
    - `.mb-lg`: `margin-bottom: 40px;`
3. **Sizing**: Replace `style="font-size: 3.5rem"` with `.display-2`.

### Style Consolidation
- Move the `<style>` block from `investors.html` into `style.css` and rename `.timeline-container` to `.bento-grid` or a related component class.
- Consolidate all layout components into a dedicated section in `style.css`.

## 4. Interaction & Polish

### Micro-interactions
- **Buttons**: Add a transition to `.btn-white` and `.btn-outline` that includes a slight `translateY(-3px)` and a bloom effect on the shadow.
- **Hover States**: Implement a "lifting" effect for Bento cells using `transform: scale(1.02)`.

### Scroll-Reveal System
Enhance the existing `.reveal` logic in `script.js`.

**New Reveal Variants:**
- `.reveal-up`: Standard slide up.
- `.reveal-left`: Slide in from the left.
- `.reveal-right`: Slide in from the right.
- `.reveal-zoom`: Scale up from 0.9 to 1.

## Implementation Sequence

1. **Phase 1: Foundations**: Update `style.css` with new color variables, typography, and utility classes.
2. **Phase 2: Refactoring**: Clean up all `.html` files, removing inline styles and applying the new utility classes.
3. **Phase 3: Layout Shift**: Implement `.bento-grid` and update "Why Velora" and "Investors" sections.
4. **Phase 4: Hero Diversification**: Apply new `.hero-` variants across all pages to break repetition.
5. **Phase 5: Polish**: Add refined animations and micro-interactions in `script.js`.

### Critical Files for Implementation
- `velora-website/style.css`
- `velora-website/index.html`
- `velora-website/investors.html`
- `velora-website/script.js`
EOF`
