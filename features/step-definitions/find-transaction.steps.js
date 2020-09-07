const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const homePage = require('../pageobjects/home.page');
const findTransactionPage = require('../pageobjects/find-transaction.page');

Given(/^Navigates to Find Transaction page$/, () => {
  homePage.tabsMenu.waitForDisplayed();
  homePage.accountActivityTab.click();
  findTransactionPage.findTransactionTab.waitForDisplayed();
  findTransactionPage.findTransactionTab.click();
  findTransactionPage.description.waitForDisplayed();
});

When(/^User fills out the 'Find Transaction' form with invalid data$/, () => {
  findTransactionPage.description.setValue('test transfer');
  findTransactionPage.findButton.click();
});

When(/^User fills out the 'Find Transaction' form with valid data$/, () => {
  findTransactionPage.description.setValue('OFFICE SUPPLY');
  findTransactionPage.findButton.click();
});

Then(/^No results alert is displayed$/, () => {
  findTransactionPage.noResultsAlert.waitForDisplayed();
  assert.equal(findTransactionPage.noResultsAlert.getText(), 'No results.', 'WRONG ALERT');
});

Then(/^The results are displayed$/, () => {
  findTransactionPage.findTransactionResults.waitForDisplayed();
  assert.equal(findTransactionPage.findTransactionRecord.getText(), 'OFFICE SUPPLY', 'WRONG ALERT');
});
