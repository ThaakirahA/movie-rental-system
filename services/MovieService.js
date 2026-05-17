class MovieService {
  constructor(movieRepository) {
    this.movieRepository = movieRepository;
  }

  createMovie(movie) {
    if (!movie.movieId || !movie.title) {
      throw new Error("Movie ID and title are required");
    }

    this.movieRepository.save(movie);
    return movie;
  }

  getMovieById(movieId) {
    const movie = this.movieRepository.findById(movieId);

    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie;
  }

  getAllMovies() {
    return this.movieRepository.findAll();
  }

  updateMovieAvailability(movieId, status) {
    const movie = this.getMovieById(movieId);
    movie.updateAvailability(status);
    this.movieRepository.save(movie);
    return movie;
  }

  deleteMovie(movieId) {
    const movie = this.getMovieById(movieId);
    this.movieRepository.delete(movieId);
    return movie;
  }
}

module.exports = MovieService;