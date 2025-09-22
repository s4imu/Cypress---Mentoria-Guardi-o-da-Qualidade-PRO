import RwaLoginPage from "../../pages/rwa/rwaLoginPage";
import RwaMainPage from "../../pages/rwa/rwaMainPage";
import RwaTransactionPage from "../../pages/rwa/rwaTransactionPage";

describe('RWA Transaction', () => {

    const rwaLoginPage = new RwaLoginPage();
    const rwaMainPage  = new RwaMainPage();
    const rwaTransactionPage = new RwaTransactionPage();
    const amount = '100.00';
    const note = "aluguel";
    const contact = "Ted Parisian"

    beforeEach(()=>{
        rwaLoginPage.accessLoginPage();
        rwaLoginPage.signIn('admin', 123456);
        rwaMainPage.shouldBeMainPage();
    })

    it('Deve enviar dinheiro com sucesso', () => {
        rwaMainPage.startTransaction();
        rwaTransactionPage.selectContact(contact);
        rwaTransactionPage.fillTransactionForm(amount, note);
        rwaTransactionPage.submitTransaction();
        rwaTransactionPage.validateSuccessMessage(amount, note);
    });

    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        rwaMainPage.startTransaction();
        rwaTransactionPage.selectContact(contact);
        rwaTransactionPage.fillTransactionForm(amount, note);
        rwaTransactionPage.submitTransaction();
        rwaTransactionPage.validateErrorMessage('Saldo insuficiente');
    });
});