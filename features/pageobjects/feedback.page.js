class FeedbackPage {
  get feedbackForm() {
    return browser.$('form');
  }

  get yourNameField() {
    return browser.$('#name');
  }

  get yourEmailAddress() {
    return browser.$('#email');
  }

  get subjectField() {
    return browser.$('#subject');
  }

  get commentField() {
    return browser.$('#comment');
  }

  get clearButton() {
    return browser.$('input[type="reset"]');
  }

  get sendButton() {
    return browser.$('input[type="submit"]');
  }
}

module.exports = new FeedbackPage();
