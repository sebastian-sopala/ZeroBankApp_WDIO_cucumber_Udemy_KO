@find_transaction
Feature: Find transaction

Background: User is on find transaction page
    Given User is secessfully loged in to Zero Bank application
    And Navigates to Find Transaction page


Scenario: User can find transaction if it exists
    When User fills out the 'Find Transaction' form with invalid data
    Then No results alert is displayed

Scenario: User gets No Result if transaction doesn't exist
    When User fills out the 'Find Transaction' form with valid data
    Then The results are displayed