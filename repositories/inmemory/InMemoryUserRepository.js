const UserRepository = require("../UserRepository");

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.storage = {};
  }

  save(user) {
    this.storage[user.userId] = user;
  }

  findById(id) {
    return this.storage[id] || null;
  }

  findAll() {
    return Object.values(this.storage);
  }

  delete(id) {
    delete this.storage[id];
  }
}

module.exports = InMemoryUserRepository;