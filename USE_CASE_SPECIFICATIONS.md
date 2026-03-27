# 🎬 Use Case Specifications – Aura Reels Movie Rental System

---

## 1. Use Case: Register Account

**Actor:** Guest  

**Description:**  
Allows a new user to create an account in the system.

**Preconditions:**  
- User is not registered.
- User has access to the registration page.

**Postconditions:**  
- A new user account is created.
- User can log into the system.

**Basic Flow:**  
1. User enters registration details (email, password).
2. System validates input.
3. System stores user data.
4. System confirms successful registration.

**Alternative Flows:**  
- Invalid input → System displays error message.  
- Email already exists → System prompts user to login instead.

---

## 2. Use Case: Login

**Actor:** Customer  

**Description:**  
Allows registered users to access the system.

**Preconditions:**  
- User must have a registered account.

**Postconditions:**  
- User is logged into the system.

**Basic Flow:**  
1. User enters login credentials.
2. System validates credentials.
3. System grants access.

**Alternative Flows:**  
- Invalid credentials → Error message displayed.  
- Account not found → User prompted to register.

---

## 3. Use Case: Browse Movies

**Actor:** Customer / Guest  

**Description:**  
Allows users to view a list of available movies.

**Preconditions:**  
- System is running.

**Postconditions:**  
- Movie list is displayed.

**Basic Flow:**  
1. User opens movie catalogue.
2. System retrieves movie data.
3. System displays movie list.

**Alternative Flows:**  
- No movies available → System displays message.

---

## 4. Use Case: Search Movies

**Actor:** Customer / Guest  

**Description:**  
Allows users to search for movies by title.

**Preconditions:**  
- User is on search page.

**Postconditions:**  
- Search results are displayed.

**Basic Flow:**  
1. User enters search keyword.
2. User clicks search.
3. System retrieves matching results.
4. System displays results.

**Alternative Flows:**  
- No results found → Display “No movies found”.

---

## 5. Use Case: View Movie Details

**Actor:** Customer / Guest  

**Description:**  
Allows users to view detailed information about a selected movie.

**Preconditions:**  
- Movie exists in the system.

**Postconditions:**  
- Movie details are displayed.

**Basic Flow:**  
1. User selects a movie.
2. System retrieves movie details.
3. System displays details.

**Alternative Flows:**  
- Movie not found → Error message displayed.

---

## 6. Use Case: Add to Rental Cart

**Actor:** Customer  

**Description:**  
Allows users to add selected movies to a rental cart.

**Preconditions:**  
- User must be logged in.
- Movie must be available.

**Postconditions:**  
- Movie is added to the cart.

**Basic Flow:**  
1. User selects movie.
2. User clicks “Add to Cart”.
3. System adds movie to cart.

**Alternative Flows:**  
- Movie unavailable → System shows error message.

---

## 7. Use Case: Rent Movie

**Actor:** Customer  

**Description:**  
Allows users to rent movies from their cart.

**Preconditions:**  
- User is logged in.
- Cart contains at least one movie.

**Postconditions:**  
- Rental is completed.
- Rental data is stored.
- Confirmation is sent.

**Basic Flow:**  
1. User proceeds to checkout.
2. System calculates rental details.
3. User confirms rental.
4. System processes payment.
5. System stores rental data.
6. System sends confirmation.

**Alternative Flows:**  
- Payment fails → Transaction cancelled.  
- Empty cart → Prompt user to add movies.

---

## 8. Use Case: Manage Movie Catalog

**Actor:** Administrator / Staff  

**Description:**  
Allows administrators to manage movie records.

**Preconditions:**  
- Admin is logged in.

**Postconditions:**  
- Movie catalog is updated.

**Basic Flow:**  
1. Admin selects management option.
2. Admin adds/edits/deletes movie.
3. System updates database.
4. System confirms action.

**Alternative Flows:**  
- Invalid data → System shows error message.  
- Database error → Operation fails and user notified.

---
