import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import DmsLoginPage from "../../e2e/pages/DmsLoginPage";

Given("I am on the CDK Global login page", () => {
  cy.fixture("login").as("userData");
    DmsLoginPage.visitLoginPage(Cypress.env("CDK_BASE_URL"));
});
When("I enter valid email and password", function () {
  DmsLoginPage.enterUsername(this.userData.cdkglobal.cdkusername);
  DmsLoginPage.enterPassword(this.userData.cdkglobal.cdkpassword);
});

When("I click on Sign In button", () => {
  DmsLoginPage.clickLogin();
});

Then("I should be logged in to DMS successfully", () => {
  DmsLoginPage.verifyDashboard();
});