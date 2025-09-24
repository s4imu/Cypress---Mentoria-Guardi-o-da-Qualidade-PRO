import CypressHeroesMainPage from '../../pages/cypress-heroes/cypressHeroesMainPage.js'

describe('Visualização Pública (Usuário Não Autenticado) - Feature', () => {
    
    const mainPage = new CypressHeroesMainPage();

    beforeEach(() => {
        mainPage.accessCypressHeroes();
    });

    it('TC-PUB-01 Visualizar galeria de heróis', () => {
        mainPage.validateBeingOnMainPage();
    });

    it('TC-PUB-02 Tentar "curtir" (like) um herói', () => {
        mainPage.validateBeingOnMainPage();
        mainPage.likeHero();
        mainPage.validateModalProhibition('like');
    });

    it('TC-PUB-03 Tentar "contratar" um herói', () => {
        mainPage.validateBeingOnMainPage();
        mainPage.hireHero();
        mainPage.validateModalProhibition('hire');
    });

});