import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "node node_modules/vinext/dist/cli.js start --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
  projects: [
    {
      name: "desktop",
      testIgnore: "**/mobile-menu.spec.ts",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "tablet",
      testIgnore: ["**/breakpoints.spec.ts", "**/mobile-menu.spec.ts"],
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "mobile",
      testIgnore: ["**/breakpoints.spec.ts", "**/mobile-menu.spec.ts"],
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: "android-menu",
      testMatch: "**/mobile-menu.spec.ts",
      use: { ...devices["Pixel 7"], browserName: "chromium" },
    },
    {
      name: "iphone-menu",
      testMatch: "**/mobile-menu.spec.ts",
      use: { ...devices["iPhone 13"], browserName: "webkit" },
    },
  ],
});
