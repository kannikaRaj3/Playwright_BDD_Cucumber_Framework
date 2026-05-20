import { Page } from "@playwright/test";

export class ElorusHomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Home Page Elements
  private lnkInvoices = "//a[@title='Invoices']";
  private lnkExpenses = "//a[@title='Expenses']";
  private lnkProjects = "//a[@title='Projects']";
  private lnkTime = "//a[@title='Time']";
  private lnkContacts = "//a[@title='Contacts']";
  private lnkEstimates = "//a[@title='Estimates']";
  private btnUserMenu = "//a[@title='User menu']";
  private btnLogout = "//a[text()='Logout']";

  // Method to click Invoices
  async clickInvoices() {
    await this.page.click(this.lnkInvoices);
  }

  // Method to click Expenses
  async clickExpenses() {
    await this.page.click(this.lnkExpenses);
  }

  // Method to click Projects
  async clickProjects() {
    await this.page.click(this.lnkProjects);
  }

  // Method to click Time
  async clickTime() {
    await this.page.click(this.lnkTime);
  }

  // Method to click Contacts
  async clickContacts() {
    await this.page.click(this.lnkContacts);
  }

  // Method to click Estimates
  async clickEstimates() {
    await this.page.click(this.lnkEstimates);
  }

  // Method to click User Menu
  async clickUserMenu() {
    await this.page.click(this.btnUserMenu);
  }

  // Method to click Logout
  async clickLogout() {
    await this.page.click(this.btnLogout);
  }
}
export default ElorusHomePage;