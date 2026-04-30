# 🔗 Integration with Prior Work  
## Aura Reels Movie Rental System

This document shows how the state transition diagrams and activity diagrams align with previous assignments, specifically the functional requirements from Assignment 4 and the Agile planning artifacts from Assignment 6.

---

## 1. Traceability to Functional Requirements (Assignment 4)

| Diagram / Object / Workflow | Related Functional Requirement | Explanation |
|-----------------------------|-------------------------------|-------------|
| Movie State Diagram | FR: Browse available movies | The Movie object includes states such as Available, Reserved, Rented, and Unavailable, which reflect how movie availability changes in the system. |
| User Account State Diagram | FR: Register account / Login securely | The User Account object models registration, activation, login, logout, and suspension. |
| Rental Cart State Diagram | FR: Add to cart / Remove from cart / Checkout | The Rental Cart object captures how the cart changes during the rental preparation process. |
| Rental State Diagram | FR: Complete rental checkout | The Rental object models checkout, payment validation, activation, completion, and cancellation. |
| Payment State Diagram | FR: Complete rental payment | The Payment object models payment initiation, processing, success, failure, and recording. |
| User Session State Diagram | FR: Login and secure access | The User Session object supports secure login, idle handling, timeout, and logout. |
| Trailer State Diagram | FR: Watch trailer | The Trailer object models loading, playback, pausing, ending, and error handling. |
| Report State Diagram | FR: Generate reports / monitor activity | The Report object models report request, generation, viewing, exporting, and archiving. |

---

## 2. Traceability to User Stories (Assignment 6)

| Diagram / Object / Workflow | Related User Story | Explanation |
|-----------------------------|-------------------|-------------|
| User Registration Activity Diagram | US-001 Register account | Shows the steps from entering user details to account creation or validation errors. |
| User Login Activity Diagram | US-002 Login to system | Shows credential validation and access control. |
| Browse Movies Activity Diagram | US-003 Browse movies | Models the workflow for loading and displaying available movies. |
| Search Movies Activity Diagram | US-004 Search movies | Models keyword search and result handling. |
| View Movie Details Activity Diagram | US-005 View movie details | Models selection and display of movie details. |
| Add Movie to Cart Activity Diagram | US-006 Add to rental cart | Models availability checking, login requirement, and cart updating. |
| Rent Movie Activity Diagram | US-007 Rent movie | Models checkout, payment, rental confirmation, and availability update. |
| Payment State Diagram | US-007 Rent movie | Supports the payment validation step of the rental process. |

---

## 3. Traceability to Sprint Tasks (Assignment 6)

| Diagram / Workflow | Related Sprint Task | Explanation |
|--------------------|--------------------|-------------|
| User Registration Activity Diagram | T-001 Design registration UI / T-002 Implement registration backend | The workflow reflects both the interface and validation logic required for registration. |
| User Login Activity Diagram | T-003 Implement login functionality | The workflow maps directly to login validation and access control. |
| Browse Movies Activity Diagram | T-004 Develop movie listing interface | The workflow supports retrieving and displaying available movies. |
| Search Movies Activity Diagram | T-005 Implement search functionality | The workflow maps to searching and displaying matching results. |
| Add Movie to Cart Activity Diagram | T-006 Develop rental cart functionality | The workflow supports cart updates and access checks. |
| Rent Movie Activity Diagram | T-007 Implement rental checkout process | The workflow models checkout, payment, and confirmation. |
| Rent Movie Activity Diagram | T-008 Integrate frontend with backend API | The workflow depends on system communication between UI and backend processes. |
| Rent Movie Activity Diagram | T-009 Perform system testing and validation | The workflow provides testable steps for validating rental success and payment failure handling. |

---

## 4. Summary

The state transition diagrams model the lifecycle of important system objects, while the activity diagrams model how users and the system interact to complete workflows.

Together, these diagrams strengthen the design of the Aura Reels Movie Rental System by ensuring consistency with previous assignments. They connect requirements, use cases, user stories, and sprint tasks into a single coherent design process.

---
