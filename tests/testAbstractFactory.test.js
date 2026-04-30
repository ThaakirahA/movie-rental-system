const { WindowsFactory, MacFactory } = require("../creational_patterns/abstractFactory");

test("Abstract Factory creates Windows button", () => {
  const factory = new WindowsFactory();
  const button = factory.createButton();
  expect(button.render()).toBe("Rendering Windows Button");
});

test("Abstract Factory creates MacOS button", () => {
  const factory = new MacFactory();
  const button = factory.createButton();
  expect(button.render()).toBe("Rendering MacOS Button");
});