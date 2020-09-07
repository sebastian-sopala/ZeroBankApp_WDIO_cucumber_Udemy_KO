const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const faker = require('faker');

const landingPage = require('../pageobjects/landing.page');
const feedbackPage = require('../pageobjects/feedback.page');

Given(/^User navigates to the feedback page$/, () => {
  landingPage.feedbackLink.click();
  feedbackPage.feedbackForm.waitForDisplayed();
});

Given(/^User fills out the form$/, () => {
  feedbackPage.yourNameField.setValue(faker.name.firstName());
  feedbackPage.yourEmailAddress.setValue(faker.internet.email());
  feedbackPage.subjectField.setValue(faker.lorem.word());
  feedbackPage.commentField.setValue(faker.lorem.paragraph());
});

When(/^User sends the form$/, () => {
  feedbackPage.sendButton.click();
});

When(/^User clicks clear button$/, () => {
  feedbackPage.clearButton.click();
});

Then(/^The feedback form is sent$/, () => {
  assert.equal(browser.getUrl(), 'http://zero.webappsecurity.com/sendFeedback.html', 'WRONG URL');
});

Then(/^The feedback form is empty$/, () => {
  assert.equal(feedbackPage.yourNameField.getValue(), '', 'FORM NOT CLEARED');
  assert.equal(feedbackPage.yourEmailAddress.getValue(), '', 'FORM NOT CLEARED');
  assert.equal(feedbackPage.subjectField.getValue(), '', 'FORM NOT CLEARED');
  assert.equal(feedbackPage.commentField.getValue(), '', 'FORM NOT CLEARED');
});
