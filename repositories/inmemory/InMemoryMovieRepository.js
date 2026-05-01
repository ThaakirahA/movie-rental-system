const MovieRepository = require("../MovieRepository");

class InMemoryMovieRepository extends MovieRepository {
  constructor() {
    super();
    this.storage = {};
  }

  save(movie) {
    this.storage[movie.movieId] = movie;
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

module.exports = InMemoryMovieRepository;