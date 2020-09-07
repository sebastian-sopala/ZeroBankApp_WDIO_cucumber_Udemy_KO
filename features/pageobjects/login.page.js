const landingPage = require('./landing.page');

class LoginPage {
  get loginForm() {
    return browser.$('#login_form');
  }

  get loginField() {
    return browser.$('#user_login');
  }

  get passwordField() {
    return browser.$('#user_password');
  }

  get submitButton() {
    return browser.$('input[type="submit"]');
  }

  get alertMessage() {
    return browser.$('*.alert');
  }

  // METHODS

  goToLoginPage() {
    landingPage.signinButton.click();
    this.loginForm.waitForDisplayed();
  }

  login(user, password) {
    this.loginField.setValue(user);
    this.passwordField.setValue(password);
    this.submitButton.click();
  }
}

module.exports = new LoginPage();
