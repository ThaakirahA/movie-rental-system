# Use Case Specifications – Aura Reels Movie Rental System

## 1. Register Account
**Actor:** Customer  
**Description:** Allows a new user to create an account to access the system.  
**Preconditions:** User does not have an existing account.  
**Postconditions:** Account is created; user can log in.  
**Basic Flow:**  
1. User clicks "Register".  
2. User enters personal information (name, email, password).  
3. System validates input.  
4. System creates the account.  
5. User receives confirmation message.  
**Alternative Flows:**  
- Invalid email/password → System displays error.  

---

## 2. Login
**Actor:** Customer / Admin / Staff  
**Description:** Authenticates a user to access system features.  
**Preconditions:** User must have an existing account.  
**Postconditions:** User is logged in and can access authorized features.  
**Basic Flow:**  
1. User enters username and password.  
2. System validates credentials.  
3. System grants access.  
**Alternative Flows:**  
- Incorrect password → System displays error.  
- Account locked → System displays account locked message.  

---

## 3. Browse Movies
**Actor:** Customer  
**Description:** Allows customers to view available movies.  
**Preconditions:** User is logged in.  
**Postconditions:** Movies are displayed for selection.  
**Basic Flow:**  
1. User clicks “Browse Movies”.  
2. System displays a list of available movies with details.  
**Alternative Flows:**  
- No movies available → Display “No movies available”.  

---

## 4. Search Movies
**Actor:** Customer  
**Description:** Search for a movie by title or genre.  
**Preconditions:** User is logged in.  
**Postconditions:** System displays search results.  
**Basic Flow:**  
1. User enters a keyword or genre.  
2. System searches database.  
3. System displays matching movies.  
**Alternative Flows:**  
- No match → Display “No movies found”.  

---

## 5. Rent Movie
**Actor:** Customer  
**Description:** Allows customers to rent a selected movie.  
**Preconditions:** User is logged in and movie is available.  
**Postconditions:** Rental record is created; movie availability updated.  
**Basic Flow:**  
1. User selects a movie.  
2. User clicks “Rent Movie”.  
3. System validates availability.  
4. System updates rental record.  
5. System confirms rental to user.  
**Alternative Flows:**  
- Movie unavailable → Display “Movie not available”.  

---

## 6. Manage Movie Catalog
**Actor:** Admin / Staff  
**Description:** Add, update, or remove movies in the system.  
**Preconditions:** User is an authenticated admin/staff.  
**Postconditions:** Catalog updated successfully.  
**Basic Flow:**  
1. User selects “Manage Catalog”.  
2. User adds, edits, or deletes movies.  
3. System saves changes and confirms success.  
**Alternative Flows:**  
- Invalid input → Display error message.  

---

## 7. Generate Reports
**Actor:** Admin / Staff / Owner  
**Description:** Provides reports on rentals, users, and revenue.  
**Preconditions:** User is authenticated and authorized.  
**Postconditions:** Reports are displayed/downloaded.  
**Basic Flow:**  
1. User selects “Generate Reports”.  
2. System compiles data.  
3. System displays report.  
**Alternative Flows:**  
- No data available → Display “No data to report”.  

---

## 8. Receive Notifications
**Actor:** Customer / Owner  
**Description:** Users receive notifications for important events (e.g., rental confirmation).  
**Preconditions:** User is logged in and notifications enabled.  
**Postconditions:** Notifications delivered to the user.  
**Basic Flow:**  
1. System detects event (e.g., movie rented).  
2. System sends notification.  
3. User receives notification.  
**Alternative Flows:**  
- Notification fails → System retries or logs failure.  
