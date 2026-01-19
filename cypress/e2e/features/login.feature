Feature: OrangeHRM Login

  @smoke
  Scenario: Login with valid credentials
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click on login button
    Then I should be logged in successfully