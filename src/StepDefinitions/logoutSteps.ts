import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';
import { LoginPage } from '../../pages/pageClasses/LoginPage';
import { ElorusHomePage } from '../../pages/pageClasses/HomePage';

let loginPage: LoginPage;
let homePage: ElorusHomePage;

Given('Log in with default credentials', async () => {
    loginPage = new LoginPage(pageFixture.page);
    await pageFixture.page.goto(process.env.URL as string);
    
    const email = process.env.EMAIL as string;
    const password = process.env.PASSWORD as string;

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickOnSignIn();
    
});

When('Click on user menu', async () => {
  homePage = new ElorusHomePage(pageFixture.page);
  await homePage.clickUserMenu();
});

When('Click on logout', async () => {
  await homePage.clickLogout();
});

Then('Should be logged out', async () => {
  await expect(pageFixture.page).toHaveURL(/login/);
});