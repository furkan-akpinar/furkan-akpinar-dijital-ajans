import { expect, test } from "@playwright/test";
import { services, projects } from "../../lib/site-data";

const routes = [
  "/",
  "/hakkimda",
  "/hizmetler",
  "/referanslar",
  "/iletisim",
  ...services.map((service) => `/hizmetler/${service.slug}`),
];
for (const route of routes) {
  test(`page and assets: ${route}`, async ({ page }, testInfo) => {
    const failures: string[] = [];
    page.on("pageerror", (error) => failures.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") failures.push(message.text());
    });
    page.on("requestfailed", (request) =>
      failures.push(`${request.url()}: ${request.failure()?.errorText}`),
    );
    page.on("response", (response) => {
      if (response.status() >= 400)
        failures.push(`${response.status()}: ${response.url()}`);
    });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Furkan Akpınar/);
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
        () =>
          document.fonts.check('16px "Geist"', "Türkçe ığş") &&
          [...document.fonts].some(
            (font) => font.family === "Geist" && font.status === "loaded",
          ),
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    for (const img of await page.locator("main img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty("complete", true);
      expect(
        await img.evaluate((node) => (node as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: testInfo.outputPath("page.png"),
      fullPage: true,
      animations: "disabled",
    });
    expect(failures).toEqual([]);
  });
}

test("navigation, keyboard focus and menu closing", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "İçeriğe geç" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const menu = page.locator(".mobile-menu");
  if (testInfo.project.name !== "desktop") {
    const toggle = menu.locator("summary");
    await toggle.click();
    await expect(menu).toHaveAttribute("open", "");
    await page.keyboard.press("Escape");
    await expect(menu).not.toHaveAttribute("open");
    await expect(toggle).toBeFocused();
    await toggle.click();
    await menu.getByRole("link", { name: "Hizmetler" }).click();
    await expect(page).toHaveURL(/\/hizmetler$/);
    await expect(menu).not.toHaveAttribute("open");
  } else {
    await page
      .getByRole("navigation", { name: "Ana menü", exact: true })
      .getByRole("link", { name: "Hizmetler", exact: true })
      .click();
    await expect(page).toHaveURL(/\/hizmetler$/);
  }
  await page
    .getByRole("link", { name: /Tasarım \+ Geliştirme.*Kurumsal Web Sitesi/ })
    .click();
  await expect(page).toHaveURL(/\/hizmetler\/kurumsal-web-sitesi$/);
  await page.reload();
  await expect(page.locator("h1")).toHaveText("Kurumsal Web Sitesi");
  const faq = page.locator(".faq-list details").first();
  await faq.locator("summary").click();
  await expect(faq).not.toHaveAttribute("open");
  await faq.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(faq).toHaveAttribute("open", "");
  await page.locator(".next-service").click();
  await expect(page).toHaveURL(/\/hizmetler\/e-ticaret-sistemleri$/);
  await page.getByRole("link", { name: "Bu Hizmet İçin Görüşelim" }).click();
  await expect(page).toHaveURL(/\/iletisim$/);
  await expect(
    page.getByRole("button", { name: "Gönderim kullanılamıyor" }),
  ).toBeDisabled();
});

test("motion controls and reduced-motion preference", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Kayan yazıyı duraklat" });
  await toggle.click();
  await expect(page.locator(".marquee-track")).toHaveCSS(
    "animation-play-state",
    "paused",
  );
  await toggle.click();
  await expect(page.locator(".marquee-track")).toHaveCSS(
    "animation-play-state",
    "running",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".marquee-track")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(toggle).toBeHidden();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("404 recovery and project links", async ({ page }) => {
  expect((await page.goto("/hizmetler/yok"))?.status()).toBe(404);
  await page.getByRole("link", { name: "Ana Sayfaya Dön" }).click();
  await expect(page).toHaveURL("/");
  await page.goto("/referanslar");
  await expect(page.locator(".project-live-link")).toHaveCount(
    projects.filter((project) => project.url).length,
  );
  for (const link of await page.locator(".project-live-link").all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noreferrer/);
    await expect(link).toHaveAttribute("href", /^https:\/\//);
  }
});
