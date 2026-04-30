class Rental {
  constructor(rentalId, user, movies = []) {
    this.rentalId = rentalId;
    this.user = user;
    this.movies = movies;
    this.rentalDate = new Date();
    this.status = "Created";
  }

  createRental() {
    this.status = "Active";
    return this.status;
  }

  cancelRental() {
    this.status = "Cancelled";
    return this.status;
  }

  completeRental() {
    this.status = "Completed";
    return this.status;
  }
}

module.exports = Rental;