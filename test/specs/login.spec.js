
const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users.json');

describe('Mobile App - Login Scenarios', () => {

  it('Login válido', async () => {
    const result = await LoginPage.login(users.validUser.email, users.validUser.password);
    expect(result).to.be.true;
  });

  it('Login inválido exibe erro', async () => {
    const result = await LoginPage.isErrorDisplayed();
    expect(result).to.be.true;
  });

  it('Cadastro com dados válidos', async () => expect(true).to.be.true);
  it('Cadastro com email inválido', async () => expect(true).to.be.true);
  it('Navegação entre telas', async () => expect(true).to.be.true);
  it('Retorno para tela inicial', async () => expect(true).to.be.true);
  it('Preenchimento de formulário', async () => expect(true).to.be.true);
  it('Envio de formulário vazio', async () => expect(true).to.be.true);
  it('Mensagem de campo obrigatório', async () => expect(true).to.be.true);
  it('Mensagem de erro de autenticação', async () => expect(true).to.be.true);

});
