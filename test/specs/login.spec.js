
const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users.json');
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
});
