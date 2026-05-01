const InMemoryMovieRepository = require("../repositories/inmemory/InMemoryMovieRepository");
const Movie = require("../src/movie");

test("Repository CRUD operations", () => {
  const repo = new InMemoryMovieRepository();

  const movie = new Movie("1", "Avatar", "Sci-Fi", "Epic", "9", "Available");

  repo.save(movie);

  expect(repo.findById("1")).toBe(movie);

  expect(repo.findAll().length).toBe(1);

  repo.delete("1");

  expect(repo.findById("1")).toBe(null);
});