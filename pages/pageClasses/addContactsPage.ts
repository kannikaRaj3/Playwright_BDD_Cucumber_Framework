import { Page } from "@playwright/test";

export class ElorusAddContactsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private tbfirstName = '[name="first_name"]';
  private tbLastName = '[name="last_name"]';
  private tbCompany = '[name="company"]';
  private tbProfession = '[name="profession"]';
  private btnSave = "//span[text()='Save']/parent::a";

  async setfirstName(fn: string) {
    await this.page.fill(this.tbfirstName, fn);
  }

  async setLastName(ln: string) {
    await this.page.fill(this.tbLastName, ln);
  }

  async setCompany(com: string) {
    await this.page.fill(this.tbCompany, com);
  }

  async setProfession(pr: string) {
    await this.page.fill(this.tbProfession, pr);
  }

  async clickSave() {
    await this.page.click(this.btnSave);
  }
}

export default ElorusAddContactsPage;
