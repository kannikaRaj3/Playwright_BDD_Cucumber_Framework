import { Page } from "@playwright/test";

export class ContactsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Contacts Page Elements
  private btnAdd = "//a[@data-tooltip-content='Add']";
  private btnBulkImport = "//a[@data-tooltip-content='Bulk import']";

  // Method to click Add button
  async clickAdd() {
    await this.page.click(this.btnAdd);
  }

  // Method to click Bulk Import button
  async clickBulkImport() {
    await this.page.click(this.btnBulkImport);
  }
}

export default ContactsPage;