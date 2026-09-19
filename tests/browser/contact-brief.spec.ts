import { expect, test } from "@playwright/test";

test("brief validates input, stays local, copies and invalidates on edits", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/iletisim");
  const prepare = page.getByRole("button", { name: "Proje Özeti Hazırla" });
  const output = page.getByLabel("Hazırlanan proje özeti");
  await expect(prepare).toBeEnabled();
  const requests: string[] = [];
  const origin = new URL(page.url()).origin;
  page.on("request", (request) => {
    const url = new URL(request.url());
    // Route prefetch may finish loading code chunks during the interaction.
    const staticChunk = request.method() === "GET" && !request.postData() &&
      url.origin === origin && url.pathname.startsWith("/_next/static/") && !url.search;
    if (!staticChunk) requests.push(request.url());
  });

  await prepare.click();
  await expect(output).toHaveCount(0);
  await page.getByLabel("Ad Soyad *", { exact: true }).fill("   ");
  await page.getByLabel("Projenizi kısaca anlatın *", { exact: true }).fill("Yeni bir site.\nTürkçe içerik ve erişilebilirlik.");
  await prepare.click();
  await expect(output).toHaveCount(0);
  await page.getByLabel("Ad Soyad *", { exact: true }).fill("Deneme Kullanıcısı");
  await page.getByLabel("E-posta (isteğe bağlı)").fill("gecersiz");
  await prepare.click();
  await expect(output).toHaveCount(0);
  await page.getByLabel("E-posta (isteğe bağlı)").fill("test@example.com");
  await page.getByLabel("İlgilendiğiniz hizmet").selectOption({ label: "Kurumsal Web Sitesi" });
  await prepare.click();
  await expect(output).toBeFocused();
  const brief = await output.inputValue();
  expect(brief).toContain("Ad Soyad: Deneme Kullanıcısı");
  expect(brief).toContain("Hizmet: Kurumsal Web Sitesi");
  expect(brief).toContain("Yeni bir site.\nTürkçe içerik ve erişilebilirlik.");
  await page.getByRole("button", { name: "Özeti Kopyala" }).click();
  await expect(page.getByRole("status")).toHaveText("Özet panoya kopyalandı. Bilgileriniz gönderilmedi.");
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  // Windows uses CRLF in the system clipboard; textarea values use LF.
  expect(copied.replaceAll("\r\n", "\n")).toBe(brief);
  await expect(page).toHaveURL(/\/iletisim$/);
  expect(requests).toEqual([]);
  expect(await page.evaluate(() => [localStorage.length, sessionStorage.length])).toEqual([0, 0]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  await page.getByLabel("İlgilendiğiniz hizmet").selectOption("");
  await expect(output).toHaveCount(0);
  await expect(page.getByRole("status")).toBeEmpty();
  await prepare.click();
  await expect(output).toHaveValue(/Hizmet: Henüz seçilmedi/);
});

test("clipboard rejection keeps a selectable brief and explains manual copying", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("Permission denied")) },
    });
  });
  await page.goto("/iletisim");
  await page.getByLabel("Ad Soyad *", { exact: true }).fill("Deneme");
  await page.getByLabel("Projenizi kısaca anlatın *", { exact: true }).fill("İlk sürüm için proje planı.");
  await page.getByRole("button", { name: "Proje Özeti Hazırla" }).click();
  const output = page.getByLabel("Hazırlanan proje özeti");
  await expect(output).not.toHaveValue(/E-posta:|Telefon:/);
  await page.getByRole("button", { name: "Özeti Kopyala" }).click();
  await expect(page.getByRole("status")).toContainText("Seçili metni elle kopyalayabilirsiniz");
  await expect(output).toBeFocused();
  expect(await output.evaluate((field: HTMLTextAreaElement) => field.selectionEnd - field.selectionStart)).toBe((await output.inputValue()).length);
});

test("late clipboard completion cannot label an edited brief as copied", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => new Promise<void>((resolve) => {
        document.addEventListener("finish-test-copy", () => resolve(), { once: true });
      }) },
    });
  });
  await page.goto("/iletisim");
  await page.getByLabel("Ad Soyad *", { exact: true }).fill("Deneme");
  await page.getByLabel("Projenizi kısaca anlatın *", { exact: true }).fill("İlk proje planı.");
  await page.getByRole("button", { name: "Proje Özeti Hazırla" }).click();
  await page.getByRole("button", { name: "Özeti Kopyala" }).click();
  await expect(page.getByRole("button", { name: "Kopyalanıyor…" })).toBeDisabled();
  await page.getByLabel("Projenizi kısaca anlatın *", { exact: true }).fill("Güncellenen proje planı.");
  await page.evaluate(() => document.dispatchEvent(new Event("finish-test-copy")));
  await expect(page.getByLabel("Hazırlanan proje özeti")).toHaveCount(0);
  await expect(page.getByRole("status")).toBeEmpty();
});

test("without JavaScript no visitor data can be submitted", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/iletisim");
  await expect(page.getByRole("button", { name: "Proje Özeti Hazırla" })).toBeDisabled();
  await expect(page.getByLabel("Ad Soyad *", { exact: true })).toBeDisabled();
  const fallback = page.locator(".contact-form noscript");
  // Text matchers skip noscript contents; inspect its actual DOM text instead.
  await expect(fallback).toHaveJSProperty("textContent", "Proje özeti hazırlamak için JavaScript açık olmalıdır.");
  await expect(fallback).toBeVisible();
  await context.close();
});
