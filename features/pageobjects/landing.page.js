class LandingPage {
  open() {
    browser.url('http://zero.webappsecurity.com/');
    this.logo.waitForDisplayed();
  }

  get logo() {
    return browser.$('a.brand');
  }

  get signinButton() {
    return browser.$('#signin_button');
  }

  get feedbackLink() {
    return browser.$('#feedback');
  }
}

module.exports = new LandingPage();
