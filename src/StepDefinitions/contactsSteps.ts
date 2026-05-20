import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';

import { LoginPage } from '../../pages/pageClasses/LoginPage';
import { ElorusHomePage } from '../../pages/pageClasses/HomePage';
import { ContactsPage } from '../../pages/pageClasses/ContactsPage';

let loginPage: LoginPage;
let homePage: ElorusHomePage;
let contactsPage: ContactsPage;

Given('Login with default credentials', async () => {
    loginPage = new LoginPage(pageFixture.page);
    await pageFixture.page.goto(process.env.URL as string);

    const email = process.env.EMAIL as string;
    const password = process.env.PASSWORD as string;

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickOnSignIn();
});

Given('complete Log in with default credentials', async function () {
  await this.page.goto(process.env.URL as string);
  await this.login.enterEmail(process.env.EMAIL as string);
  await this.login.enterPassword(process.env.PASSWORD as string);
  await this.login.clickOnSignIn();
  
});


When('Navigate to Contacts page', async function()  {
    homePage = new ElorusHomePage(pageFixture.page);
    await homePage.clickContacts();
});

When('Click on Add button', async () => {
    contactsPage = new ContactsPage(pageFixture.page);
    await contactsPage.clickAdd();
});