# PrimeNG micro frontends

A coffee roaster's back office, made of two micro frontends: Orders and Customers. Each one is built separately and ships its own copy of Angular and PrimeNG. The host is a third Angular app that uses PrimeNG with Aura in the default mode, and it loads the micro frontends at runtime.

Orders uses Lara and Customers uses Nora, each in isolated mode inside its own shadow root. Switching tabs destroys one application and starts the other. Dialogs, select panels and toasts keep the theme of the app that opened them. The host's button keeps its Aura look, and the dark mode button in the header switches all three.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primeng-examples/tree/main/micro-frontends)

## Run it

```bash
npm install
npm start
```

`npm start` builds the two micro frontends into `public/mfe` first, then serves the host.

## Where to look

- `angular.json` has three projects. `orders` and `customers` build into `public/mfe/orders` and `public/mfe/customers`, and `host` serves that folder with the rest of `public`.
- `src/orders/main.ts` and `src/customers/main.ts` put the app's mount function on `window.microFrontends`. `src/host/shell.ts` loads `mfe/orders/main.js` with a module script tag, then calls `window.microFrontends.orders` with its outlet and keeps the function that destroys the app.
- `src/orders/mount.ts` and `src/customers/mount.ts` start the app with `createApplication`, give it its own `APP_ID` and set up PrimeNG with `withIsolation({ key })`. The app component uses `ViewEncapsulation.ShadowDom`, so Angular attaches the shadow root.

Read more in [Micro frontends with their own PrimeUI theme](https://blog.primeui.dev/blog/micro-frontends-with-primeui/).
