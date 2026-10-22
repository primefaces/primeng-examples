# PrimeNG in a shadow root

A coffee roaster's website with a reorder form built as an Angular component. The component uses `ViewEncapsulation.ShadowDom`, so the form and its PrimeNG components render inside the element's shadow root.

The website styles every `button` and `input` on the page, and none of those rules reach the form. The form's styles do not leak out to the page either. The dark mode button in the header switches the form too.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primeng-examples/tree/main/shadow-root)

## Run it

```bash
npm install
npm start
```

## Where to look

- `src/app/app.config.ts` sets up PrimeNG with `providePrimeNG`. There is no shadow root option: a PrimeNG component checks its root node when it is created and brings its styles into the shadow root.
- `src/app/reorder-form.ts` is the form, with `encapsulation: ViewEncapsulation.ShadowDom`. PrimeNG opens the Select and DatePicker panels next to the component by default, so they stay inside the shadow root.
- `src/main.ts` starts the form on the `<reorder-form>` element in `src/index.html` and toggles `.app-dark` on `<html>` for dark mode.

Read more in [Using PrimeUI components inside a shadow root](https://blog.primeui.dev/blog/using-primeui-components-inside-a-shadow-root/).
