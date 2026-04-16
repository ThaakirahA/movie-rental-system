# 📝 State Transition Explanations – Aura Reels Movie Rental System

---

## 1. Movie Object

The Movie object moves through states based on user and administrator actions. A movie starts in the **Available** state, meaning it can be viewed and selected for rental. When a user adds it to a cart, it moves to **Reserved**. If the cart is abandoned or the movie is removed, it returns to **Available**. Once the rental is confirmed, the movie enters the **Rented** state. After the rental period ends, it becomes **Available** again. Administrators can also mark a movie as **Unavailable** or restore it.

This diagram maps to Assignment 4 functional requirements such as browsing movies, viewing movie availability, and renting movies. It also supports the administrator requirement to manage movie availability.

---

## 2. User Account Object

The User Account object begins in the **Unregistered** state. Once the user submits valid registration details, the account becomes **Registered** and then **Active**. From there, the user can move into the **LoggedIn** state by authenticating successfully. Logging out returns the account to **Active**. Administrators may also move an account into **Suspended**, after which it can later be restored.

This diagram maps to functional requirements for user registration, login, authentication, and account management. It also supports use cases from Assignment 5 related to account access and system administration.

---

## 3. Rental Cart Object

The Rental Cart object starts in the **Empty** state. When the user adds a movie, it becomes **Active**. Changes to the cart cause it to move to **Updated**, and once saved, it returns to **Active**. Proceeding to checkout moves the cart into **CheckedOut**, and after successful rental completion, it returns to **Empty**. If the user leaves without checking out, the cart becomes **Abandoned** before eventually being cleared.

This diagram maps to functional requirements for adding movies to a cart, removing movies from a cart, and completing the checkout process. It also aligns with the Assignment 5 use cases for cart handling and rental flow.

---

## 4. Rental Object

The Rental object begins in the **Created** state when the user initiates checkout. It then enters **PendingPayment** while the system processes payment. If the payment is valid, it moves to **Confirmed**; if payment fails, it moves to **Cancelled**. A confirmed rental becomes **Active** when the rental period starts, and then **Completed** when the rental ends. A rental may also be cancelled before activation.

This diagram maps directly to the functional requirement for renting movies and the non-functional requirement for reliable transaction handling. It also supports the Assignment 5 use case for Rent Movie and the Assignment 6 sprint tasks related to checkout.
```
