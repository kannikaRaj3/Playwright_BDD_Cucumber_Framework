import { Browser, Page, chromium } from "@playwright/test";

class PageFixture {
  public page!: Page;
  private browser!: Browser;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

export const pageFixture = new PageFixture();
