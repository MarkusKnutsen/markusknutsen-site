# Website review and Entail update

Reviewed on 25 September 2026, starting from commit `06b7a08`. Employment details and the CV were updated on 27 September 2026.

## Scope and architecture

Reviewed every tracked source/configuration file, the npm lockfile, public asset sizes, and extracted CV text. The site is a small Next.js App Router application: one statically prerendered homepage, global CSS, section navigation, and theme controls. It has no API routes, database, authentication, contact form processing, or application secrets. Contact links open email and public profiles. No test suite, lint configuration, or CI workflow existed in the repository.

## Findings addressed

| Priority | Finding | Change |
| --- | --- | --- |
| High | The homepage described TechnipFMC as current employment and promoted an active job search. | Updated the introduction, about section, snapshot, career timeline, current chapter, contact copy, and metadata for Entail. Attributed historical achievements to TechnipFMC. |
| High | The original dependency audit reported five vulnerable packages, including a critical Next.js advisory. | Updated Next.js from 16.2.0 to 16.3.6 and refreshed the lockfile. The final dependency installation audit reports zero vulnerabilities. Audit severities describe dependencies; exploitability was not assessed for each advisory. |
| Medium | `npm run lint` invoked `next lint`, removed in Next.js 16. | Added the Next.js flat ESLint configuration, a working lint command, and a separate typecheck command. |
| Medium | Desktop and mobile theme buttons maintained independent state. Resizing could leave a control showing the wrong theme and make the next click ineffective. Storage access could also throw. | Both controls observe the document theme through `useSyncExternalStore`; storage events synchronize other tabs, and inaccessible storage falls back safely. |
| Medium | The CV still described TechnipFMC as the current employer. | Rebuilt the one-page CV with Entail's confirmed title, concise role responsibilities, and confirmed employment dates. Updated the public PDF and restored the "Open CV" link. Added an editable PDF generator. |
| Low | Mobile navigation stayed expanded after selecting a section, and the summary contained a link disabled only for pointer input. | Close the disclosure on selection; use a non-interactive brand label and give the summary a navigation label. |
| Low | Sticky navigation could obscure anchor destinations; reduced-motion preferences were not respected. | Added anchor offsets, visible keyboard focus, native color-scheme hints, reduced-motion handling, and narrow-screen email wrapping. |
| Low | The browser requested a missing favicon. | Added an SVG monogram icon using Next.js's metadata file convention. |

## Content decisions

The role is Analysis Engineer & Developer at Entail in Oslo. The user confirmed the actual start date as 31 August 2026 and the last day at TechnipFMC as 31 July 2026. The website and CV use month/year date ranges. The user requested a concise role summary: client-facing analysis, hydrodynamics, dynamic simulation, engineering software, and collaboration between software and offshore engineering teams. No new achievements or named client projects are claimed. Private employment terms and the source offer document are excluded from the repository.

The general company description was checked against [Entail's official site](https://www.entail.no/): marine engineering, offshore operations, concept evaluation, automation, and the ANALYSE software suite. Historical projects, education, contact details, and thesis remain intact.

## Validation

- Production build: successful, with the homepage statically prerendered.
- TypeScript: route type generation and `tsc --noEmit` passed.
- ESLint: passed with zero warnings.
- Dependency installation audit: zero reported vulnerabilities after updates.
- Browser verification passed against the production server in Microsoft Edge with zero browser errors: employment copy, metadata, all internal anchors, PDF/image downloads, theme synchronization across breakpoints, persistence after reload, unavailable localStorage, mobile menu closure, and anchor positioning.
- Responsive checks passed at 320, 390, 768, 980, 1024, and 1440 pixel widths with no horizontal overflow. Desktop light/dark and mobile screenshots were visually inspected.
- On 27 September, lint, the production build (including TypeScript), and the browser checks passed again after the confirmed role/date updates. The new CV was rendered and visually inspected; it remains one page with selectable text and three working contact-link annotations. PDF files are explicitly marked binary in Git to prevent line-ending conversion from damaging them.

## Remaining limitations and maintenance

- CV content and layout can now be updated through `scripts/build_cv.py`; render and review the output before replacing the public PDF.
- ESLint 9 is deprecated upstream, but the installed Next.js React/import/accessibility plugins currently declare support through ESLint 9. Kept compatible peer versions; migrate to ESLint 10 when that plugin set supports it.
- Theme preference initializes after hydration, so a dark preference may briefly show the light palette on first load. There is no theme initialization script before paint.
- Portrait optimization is disabled by the existing Next.js config. The JPEG is approximately 155 KB; consider enabling optimization if the deployment supports it. The thesis download is approximately 11.2 MB.
- The canonical domain remains the existing `https://markusknutsen.no`; deployment configuration and DNS are not present in this repository.
- Production is hosted on Vercel through the GitHub repository's `main` branch. Deployment status and the public homepage/CV should be verified after publishing.

Reference for the lint migration: [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16).
