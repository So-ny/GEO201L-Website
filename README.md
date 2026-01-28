# How Scientists Figure Out Earth's History

Modern, responsive educational site for GEO 201L built with Vite + React + TypeScript + Tailwind + React Router.

## Setup
- Requires Node 18+.
- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build for production: `npm run build` then `npm run preview`

## Adding figures with required sources
- Use the reusable `ImageWithSource` component to ensure every image includes a **caption** and **source (label + URL)**.
- For any placeholder image, pass `placeholder` and use a clear caption noting it must be replaced.
- Add image files to `public/images/` and reference them with `/images/your-file.ext`.
- Keep image metadata centralized in `src/content/siteContent.ts` so captions and sources stay consistent.
- Also list each image source on the References page (`src/pages/References.tsx`).

### Example (correct)
```tsx
<ImageWithSource
  src="/images/zircon-zoning.jpg"
  alt="Zircon crystal under cathodoluminescence"
  caption="Zircon with oscillatory zoning used for U-Pb dating."
  sourceLabel="USGS Photo"
  sourceUrl="https://www.usgs.gov/some-path"
/>
```

## Project structure
- `src/content/siteContent.ts` — all page text + image metadata.
- `src/components/` — layout, timeline preview, half-life slider, image component.
- `src/pages/` — routed pages matching navigation.
- `public/images/` — local placeholders; replace with sourced figures.

## Academic requirement reminder
- Every non-original figure must show a visible source (author/organization + link).
- Placeholders are allowed temporarily but must be replaced before publication.
