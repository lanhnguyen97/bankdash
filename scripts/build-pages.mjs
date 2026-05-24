// Build all three apps with their GitHub Pages base paths and assemble a single
// `site/` folder that Pages serves at https://<user>.github.io/bankdash/.
//
//   site/index.html        landing page
//   site/404.html          SPA redirect (rafgraph, pathSegmentsToKeep=2)
//   site/react/            bankdash-dashboard  (base /bankdash/react/)
//   site/vue/              bankdash-vue        (base /bankdash/vue/)
//   site/angular/          bankdash-angular    (base-href /bankdash/angular/)
//
// Run locally or in CI with: node scripts/build-pages.mjs

import { execSync } from "node:child_process";
import { existsSync, rmSync, mkdirSync, cpSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO_BASE = "/bankdash";
const site = join(root, "site");

const apps = [
  {
    dir: "bankdash-dashboard",
    prefix: "react",
    buildArgs: `--base=${REPO_BASE}/react/`,
    distCandidates: ["dist"],
  },
  {
    dir: "bankdash-vue",
    prefix: "vue",
    buildArgs: `--base=${REPO_BASE}/vue/`,
    distCandidates: ["dist"],
  },
  {
    dir: "bankdash-angular",
    prefix: "angular",
    buildArgs: `--base-href=${REPO_BASE}/angular/`,
    distCandidates: ["dist/bankdash-angular/browser", "dist/bankdash-angular"],
  },
];

function run(cmd, cwd) {
  console.log(`\n$ ${cmd}   (in ${cwd})`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

rmSync(site, { recursive: true, force: true });
mkdirSync(site, { recursive: true });

for (const app of apps) {
  const cwd = join(root, app.dir);
  if (!existsSync(join(cwd, "node_modules"))) run("npm ci", cwd);
  run(`npm run build -- ${app.buildArgs}`, cwd);

  const dist = app.distCandidates.map((d) => join(cwd, d)).find((p) => existsSync(p));
  if (!dist) throw new Error(`No build output found for ${app.dir} (looked in ${app.distCandidates.join(", ")})`);

  cpSync(dist, join(site, app.prefix), { recursive: true });
  console.log(`✓ ${app.dir} -> site/${app.prefix}`);
}

// landing page + SPA fallback
copyFileSync(join(root, "scripts/pages/index.html"), join(site, "index.html"));
copyFileSync(join(root, "scripts/pages/404.html"), join(site, "404.html"));
console.log("\n✓ assembled site/ (index.html, 404.html, react/, vue/, angular/)");
