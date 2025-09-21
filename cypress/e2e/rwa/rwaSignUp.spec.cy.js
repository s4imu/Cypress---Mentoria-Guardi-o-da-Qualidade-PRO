import RwaSignUpPage from "../../pages/rwa/rwaSignUpPage";
import RwaLoginPage from "../../pages/rwa/rwaLoginPage";
import RwaMainPage from "../../pages/rwa/rwaMainPage";
import { faker } from '@faker-js/faker';

describe('RWA Sign Up', () => {
    
    const rwaSignUpPage = new RwaSignUpPage();
    const rwaLoginPage = new RwaLoginPage();
    const rwaMainPage  = new RwaMainPage();

    beforeEach(()=>{
        rwaSignUpPage.accessSignupPage();
    })

    it('Registro de novo usuário com sucesso', () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const password = 123456;
        rwaSignUpPage.signUp(firstName, lastName, firstName, password);
        rwaLoginPage.shouldBeLoginPage();
        rwaLoginPage.signIn(firstName, password);
        rwaMainPage.shouldBeMainPage();
    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        rwaSignUpPage.unsuccessfulSignUp();
     });
});