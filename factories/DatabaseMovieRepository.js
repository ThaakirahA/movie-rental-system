const MovieRepository = require("./MovieRepository");

class DatabaseMovieRepository extends MovieRepository {
  save(movie) {
    console.log("Saving to database (future)");
  }

  findById(id) {
    console.log("Finding in database (future)");
    return null;
  }

  findAll() {
    console.log("Fetching all from database (future)");
    return [];
  }

  delete(id) {
    console.log("Deleting from database (future)");
  }
}

module.exports = DatabaseMovieRepository;