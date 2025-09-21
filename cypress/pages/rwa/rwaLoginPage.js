export default class RwaLoginPage {
  selectorList() {
    return {
      usernameField: "input[name='username']",
      passwordField: "input[name='password']",
      signInButton: "[type='submit']",
      errorMessage: ".MuiAlert-message",
      pageTitle: "h1.MuiTypography-root"
    };
  }

  accessLoginPage() {
    cy.visit('http://localhost:3000/signin');
    this.shouldBeLoginPage();
  }

  signIn(username, password) {
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().signInButton).click();
  }

  unsuccessfulSignIn(){
    cy.get(this.selectorList().errorMessage).should('contain.text', 'Username or password is invalid')
  }

  shouldBeLoginPage() {
    cy.get(this.selectorList().pageTitle).should('contain.text', 'Sign in');
  }
}
