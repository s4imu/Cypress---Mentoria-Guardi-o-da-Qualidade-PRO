import CypressHeroesMainPage from "../../pages/cypress-heroes/cypressHeroesMainPage";
import HeroPage from "../../pages/cypress-heroes/heroPage";
import AuthPage from "../../pages/cypress-heroes/authPage";
import { faker } from "@faker-js/faker";

describe('Gerenciamento de Heróis - Feature', () => {
    
    const mainPage = new CypressHeroesMainPage();
    const heroPage = new HeroPage();
    const authPage = new AuthPage();

    beforeEach(() => {
        mainPage.accessCypressHeroes();
        mainPage.validateBeingOnMainPage();
        authPage.signIn('admin@test.com', 'test123');
        authPage.validateBeingLoggedInAsAdmin();
    });

    it('TC-01 Navegar para o formulário de criação', () => {
        heroPage.accessCreateHeroForm();
        heroPage.validateBeingOnCreateHeroForm();
    });

    it('TC-02 Criar um herói com dados válidos', () => {
       const heroName = `Hero ${faker.lorem.word()}`;
       heroPage.accessCreateHeroForm();
       heroPage.validateBeingOnCreateHeroForm();
       heroPage.fillHeroForm(heroName, '10', '11', '12', 'Invisibility', 'superhero');
       mainPage.findHeroByName(heroName);
    });

    it('TC-03 Tentar criar um herói com campos obrigatórios vazios', () => {
       heroPage.accessCreateHeroForm();
       heroPage.validateBeingOnCreateHeroForm();
       heroPage.emptyFieldsValidation();
    }); 
});