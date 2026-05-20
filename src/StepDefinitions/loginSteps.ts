import { After, Before, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';
import { LoginPage } from '../../pages/pageClasses/LoginPage';
import { POManager } from '../../pages/POManager/POManager';
import * as dotenv from 'dotenv';  

   let loginPage = new LoginPage(pageFixture.page);
   let po = new POManager(pageFixture.page);

if(!process.env.CI) {
  dotenv.config();
}

Then('Testing', async () => {
    console.log('testing');
});

Then('Demo', async () => {
    console.log('testing1');
});

Then('Launch url', async () => {
    await pageFixture.page.goto(process.env.URL as string);
});

Then('Validate page title', async function () {
    expect(await pageFixture.page.title()).toBe('Log in | Elorus');
});

Then('Enter email', async () => {
    loginPage = new LoginPage(pageFixture.page);
   await loginPage.enterEmail( process.env.EMAIL as string);
});

Then('Enter password', async () => {
    loginPage = new LoginPage(pageFixture.page);
  await loginPage.enterPassword( process.env.PASSWORD as string);

});

Then('Click on sign in button', async () => {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.clickOnSignIn();
});

Then('Validate sign in', async function () {
    expect(await pageFixture.page.title()).toBe('Elorus');
});
