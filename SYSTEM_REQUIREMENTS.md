# System Requirements – Aura Reels Movie Rental System

---

## Functional Requirements

1. The system shall allow users to register an account.  
   - Acceptance Criteria:
     - Users must provide a valid email and password.
     - The system must validate all input fields.

2. The system shall allow users to log into the system securely.  
   - Acceptance Criteria:
     - Users must be authenticated using valid credentials.
     - Invalid login attempts must display an error message.

3. The system shall allow users to browse a catalogue of available movies.  
   - Acceptance Criteria:
     - Movies must be displayed in a list format.
     - Each movie must show title, genre, and rating.

4. The system shall allow users to search for movies by title.  
   - Acceptance Criteria:
     - Search results must be displayed within ≤ 2 seconds.
     - Results must match the search keyword.

5. The system shall display detailed movie information.  
   - Acceptance Criteria:
     - Details must include title, description, genre, and rating.
     - Information must load within ≤ 2 seconds.

6. The system shall allow users to add movies to a rental cart.  
   - Acceptance Criteria:
     - Selected movies must appear in the cart immediately.
     - Users must be able to view all selected items.

7. The system shall allow users to remove movies from the cart.  
   - Acceptance Criteria:
     - Removed movies must disappear instantly from the cart.

8. The system shall allow users to complete a rental checkout process.  
   - Acceptance Criteria:
     - The system must confirm the rental after checkout.
     - Rental data must be stored in the database.

9. The system shall allow administrators to add new movies.  
   - Acceptance Criteria:
     - Movie details must be saved successfully.
     - New movies must appear in the catalogue immediately.

10. The system shall allow administrators to edit movie information.  
    - Acceptance Criteria:
      - Updated information must reflect immediately.

11. The system shall allow administrators to delete movies.  
    - Acceptance Criteria:
      - Deleted movies must no longer appear in the system.

12. The system shall allow users to view movie trailers.  
    - Acceptance Criteria:
      - Trailer must play without buffering issues.

---

## Non-Functional Requirements

### Usability
The system shall allow users to complete a movie rental in ≤ 2 minutes with minimal navigation steps.

### Deployability
The system shall be deployable on both Windows and Linux environments using a Node.js runtime.

### Maintainability
The system shall follow a modular architecture separating frontend, backend, and database layers.

### Scalability
The system shall support at least 1000 concurrent users without performance degradation.

### Security
All user passwords shall be encrypted using bcrypt hashing and sensitive data must be protected.

### Performance
The system shall return search results within ≤ 2 seconds.

### Reliability
The system shall maintain at least 99% uptime per month.

### Availability
The system shall be accessible through modern web browsers including Chrome, Edge, and Firefox.
