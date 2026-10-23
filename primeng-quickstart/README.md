# PrimeNG with Angular

A small Angular app built with [PrimeNG](https://primeng.dev): a top bar with a dark mode switch, a panel that changes the preset and the surface colors, and a dashboard with a chart, a product table and a few stat cards. It uses styled mode with the Aura preset.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primeng-examples/tree/main/primeng-quickstart)

## Run it

```bash
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

## Where to look

- `src/app/app.config.ts` sets up PrimeNG with `providePrimeNG`, the Aura preset and the `.p-dark` dark mode selector.
- `src/app/components/app.config.ts` is the panel that changes the preset and the surface colors with `updatePreset` and `updateSurfacePalette`.
- `src/app/service/layout.service.ts` switches dark mode.

Read more in the [PrimeNG installation guide](https://primeng.dev/installation).
