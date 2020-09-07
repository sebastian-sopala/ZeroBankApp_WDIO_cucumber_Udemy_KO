@feedback
Feature: Feedback form

Background: User filled out the feedback form
    Given User is on Zero Bank landing page
    And User navigates to the feedback page
    And User fills out the form

Scenario: User can send a feedback form
    And User sends the form
    Then The feedback form is sent

Scenario: User can clear the feedback form
    And User clicks clear button
    Then The feedback form is empty