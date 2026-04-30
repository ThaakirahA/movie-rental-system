const ProcessorFactory = require("../creational_patterns/factoryMethod");

test("Factory Method creates credit card processor", () => {
  const processor = ProcessorFactory.createProcessor("credit");
  expect(processor.process()).toBe("Processing credit card payment");
});

test("Factory Method creates PayPal processor", () => {
  const processor = ProcessorFactory.createProcessor("paypal");
  expect(processor.process()).toBe("Processing PayPal payment");
});

test("Factory Method rejects invalid processor type", () => {
  expect(() => ProcessorFactory.createProcessor("cash")).toThrow("Invalid processor type");
});