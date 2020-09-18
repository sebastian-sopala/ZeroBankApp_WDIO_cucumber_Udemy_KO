const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const homePage = require('../pageobjects/home.page');
const helpPage = require('../pageobjects/help.page');

Given(/^Navigates to Help page$/, () => {
  homePage.tabsMenu.waitForDisplayed();
  homePage.settingsDropdown.click();
  homePage.helpLink.waitForDisplayed();
  homePage.helpLink.click();
  assert.strictEqual(helpPage.helpPageHeader.getText(), 'Help Topics', 'WRONG PAGE');
});

When(/^User chooses "([^"]*)?"$/, (topic) => {
  if (topic === 'How do I transfer funds?') {
    helpPage.transferQuestion.waitForDisplayed();
    browser.pause(2000);
    helpPage.transferQuestion.click();
    browser.pause(2000);
  } else if (topic === 'How do I pay bills?') {
    helpPage.payBillsQuestion.waitForDisplayed();
    helpPage.payBillsQuestion.click();
    browser.pause(2000);
  } else if (topic === 'How do I log into my account?') {
    helpPage.logInQuestion.waitForDisplayed();
    helpPage.logInQuestion.click();
    browser.pause(2000);
  }
});

Then(/^The "([^"]*)?" page is displayed$/, (response) => {
  if (response === 'transfer funds') {
    helpPage.pageHeader.waitForDisplayed();
    assert.strictEqual(helpPage.pageHeader.getText(), 'How do I transfer funds?', 'WRONG HEADER/PAGE');
  } else if (response === 'pay bills') {
    helpPage.pageHeader.waitForDisplayed();
    assert.strictEqual(helpPage.pageHeader.getText(), 'How do I pay bills?', 'WRONG HEADER/PAGE');
  } else if (response === 'my account') {
    helpPage.pageHeader.waitForDisplayed();
    assert.strictEqual(helpPage.pageHeader.getText(), 'How do I log into my account?', 'WRONG HEADER/PAGE');
  }
});
