# Use Case Diagram – Aura Reels Movie Rental System

## Use Case Diagram (Simplified & Clear)

```mermaid
flowchart TD
    %% Actors
    Customer((Customer))
    Admin((Administrator))
    Staff((Staff))
    SysAdmin((System Admin))
    Owner((Business Owner))

    %% Customer Use Cases
    subgraph "Customer Use Cases"
        Register["Register Account"]
        Login["Login"]
        Browse["Browse Movies"]
        Search["Search Movies"]
        Rent["Rent Movie"]
        History["View Rental History"]
        Trailer["Watch Movie Trailer"]
    end

    %% Admin & Staff Use Cases
    subgraph "Admin / Staff Use Cases"
        Manage["Manage Movie Catalog"]
        Reports["Generate Reports"]
        ManageUsers["Manage User Accounts"]
    end

    %% Notifications (shared)
    subgraph "Notifications"
        Notify["Receive Notifications"]
    end

    %% Actor to Use Case Relationships
    Customer --> Register
    Customer --> Login
    Customer --> Browse
    Customer --> Search
    Customer --> Rent
    Customer --> History
    Customer --> Trailer

    Admin --> Manage
    Admin --> Reports
    Admin --> ManageUsers

    Staff --> Manage
    Staff --> Reports

    SysAdmin --> ManageUsers
    SysAdmin --> Reports

    Owner --> Reports
    Owner --> Notify

    %% Use Case Relationships
    Rent -->|<<include>>| Login
    Rent -->|<<include>>| Search
    Rent -->|<<include>>| Notify

    Search -->|<<extend>>| Browse
    Trailer -->|<<extend>>| Browse
    ManageUsers -->|<<include>>| Login
