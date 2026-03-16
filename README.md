# 🎬 Movie Rental System

![Angular](https://img.shields.io/badge/Frontend-Angular-red)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/Project-University-blue)

## 📌 Project Overview

The **Movie Rental System** is a web-based application that allows users to browse, search, and rent movies online.
The system provides a digital alternative to traditional movie rental stores by allowing users to manage their rentals through an intuitive web interface.

The application uses **Angular** for the frontend and stores data using **MongoDB** hosted on **MongoDB Atlas**.

---
## System Overview

The Movie Rental System allows users to browse and rent movies through a web application.

```mermaid
flowchart LR

User[User]

Frontend[Angular Web Application]

Backend[Node.js + Express API]

Database[(MongoDB Atlas)]

User --> Frontend
Frontend --> Backend
Backend --> Database

---

# 👥 Users of the System

### Customer

* Register an account
* Login to the system
* Browse available movies
* Search for movies
* Rent movies
* View rental history

### Administrator

* Add new movies
* Update movie details
* Delete movies
* Manage movie availability

---

# ⚙️ Technology Stack

## Frontend

* Angular
* HTML
* CSS
* TypeScript

## Backend

* Node.js
* Express.js
* REST API

## Database

* MongoDB
* MongoDB Atlas

## Version Control

* GitHub

---

# 🏗 System Architecture

The system architecture consists of three main components:

1. **Frontend Application**

   * Built using Angular
   * Provides the user interface for customers and administrators

2. **Backend API**

   * Built using Node.js and Express
   * Handles business logic and API requests

3. **Database**

   * MongoDB database hosted on MongoDB Atlas
   * Stores user accounts, movies, and rental data

---

# 🔄 System Workflow

1. User opens the web application.
2. User registers or logs into the system.
3. User browses the movie catalog.
4. User selects a movie to rent.
5. The system processes the rental request.
6. Rental information is stored in the database.
7. The system confirms the rental to the user.

---

# 📂 Project Structure

```
movie-rental-system
│
├── frontend (Angular Application)
│   ├── components
│   ├── services
│   ├── models
│
├── backend (Node.js API)
│   ├── controllers
│   ├── routes
│   ├── models
│
├── README.md
├── SPECIFICATION.md
└── ARCHITECTURE.md
```

---

# 📑 Project Documentation

* 📄 [System Specification](SPECIFICATION.md)
* 🏗 [System Architecture](ARCHITECTURE.md)

---

# 🚀 Future Improvements

Possible future features include:

* Movie ratings and reviews
* Online payment integration
* Movie recommendation system
* Watch trailers
* Mobile application support

---

## Documentation

Project documentation can be found here:

- [System Specification](SPECIFICATION.md)
- [System Architecture](ARCHITECTURE.md)

---

# 👨‍💻 Author

Thaakirah A  
Software Development Student

Student Software Engineering Project
University Assignment
