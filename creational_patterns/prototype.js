class Shape {
  constructor(type) {
    this.type = type;
  }

  clone() {
    return Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
}

module.exports = Circle;