import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const pageUrl = pathToFileURL(path.join(process.cwd(), "index.html")).href;
const outputDir = path.join(process.cwd(), "qa-output");
const screenshotPath = path.join(outputDir, "phil123-final-project.png");

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1400 } });

try {
  await page.goto(pageUrl, { waitUntil: "load" });
  await page.waitForSelector(".module-button");

  const moduleCount = await page.locator(".module-button").count();
  if (moduleCount !== 9) {
    throw new Error(`Expected 9 module buttons, received ${moduleCount}`);
  }

  await page.locator('[data-pathway-button="public"]').click();
  await page.locator(".milestone-card").nth(3).click();

  const pageTitle = await page.title();
  if (!pageTitle.includes("PHIL 123 Final Project")) {
    throw new Error(`Unexpected page title: ${pageTitle}`);
  }

  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Playwright smoke QA passed. Screenshot saved to ${screenshotPath}`);
} finally {
  await browser.close();
}
