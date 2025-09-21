export default class RwaMainPage {
    selectorList() {
    return {
        transactionList: "[data-test='transaction-list']"
    }
    }

    shouldBeMainPage() {
        cy.get(this.selectorList().transactionList).should("be.visible");
    }
}