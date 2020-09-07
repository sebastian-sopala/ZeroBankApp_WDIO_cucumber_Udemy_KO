@login
Feature: Login / Logout

  Background: User is on Zero Bank landing page
    Given User is on Zero Bank landing page

  Scenario: User can not log in with invalid credentials
    When I enter invalid credentials
    Then I should not be able to log in

  Scenario: User can log in with valid credentials and log out
    When I enter valid credentials
    Then I should be able to log in
    And I can log out
    And I'm logged out


