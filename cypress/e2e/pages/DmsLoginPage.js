import { dmsloginSelectors } from "../selectors/dmsloginSelectors";

class DmsLoginPage {
  visitLoginPage() {
    cy.visit(Cypress.env("CDK_BASE_URL"));
  }

  enterUsername(username) {
    cy.get(dmsloginSelectors.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(dmsloginSelectors.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(dmsloginSelectors.loginButton).click();
  }

  verifyDashboard() {
    cy.get(dmsloginSelectors.homeText)
      .should("be.visible")
      .and("contain", "Home");
  }
}

export default new DmsLoginPage();