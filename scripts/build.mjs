import { mkdir, cp, rm, writeFile } from "node:fs/promises";
import { page } from "./page.mjs";
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
for (const file of ["style.css", "assets"])
  await cp(file, `dist/${file}`, { recursive: true });
await mkdir("dist/en");
await writeFile("dist/index.html", page("pt"));
await writeFile("dist/en/index.html", page("en"));
await writeFile(
  "dist/robots.txt",
  "User-agent: *\nAllow: /\nSitemap: https://iagusa-portfolio.vercel.app/sitemap.xml\n",
);
await writeFile(
  "dist/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://iagusa-portfolio.vercel.app/</loc></url><url><loc>https://iagusa-portfolio.vercel.app/en/</loc></url></urlset>',
);
console.log("Portfólio construído em dist/");
