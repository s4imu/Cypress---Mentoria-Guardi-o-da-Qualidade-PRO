export default class CypressHeroesMainPage {
    selectorList () {
        return {
            heroCard: '[data-cy="hero-card"]',
            moneyButton: '[data-cy="money"]',
            likeButton: '[data-cy="like"]',
        }
    }

    accessCypressHeroes () {
        cy.visit('http://localhost:3000/heroes');
    }

    validateBeingOnMainPage () {
        cy.url().should('include', '/heroes');
        cy.contains('button', 'Login').should('be.visible');
        cy.get(this.selectorList().heroCard).should('have.length.greaterThan', 0);
        cy.get(this.selectorList().moneyButton).should('be.visible');
        cy.get(this.selectorList().likeButton).should('be.visible');
    }

    likeHero () {
        cy.get(this.selectorList().heroCard).first().as('firstHeroCard');
        cy.get('@firstHeroCard').find(this.selectorList().likeButton).as('likeButton');
        cy.get('@likeButton').click();
    }

    hireHero () {
        cy.get(this.selectorList().heroCard).first().as('firstHeroCard');
        cy.get('@firstHeroCard').find(this.selectorList().moneyButton).as('moneyButton');
        cy.get('@moneyButton').click();
    }

    validateModalProhibition (action) {
        if (action === 'like') {
            cy.contains('You must log in to like.').should('be.visible');
            cy.contains('button', 'Ok').click();
        }
        if (action === 'hire') {
            cy.contains('You must log in to hire this hero.').should('be.visible');
            cy.contains('button', 'Ok').click();
        }
    }

    findHeroByName (name) {
        cy.get(this.selectorList().heroCard).contains(name).should('be.visible');
    }


}