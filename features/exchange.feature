@exchange
Feature: Currency exchange

Scenario: User can sucessfully exchange currency
    Given User is secessfully loged in to Zero Bank application
    When User wants to exchange currency
    Then The currency is sucessfully exchanged
