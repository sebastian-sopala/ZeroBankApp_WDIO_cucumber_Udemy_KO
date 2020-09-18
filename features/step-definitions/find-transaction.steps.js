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

When(/^User fills out the Find Transaction form with "([^"]*)?"$/, (inputText) => {
  console.log(inputText);
  findTransactionPage.description.setValue(inputText);
  findTransactionPage.findButton.click();
});

Then(/^The "([^"]*)?" is displayed$/, (result) => {
  if (result === 'allert') {
    findTransactionPage.noResultsAlert.waitForDisplayed();
    assert.strictEqual(findTransactionPage.noResultsAlert.getText(), 'No results.', 'WRONG ALERT');
  } else {
    findTransactionPage.findTransactionResults.waitForDisplayed();
    assert.strictEqual(findTransactionPage.findTransactionRecord.getText(), 'OFFICE SUPPLY', 'WRONG ALERT');
  }
});
