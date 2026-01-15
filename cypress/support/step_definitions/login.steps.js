import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../e2e/pages/LoginPage";

Given("I am on the OrangeHRM login page", () => {
  cy.fixture("login").as("userData");
  loginPage.visitLoginPage(Cypress.env("ORANGEHRM_BASE_URL"));
});

When("I enter valid username and password", function () {
  loginPage.enterUsername(this.userData.orangehrm.username);
  loginPage.enterPassword(this.userData.orangehrm.password);
});

When("I click on login button", () => {
  loginPage.clickLogin();
});

Then("I should be logged in successfully", () => {
  loginPage.verifyDashboard();
});