# 🎬 Use Case Diagram – Aura Reels Movie Rental System

This diagram illustrates the interactions between the primary actors (Customer and Administrator) and the core functionalities of the system.

```mermaid
flowchart LR
    %% Actors
    Customer[Customer]
    Admin[Administrator]

    %% System boundary
    subgraph AuraReelsSystem["Aura Reels Movie Rental System"]
        UC1((Register Account))
        UC2((Login to System))
        UC3((Browse Movie Catalogue))
        UC4((Search for Movies))
        UC5((Rent a Movie))
        UC6((View Rental History))
        
        UC7((Add New Movie))
        UC8((Update Movie Details))
        UC9((Delete Movie))
        UC10((Manage Availability))
    end

    %% Customer Associations
    Customer --> UC1
    Customer --> UC2
    Customer --> UC3
    Customer --> UC4
    Customer --> UC5
    Customer --> UC6

    %% Administrator Associations
    Admin --> UC2
    Admin --> UC7
    Admin --> UC8
    Admin --> UC9
    Admin --> UC10

    %% Styling for a neat look
    style AuraReelsSystem fill:#f9f9f9,stroke:#333,stroke-width:2px
    style Customer fill:#fff,stroke:#333,stroke-width:2px
    style Admin fill:#fff,stroke:#333,stroke-width:2px
