import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
const Chance = require("chance");

const chance = new Chance();

const loginPage = new LoginPage();

describe("User Orange HRM Tests", () => {
  it("User info update", () => {
    loginPage
      .accessLoginPage()
      .loginValidCredentials(
        userData.userSuccess.username,
        userData.userSuccess.password
      )
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
