class Admin {
  constructor(adminId, name, email) {
    this.adminId = adminId;
    this.name = name;
    this.email = email;
  }

  manageMovies() {
    return "Admin is managing movies";
  }

  manageUsers() {
    return "Admin is managing users";
  }

  generateReport() {
    return "Admin generated report";
  }
}

module.exports = Admin;