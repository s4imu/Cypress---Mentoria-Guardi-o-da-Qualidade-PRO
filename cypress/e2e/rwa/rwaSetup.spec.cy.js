import RwaLoginPage from "../../pages/rwa/rwaLoginPage";
import RwaMainPage from "../../pages/rwa/rwaMainPage";
import RwaSignupPage from "../../pages/rwa/rwaSignUpPage";
import RwaOnboardingModalPage from "../../pages/rwa/rwaOnboardingModalPage";

describe("RWA Setup", () => {
  const rwaLoginPage = new RwaLoginPage();
  const rwaMainPage = new RwaMainPage();
  const rwaSignupPage = new RwaSignupPage();
  const rwaOnboardingModalPage = new RwaOnboardingModalPage();

  it("Criar conta admin", () => {
    rwaSignupPage.accessSignupPage();
    rwaSignupPage.signUp("admin", "name", "admin", 123456);
    rwaLoginPage.shouldBeLoginPage();
    rwaLoginPage.signIn("admin", "123456");
    rwaOnboardingModalPage.completeOnboarding("admin bank", 123456789, 123456789);
    rwaMainPage.shouldBeMainPage();
  });
});