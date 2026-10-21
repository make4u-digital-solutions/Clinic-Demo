---
name: CarePlus Clinical System
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d9e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#424750'
  inverse-surface: '#1e3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737781'
  outline-variant: '#c2c6d1'
  surface-tint: '#2f6099'
  primary: '#00305c'
  on-primary: '#ffffff'
  primary-container: '#0b477f'
  on-primary-container: '#89b6f5'
  inverse-primary: '#a4c9ff'
  secondary: '#006971'
  on-secondary: '#ffffff'
  secondary-container: '#81f0fd'
  on-secondary-container: '#006d76'
  tertiary: '#2a3134'
  on-tertiary: '#ffffff'
  tertiary-container: '#41474a'
  on-tertiary-container: '#afb5b9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#0d4880'
  secondary-fixed: '#88f3ff'
  secondary-fixed-dim: '#65d7e3'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f56'
  tertiary-fixed: '#dde3e7'
  tertiary-fixed-dim: '#c1c7cb'
  on-tertiary-fixed: '#161c1f'
  on-tertiary-fixed-variant: '#41484b'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d9e2ff'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system conveys unwavering clinical trust, clinical excellence, modern accessibility, and empathetic human care. Designed for outpatient clinics, multi-specialty healthcare networks, and medical centers, it prioritizes clarity, calm reassurance, and friction-free navigation for patients across all demographics.

The visual style is **Corporate Modern with Tactile Warmth**:
- High-legibility typography rooted in structured clinical hierarchy.
- Airy, ice-blue canvas backgrounds that prevent eye fatigue and establish a sanitized, peaceful ambiance.
- Gentle, softly curved corners and light floating surface elevations to soften the clinical precision with approachable warmth.
- Cheerful yet precise pastel category tokens for multi-specialty identification (Pediatrics, Cardiology, General Medicine, Dentistry, etc.).

## Colors

The palette establishes an immediate atmosphere of professional medical credibility, balanced with energetic cyan-teal highlights and calming tinted backgrounds.

### Primary & Accent Roles
- **Primary Navy (`#0B477F`):** Used for commanding call-to-action buttons, key brand banners, primary headings, and active state indicators. Communicates clinical stability and depth.
- **Secondary Teal (`#159EAA`):** Highlights positive outcomes, ratings, active category filters, secondary interactive controls, and key clinic metrics.
- **Ice Blue Surface (`#F2F8FC`):** Applied as full-bleed alternating section backgrounds and subtle card fill overlays, breaking the starkness of pure white while maintaining high sanitary contrast.
- **Deep Navy Neutral (`#102347`):** High-contrast neutral for prominent headlines, titles, and body copy.
- **Muted Slate (`#64748B`):** Supporting labels, secondary metadata, clinic schedules, and field descriptions.
- **Hairline Border (`#DCE5ED`):** Structural borders for cards, divider rules, and input outlines.

### Department Specialty Pastels
For department badges and specialty service cards:
- **General Medicine / Urology:** `#EBF5FE` base with `#0B477F` icon
- **Pediatrics:** `#FFF4EB` base with `#F97316` icon
- **Gynecology:** `#FDF2F8` base with `#EC4899` icon
- **Dermatology:** `#ECFDF5` base with `#10B981` icon
- **Orthopedics:** `#EFF6FF` base with `#2563EB` icon
- **Cardiology:** `#FEF2F2` base with `#EF4444` icon
- **ENT:** `#FEFCE8` base with `#CA8A04` icon
- **Dental Care:** `#F5F3FF` base with `#8B5CF6` icon

## Typography

Typography is clean, highly legible, and structured using **Inter** across all roles. 

### Usage Guidelines
- **Hero & Page Titles:** Use `display-hero` with heavy bold weights (`800`) to highlight primary clinical propositions ("Quality Care for a Healthier Tomorrow").
- **Section Headers:** Set to `headline-lg` in deep navy (`#102347`). Pair with a subtle 1-line lead in `body-md` slate gray.
- **Doctor Profiles & Cards:** Doctor names use `headline-sm` (`18px / 600`), qualification strings in `body-sm` (`#64748B`), and specialty titles highlighted with `label-sm` in teal (`#159EAA`).
- **Data & Numeric Metric Highlights:** Metrics (e.g., "10,000+", "15+") utilize `headline-lg` or `headline-md` weight `700` paired with `label-sm` descriptive copy underneath.

## Layout & Spacing

A 12-column fluid grid system anchors responsive screen structures with fixed horizontal boundary constraints (`max-width: 1240px`).

