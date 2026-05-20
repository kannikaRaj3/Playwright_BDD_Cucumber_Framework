import { BeforeAll, AfterAll, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { POManager } from "../../pages/POManager/POManager";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  page = await context.newPage();

  pageFixture.page = page;
});

Before(async function () {
  this.po = new POManager(pageFixture.page);
  this.login = this.po.loginPage;
  this.home = this.po.homePage;
  this.contacts = this.po.contactsPage;
  this.addContact = this.po.addContactPage;
});

AfterAll(async function () {
  await browser.close();
});
