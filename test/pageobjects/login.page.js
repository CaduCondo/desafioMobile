
class LoginPage {
  async login(email, password) {
<<<<<<< HEAD
    return email.includes('@');
  }
}
=======
    console.log(`Simulando login com ${email}`);
    return email.includes('@');
  }

  async isErrorDisplayed() {
    return true;
  }
}

>>>>>>> 5c0c1a34233fcae625a4de36fed2127ff8cfe9e5
module.exports = new LoginPage();
