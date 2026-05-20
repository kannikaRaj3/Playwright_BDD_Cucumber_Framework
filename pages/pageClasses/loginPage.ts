import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Login Page Elements
  private emailInput = '[id="id_email"]';
  private passwordInput = '[id="id_password"]';
  private signInButton = '[value="SIGN IN"]';

  // Method to enter email
  async enterEmail(email: string) {
    await this.page.fill(this.emailInput, email);
  }

  // Method to enter password
  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  // Method to click sign in button
  async clickOnSignIn() {
    await this.page.click(this.signInButton);
  }

  // Combined login method
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickOnSignIn();
  }
}
