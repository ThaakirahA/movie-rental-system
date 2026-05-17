# 📌 Changelog – Assignment 10

## [v1.0] - Initial Implementation

### Added
- Implemented core system classes in /src
  - User
  - Movie
  - Rental
  - Payment
  - RentalCart
  - Admin
  - Report

### Added Creational Design Patterns
- Simple Factory (VehicleFactory)
- Factory Method (PaymentProcessor)
- Abstract Factory (GUIFactory)
- Builder (PizzaBuilder)
- Prototype (Shape cloning)
- Singleton (DatabaseConnection)

### Added Unit Tests
- Tests for all creational patterns
- Edge cases (invalid input, cloning, singleton instance check)

### Improvements
- Organized project structure
- Ensured consistency with UML class diagram (Assignment 9)
- Improved readability and modular design

## [v1.2] - Assignment 12 REST API Implementation

### Added
- Implemented service layer for Movies, Users, and Rentals
- Added business logic validation using service classes
- Built REST API endpoints using Express.js
- Added Swagger/OpenAPI documentation
- Implemented integration tests using Supertest
- Added API routes for movie, user, and rental workflows

### Improved
- Extended repository layer integration
- Improved system modularity with layered architecture
- Enhanced test coverage for services and APIs