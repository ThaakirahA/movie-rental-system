const InMemoryMovieRepository = require("../repositories/inmemory/InMemoryMovieRepository");
const InMemoryUserRepository = require("../repositories/inmemory/InMemoryUserRepository");
const InMemoryRentalRepository = require("../repositories/inmemory/InMemoryRentalRepository");

class RepositoryFactory {
  static getMovieRepository(type) {
    if (type === "MEMORY") {
      return new InMemoryMovieRepository();
    }

    throw new Error("Invalid repository type");
  }

  static getUserRepository(type) {
    if (type === "MEMORY") {
      return new InMemoryUserRepository();
    }

    throw new Error("Invalid repository type");
  }

  static getRentalRepository(type) {
    if (type === "MEMORY") {
      return new InMemoryRentalRepository();
    }

    throw new Error("Invalid repository type");
  }
}

module.exports = RepositoryFactory;