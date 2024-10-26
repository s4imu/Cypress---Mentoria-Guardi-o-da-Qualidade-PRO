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
    employeeFirstName: "input[name='firstName']",
    employeeMiddleName: "input[name='middleName']",
    employeeLastName: "input[name='lastName']",
    inputFields: ".oxd-input--active",
    dateInputFields: "[placeholder*='yyyy-dd-mm']",
    selectFields: ".oxd-select-text--arrow",
    saveButtons: "[type='submit']",
    toastMessages: ".oxd-toast-content-text",
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
    cy.get(selectorsList.employeeFirstName)
      .clear()
      .type(userData.userInfo.firstname);
    cy.get(selectorsList.employeeMiddleName)
      .clear()
      .type(userData.userInfo.middleName);
    cy.get(selectorsList.employeeLastName)
      .clear()
      .type(userData.userInfo.lastName);
    cy.get(selectorsList.inputFields)
      .eq(3)
      .clear()
      .type(userData.userInfo.employeeId);
    cy.get(selectorsList.inputFields)
      .eq(4)
      .clear()
      .type(userData.userInfo.otherId);
    cy.get(selectorsList.inputFields)
      .eq(5)
      .clear()
      .type(userData.userInfo.driverLicenseNumber);
    cy.get(selectorsList.dateInputFields)
      .eq(0)
      .clear()
      .type(userData.userInfo.driverLicenseExpirateDate);
    cy.contains("div", "Close").click();
    cy.get(selectorsList.selectFields).eq(0).click();
    cy.contains("span", userData.userInfo.nationality).click();
    cy.get(selectorsList.selectFields).eq(1).click();
    cy.contains("span", userData.userInfo.maritalStatus).click();
    cy.get(selectorsList.dateInputFields)
      .eq(1)
      .clear()
      .type(userData.userInfo.birthDate);
    cy.contains("div", "Close").click();
    cy.contains("label", userData.userInfo.gender).click();
    cy.get(selectorsList.saveButtons).eq(0).click();
    cy.get(selectorsList.toastMessages).eq(1).contains("Successfully Updated");
  });
});
