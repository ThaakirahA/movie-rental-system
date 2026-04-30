const PizzaBuilder = require("../creational_patterns/builder");

test("Builder creates pizza with cheese and topping", () => {
  const pizza = new PizzaBuilder()
    .addCheese()
    .addToppings("Mushrooms")
    .build();

  expect(pizza.ingredients).toContain("Cheese");
  expect(pizza.ingredients).toContain("Mushrooms");
});

test("Builder creates pizza with no ingredients", () => {
  const pizza = new PizzaBuilder().build();
  expect(pizza.ingredients.length).toBe(0);
});