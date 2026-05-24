# BankDash

The same banking dashboard, built three times — in React, Vue, and Angular — from a [Figma community design](https://www.figma.com/design/lAYvRtlyv6e5XbJ9QhTq7d/BankDash---Dashboard-UI-Kit---Admin-Template-Dashboard---Admin-Dashboard--Community-).

Free template. Pick whichever framework you like.

## Projects

| Folder | Stack | Live demo |
|---|---|---|
| [`bankdash-dashboard/`](./bankdash-dashboard) | Vite + React 19 + TypeScript + Tailwind + recharts + React Router | _add Vercel URL_ |
| [`bankdash-vue/`](./bankdash-vue) | Vite + Vue 3 + TypeScript + Tailwind + chart.js + Vue Router | _add Vercel URL_ |
| [`bankdash-angular/`](./bankdash-angular) | Angular 19 + Tailwind + chart.js | _add Vercel URL_ |

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

Each subfolder is a standalone Vercel project. Set **Root Directory** to the subfolder name when importing the repo in Vercel.

A `vercel.json` in each subfolder handles SPA fallback so client-side routes don't 404 on hard refresh.

## License

MIT — free to use for personal and commercial projects.
