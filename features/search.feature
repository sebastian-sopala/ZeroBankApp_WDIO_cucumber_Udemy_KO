@search
Feature: Search

Scenario: User can use search
    Given User is on Zero Bank landing page
    When Uses a search
    Then Search results are displayed