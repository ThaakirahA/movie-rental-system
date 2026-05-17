const RentalRepository = require("../RentalRepository");

class InMemoryRentalRepository extends RentalRepository {
  constructor() {
    super();
    this.storage = {};
  }

  save(rental) {
    this.storage[rental.rentalId] = rental;
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

module.exports = InMemoryRentalRepository;