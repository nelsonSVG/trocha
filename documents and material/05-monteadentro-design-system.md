# Research: Monteadentro.cc Visual Design System

Analysis conducted on https://monteadentro.cc/ to extract the visual core for adapting "Agarrando Trocha 2".

## 1. Typography Core
The entire site uses **Montserrat** from Google Fonts exclusively, across all weights and styles.

- **Main Font**: Montserrat
- **Weights Loaded**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (normal and italic)
- **Primary Style**: Clean, modern, high-contrast

### Heading Hierarchy
- **H1 / Hero Titles**: Uppercase, bold (700), tight letter-spacing (-0.9px), high impact
- **Section Titles**: Uppercase, Montserrat 600, tracking, black on white or white on black
- **Post/Article Titles**: Montserrat 600-700, sometimes underlined on hover

### Body Text
- **Standard Body**: Montserrat 400-500 weight, line-height ~1.6, black or dark gray text on white
- **Accents**: Uppercase Montserrat with wider tracking (letter-spacing) for labels and metadata

## 2. Color Palette
The site uses a strictly minimal, high-contrast palette.

- **Primary Colors**: Black (#000000) and White (#FFFFFF)
- **Secondary**: Subtle grays (#333333, #E5E5E5)
- **Dividers/Borders**: Very light borders (rgba(0,0,0,0.1) or white equivalents on dark backgrounds)
- **Overlays**: Dark semi-transparent overlays on images for text legibility

## 3. Layout & Structure
Monteadentro uses a "Boxed" container strategy within a full-width section context.

- **Container Width**: Max-width ~1140px, centered
- **Vertical Spacing**: Generous "white space" between sections (99px spacers observed)
- **Grid Layout**: Mostly single or double columns with clean gutters
- **Mobile First**: Responsive transitions at 767px and 1024px

## 4. Header System
- **Transparent Base**: Transparent when at the top of the page
- **Sticky Behavior**: Becomes solid/sticky on scroll (offset around 500px)
- **Navigation Links**: Uppercase Montserrat, spaced, clean (no underlines unless active/hover)
- **Minimal Logo**: Black text-based logo in header, switches to white on dark sections

## 5. Footer System
- **Strictly Minimal**: Centered single-column layout
- **Solid Black Background**: #000000
- **Logo**: White circular emblem centered
- **Main Footer Title**: "MONTEADENTRO" in Montserrat 600, uppercase, large (30px)
- **Tagline**: "BIKEPACKING BLOG" in smaller uppercase text
- **Social Integration**: Centered Instagram and Facebook icons

## 6. UI Components & Elements
- **Buttons**:
  - Rounded corners (border-radius: 9999px)
  - Uppercase Montserrat text
  - Border-based (transparent with border, filled on hover)
- **Cards**:
  - Image-dominant with subtle hover zooms or overlays
  - Montserrat titles below or as overlays
- **Icons**: Clean, monochromatic FontAwesome icons

## 7. Motion & Transitions
- **Scroll Effects**: Subtle "reveal" animations (fadeInUp, fadeInRight)
- **Hover Transitions**: Consistent 0.3s duration for background/color/box-shadow shifts
- **Micro-interactions**: Smooth scaling (grow/shrink) on interactive elements

---
*Note: Agarrando Trocha 2 will be adapted to match this system, replacing its current multi-font setup with exclusive Montserrat usage and mirroring the black/white high-contrast aesthetic.*
