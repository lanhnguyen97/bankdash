# BankDash

The same banking dashboard, built three times — in React, Vue, and Angular — from a [Figma community design](https://www.figma.com/design/lAYvRtlyv6e5XbJ9QhTq7d/BankDash---Dashboard-UI-Kit---Admin-Template-Dashboard---Admin-Dashboard--Community-).

Free template. Pick whichever framework you like.

**All three live on one GitHub Pages site:** https://lanhnguyen97.github.io/bankdash/

## Projects

| Folder | Stack | Live demo |
|---|---|---|
| [`bankdash-dashboard/`](./bankdash-dashboard) | Vite + React 19 + TypeScript + Tailwind + recharts + React Router | [/bankdash/react/](https://lanhnguyen97.github.io/bankdash/react/) |
| [`bankdash-vue/`](./bankdash-vue) | Vite + Vue 3 + TypeScript + Tailwind + chart.js + Vue Router | [/bankdash/vue/](https://lanhnguyen97.github.io/bankdash/vue/) |
| [`bankdash-angular/`](./bankdash-angular) | Angular 19 + Tailwind + chart.js | [/bankdash/angular/](https://lanhnguyen97.github.io/bankdash/angular/) |

## Pages (all three)

Dashboard · Transactions · Accounts · Investments · Credit Cards · Loans · Services · My Privileges · Settings (Profile · Preferences · Security)

Fully responsive at mobile / tablet / desktop. Sidebar collapses to a drawer below `lg`.

## Run locally

```sh
# React
cd bankdash-dashboard && npm install && npm run dev

# Vue
cd bankdash-vue && npm install && npm run dev

# Angular
cd bankdash-angular && npm install && npx ng serve
```

## Deploy

**GitHub Pages (all three under one URL).** A single Pages site serves every framework
under its own path prefix:

```
https://lanhnguyen97.github.io/bankdash/          landing page
https://lanhnguyen97.github.io/bankdash/react/    React app
https://lanhnguyen97.github.io/bankdash/vue/      Vue app
https://lanhnguyen97.github.io/bankdash/angular/  Angular app
```

`scripts/build-pages.mjs` builds each app with its `/bankdash/<framework>/` base path and
assembles `site/` (landing + `404.html` + the three apps). The
`.github/workflows/deploy-pages.yml` workflow runs it on every push to `main` and publishes
`site/` to Pages. Deep links survive a hard refresh via a shared `404.html` redirect (the
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) technique) plus a restore
snippet in each app's `index.html`.

> One-time setup (cannot be scripted): **Settings → Pages → Source: GitHub Actions.**

**Vercel (optional, per app).** Each subfolder is also a standalone Vercel project — set
**Root Directory** to the subfolder name when importing. Its own `vercel.json` handles SPA
fallback there.

## License

MIT — free to use for personal and commercial projects.
