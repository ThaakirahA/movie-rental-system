class RentalCart {
  constructor(cartId) {
    this.cartId = cartId;
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    return this.movies;
  }

  removeMovie(movieId) {
    this.movies = this.movies.filter(movie => movie.movieId !== movieId);
    return this.movies;
  }

  clearCart() {
    this.movies = [];
    return this.movies;
  }

  checkout() {
    if (this.movies.length === 0) {
      return "Cart is empty";
    }
    return "Proceeding to checkout";
  }
}

module.exports = RentalCart;