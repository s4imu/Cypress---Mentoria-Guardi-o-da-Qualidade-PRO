export default class HeroPage {
    selectorList () {
        return {
            nameInput: '[data-cy="nameInput"]',
            priceInput: '[data-cy="priceInput"]',
            fansInput: '[data-cy="fansInput"]',
            savesInput: '[data-cy="savesInput"]',
            powersSelect: '[data-cy="powersSelect"]',
            avatarFile: '[data-cy="avatarFile"]'    
        }
    }

    accessCreateHeroForm () {
        cy.contains('button', 'Create New Hero').click();
    }

    validateBeingOnCreateHeroForm () { 
        cy.url().should('include', '/heroes/new');
        cy.get(this.selectorList().nameInput).should('be.visible');
     }

    fillHeroForm (name, price, fans, saves, power, avatar) {
        cy.get(this.selectorList().nameInput).type(name);
        cy.get(this.selectorList().priceInput).type(price);
        cy.get(this.selectorList().fansInput).type(fans);
        cy.get(this.selectorList().savesInput).type(saves);
        cy.get(this.selectorList().powersSelect).select(power);
        cy.get(this.selectorList().avatarFile).selectFile(`cypress/fixtures/${avatar}.png`);
        cy.contains('button', 'Submit').click();
    }

    emptyFieldsValidation () {
        cy.contains('button', 'Submit').click();
        cy.contains('div', 'Name is required').should('be.visible');
        cy.contains('div', 'Price is required').should('be.visible');
        cy.contains('div', 'Fans is required').should('be.visible');
        cy.contains('div', 'Saves is required').should('be.visible');
        cy.contains('div', 'Powers is required').should('be.visible');
    }

}