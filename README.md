# Markus Knutsen — Next.js personal website

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Profile image is in `public/profile.jpg`
- CV is in `public/Markus_CV.pdf`
- Thesis is in `public/Master_Thesis.pdf`
- Main page content is in `app/page.tsx`
- Global styling is in `app/globals.css`

## Validation

Use Node.js 20.9 or newer and npm. The update was verified with Node.js 24.

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

## Content maintenance

- Entail is the current employer. Its company description links to https://www.entail.no/.
- Current role: Analysis Engineer & Developer at Entail, started 31 August 2026. TechnipFMC employment ended 31 July 2026. Public date ranges use month/year.
- `public/Markus_CV.pdf` is the updated one-page CV, including Entail and the confirmed dates.
- Keep the homepage and the metadata in `app/layout.tsx` consistent when changing employment details.
- See `REVIEW.md` for the code review, fixes, and remaining limitations.

## Updating the CV

The editable content and layout are in `scripts/build_cv.py`. With Python and `reportlab` installed:

```bash
python scripts/build_cv.py
```

This writes `output/pdf/Markus_CV.pdf`. Render and visually review that one-page PDF before copying it to `public/Markus_CV.pdf`, which is the website download. Generated output is ignored by Git. Keep private employment documents and terms outside the repository.
