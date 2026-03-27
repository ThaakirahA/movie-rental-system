# Test Cases – Aura Reels Movie Rental System

---

## Functional Test Cases

| Test Case ID | Requirement ID | Description | Steps | Expected Result | Actual Result | Status |
|-------------|----------------|------------|-------|----------------|--------------|--------|
| TC-001 | FR-001 | User registers account | 1. Navigate to registration page 2. Enter valid user details 3. Click "Register" | Account is created and confirmation message displayed |  |  |
| TC-002 | FR-002 | User logs in | 1. Enter valid username and password 2. Click "Login" | User is authenticated and redirected to dashboard |  |  |
| TC-003 | FR-003 | Browse movies | 1. Login 2. Navigate to movie catalog | List of available movies is displayed |  |  |
| TC-004 | FR-004 | Search movie | 1. Login 2. Enter movie title in search bar 3. Click "Search" | Relevant results displayed within ≤ 2 seconds |  |  |
| TC-005 | FR-005 | Rent movie | 1. Login 2. Search for movie 3. Select movie 4. Click "Rent" 5. Confirm rental | Rental record stored; movie availability updated; confirmation displayed |  |  |
| TC-006 | FR-006 | View rental history | 1. Login 2. Navigate to "Rental History" | List of previously rented movies is displayed |  |  |
| TC-007 | FR-007 | Admin adds movie | 1. Login as admin 2. Navigate to "Add Movie" 3. Enter movie details 4. Submit | Movie is successfully added and visible in catalog |  |  |
| TC-008 | FR-008 | Admin updates movie | 1. Login as admin 2. Select movie 3. Edit details 4. Save changes | Updated movie details are saved and displayed |  |  |
| TC-009 | FR-009 | Admin deletes movie | 1. Login as admin 2. Select movie 3. Click "Delete" 4. Confirm deletion | Movie is removed and no longer visible |  |  |
| TC-010 | FR-012 | Receive notifications | 1. Rent a movie 2. Wait for system notification | Notification received within 5 seconds |  |  |

---

## Non-Functional Test Cases

### Performance Test

**Test ID:** NFT-001  
**Requirement:** System Performance  

**Scenario:**  
Simulate **1000 concurrent users** performing movie searches and rentals.

**Steps:**  
1. Use load testing tool (e.g., JMeter)  
2. Simulate multiple users performing search and rental operations  
3. Measure system response time  

**Expected Result:**  
- System handles load without crashing  
- All search and rental operations return results within ≤ 2 seconds  

---

### Security Test

**Test ID:** NFT-002  
**Requirement:** System Security  

**Scenario:**  
Test login authentication and unauthorized access.

**Steps:**  
1. Attempt multiple failed login attempts  
2. Attempt access to admin features without authorization  

**Expected Result:**  
- Access denied for unauthorized users  
- User passwords remain encrypted  
- System prevents brute-force attacks (rate limiting or lockouts)  

---

### Scalability Test

**Test ID:** NFT-003  
**Requirement:** System Scalability  

**Scenario:**  
Gradually increase users from 100 to 1000.

**Steps:**  
1. Simulate increasing user load  
2. Monitor system performance and response times  

**Expected Result:**  
- System performance remains stable  
- No crashes or failures  
- Response time ≤ 2 seconds  

---

## Notes

- **Actual Result** and **Status** will be filled during testing.  
- All test cases are directly mapped to functional requirements from Assignment 4.  
- Test cases align with use cases defined in Assignment 5.  
