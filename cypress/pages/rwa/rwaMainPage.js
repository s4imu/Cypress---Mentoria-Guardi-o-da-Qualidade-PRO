export default class RwaMainPage {
    selectorList() {
    return {
        transactionList: "[data-test='transaction-list']",
        newTransactionButton: "[data-test='nav-top-new-transaction']",
        transactionHistoryTab: "[data-test='nav-personal-tab']",
        
        }
    }

    shouldBeMainPage() {
        cy.get(this.selectorList().transactionList).should("be.visible");
    }

    startTransaction(){
        cy.get(this.selectorList().newTransactionButton).click();
    }

    accessTransactionHistory(){
        cy.get(this.selectorList().transactionHistoryTab).click();
    }

    accessHomePage() {
        cy.contains('span', 'Home').click();
    }
}