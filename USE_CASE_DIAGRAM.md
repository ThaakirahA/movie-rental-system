# 🎬 Use Case Diagram – Aura Reels Movie Rental System

This diagram illustrates how different actors interact with the Aura Reels Movie Rental System and follows UML use case modeling standards.

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
