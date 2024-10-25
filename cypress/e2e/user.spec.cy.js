import userData from "../fixtures/users/userData.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "input[name='username']",
    passwordField: "input[name='password']",
    loginButton: "[type='submit']",
    sectionTopbarTitle: ".oxd-topbar-header-breadcrumb-module",
    alertErrorMessage: ".oxd-alert-content-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  };

  const paths = {
    dashboard: "/web/index.php/dashboard/index",
  };
  it("Successful login", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", paths.dashboard);
    cy.get(selectorsList.dashboardGrid);
  });
  it("Error login", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertErrorMessage).contains("Invalid credentials");
  });

  it.only("User info update", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", paths.dashboard);
    cy.get(selectorsList.myInfoButton).click();
  });
});
