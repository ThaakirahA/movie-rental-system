const Movie = require("../../src/movie");
const User = require("../../src/user");

const InMemoryMovieRepository = require("../../repositories/inmemory/InMemoryMovieRepository");
const InMemoryUserRepository = require("../../repositories/inmemory/InMemoryUserRepository");
const InMemoryRentalRepository = require("../../repositories/inmemory/InMemoryRentalRepository");

const MovieService = require("../../services/MovieService");
const UserService = require("../../services/UserService");
const RentalService = require("../../services/RentalService");

test("MovieService creates and retrieves a movie", () => {
  const movieRepo = new InMemoryMovieRepository();
  const movieService = new MovieService(movieRepo);

  const movie = new Movie("M1", "Avatar", "Sci-Fi", "Epic movie", "9", "Available");

  movieService.createMovie(movie);

  expect(movieService.getMovieById("M1")).toBe(movie);
  expect(movieService.getAllMovies().length).toBe(1);
});

test("UserService creates and retrieves a user", () => {
  const userRepo = new InMemoryUserRepository();
  const userService = new UserService(userRepo);

  const user = new User("U1", "Thaakirah", "test@example.com", "password123");

  userService.createUser(user);

  expect(userService.getUserById("U1")).toBe(user);
  expect(userService.getAllUsers().length).toBe(1);
});

test("RentalService creates rental and updates movie status", () => {
  const movieRepo = new InMemoryMovieRepository();
  const userRepo = new InMemoryUserRepository();
  const rentalRepo = new InMemoryRentalRepository();

  const rentalService = new RentalService(rentalRepo, movieRepo, userRepo);

  const movie = new Movie("M1", "Avatar", "Sci-Fi", "Epic movie", "9", "Available");
  const user = new User("U1", "Thaakirah", "test@example.com", "password123");

  movieRepo.save(movie);
  userRepo.save(user);

  const rental = rentalService.createRental("R1", "U1", "M1");

  expect(rental.status).toBe("Active");
  expect(movieRepo.findById("M1").status).toBe("Rented");
});

test("RentalService rejects unavailable movie", () => {
  const movieRepo = new InMemoryMovieRepository();
  const userRepo = new InMemoryUserRepository();
  const rentalRepo = new InMemoryRentalRepository();

  const rentalService = new RentalService(rentalRepo, movieRepo, userRepo);

  const movie = new Movie("M1", "Avatar", "Sci-Fi", "Epic movie", "9", "Rented");
  const user = new User("U1", "Thaakirah", "test@example.com", "password123");

  movieRepo.save(movie);
  userRepo.save(user);

  expect(() => rentalService.createRental("R1", "U1", "M1")).toThrow("Movie is not available");
});