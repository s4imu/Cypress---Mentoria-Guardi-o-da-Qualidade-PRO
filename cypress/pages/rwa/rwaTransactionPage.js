export default class RwaTransactionPage {
    selectorList(){
        return {
            searchInput: "[data-test='user-list-search-input']",
            amountInput: "#amount",
            noteInput: "#transaction-create-description-input",
            payButton: "[data-test='transaction-create-submit-payment']"
        }
    }

    selectContact(name){
        cy.get(this.selectorList().searchInput).type(name);
        cy.contains('span', name).click();
    }

    fillTransactionForm(amount, note){
        cy.get(this.selectorList().amountInput).type(amount);
        cy.get(this.selectorList().noteInput).type(note);
    }

    submitTransaction(){
        cy.get(this.selectorList().payButton).click();
    }

    validateSuccessMessage(amount, note){
        cy.contains('h2', `Paid $${amount} for ${note}`).should('be.visible');
    }

    validateErrorMessage(message){
        cy.contains('p', message).should('be.visible');
    }

}