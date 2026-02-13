# Project Conventions

## Data files
- All non-style content belongs in `src/data/*.data.ts`
- Data files export a function that receives `t` (from `useTypography`) and returns the resolved data object — strings are already translated at call time
- Use typed arrays for repeated items (services, features, stats, etc.)
- Components call `getData(t)` in their frontmatter to get translated data

## Typography / i18n
- All user-facing strings live in `src/data/typography/en.json` (and `fr.json` for French)
- Access strings via `useTypography(lang)` which returns a `t(key)` function
- Keys are dot-separated paths matching the JSON structure (e.g. `"home.main.title1"`)
- The `t` function is passed into data files so translations happen in one place

## Components
- Astro components live in `src/components/`
- Section components use `aria-labelledby` for accessibility
- Design tokens (colors, shadows, radii, transitions) are defined in `src/styles/global.css` as CSS custom properties
