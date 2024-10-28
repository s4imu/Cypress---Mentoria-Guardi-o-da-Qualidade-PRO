import DashboardPage from "../pages/dashboardPage";

export default class LoginPage {
  selectorList() {
    return {
      usernameField: "input[name='username']",
      passwordField: "input[name='password']",
      loginButton: "[type='submit']",
      alertErrorMessage: ".oxd-alert-content-text",
    };
  }

  accessLoginPage() {
    cy.visit("/auth/login");
    return this;
  }

  login(username, password) {
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().loginButton).click();
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
