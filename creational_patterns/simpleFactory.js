class Car {
  constructor() {
    this.type = "Car";
  }

  drive() {
    return "Driving a car";
  }
}

class Bike {
  constructor() {
    this.type = "Bike";
  }

  ride() {
    return "Riding a bike";
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
  }

  haul() {
    return "Hauling with a truck";
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") return new Car();
    if (type === "bike") return new Bike();
    if (type === "truck") return new Truck();

    throw new Error("Invalid vehicle type");
  }
}

module.exports = VehicleFactory;