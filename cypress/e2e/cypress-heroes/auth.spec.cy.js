import AuthPage from "../../pages/cypress-heroes/authPage";
import CypressHeroesMainPage from '../../pages/cypress-heroes/cypressHeroesMainPage.js'

describe('Autenticação - Feature', () => {
    
    const authPage = new AuthPage();
    const mainPage = new CypressHeroesMainPage();


    beforeEach(() => {
        mainPage.accessCypressHeroes();
        mainPage.validateBeingOnMainPage();
    });

    it('TC-AUTH-01 Login com credenciais de administrador válidas', () => {
        authPage.signIn('admin@test.com', 'test123');
        authPage.validateBeingLoggedInAsAdmin();
    });

    it('TC-AUTH-02 Login com credenciais de usuário válidas', () => {
        authPage.signIn('test@test.com', 'test123');
        authPage.validateBeingLoggedInAsUser();
    });

    it('TC-AUTH-03 Login com credenciais inválidas', () => {
        authPage.signIn('invalid@test.com', 'invalid123');
        authPage.validateUnsuccessfulLogin();
    });

    it('TC-AUTH-04 Logout do sistema', () => {
        authPage.signIn('admin@test.com', 'test123');
        authPage.validateBeingLoggedInAsAdmin();
        authPage.logout();
        mainPage.validateBeingOnMainPage();
    });

});