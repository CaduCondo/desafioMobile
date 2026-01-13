
class LoginPage {
  async login(email, password) {
    console.log(`Simulando login com ${email}`);
    return email.includes('@');
  }

  async isErrorDisplayed() {
    return true;
  }
}

module.exports = new LoginPage();
