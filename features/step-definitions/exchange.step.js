const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const loginPage = require('../pageobjects/login.page');
const landingPage = require('../pageobjects/landing.page');
const homePage = require('../pageobjects/home.page');
const exchangePage = require('../pageobjects/exchange.page');

Given(/^User is secessfully loged in to Zero Bank application$/, () => {
  landingPage.open();
  loginPage.goToLoginPage();
  loginPage.login('username', 'password');
});

When(/^User wants to exchange currency$/, () => {
  homePage.tabsMenu.waitForExist();
  homePage.payBillsTab.click();
  exchangePage.purchaseForeinCurrencyTab.waitForDisplayed();
  exchangePage.purchaseForeinCurrencyTab.click();
  exchangePage.currencySelectField.waitForExist();
  exchangePage.currencySelectField.click();
  exchangePage.currencySelectField.selectByAttribute('value', 'GBP');
  exchangePage.amountField.setValue('500');
  exchangePage.usDollarRadioButton.click();
  exchangePage.purchaseButton.click();
});

Then(/^The currency is sucessfully exchanged$/, () => {
  homePage.sucessfullAlert.waitForDisplayed();
  assert.equal(homePage.sucessfullAlert.getText(), 'Foreign currency cash was successfully purchased.', 'WRONG ALERT MESSAGE');
});
