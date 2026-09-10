import { expect, test } from "@playwright/test";
import { navItems } from "../../lib/site-data";

test("touch navigation opens every menu page, including a repeated selection", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/hizmetler");
  const menu = page.locator(".mobile-menu");
  for (const item of [...navItems, navItems[navItems.length - 1]]) {
    await menu.locator("summary").tap();
    await expect(menu).toHaveAttribute("open", "");
    await menu.getByRole("link", { name: item.label }).tap();
    await expect(page).toHaveURL(item.href);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(menu).not.toHaveAttribute("open");
  }
  expect(errors).toEqual([]);
});

test("outside taps and keyboard focus dismiss the menu without blocking later taps", async ({
  page,
}) => {
  await page.goto("/");
  const menu = page.locator(".mobile-menu");
  const toggle = menu.locator("summary");
  await toggle.tap();
  await expect(menu).toHaveAttribute("open", "");
  // Empty header space is outside the menu and does not itself navigate.
  await page.touchscreen.tap(5, 5);
  await expect(menu).not.toHaveAttribute("open");

  await toggle.tap();
  await page.keyboard.press("Escape");
  await expect(menu).not.toHaveAttribute("open");
  await expect(toggle).toBeFocused();

  await page.keyboard.press("Enter");
  // Mobile WebKit skips links in its default Tab order; test focus transitions directly.
  await menu.getByRole("link").first().focus();
  await expect(menu.getByRole("link").first()).toBeFocused();
  await expect(menu).toHaveAttribute("open", "");
  await page
    .getByRole("link", { name: "Furkan Akpınar ana sayfa", exact: true })
    .focus();
  await expect(menu).not.toHaveAttribute("open");

  await toggle.tap();
  await menu.getByRole("link", { name: "Hakkımda" }).locator("span").tap();
  await expect(page).toHaveURL("/hakkimda");
  await expect(menu).not.toHaveAttribute("open");
});
