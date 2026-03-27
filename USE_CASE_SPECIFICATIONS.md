# Use Case Specifications – Aura Reels Movie Rental System

This document provides detailed specifications for the key use cases of the Aura Reels Movie Rental System. Each use case is directly linked to functional requirements defined in Assignment 4.

---

## 1. Use Case: Register Account
**Actor:** Customer  
**Description:** Allows a new user to create an account to access the system.  
**Precondition:** User is not logged in.  
**Postcondition:** User account is created and user can log in.  

**Basic Flow:**  
1. Customer navigates to the registration page.  
2. Customer enters valid details (username, email, password).  
3. Customer submits the form.  
4. System validates input and creates the account.  
5. System displays a success message and redirects to login page.  

**Alternative Flows:**  
- 2a. Invalid email or password → System displays an error and prompts re-entry.  
- 4a. Username already exists → System prompts to choose a different username.

---

## 2. Use Case: Login
**Actor:** Customer, Admin, Staff  
**Description:** Authenticate users to access system features.  
**Precondition:** User has a registered account.  
**Postcondition:** User is authenticated and redirected to the dashboard.  

**Basic Flow:**  
1. User navigates to login page.  
2. User enters username and password.  
3. User clicks "Login."  
4. System verifies credentials and grants access.  

**Alternative Flows:**  
- 2a. Incorrect credentials → System displays error and prompts retry.  
- 2b. Account locked after multiple failed attempts → System notifies user.

---

## 3. Use Case: Browse Movies
**Actor:** Customer  
**Description:** Display available movies in the catalog.  
**Precondition:** User is logged in.  
**Postcondition:** Movie list is displayed.  

**Basic Flow:**  
1. Customer navigates to the catalog page.  
2. System retrieves available movies from the database.  
3. System displays movies with titles, genres, and ratings.  

**Alternative Flows:**  
- 2a. No movies available → System displays “No movies available” message.

---

## 4. Use Case: Search Movies
**Actor:** Customer  
**Description:** Allow users to search for specific movies by title or genre.  
**Precondition:** User is logged in.  
**Postcondition:** Search results are displayed.  

**Basic Flow:**  
1. Customer enters search criteria.  
2. Customer clicks “Search.”  
3. System retrieves matching movies.  
4. System displays results within 2 seconds.  

**Alternative Flows:**  
- 1a. No match found → System displays “No results found.”  

---

## 5. Use Case: Rent Movie
**Actor:** Customer  
**Description:** Allows a user to rent a selected movie.  
**Precondition:** User is logged in and movie is available.  
**Postcondition:** Rental record is created and availability updated.  

**Basic Flow:**  
1. Customer searches or browses for a movie.  
2. Customer selects a movie.  
3. Customer clicks “Rent” and confirms.  
4. System updates the rental record and movie availability.  
5. System sends confirmation notification to the user.  

**Alternative Flows:**  
- 3a. Movie is unavailable → System displays “Movie unavailable” message.  
- 4a. Rental fails due to server error → System logs error and notifies user.

---

## 6. Use Case: View Rental History
**Actor:** Customer  
**Description:** Allows users to see previously rented movies.  
**Precondition:** User is logged in.  
**Postcondition:** User rental history is displayed.  

**Basic Flow:**  
1. Customer navigates to “Rental History.”  
2. System retrieves user rental records.  
3. System displays list of rented movies with dates.

**Alternative Flows:**  
- 2a. No previous rentals → System displays “No rental history available.”

---

## 7. Use Case: Manage Movie Catalog
**Actor:** Admin, Staff  
**Description:** Add, update, or remove movies from the system.  
**Precondition:** Admin or staff is logged in.  
**Postcondition:** Movie catalog is updated.  

**Basic Flow:**  
1. Admin navigates to “Manage Movies.”  
2. Admin adds/edits/deletes movie information.  
3. System validates input and updates the database.  
4. System confirms action success.  

**Alternative Flows:**  
- 2a. Invalid input → System displays error message.  
- 3a. Database error → System logs issue and notifies admin.

---

## 8. Use Case: Generate Reports
**Actor:** Admin, Staff, Owner  
**Description:** Generate reports on rentals, revenue, and user activity.  
**Precondition:** User is logged in with permission.  
**Postcondition:** Report is generated and displayed.  

**Basic Flow:**  
1. User navigates to “Reports.”  
2. User selects report type and time range.  
3. System retrieves data from the database.  
4. System displays the report in readable format.  

**Alternative Flows:**  
- 3a. No data available → System displays “No data for selected period.”  
- 4a. System error → User is notified, and error logged.

---

### Notes
- These use cases map directly to the functional requirements (FR-001 to FR-013).  
- Alternative flows include realistic errors and exceptions to increase robustness.  
- Actors reflect stakeholder roles from Assignment 4.  
- This document complements the use case diagram and test cases for Assignment 5.
