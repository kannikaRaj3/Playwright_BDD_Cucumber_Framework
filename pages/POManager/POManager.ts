import { Page } from 'playwright';
import { LoginPage } from '../pageClasses/LoginPage';
import HomePage from '../pageClasses/HomePage';
import { ContactsPage } from '../pageClasses/ContactsPage';
import  AddContactPage  from '../pageClasses/addContactsPage';

class POManager {
  private page: Page;

  public loginPage: LoginPage;
  public homePage: HomePage;
  public contactsPage: ContactsPage;
  public addContactPage: AddContactPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.contactsPage = new ContactsPage(this.page);
    this.addContactPage = new AddContactPage(this.page);
  }
}

export { POManager };