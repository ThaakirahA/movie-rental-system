class User {
  constructor(userId, name, email, password) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.rentalHistory = [];
  }

  register() {
    return `${this.name} registered successfully`;
  }

  login() {
    return `${this.name} logged in`;
  }

  logout() {
    return `${this.name} logged out`;
  }

  viewRentalHistory() {
    return this.rentalHistory;
  }
}

module.exports = User;