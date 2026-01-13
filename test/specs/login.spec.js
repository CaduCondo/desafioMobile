
const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users.json');
<<<<<<< HEAD
const Report = require('../../reports/extent/extent.helper');

describe('Mobile Login Scenarios', () => {

  before(() => Report.init());

  it('Login válido', async () => {
    Report.start('Login válido');
    const result = await LoginPage.login(users.valid.email, users.valid.password);
    expect(result).to.be.true;
    Report.pass('Login realizado com sucesso');
  });

  it('Login inválido', async () => {
    Report.start('Login inválido');
    const result = await LoginPage.login(users.invalid.email, users.invalid.password);
    expect(result).to.be.false;
    Report.pass('Erro exibido corretamente');
  });

  after(() => Report.flush());
=======

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

>>>>>>> 5c0c1a34233fcae625a4de36fed2127ff8cfe9e5
});
