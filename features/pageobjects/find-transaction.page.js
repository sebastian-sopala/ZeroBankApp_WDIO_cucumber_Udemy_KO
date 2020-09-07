class FindTransactionPage {
  get findTransactionTab() {
    return browser.$('#tabs > ul > li:nth-child(2)');
  }

  get description() {
    return browser.$('#aa_description');
  }

  get findButton() {
    return browser.$('button[type="submit"]');
  }

  get noResultsAlert() {
    return browser.$('.well');
  }

  get findTransactionResults() {
    return browser.$('#filtered_transactions_for_account');
  }

  get findTransactionRecord() {
    return browser.$('table > tbody > tr:nth-child(2) > td:nth-child(2)');
  }
}

module.exports = new FindTransactionPage();
