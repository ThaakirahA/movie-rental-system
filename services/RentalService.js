const Rental = require("../src/rental");

class RentalService {
  constructor(rentalRepository, movieRepository, userRepository) {
    this.rentalRepository = rentalRepository;
    this.movieRepository = movieRepository;
    this.userRepository = userRepository;
  }

  createRental(rentalId, userId, movieId) {
    const user = this.userRepository.findById(userId);
    const movie = this.movieRepository.findById(movieId);

    if (!user) {
      throw new Error("User not found");
    }

    if (!movie) {
      throw new Error("Movie not found");
    }

    if (movie.status !== "Available") {
      throw new Error("Movie is not available");
    }

    const rental = new Rental(rentalId, user, [movie]);
    rental.createRental();

    movie.updateAvailability("Rented");

    this.rentalRepository.save(rental);
    this.movieRepository.save(movie);

    return rental;
  }

  getRentalById(rentalId) {
    const rental = this.rentalRepository.findById(rentalId);

    if (!rental) {
      throw new Error("Rental not found");
    }

    return rental;
  }

  getAllRentals() {
    return this.rentalRepository.findAll();
  }

  completeRental(rentalId) {
    const rental = this.getRentalById(rentalId);
    rental.completeRental();

    rental.movies.forEach((movie) => {
      movie.updateAvailability("Available");
      this.movieRepository.save(movie);
    });

    this.rentalRepository.save(rental);
    return rental;
  }
}

module.exports = RentalService;