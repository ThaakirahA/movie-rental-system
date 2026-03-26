# Use Case Specifications – Aura Reels Movie Rental System

---

## 1. Use Case: Register Account

**Actor:** Customer  
**Description:** Allows a new user to create an account.  

**Preconditions:**
- User is not registered.

**Postconditions:**
- User account is created and stored in the database.

**Basic Flow:**
1. User enters registration details.
2. System validates input.
3. System stores user data.
4. System confirms successful registration.

**Alternative Flow:**
- If email already exists → System displays error message.

---

## 2. Use Case: Login

**Actor:** Customer / Admin  
**Description:** Allows users to access the system.  

**Preconditions:**
- User has a registered account.

**Postconditions:**
- User is authenticated and logged in.

**Basic Flow:**
1. User enters login credentials.
2. System verifies credentials.
3. System grants access.

**Alternative Flow:**
- Invalid credentials → Show error message.

---

## 3. Use Case: Browse Movies

**Actor:** Customer  
**Description:** View available movies.  

**Preconditions:**
- User is logged in.

**Postconditions:**
- Movies displayed to user.

**Basic Flow:**
1. User navigates to movie catalog.
2. System retrieves movie list.
3. Movies displayed.

**Alternative Flow:**
- No movies available → Display message.

---

## 4. Use Case: Search Movies

**Actor:** Customer  
**Description:** Search for movies by title or genre.  

**Preconditions:**
- User is logged in.

**Postconditions:**
- Search results displayed.

**Basic Flow:**
1. User enters search keyword.
2. System processes query.
3. Results displayed.

**Alternative Flow:**
- No results → Display "Movie not found".

---

## 5. Use Case: Rent Movie

**Actor:** Customer  
**Description:** Rent a selected movie.  

**Preconditions:**
- User is logged in.
- Movie is available.

**Postconditions:**
- Rental record is stored.
- Movie availability updated.

**Basic Flow:**
1. User selects movie.
2. User clicks "Rent".
3. System validates availability.
4. System stores rental.
5. Confirmation displayed.

**Alternative Flow:**
- Movie unavailable → Show error message.

---

## 6. Use Case: View Rental History

**Actor:** Customer  
**Description:** View previously rented movies.  

**Preconditions:**
- User is logged in.

**Postconditions:**
- Rental history displayed.

**Basic Flow:**
1. User selects "Rental History".
2. System retrieves records.
3. Displays history.

---

## 7. Use Case: Manage Movies

**Actor:** Administrator / Staff  
**Description:** Add new movies.  

**Preconditions:**
- Admin is logged in.

**Postconditions:**
- Movie added to database.

**Basic Flow:**
1. Admin enters movie details.
2. System validates input.
3. Movie stored.

**Alternative Flow:**
- Invalid data → Show error.

---

## 8. Use Case: Generate Reports

**Actor:** Administrator / Business Owner  
**Description:** View system usage and rental reports.  

**Preconditions:**
- Admin is logged in.

**Postconditions:**
- Reports generated and displayed.

**Basic Flow:**
1. Admin requests report.
2. System collects data.
3. System displays report.

**Alternative Flow:**
- No data → Display message.
