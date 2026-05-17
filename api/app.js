const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const Movie = require("../src/movie");
const User = require("../src/user");

const InMemoryMovieRepository = require("../repositories/inmemory/InMemoryMovieRepository");
const InMemoryUserRepository = require("../repositories/inmemory/InMemoryUserRepository");
const InMemoryRentalRepository = require("../repositories/inmemory/InMemoryRentalRepository");

const MovieService = require("../services/MovieService");
const UserService = require("../services/UserService");
const RentalService = require("../services/RentalService");

const app = express();

const swaggerDocument = YAML.load("./docs/openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

const movieRepo = new InMemoryMovieRepository();
const userRepo = new InMemoryUserRepository();
const rentalRepo = new InMemoryRentalRepository();

const movieService = new MovieService(movieRepo);
const userService = new UserService(userRepo);
const rentalService = new RentalService(rentalRepo, movieRepo, userRepo);

app.get("/", (req, res) => {
  res.json({ message: "Aura Reels Movie Rental API is running" });
});

app.get("/api/movies", (req, res) => {
  res.json(movieService.getAllMovies());
});

app.post("/api/movies", (req, res) => {
  try {
    const { movieId, title, genre, description, rating, status } = req.body;
    const movie = new Movie(movieId, title, genre, description, rating, status);
    const createdMovie = movieService.createMovie(movie);

    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/movies/:id", (req, res) => {
  try {
    const movie = movieService.getMovieById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.put("/api/movies/:id/status", (req, res) => {
  try {
    const { status } = req.body;
    const updatedMovie = movieService.updateMovieAvailability(req.params.id, status);

    res.json(updatedMovie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete("/api/movies/:id", (req, res) => {
  try {
    const deletedMovie = movieService.deleteMovie(req.params.id);
    res.json({ message: "Movie deleted successfully", movie: deletedMovie });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/api/users", (req, res) => {
  res.json(userService.getAllUsers());
});

app.post("/api/users", (req, res) => {
  try {
    const { userId, name, email, password } = req.body;
    const user = new User(userId, name, email, password);
    const createdUser = userService.createUser(user);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/users/:id", (req, res) => {
  try {
    const user = userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/api/rentals", (req, res) => {
  res.json(rentalService.getAllRentals());
});

app.post("/api/rentals", (req, res) => {
  try {
    const { rentalId, userId, movieId } = req.body;
    const rental = rentalService.createRental(rentalId, userId, movieId);

    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/rentals/:id/complete", (req, res) => {
  try {
    const rental = rentalService.completeRental(req.params.id);

    res.json({ message: "Rental completed successfully", rental });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = app;