### Breakpoints & Layout Rhythms
- **Desktop (1024px+):** 12-column grid, `1.5rem` (24px) gutters, and `2rem` (32px) margins. Used for multi-column doctor lists (4 across), hero splits (content left, booking widget right), and department grid displays (up to 8 across or carousel).
- **Tablet (768px – 1023px):** 8-column layout, 16px gutters, doctor cards wrap to 2 columns, form layouts adapt to single column stacks.
- **Mobile (< 768px):** 4-column layout, `1rem` (16px) margins and gutters. Horizontal scroll or 2-column compact grid for specialty icon tiles. Full-bleed appointment forms.

Section vertical breathing room adheres to `space-xl` (40px) on mobile and double `space-xl` (80px) on desktop sections, alternating between pure `#FFFFFF` and `#F2F8FC`.

## Elevation & Depth

Visual depth is achieved through clean white surfaces layered above tinted light blue backdrops, supported by ultra-soft ambient drop shadows and hairline containment borders.

### Elevation Tiers
- **Tier 0 (Base Canvas):** Background alternating blocks (`#FFFFFF` and `#F2F8FC`). No shadow.
- **Tier 1 (Surface Cards & Inputs):** Doctor cards, department badges, and input containers. Structured with border `1px solid #DCE5ED`, resting shadow: `box-shadow: 0 4px 16px -2px rgba(16, 35, 71, 0.05)`.
- **Tier 2 (Interactive Floating Elements & Quick Book Panels):** Booking widget cards, dropdown flyouts, and active hovered doctor cards. Lifted shadow: `box-shadow: 0 12px 28px -4px rgba(16, 35, 71, 0.10)`, border transitions to `#159EAA`.
- **Tier 3 (Modals & Overlays):** Appointment booking dialogs and mobile side navigations: `box-shadow: 0 20px 40px -6px rgba(11, 71, 127, 0.18)`.

## Shapes

The design uses balanced, gentle curvatures (`roundedness: 2`) to maintain professional structure while removing sharp institutional harshness.

- **Standard Elements (Buttons, Inputs, Select Boxes):** `0.5rem` (8px) border radius for crisp operational utility.
- **Content Cards & Department Blocks:** `rounded-lg` (`1rem` / 16px) corner radius for doctor cards, department tiles, and booking panels.
- **Feature Modules & Image Frames:** `rounded-xl` (`1.5rem` / 24px) for hospital facility photography and prominent appointment banners.
- **Badges & Filter Pills:** Fully rounded pill shapes (`9999px`) for specialty categories, review indicators, and quick status badges.

## Components

### Buttons
- **Primary Action (Book Appointment, Confirm):** Background `#0B477F`, text `#FFFFFF`, radius `8px`, font `label-md`. Hover state shifts to `#08355F` with subtle lift.
- **Secondary Action (Explore Services, View Profile):** Border `1.5px solid #0B477F`, background transparent, text `#0B477F`. On hover, background tints with `rgba(11, 71, 127, 0.05)`.
- **Hero / Highlight Button:** Background `#159EAA`, text `#FFFFFF`, radius `8px`. Hover `#11838D`.

### Department & Specialty Tiles
- Square or vertical pill aspect ratio.
- Soft pastel background specific to department category.
- Centered icon with a 2-line title in `label-sm` (`#102347`).
- Hover state: scales `1.03` with a soft glow in the department's hue.

### Doctor Cards
- Crisp white background with `1px solid #DCE5ED` border, `16px` border radius.
- Headshot with top-rounded container and subtle gradient background.
- Profile info hierarchy: Doctor Name (`headline-sm`, `#102347`), Qualifications (`body-sm`, `#64748B`), Specialty (`label-sm`, `#159EAA`), and Review star badge (Gold `#F59E0B` icon + review count).
- Full-width secondary outline button "View Profile" fixed to the base.

### Appointment Booking Engine
- Structured multi-step progress bar (Step 1: Details, Step 2: Time, Step 3: Info, Step 4: Confirmation) with completed steps highlighted in `#0B477F` and active in `#159EAA`.
- Time slot selection grid: Pills with outline `1px solid #DCE5ED`; selected slot turns solid `#0B477F` with white typography.
- Form inputs: 44px minimum touch target height, `#FFFFFF` background, `#DCE5ED` border, placeholder in `#94A3B8`, active focus ring in `#159EAA`.

### Metric & Trust Highlights
- Compact stat cards featuring light teal or soft blue circular icon badge (`#EBF5FE` / `#159EAA`), followed by a bold stat count (`headline-md`) and title (`body-sm`, `#64748B`).