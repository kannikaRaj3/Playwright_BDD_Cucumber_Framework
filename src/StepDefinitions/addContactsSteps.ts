import { Given, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';
import { LoginPage } from '../../pages/pageClasses/LoginPage';
import { ElorusHomePage } from '../../pages/pageClasses/HomePage';
import { ContactsPage } from '../../pages/pageClasses/ContactsPage';
import ElorusAddContactsPage from '../../pages/pageClasses/addContactsPage';

let loginPage: LoginPage;
let homePage: ElorusHomePage;
let contactsPage: ContactsPage;
let addContactsPage: ElorusAddContactsPage;

Given('On the login page', async () => {
       await pageFixture.page.goto(process.env.URL as string);

});

When('Enter login credentials', async () => {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.enterEmail( process.env.EMAIL as string);
    await loginPage.enterPassword( process.env.PASSWORD as string);
});

When('Click on the sign in button', async () => {
    await loginPage.clickOnSignIn();
});

When('Click on contacts from home page', async () => {
    homePage = new ElorusHomePage(pageFixture.page);
    await homePage.clickContacts();
});

When('Click on add button from contacts page', async () => {
    contactsPage = new ContactsPage(pageFixture.page);
    await contactsPage.clickAdd();
});

When('Enter First name', async function () {
    addContactsPage = new ElorusAddContactsPage(pageFixture.page);
    await addContactsPage.setfirstName(process.env.FIRSTNAME as string);
 });
       
When('Enter Last name', async function () {
    addContactsPage = new ElorusAddContactsPage(pageFixture.page);
    await addContactsPage.setLastName(process.env.LASTNAME as string);

});
       
When('Enter company', async function () {
    addContactsPage = new ElorusAddContactsPage(pageFixture.page);
    await addContactsPage.setCompany(process.env.COMPANY as string);
});
       
When('Enter Profession', async function () {
    addContactsPage = new ElorusAddContactsPage(pageFixture.page);
    await addContactsPage.setProfession(process.env.PROFESSION as string);
});


When('Click on save button', async () => {
    await addContactsPage.clickSave();
});