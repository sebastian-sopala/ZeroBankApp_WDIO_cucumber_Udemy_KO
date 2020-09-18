class HelpPage {
  get helpPageHeader() {
    return browser.$('.page-header');
  }

  get logInQuestion() {
    return browser.$('.questions > li:nth-child(1)');
  }

  get transferQuestion() {
    return browser.$('.questions > li:nth-child(2)');
  }

  get payBillsQuestion() {
    return browser.$('.questions > li:nth-child(3)');
  }

  get pageHeader() {
    return browser.$('.span8 > h3');
  }
}

module.exports = new HelpPage();
