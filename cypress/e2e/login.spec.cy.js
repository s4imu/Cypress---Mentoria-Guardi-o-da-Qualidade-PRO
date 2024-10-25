describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "input[name='username']",
    passwordField: "input[name='password']",
    loginButton: "[type='submit']",
    sectionTopbarTitle: ".oxd-topbar-header-breadcrumb-module",
    alertErrorMessage: ".oxd-alert-content-text",
  };
  it("Successful login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.sectionTopbarTitle).contains("Dashboard");
  });
  it("Error login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin12");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertErrorMessage).contains("Invalid credentials");
  });
});
