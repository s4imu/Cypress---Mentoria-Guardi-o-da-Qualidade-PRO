import LoginPage from "./loginPage";

export default class MyInfoPage {
  selectorsList() {
    return {
      employeeFirstName: "input[name='firstName']",
      employeeMiddleName: "input[name='middleName']",
      employeeLastName: "input[name='lastName']",
      inputFields: ".oxd-input--active",
      dateInputFields: "[placeholder*='yyyy']",
      selectFields: ".oxd-select-text--arrow",
      saveButtons: "[type='submit']",
      toastMessages: ".oxd-toast-content-text",
    };
  }

  fillPersonalInfo(
    firstName,
    middleName,
    lastName,
    driverLicenseNumber,
    licenseExpiryDate,
    nationality,
    martialStatus,
    birthDate,
    gender
  ) {
    console.log(lastName);
    cy.get(this.selectorsList().employeeFirstName).clear().type(firstName);
    cy.get(this.selectorsList().employeeMiddleName).clear().type(middleName);
    cy.get(this.selectorsList().employeeLastName).clear().type(lastName);
    cy.get(this.selectorsList().inputFields)
      .eq(5)
      .clear()
      .type(driverLicenseNumber);
    cy.get(this.selectorsList().dateInputFields)
      .eq(0)
      .clear()
      .type(licenseExpiryDate);
    cy.get(this.selectorsList().selectFields).eq(0).click({ force: true });
    cy.contains("span", nationality).click();
    cy.get(this.selectorsList().selectFields).eq(1).click();
    cy.contains("span", martialStatus).click();
    cy.get(this.selectorsList().dateInputFields).eq(1).clear().type(birthDate);
    cy.contains("label", gender).click({ force: true });
    return this;
  }

  fillProfessionalInfo(employeeId, otherId) {
    cy.get(this.selectorsList().inputFields).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().inputFields).eq(3).clear().type(otherId);
    return this;
  }

  saveUserInfo() {
    cy.get(this.selectorsList().saveButtons).eq(0).click();
    return this;
  }

  checkSaveMessage() {
    cy.get(this.selectorsList().toastMessages)
      .eq(1)
      .contains("Successfully Updated");
    return new LoginPage();
  }
}
