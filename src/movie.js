class Movie {
  constructor(movieId, title, genre, description, rating, status = "Available") {
    this.movieId = movieId;
    this.title = title;
    this.genre = genre;
    this.description = description;
    this.rating = rating;
    this.status = status;
  }

  viewDetails() {
    return {
      title: this.title,
      genre: this.genre,
      description: this.description,
      rating: this.rating,
      status: this.status
    };
  }

  watchTrailer() {
    return `Playing trailer for ${this.title}`;
  }

  updateAvailability(status) {
    this.status = status;
    return this.status;
  }
}

module.exports = Movie;