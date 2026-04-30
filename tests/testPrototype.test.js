const Circle = require("../creational_patterns/prototype");

test("Prototype clones circle correctly", () => {
  const original = new Circle(5);
  const clone = original.clone();

  expect(clone).not.toBe(original);
  expect(clone.type).toBe("Circle");
  expect(clone.radius).toBe(5);
});