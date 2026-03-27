# Use Case Specifications – Aura Reels Movie Rental System

---

## Use Case 1 – User Registration

**Actor:** Customer  
**Description:** Allows a new user to create an account to access the system.  
**Preconditions:** User is not logged in and has access to the registration page.  
**Postconditions:** User account is created, and the user can log in.  

**Basic Flow:**  
1. User navigates to the registration page.  
2. User enters required details (name, email, password).  
3. User clicks "Register".  
4. System validates input and creates the account.  
5. Confirmation message is displayed.  

**Alternative Flows:**  
- Invalid input → system displays error and prompts correction.  
- Email already exists → system displays duplicate account message.  

---

## Use Case 2 – User Login

**Actor:** Customer  
**Description:** Authenticates users to access system features.  
**Preconditions:** User has a registered account.  
**Postconditions:** User is logged in and redirected to the dashboard.  

**Basic Flow:**  
1. User enters username/email and password.  
2. User clicks "Login".  
3. System validates credentials.  
4. User is redirected to the dashboard.  

**Alternative Flows:**  
- Incorrect credentials → system displays error.  
- Account locked → system informs the user and provides recovery options.  

---

## Use Case 3 – Browse Movies

**Actor:** Customer  
**Description:** Enables users to view the catalog of available movies.  
**Preconditions:** User is logged in.  
**Postconditions:** User sees a list of all movies.  

**Basic Flow:**  
1. User navigates to "Movie Catalog".  
2. System displays available movies with titles, genres, and ratings.  
3. User scrolls or navigates pages to browse movies.  

**Alternative Flows:**  
- No movies available → system displays "No movies found".  

---

## Use Case 4 – Search Movies

**Actor:** Customer  
**Description:** Allows users to find specific movies by title.  
**Preconditions:** User is logged in.  
**Postconditions:** Relevant search results are displayed.  

**Basic Flow:**  
1. User enters movie title in the search bar.  
2. User clicks "Search".  
3. System searches the database and displays matching results.  

**Alternative Flows:**  
- No matches found → system displays "No results found".  
- Invalid input → system prompts correct format.  

---

## Use Case 5 – Rent Movie

**Actor:** Customer  
**Description:** Enables users to rent a selected movie.  
**Preconditions:** User is logged in. Movie is available.  
**Postconditions:** Rental is stored, availability is updated, and confirmation is sent.  

**Basic Flow:**  
1. User selects a movie.  
2. User clicks "Rent".  
3. System verifies movie availability.  
4. System records rental and updates availability.  
5. User receives confirmation notification.  

**Alternative Flows:**  
- Movie not available → system displays "Movie not available".  
- Payment or checkout fails → system cancels rental and notifies user.  

---

## Use Case 6 – View Rental History

**Actor:** Customer  
**Description:** Shows a list of previously rented movies.  
**Preconditions:** User is logged in.  
**Postconditions:** User can view all past rentals.  

**Basic Flow:**  
1. User navigates to "Rental History".  
2. System retrieves user's rental records.  
3. System displays history with titles, dates, and status.  

**Alternative Flows:**  
- No previous rentals → system displays "No rentals yet".  

---

## Use Case 7 – Admin Manage Movie Catalog

**Actor:** Administrator  
**Description:** Allows admins to add, edit, or remove movies.  
**Preconditions:** Admin is logged in.  
**Postconditions:** Catalog reflects changes made by admin.  

**Basic Flow:**  
1. Admin navigates to "Manage Movies".  
2. Admin adds a new movie OR edits/deletes an existing one.  
3. System validates changes and updates the catalog.  
4. Changes are confirmed with a message.  

**Alternative Flows:**  
- Invalid input → system prompts corrections.  
- Delete fails → system displays error message.  

---

## Use Case 8 – Admin Generate Reports

**Actor:** Administrator / Staff / Owner  
**Description:** Generates system reports like rentals, users, or revenue.  
**Preconditions:** User is logged in with proper privileges.  
**Postconditions:** Reports are displayed or downloaded.  

**Basic Flow:**  
1. User selects "Generate Reports".  
2. User selects report type (rentals, users, revenue).  
3. System compiles and displays report.  
4. User can download report if needed.  

**Alternative Flows:**  
- Report fails to generate → system displays error.  
- No data → system displays "No data available".  

---

## Notes

- These use cases are mapped to functional requirements from Assignment 4.  
- All alternative flows handle errors or exceptions gracefully.  
- Use cases support both customer-facing and admin-facing system functionality.  
