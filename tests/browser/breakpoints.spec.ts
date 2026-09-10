import { expect, test } from "@playwright/test";
import { services } from "../../lib/site-data";
const routes = [
  "/",
  "/hakkimda",
  "/hizmetler",
  "/referanslar",
  "/iletisim",
  ...services.map((service) => `/hizmetler/${service.slug}`),
];
for (const width of [320, 1024]) {
  test(`layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [...routes, "/bulunamayan-sayfa"]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page
          .locator("main h1, main h2, main h3, main p, main .button")
          .evaluateAll((nodes) =>
            nodes
              .filter((node) => {
                const rect = node.getBoundingClientRect();
                return (
                  rect.width > 0 &&
                  (rect.left < -1 ||
                    rect.right > innerWidth + 1 ||
                    node.scrollWidth > node.clientWidth + 1)
                );
              })
              .map((node) => node.textContent?.trim()),
          ),
        "Text or controls clipped at viewport edge",
      ).toEqual([]);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        route,
      ).toBe(true);
    }
  });
}
