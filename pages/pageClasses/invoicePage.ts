import { Page } from "@playwright/test";

export class ContactsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Contacts Page Elements
  private btnQuickAdd = "[title='Quick add']";
  private btnicon = "[class='icon-add-circle-1-filled text-info']";
  private cname =  "//label[text()='Client']/../../following-sibling::div[@class='Select is-searchable']";
  private arrow =  "//label[text()='Client']/../../..//span[@class='Select-arrow-zone']";


  // Method to click Quick Add button
  async clickQuickAdd() {
    await this.page.click(this.btnQuickAdd);
  }

  // Method to click icon
  async clickicon() {
    await this.page.click(this.btnicon);
  }

  // Method to enter customer name
  async enterCustomerName(name: string) {
    await this.page.fill(this.cname, name);
  }

  // Method to enter customer name
  async clickOnArrow() {
    await this.page.click(this.arrow);
  }

}

export default ContactsPage;