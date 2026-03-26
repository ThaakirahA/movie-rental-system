## 🎬 Use Case Diagram – Aura Reels Movie Rental System

The diagram shows how actors interact with the system’s main functions.

### Use Case Diagram

```mermaid
flowchart LR
    %% Actors
    subgraph "Actors"
        Customer[Customer]
        Admin[Administrator]
        Staff[Staff]
        SysAdmin[System Admin]
        Owner[Business Owner]
    end

    %% System Boundary
    subgraph "Aura Reels Movie Rental System"
        Login["Login / Register"]
        Browse["Browse Movies"]
        Search["Search Movies"]
        Rent["Rent Movie"]
        History["View Rental History"]
        Trailer["Watch Movie Trailer"]
        ManageCatalog["Manage Movie Catalog"]
        Reports["Generate Reports"]
        ManageUsers["Manage User Accounts"]
        Notifications["Receive Notifications"]
    end

    %% Connections
    Customer --> Login
    Customer --> Browse
    Customer --> Search
    Customer --> Rent
    Customer --> History
    Customer --> Trailer

    Admin --> ManageCatalog
    Admin --> Reports
    Admin --> ManageUsers

    Staff --> ManageCatalog
    Staff --> Reports

    SysAdmin --> ManageUsers
    SysAdmin --> Reports

    Owner --> Reports
    Owner --> Notifications
