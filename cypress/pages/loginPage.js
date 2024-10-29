import DashboardPage from "../pages/dashboardPage";

export default class LoginPage {
  selectorList() {
    return {
      usernameField: "input[name='username']",
      passwordField: "input[name='password']",
      loginButton: "[type='submit']",
      alertErrorMessage: ".oxd-alert-content-text",
      logoutMenu: "i[class*='dropdown']",
      loginForm: ".orangehrm-login-form",
    };
  }

  accessLoginPage() {
    cy.visit("/auth/login");
    return this;
  }

  login(username, password) {
    cy.location("pathname").should("equal", "/web/index.php/auth/login");
    cy.get(this.selectorList().loginForm).should("be.visible");
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().loginButton).click();
  }

  logout() {
    cy.get(this.selectorList().logoutMenu).click();
    cy.contains("a", "Logout").click();
    cy.location("pathname").should("equal", "/web/index.php/auth/login");
    cy.get(this.selectorList().loginForm).should("be.visible");
  }

  loginValidCredentials(username, password) {
    this.login(username, password);
    return new DashboardPage();
  }
  loginInvalidCredentials(username, password) {
    this.login(username, password);
    cy.get(this.selectorList().alertErrorMessage).contains(
      "Invalid credentials"
    );
  }
}
