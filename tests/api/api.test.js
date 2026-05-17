const request = require("supertest");
const app = require("../../api/app");

describe("Aura Reels API", () => {

  test("GET / should return API status message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Aura Reels Movie Rental API is running");
  });

  test("POST /api/movies should create movie", async () => {
    const response = await request(app)
      .post("/api/movies")
      .send({
        movieId: "M1",
        title: "Avatar",
        genre: "Sci-Fi",
        description: "Epic movie",
        rating: "9",
        status: "Available"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Avatar");
  });

  test("GET /api/movies should return movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/users should create user", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({
        userId: "U1",
        name: "Thaakirah",
        email: "test@example.com",
        password: "password123"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Thaakirah");
  });

  test("POST /api/rentals should create rental", async () => {
    await request(app)
      .post("/api/movies")
      .send({
        movieId: "M2",
        title: "Interstellar",
        genre: "Sci-Fi",
        description: "Space movie",
        rating: "10",
        status: "Available"
      });

    await request(app)
      .post("/api/users")
      .send({
        userId: "U2",
        name: "User Two",
        email: "user2@example.com",
        password: "password123"
      });

    const response = await request(app)
      .post("/api/rentals")
      .send({
        rentalId: "R1",
        userId: "U2",
        movieId: "M2"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("Active");
  });

});