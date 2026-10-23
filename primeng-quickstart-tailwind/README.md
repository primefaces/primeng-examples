# PrimeNG with Angular and Tailwind CSS

The same small Angular app as the PrimeNG starter, with Tailwind CSS v4 for the page layout: a top bar with a dark mode switch, a panel that changes the preset and the surface colors, and a dashboard with a chart, a product table and a few stat cards. It uses styled mode with the Aura preset, and `tailwindcss-primeui` lets the Tailwind utilities use the PrimeNG colors.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primeng-examples/tree/main/primeng-quickstart-tailwind)

## Run it

```bash
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

## Where to look

- `src/tailwind.css` imports Tailwind and `tailwindcss-primeui`, and maps the `dark` variant to `.p-dark`.
- `.postcssrc.json` adds the Tailwind PostCSS plugin.
- `src/app/app.config.ts` sets up PrimeNG with `providePrimeNG` and the Aura preset.

Read more in the [PrimeNG Tailwind guide](https://primeng.dev/tailwind).
