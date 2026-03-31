# 🎬 Product Backlog – Aura Reels Movie Rental System

---

## Product Backlog Table

| Story ID | User Story | Priority (MoSCoW) | Effort (Story Points) | Dependencies |
|----------|-----------|-------------------|------------------------|--------------|
| US-001 | Register account | Must-have | 3 | None |
| US-002 | Login to system | Must-have | 3 | US-001 |
| US-003 | Browse movies | Must-have | 2 | None |
| US-004 | Search movies | Must-have | 3 | None |
| US-005 | View movie details | Must-have | 2 | US-003 |
| US-006 | Add to rental cart | Must-have | 3 | US-002 |
| US-007 | Rent movie | Must-have | 5 | US-006 |
| US-008 | View rental history | Should-have | 2 | US-007 |
| US-009 | Manage movie catalog | Must-have | 5 | US-002 |
| US-010 | Manage users | Should-have | 3 | US-002 |
| US-011 | Generate reports | Could-have | 3 | US-007 |
| US-012 | Secure user data | Must-have | 5 | US-002 |

---

## Prioritization Justification

The backlog is prioritised using the **MoSCoW method** to ensure that critical system features are implemented first.

### Must-have
Must-have features represent the core functionality required for the Minimum Viable Product (MVP). These include user registration, login, browsing movies, searching, viewing movie details, adding to cart, renting movies, and system security. Without these features, the system cannot function.

### Should-have
Should-have features enhance the system but are not essential for initial release. These include viewing rental history and managing users, which improve usability and administration.

### Could-have
Could-have features provide additional value but are not necessary for the first version. Generating reports is useful for business insights but does not affect core user functionality.

---

## Effort Estimation Justification

Story points are assigned using a simplified Fibonacci scale:

- **2 points** → Simple features (e.g., displaying data)
- **3 points** → Moderate complexity (e.g., search, login)
- **5 points** → Complex features (e.g., rental processing, security)

This helps estimate development effort and plan realistic sprint workloads.

---

## Traceability to Requirements

Each backlog item is derived from Assignment 4 requirements and Assignment 5 use cases.

Examples:
- US-004 (Search movies) → Functional requirement: search functionality  
- US-007 (Rent movie) → Functional requirement: rental process  
- US-012 (Secure user data) → Non-functional requirement: security  

This ensures alignment between stakeholder needs, system requirements, and Agile planning.
