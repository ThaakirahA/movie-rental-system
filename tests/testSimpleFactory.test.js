const VehicleFactory = require("../creational_patterns/simpleFactory");

test("Simple Factory creates a car", () => {
  const car = VehicleFactory.createVehicle("car");
  expect(car.type).toBe("Car");
  expect(car.drive()).toBe("Driving a car");
});

test("Simple Factory rejects invalid vehicle type", () => {
  expect(() => VehicleFactory.createVehicle("plane")).toThrow("Invalid vehicle type");
});