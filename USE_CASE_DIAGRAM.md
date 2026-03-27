## 🎬 Use Case Diagram – Aura Reels Movie Rental System

The diagram shows how actors interact with the system’s main functions.  
Relationships include `<<include>>` for mandatory steps and `<<extend>>` for optional flows.

### Use Case Diagram

```mermaid
flowchart LR
    %% Actors
    Customer[Customer]
    Admin[Administrator]
    Staff[Staff]
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
    Customer --> Rent
    Customer --> Browse
    Customer --> Search
    Customer --> History
    Customer --> Trailer

    Rent -->|<<include>>| Login
    Rent -->|<<include>>| Search
    Rent -->|<<include>>| Notifications

    Admin --> ManageCatalog
    Admin --> Reports
    Admin --> ManageUsers

    Staff -->|Generalization| Admin
    Staff --> ManageCatalog
    Staff --> Reports

    SysAdmin --> ManageUsers
    SysAdmin --> Reports

    Owner --> Reports
    Owner --> Notifications
