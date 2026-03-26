# Test Cases – Aura Reels Movie Rental System

---

## Functional Test Cases

| Test Case ID | Requirement ID | Description | Steps | Expected Result | Actual Result | Status |
|-------------|--------------|------------|-------|----------------|--------------|--------|
| TC-001 | FR-001 | User registers account | 1. Navigate to registration page 2. Enter valid user details 3. Click "Register" | Account is created and user is redirected to login page |  |  |
| TC-002 | FR-002 | User logs in | 1. Enter valid username and password 2. Click "Login" | User is authenticated and redirected to dashboard |  |  |
| TC-003 | FR-003 | Browse movies | 1. Login 2. Navigate to movie catalog | List of available movies is displayed |  |  |
| TC-004 | FR-004 | Search movie | 1. Login 2. Enter movie title in search bar 3. Click "Search" | Relevant results displayed within ≤ 2 seconds |  |  |
| TC-005 | FR-005 | Rent movie | 1. Login 2. Search for movie 3. Select movie 4. Click "Rent" 5. Confirm rental | Rental is stored, availability updated, confirmation message displayed |  |  |
| TC-006 | FR-006 | View rental history | 1. Login 2. Navigate to "Rental History" | List of previously rented movies is displayed |  |  |
| TC-007 | FR-007 | Admin adds movie | 1. Login as admin 2. Navigate to "Add Movie" 3. Enter movie details 4. Submit | Movie is successfully added to database and visible in catalog |  |  |
| TC-008 | FR-008 | Admin updates movie | 1. Login as admin 2. Select movie 3. Edit details 4. Save changes | Updated movie details are saved and displayed |  |  |
| TC-009 | FR-009 | Admin deletes movie | 1. Login as admin 2. Select movie 3. Click "Delete" 4. Confirm deletion | Movie is removed from system and no longer visible |  |  |
| TC-010 | FR-013 | Filter movies | 1. Login 2. Select genre or rating filter | Filtered movies displayed correctly based on selected criteria |  |  |

---

## Non-Functional Test Cases

### Performance Test

**Test ID:** NFT-001  
**Requirement:** System Performance  

**Scenario:**  
Simulate **1000 concurrent users** performing movie searches.

**Steps:**
1. Use load testing tool (e.g., JMeter)
2. Simulate concurrent search requests
3. Measure response time

**Expected Result:**  
- System handles load without crashing  
- Search results returned within **≤ 2 seconds**

---

### Security Test

**Test ID:** NFT-002  
**Requirement:** System Security  

**Scenario:**  
Attempt multiple failed login attempts.

**Steps:**
1. Enter incorrect credentials repeatedly
2. Attempt unauthorized access

**Expected Result:**  
- Access is denied  
- No sensitive data is exposed  
- Passwords remain encrypted  
- System prevents brute-force attempts (e.g., rate limiting)

---

### Scalability Test (Advanced)

**Test ID:** NFT-003  
**Requirement:** System Scalability  

**Scenario:**  
Gradually increase users from 100 to 1000.

**Steps:**
1. Simulate increasing user load
2. Monitor system performance

**Expected Result:**  
- System performance remains stable  
- No crashes or failures  
- Response time remains ≤ 2 seconds  

---

## Notes

- Actual Result and Status will be completed during testing phase.
- All test cases are directly mapped to functional requirements (Assignment 4).
- Test cases align with use cases defined in Assignment 5.
