# 🎬 Test Cases – Aura Reels Movie Rental System

---

## Functional Test Cases

| Test Case ID | Requirement ID | Description | Steps | Expected Result | Actual Result | Status |
|--------------|----------------|-------------|-------|-----------------|---------------|--------|
| TC-001 | FR-001 | User registers a new account | 1. Open registration page. 2. Enter valid email and password. 3. Click **Register**. | Account is created successfully and confirmation message is displayed. | Pending | Pending |
| TC-002 | FR-002 | User logs into the system | 1. Open login page. 2. Enter valid credentials. 3. Click **Login**. | User is authenticated and redirected to the dashboard or home page. | Pending | Pending |
| TC-003 | FR-003 | User browses available movies | 1. Open movie catalogue page. 2. Scroll through listed movies. | System displays a list of available movies with titles, genres, and ratings. | Pending | Pending |
| TC-004 | FR-004 | User searches for a movie by title | 1. Enter movie title in search bar. 2. Click **Search**. | Matching movie results are displayed within 2 seconds. | Pending | Pending |
| TC-005 | FR-005 | User views movie details | 1. Select a movie from the catalogue. 2. Click on the movie. | System displays full movie details including title, description, genre, and rating. | Pending | Pending |
| TC-006 | FR-006 | User adds a movie to the rental cart | 1. Log into the system. 2. Select an available movie. 3. Click **Add to Cart**. | Selected movie is added to the rental cart successfully. | Pending | Pending |
| TC-007 | FR-007 | User removes a movie from the rental cart | 1. Open rental cart. 2. Select added movie. 3. Click **Remove**. | Selected movie is removed from the rental cart immediately. | Pending | Pending |
| TC-008 | FR-008 | User completes rental checkout | 1. Log in. 2. Add movie to cart. 3. Proceed to checkout. 4. Confirm rental. | Rental is completed successfully, stored in the database, and confirmation is sent to the user. | Pending | Pending |
| TC-009 | FR-009 | Administrator adds a new movie | 1. Log in as administrator. 2. Open movie management page. 3. Enter movie details. 4. Click **Add Movie**. | New movie is saved and displayed in the catalogue. | Pending | Pending |
| TC-010 | FR-010 | Administrator edits movie information | 1. Log in as administrator. 2. Select an existing movie. 3. Edit details. 4. Save changes. | Updated movie information is displayed immediately in the catalogue. | Pending | Pending |
| TC-011 | FR-011 | Administrator deletes a movie | 1. Log in as administrator. 2. Select a movie. 3. Click **Delete**. | Movie is removed from the system and no longer appears in the catalogue. | Pending | Pending |
| TC-012 | FR-012 | User watches a movie trailer | 1. Select a movie. 2. Click **Watch Trailer**. | Trailer starts playing successfully without errors. | Pending | Pending |

---

## Non-Functional Test Scenarios

| Test Case ID | Requirement ID | Description | Steps | Expected Result | Actual Result | Status |
|--------------|----------------|-------------|-------|-----------------|---------------|--------|
| NFT-001 | NFR-Performance | Verify search performance under load | 1. Simulate 1000 concurrent users. 2. Each user searches for a movie by title. 3. Measure response times. | Search results are returned within 2 seconds for all or most requests under normal load conditions. | Pending | Pending |
| NFT-002 | NFR-Security | Verify password protection and secure login | 1. Register a new user. 2. Store password in database. 3. Attempt login with correct and incorrect credentials. 4. Inspect stored password format. | Password is stored in encrypted/hashed form, valid credentials allow login, and invalid credentials are rejected. | Pending | Pending |

---

## Notes

- **Actual Result** and **Status** can be updated after the system is tested.
- Functional test cases are aligned with the functional requirements defined in Assignment 4.
- Non-functional test scenarios validate key quality attributes, specifically performance and security.
