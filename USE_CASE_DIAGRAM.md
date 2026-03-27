# 🎬 Use Case Diagram – Aura Reels Movie Rental System

This diagram illustrates the interactions between the primary actors (Customer and Administrator) and the core functionalities of the system.

```mermaid
useCaseDiagram
    actor "Customer" as C
    actor "Administrator" as A

    package "Aura Reels Movie Rental System" {
        useCase "Register Account" as UC1
        useCase "Login to System" as UC2
        useCase "Browse Movie Catalogue" as UC3
        useCase "Search for Movies" as UC4
        useCase "Rent a Movie" as UC5
        useCase "View Rental History" as UC6
        
        useCase "Add New Movie" as UC7
        useCase "Update Movie Details" as UC8
        useCase "Delete Movie" as UC9
        useCase "Manage Availability" as UC10
    }

    %% Customer Associations
    C --> UC1
    C --> UC2
    C --> UC3
    C --> UC4
    C --> UC5
    C --> UC6

    %% Administrator Associations
    A --> UC2
    A --> UC7
    A --> UC8
    A --> UC9
    A --> UC10
