export default class RwaTransactionHistoryPage {
    selectorList(){
        return {
            transactionItemsTitle: "[data-test^='transaction-sender-']"
        }
    }

    validateNoTrasactionsMessage(){
        cy.contains('h2', 'No Transactions').should('be.visible');
    }

    validateUserTransactions(name){
        cy.get(this.selectorList().transactionItemsTitle).should('have.length.greaterThan', 0);
        cy.get(this.selectorList().transactionItemsTitle).each(($el) => {
            cy.wrap($el).should('contain.text', name);
        });
    }
}