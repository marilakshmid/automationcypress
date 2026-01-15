Feature: CDK Global Login

  Scenario: Login with valid credentials
    Given I am on the CDK Global login page
    When I enter valid email and password
    And I click on Sign In button
    Then I should be logged in to DMS successfully