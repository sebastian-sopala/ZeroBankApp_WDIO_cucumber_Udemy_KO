const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const homePage = require('../pageobjects/home.page');
const makePaymentPage = require('../pageobjects/make-payments.page');

When(/^User makes a payment to saved payees$/, () => {
  homePage.tabsMenu.waitForDisplayed();
  homePage.payBillsTab.click();
  makePaymentPage.payeeField.waitForDisplayed();
  makePaymentPage.payeeField.click();
  makePaymentPage.payeeField.selectByAttribute('value', 'apple');
  makePaymentPage.accountField.click();
  makePaymentPage.accountField.selectByVisibleText('Savings');
  makePaymentPage.amountField.setValue('300');
  makePaymentPage.dateField.setValue('2020-09-30');
  makePaymentPage.descriptionField.setValue('Test Payment');
  makePaymentPage.payButton.click();
});

Then(/^The payment is sucessfullu transfered$/, () => {
  homePage.sucessfullAlert.waitForDisplayed();
  assert.equal(homePage.sucessfullAlert.getText(), 'The payment was successfully submitted.', 'WRONG ALERT MESSAGE');
});
