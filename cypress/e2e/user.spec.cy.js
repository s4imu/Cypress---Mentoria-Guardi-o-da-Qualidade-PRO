import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Orange HRM Tests", () => {
  it("Successful login", () => {
    loginPage
      .accessLoginPage()
      .loginValidCredentials(
        userData.userSuccess.username,
        userData.userSuccess.password
      )
      .checkDashboardPage();
  });
  it("Error login", () => {
    loginPage
      .accessLoginPage()
      .loginInvalidCredentials(
        userData.userFail.username,
        userData.userFail.password
      );
  });

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
        userData.userInfo.firstname,
        userData.userInfo.middleName,
        userData.userInfo.lastName,
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
