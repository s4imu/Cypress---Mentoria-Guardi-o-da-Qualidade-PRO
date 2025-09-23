import RwaLoginPage from "../../pages/rwa/rwaLoginPage";
import RwaMainPage from "../../pages/rwa/rwaMainPage";
import RwaTransactionHistoryPage from "../../pages/rwa/rwaTransactionHistory";
import RwaSignUpPage from "../../pages/rwa/rwaSignUpPage"
import RwaTransactionPage from "../../pages/rwa/rwaTransactionPage"
import RwaOnboardingModalPage from "../../pages/rwa/rwaOnboardingModalPage";
import { faker } from '@faker-js/faker';

describe('RWA Transaction History', () => {
    const rwaLoginPage = new RwaLoginPage();
    const rwaMainPage = new RwaMainPage();
    const rwaSignUpPage = new RwaSignUpPage();
    const rwaTransactionHistoryPage = new RwaTransactionHistoryPage();
    const rwaTransactionPage = new RwaTransactionPage();
    const rwaOnboardingModalPage = new RwaOnboardingModalPage();

    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        rwaLoginPage.accessLoginPage();
        rwaLoginPage.signIn('admin', '123456');
        rwaMainPage.shouldBeMainPage();
        rwaMainPage.startTransaction();
        rwaTransactionPage.selectContact('Ted Parisian');
        rwaTransactionPage.fillTransactionForm('100.00', 'alugel')
        rwaTransactionPage.submitTransaction();
        rwaTransactionPage.validateSuccessMessage('100.00', 'alugel');
        rwaMainPage.accessHomePage();
        rwaMainPage.accessTransactionHistory();
        rwaTransactionHistoryPage.validateUserTransactions('admin name')
    });

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const password = 1234;

        rwaSignUpPage.accessSignupPage();
        rwaSignUpPage.signUp(firstName, lastName, firstName, password);
        rwaLoginPage.shouldBeLoginPage();
        rwaLoginPage.signIn(firstName, password);
        rwaOnboardingModalPage.completeOnboarding(`${firstName} bank`, 123456789, 123456789);
        rwaMainPage.shouldBeMainPage();
        rwaMainPage.accessTransactionHistory();
        rwaTransactionHistoryPage.validateNoTrasactionsMessage();
    });
})