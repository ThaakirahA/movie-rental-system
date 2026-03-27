# 🎬 Use Case Diagram – Aura Reels Movie Rental System

This diagram illustrates how different actors interact with the Aura Reels Movie Rental System.  
It follows UML use case modeling standards and is aligned with the functional requirements defined in Assignment 4.

## Actors
- Customer – Registers, logs in, browses, and rents movies.
- Guest – Browses and searches movies without an account.
- Admin – Manages movies, users, and reports.
- Staff – Assists with catalog management and reporting.
- System Administrator – Maintains system security and configurations.
- Business Owner – Reviews reports and business analytics.

## Use Case Diagram

```mermaid
usecaseDiagram
title Aura Reels Movie Rental System

actor Customer
actor Admin
actor Staff
actor "System Administrator" as SysAdmin
actor "Business Owner" as Owner
actor Guest

Customer --> (Register Account)
Customer --> (Login)
Customer --> (Browse Movies)
Customer --> (Search Movies)
Customer --> (Rent Movie)
Customer --> (View Rental History)
Customer --> (Watch Trailer)

Guest --> (Browse Movies)
Guest --> (Search Movies)
Guest --> (Register Account)

Admin --> (Manage Movie Catalog)
Admin --> (Manage User Accounts)
Admin --> (Generate Reports)

Staff --> (Manage Movie Catalog)
Staff --> (Generate Reports)

SysAdmin --> (Manage User Accounts)
SysAdmin --> (System Maintenance)

Owner --> (Generate Reports)
Owner --> (View Business Analytics)

(Rent Movie) ..> (Process Payment) : <<include>>
(Rent Movie) ..> (Send Notification) : <<include>>
