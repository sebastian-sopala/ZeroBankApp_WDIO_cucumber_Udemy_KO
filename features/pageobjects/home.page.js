class HomePage {
  get tabsMenu() {
    return browser.$('.nav-tabs');
  }

  get accountActivityTab() {
    return browser.$('.nav-tabs > li:nth-child(2)');
  }

  get usernameDropdown() {
    return browser.$('.icon-user');
  }

  get settingsDropdown() {
    return browser.$('.icon-cog');
  }

  get logoutButton() {
    return browser.$('#logout_link');
  }

  get helpLink() {
    return browser.$('#help_link');
  }

  get payBillsTab() {
    return browser.$('#pay_bills_tab');
  }

  get sucessfullAlert() {
    return browser.$('#alert_content');
  }

  // METHODS

  logout() {
    this.usernameDropdown.click();
    this.logoutButton.click();
  }
}

module.exports = new HomePage();
