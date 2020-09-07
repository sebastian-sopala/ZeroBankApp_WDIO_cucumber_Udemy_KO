const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const landingPage = require('../pageobjects/landing.page');
const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page');

Given(/^User is on Zero Bank landing page$/, () => {
  landingPage.open();
});

When(/^I enter invalid credentials$/, () => {
  loginPage.goToLoginPage();
  loginPage.login('invalid', 'invalid');
});

When(/^I enter valid credentials$/, () => {
  loginPage.goToLoginPage();
  loginPage.login('username', 'password');
});

When(/^I can log out$/, () => {
  homePage.logout();
});

Then(/^I should not be able to log in$/, () => {
  loginPage.alertMessage.waitForDisplayed();
  assert.equal(loginPage.alertMessage.getText(), 'Login and/or password are wrong.', 'WRONG ALERT MESSAGE');
});

Then(/^I should be able to log in$/, () => {
  homePage.tabsMenu.waitForExist();
  assert.equal(homePage.usernameDropdown.isExisting(), true);
});

Then(/^I'm logged out$/, () => {
  landingPage.signinButton.isDisplayed();
});
