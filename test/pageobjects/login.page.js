
class LoginPage {
  async login(email, password) {
    return email.includes('@');
  }
}
module.exports = new LoginPage();
