# Use Case Diagram – Aura Reels Movie Rental System

## Use Case Diagram (Mermaid UML – Distinction-Level)

```mermaid
flowchart TD
    %% Actors
    Customer((Customer))
    Admin((Administrator))
    Staff((Staff))
    SysAdmin((System Admin))
    Owner((Business Owner))

    %% System Boundary
    subgraph "Aura Reels Movie Rental System"
        Register["Register Account"]
        Login["Login"]
        Browse["Browse Movies"]
        Search["Search Movies"]
        Rent["Rent Movie"]
        History["View Rental History"]
        Trailer["Watch Movie Trailer"]
        Manage["Manage Movie Catalog"]
        Reports["Generate Reports"]
        Notify["Receive Notifications"]
        ManageUsers["Manage User Accounts"]
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

    SysAdmin --> Reports
    SysAdmin --> ManageUsers

    Owner --> Reports
    Owner --> Notify

    %% Use Case Relationships
    Rent -->|<<include>>| Login
    Rent -->|<<include>>| Search
    Rent -->|<<include>>| Notify

    Search -->|<<extend>>| Browse
    Trailer -->|<<extend>>| Browse
    ManageUsers -->|<<include>>| Login
