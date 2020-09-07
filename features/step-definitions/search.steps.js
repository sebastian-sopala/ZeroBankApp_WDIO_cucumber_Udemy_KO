const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const searchPage = require('../pageobjects/search.page');

const term = 'bank';

When(/^Uses a search$/, () => {
  searchPage.search(term);
});

Then(/^Search results are displayed$/, () => {
  searchPage.pageHeader.waitForDisplayed();
  assert.equal(searchPage.pageHeader.getText(), 'Search Results:', 'WRONG HEADER');
  assert.equal(browser.getUrl(), `http://zero.webappsecurity.com/search.html?searchTerm=${term}`);
});
