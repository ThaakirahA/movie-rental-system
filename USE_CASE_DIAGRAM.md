## 🎬 Use Case Diagram – Aura Reels Movie Rental System

The diagram shows how actors interact with the system’s main functions.

### Use Case Diagram

```mermaid
flowchart LR
    %% Actors
    Customer[Customer]
    Admin[Administrator]
    SysAdmin[System Admin]
    Owner[Business Owner]

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

    Rent -->|<<include>>| Login
    Rent -->|<<include>>| Search
    Rent -->|<<include>>| Notifications
    Search -->|<<extend>>| Browse

    Admin --> ManageCatalog
    Admin --> Reports
    Admin --> ManageUsers

    SysAdmin --> ManageUsers
    SysAdmin --> Reports

    Owner --> Reports
    Owner --> Notifications
