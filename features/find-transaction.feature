@find_transaction @wip
# application issue - not working as expected
Feature: Find transaction

Scenario Outline: User searches for transaction
    Given User is secessfully loged in to Zero Bank application
    And Navigates to Find Transaction page
    When User fills out the Find Transaction form with "<inputText>"
    Then The "<result>" is displayed


Examples:
    | inputText        | result      |
    | Test Transaction | allert      |
    | OFFICE SUPPLY    | transaction |