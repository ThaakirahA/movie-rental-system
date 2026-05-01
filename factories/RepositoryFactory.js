const InMemoryMovieRepository = require("../repositories/inmemory/InMemoryMovieRepository");

class RepositoryFactory {
  static getMovieRepository(type) {
    if (type === "MEMORY") {
      return new InMemoryMovieRepository();
    }

    throw new Error("Invalid repository type");
  }
}

module.exports = RepositoryFactory;