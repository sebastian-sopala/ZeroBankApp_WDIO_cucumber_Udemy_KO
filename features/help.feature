@help @wip
Feature: Help

 Scenario Outline: User can use help
    Given User is secessfully loged in to Zero Bank application
    And Navigates to Help page
    When User chooses "<topic>"
    Then The "<response>" page is displayed

    Examples:
    | topic                         | response       |
    | How do I log into my account? | my account     |
    | How do I transfer funds?      | transfer funds |
    | How do I pay bills?           | pay bills      |
    

