# Movie Rental System Architecture

## Project Title

Movie Rental System

## Domain

Entertainment / Movie Rental Services

## Problem Statement

The system provides an online platform where users can browse and rent movies digitally instead of visiting physical rental stores.

## Individual Scope

The system will allow users to register, browse movies, rent movies, and manage their rentals while administrators manage the movie catalog.

---

# C4 System Architecture

## Level 1: System Context Diagram

This diagram shows how users interact with the Movie Rental System.

```mermaid
C4Context
title Movie Rental System Context Diagram

Person(customer, "Customer", "User who rents movies")
Person(admin, "Administrator", "Manages movie catalog")

System(movieSystem, "Movie Rental System", "Allows users to browse and rent movies")

Rel(customer, movieSystem, "Browses and rents movies")
Rel(admin, movieSystem, "Manages movie catalog")
```

---

## Level 2: Container Diagram

This diagram shows the main system containers.

```mermaid
C4Container
title Movie Rental System Container Diagram

Person(customer, "Customer")
Person(admin, "Administrator")

System_Boundary(movieSystem, "Movie Rental System") {

Container(webApp, "Web Application", "HTML, CSS, JavaScript", "User interface for customers and admins")

Container(api, "Backend API", "Node.js / Java / Python", "Handles business logic")

Container(database, "Database", "MySQL / PostgreSQL", "Stores users, movies, and rentals")

}

Rel(customer, webApp, "Uses")
Rel(admin, webApp, "Uses")

Rel(webApp, api, "Sends requests to")

Rel(api, database, "Reads/Writes data")
```

---

## Level 3: Component Diagram

This diagram shows internal backend components.

```mermaid
C4Component
title Movie Rental System Component Diagram

Container(api, "Backend API") {

Component(userService, "User Service", "Handles user accounts")

Component(movieService, "Movie Service", "Manages movie catalog")

Component(rentalService, "Rental Service", "Processes movie rentals")

Component(databaseAccess, "Database Access", "Handles database operations")

}

Rel(userService, databaseAccess, "Reads/Writes")

Rel(movieService, databaseAccess, "Reads/Writes")

Rel(rentalService, databaseAccess, "Reads/Writes")
```
