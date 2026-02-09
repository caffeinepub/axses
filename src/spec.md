# Specification

## Summary
**Goal:** Replace the Home hero background with a new cinematic grunge gaming texture (Cyberpunk × Samurai × Dark Souls mood) while keeping the hero layout and text unchanged.

**Planned changes:**
- Add a new static PNG background asset: `frontend/public/assets/generated/axses-hero-cinematic-texture.dim_1920x1080.png` matching the specified atmospheric grunge style (no text/logos/faces/characters).
- Update `frontend/src/components/home/HeroSection.tsx` to use the new background image URL instead of the current nature hero background.
- Adjust the hero overlay/gradient so the section stays moody but not overly dark or overly high-contrast, preserving readability without changing existing hero content/layout.

**User-visible outcome:** The Home page hero displays a new cinematic grunge texture background with a moody gaming feel, while all existing hero text and layout remain the same.
