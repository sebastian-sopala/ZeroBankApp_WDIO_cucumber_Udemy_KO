class SearchPage {
  get searchField() {
    return browser.$('#searchTerm');
  }

  get pageHeader() {
    return browser.$('h2');
  }

  // METHODS

  search(term) {
    this.searchField.setValue(term);
    browser.keys('Enter');
  }
}

module.exports = new SearchPage();
