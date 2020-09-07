@make_payment
Feature: Make payment to saved payees

Scenario: User can make sucesasfull payment to saved payees
    Given User is secessfully loged in to Zero Bank application
    When User makes a payment to saved payees
    Then The payment is sucessfullu transfered

  