import { loginSelectors } from "../selectors/loginSelectors";

class LoginPage {
  visitLoginPage() {
    cy.visit(Cypress.env("ORANGEHRM_BASE_URL"));
  }

  enterUsername(username) {
    cy.get(loginSelectors.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(loginSelectors.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(loginSelectors.loginButton).click();
  }

  verifyDashboard() {
    cy.get(loginSelectors.dashboardHeader)
      .should("be.visible")
      .and("contain", "Dashboard");
  }
}

export default new LoginPage();