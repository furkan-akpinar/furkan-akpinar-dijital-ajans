import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";
import { default as worker } from "../dist/server/index.js";

const serviceData = await readFile(
  new URL("../lib/site-data.ts", import.meta.url),
  "utf8",
);
const slugs = [...serviceData.matchAll(/slug: "([^"]+)"/g)].map(
  (match) => match[1],
);
const routes = [
  "/",
  "/hakkimda",
  "/hizmetler",
  "/referanslar",
  "/iletisim",
  ...slugs.map((slug) => `/hizmetler/${slug}`),
];
const env = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const context = { waitUntil() {}, passThroughOnException() {} };
const render = (pathname) =>
  worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );

for (const route of routes) {
  test(`production HTML: ${route}`, async () => {
    const response = await render(route);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /^text\/html/);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="tr"/);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, /<title>[^<]*Furkan Akpınar[^<]*<\/title>/);
    assert.match(html, /<meta[^>]*name="description"[^>]*content="[^"]+"/);
    assert.match(html, /href="\/favicon.svg"/);
    assert.doesNotMatch(html, /name="[^\"]*-preview"/i);
    for (const [, src] of html.matchAll(/<img[^>]*src="(\/[^"?]+)"/g)) {
      const asset = new URL(`../public${src}`, import.meta.url);
      assert.ok((await stat(asset)).size > 0, `missing image: ${src}`);
      const names = await readdir(new URL(".", asset));
      assert.ok(
        names.includes(src.split("/").at(-1)),
        `case-sensitive image path: ${src}`,
      );
    }
    for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)"/g)) {
      if (href === "/favicon.svg" || href.startsWith("/assets/")) continue;
      assert.ok(routes.includes(href), `unknown internal link: ${href}`);
    }
  });
}

for (const route of ["/bulunamayan-sayfa", "/hizmetler/bulunamayan-hizmet"]) {
  test(`missing page returns 404: ${route}`, async () => {
    const response = await render(route);
    assert.equal(response.status, 404);
    const html = await response.text();
    assert.match(html, /Bu sayfa/);
    assert.match(html, /Ana Sayfaya Dön/);
  });
}

test("contact form cannot pretend to send before configuration", async () => {
  const html = await (await render("/iletisim")).text();
  assert.match(html, /<fieldset[^>]*disabled/);
  assert.match(html, /Bu form üzerinden bilgi gönderilemez/);
  assert.doesNotMatch(html, /form-success|Proje notun hazır|Bilgiler revizede/);
});
