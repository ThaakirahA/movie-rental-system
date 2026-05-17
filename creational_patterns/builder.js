class Pizza {
  constructor() {
    this.ingredients = [];
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  addCheese() {
    this.pizza.ingredients.push("Cheese");
    return this;
  }

  addToppings(topping) {
    this.pizza.ingredients.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}

module.exports = PizzaBuilder;