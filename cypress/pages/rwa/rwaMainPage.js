export default class RwaMainPage {
    selectorList() {
    return {
        transactionList: "[data-test='transaction-list']",
        newTransactionButton: "[data-test='nav-top-new-transaction']"
    }
    }

    shouldBeMainPage() {
        cy.get(this.selectorList().transactionList).should("be.visible");
    }

    startTransaction(){
        cy.get(this.selectorList().newTransactionButton).click();
    }
}