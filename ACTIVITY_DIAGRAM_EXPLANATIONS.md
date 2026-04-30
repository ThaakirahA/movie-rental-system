# 📝 Activity Diagram Explanations  
## Aura Reels Movie Rental System

This document explains the activity workflows of the Aura Reels Movie Rental System and shows how they align with stakeholder concerns, functional requirements, and earlier use cases.

---

## 1. User Registration

This workflow begins when a user opens the registration page and enters their details. The system validates the input before deciding whether to create the account or return validation errors.

This addresses the stakeholder concern for easy account creation and maps to the functional requirement that the system shall allow users to register an account. It also supports the Assignment 5 use case for Register Account.

---

## 2. User Login

This workflow shows how a registered user enters credentials, the system validates them, and access is either granted or denied. Incorrect credentials return an error and allow the user to try again.

This addresses usability and security concerns by ensuring only valid users gain access. It maps to the functional requirement for secure login and the Assignment 5 Login use case.

---

## 3. Browse Movies

This workflow starts when a user opens the movie catalogue. The system retrieves available movies and either displays them or shows a message if no movies are currently available.

This supports the stakeholder need for easy movie discovery and maps to the functional requirement for browsing movies. It also aligns with the Browse Movies use case from Assignment 5.

---

## 4. Search Movies

This workflow begins when the user enters a keyword and submits a search request. The system searches the catalogue and either shows matching results or a no-results message.

This addresses the customer concern for fast and easy movie discovery. It maps directly to the functional requirement for searching movies and supports the Assignment 5 Search Movies use case.

---

## 5. View Movie Details

This workflow begins when a user selects a movie. The system retrieves detailed information and displays it if found, otherwise it shows an error message.

This addresses the user need for enough information before renting and maps to the functional requirement for viewing detailed movie information. It also supports the View Movie Details use case from Assignment 5.

---

## 6. Add Movie to Cart

This workflow checks whether the user is logged in and whether the movie is available before adding it to the rental cart. If either condition fails, the system displays the appropriate message.

This addresses both usability and transaction reliability. It maps to the functional requirement for adding movies to the cart and supports the Add to Rental Cart use case from Assignment 5.

---

## 7. Rent Movie

This is the most complex workflow. It begins when the user opens the cart and proceeds to checkout. The system checks whether the cart contains items, calculates rental details, processes payment, creates a rental record, updates availability, and sends confirmation.

This workflow addresses major stakeholder concerns such as usability, performance, and transaction success. The parallel actions of updating movie availability and sending confirmation help ensure efficient processing. It maps directly to the functional requirement for renting movies and the Assignment 5 Rent Movie use case. It also connects to Assignment 6 sprint tasks related to checkout and payment processing.

---

## 8. Generate Report

This workflow begins when an administrator or business owner requests a report. The system gathers data, generates the report, and allows the user to either view or export it.

This addresses administrative and business stakeholder concerns related to monitoring rentals, activity, and system performance. It maps to the reporting requirements and supports earlier administrative use cases.

---
