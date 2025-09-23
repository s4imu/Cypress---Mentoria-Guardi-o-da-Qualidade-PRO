export default class RwaOnboardingModalPage {
    selectorList(){
        return {
            onboardingNextButton: "[data-test='user-onboarding-next']",
            bankNameInput: "#bankaccount-bankName-input",
            bankRoutingNumberInput: "#bankaccount-routingNumber-input",
            bankAccount: "#bankaccount-accountNumber-input",
            saveButton: "[data-test='bankaccount-submit']",
        }
    }

    completeOnboarding(bank, routingNumber, accountNumber) {
        cy.get(this.selectorList().onboardingNextButton).click();
        this.fillOnboardingAccountForm(bank, routingNumber, accountNumber);
        cy.get(this.selectorList().onboardingNextButton).click();
    }

    fillOnboardingAccountForm(bank, routingNumber, accountNumber){
        cy.get(this.selectorList().bankNameInput).type(bank);
        cy.get(this.selectorList().bankRoutingNumberInput).type(routingNumber);
        cy.get(this.selectorList().bankAccount).type(accountNumber);
        cy.get(this.selectorList().saveButton).click();
    }
}