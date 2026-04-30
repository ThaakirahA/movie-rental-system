const DatabaseConnection = require("../creational_patterns/singleton");

test("Singleton returns same database connection instance", () => {
  const connection1 = new DatabaseConnection();
  const connection2 = new DatabaseConnection();

  expect(connection1).toBe(connection2);
  expect(connection1.getConnection()).toBe("Connected to database");
});