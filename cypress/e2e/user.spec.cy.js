import userData from "../fixtures/users/userData.json";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";
const Chance = require("chance");

const chance = new Chance();

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("User Orange HRM Tests", () => {
  beforeEach(() => {
    cy.log("Executando beforeEach - Login");
    loginPage
      .accessLoginPage()
      .login(userData.userSuccess.username, userData.userSuccess.password);
  });

  afterEach(() => {
    loginPage.logout();
  });

  it("User info update", () => {
    cy.log("Executando teste - Atualização de Informações");
    dashboardPage
      .checkDashboardPage()
      .clickMyInfoButton()
      .fillPersonalInfo(
        chance.first(),
        userData.userInfo.middleName,
        chance.last({ nationality: "en" }),
        userData.userInfo.driverLicenseNumber,
        userData.userInfo.driverLicenseExpirateDate,
        userData.userInfo.nationality,
        userData.userInfo.maritalStatus,
        userData.userInfo.birthDate,
        userData.userInfo.gender
      )
      .fillProfessionalInfo(
        userData.userInfo.employeeId,
        userData.userInfo.otherId
      )
      .saveUserInfo()
      .checkSaveMessage();
  });
});
