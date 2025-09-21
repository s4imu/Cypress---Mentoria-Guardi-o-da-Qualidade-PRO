import RwaLoginPage from "../../pages/rwa/rwaLoginPage";
import RwaMainPage from "../../pages/rwa/rwaMainPage";

describe('RWA Login', () => {

    const rwaLoginPage = new RwaLoginPage();
    const rwaMainPage  = new RwaMainPage();

    beforeEach(()=>{
        rwaLoginPage.accessLoginPage();
    })

    it('Deve fazer login com um usuário válido', () => {
      rwaLoginPage.signIn('admin', 123456);
      rwaMainPage.shouldBeMainPage();
    });

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => { 
        rwaLoginPage.signIn('admin', 1234);
        rwaLoginPage.unsuccessfulSignIn();
    });
});