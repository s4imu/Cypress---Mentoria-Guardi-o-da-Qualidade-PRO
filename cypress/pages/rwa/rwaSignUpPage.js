export default class SignUpPage {
    selectorList(){
        return {
            firstNameInput: "#firstName",
            lastNameInput: "#lastName",
            usernameInput: "#username",
            passwordInput: "#password",
            confirmPasswordInput: "#confirmPassword",
            signUpButton: "[type='submit']"
        }
    }

    accessSignupPage() {
        cy.visit('http://localhost:3000/signup')
        cy.get(this.selectorList().firstNameInput).should("be.visible")
    }

    signUp(firstName, lastName, username, password) {
        cy.get(this.selectorList().firstNameInput).type(firstName)
        cy.get(this.selectorList().lastNameInput).type(lastName)
        cy.get(this.selectorList().usernameInput).type(username)
        cy.get(this.selectorList().passwordInput).type(password)
        cy.get(this.selectorList().confirmPasswordInput).type(password)
        cy.get(this.selectorList().signUpButton).click()
    }

    unsuccessfulSignUp() {
        cy.get(this.selectorList().signUpButton).click()
        cy.contains('First Name is required').should('be.visible')
        
    }
}