export default class AuthPage {
    selectorList () {
        return {
            emailInput: '[data-cy="email"]',
            passwordInput: '[data-cy="password"]',
        }
    }

    signIn(username, password) {
        cy.contains('button', 'Login').click();
        cy.get(this.selectorList().emailInput).type(username);
        cy.get(this.selectorList().passwordInput).type(password);
        cy.contains('button', 'Sign in').click();
    }

    validateBeingLoggedInAsAdmin() {
        cy.contains('button', 'Logout').should('be.visible');
        cy.contains('button', 'Create New Hero').should('be.visible');
    }

    validateBeingLoggedInAsUser() {
        cy.contains('button', 'Logout').should('be.visible');   
        cy.contains('button', 'Create New Hero').should('not.exist');
    }

    validateUnsuccessfulLogin() {
        cy.contains('div', 'Invalid email or password').should('be.visible');
    }

    logout() {
        cy.contains('button', 'Logout').click();
    }
}