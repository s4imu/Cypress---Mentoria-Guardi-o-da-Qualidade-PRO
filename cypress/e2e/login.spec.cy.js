import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Orange HRM Tests", () => {
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
});
