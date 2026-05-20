import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../hooks/pageFixture';

import { POManager } from '../../pages/POManager/POManager';
import * as dotenv from 'dotenv';

let po = new POManager(pageFixture.page);

if(!process.env.CI) {
  dotenv.config();
}

Given('click on invoice from home page', async function () {
return 'pending';

});

When('Navigate to invoice page', async function () {
return 'pending';
});

Then('Invoice page should be displayed', async function () {
return 'pending';
});

When('click on plus icon', async function (string) {
  
    await this.page.click(this.btnQuickAdd);
return 'pending';
});

Then('Create invoice form should be displayed', async function () {
return 'pending';
});

When('Enter customer name', async function () {
return 'pending';
});

When('Enter invoice number', async function () {
return 'pending';
});
