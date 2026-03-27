# 🎬 Use Case Diagram – Aura Reels Movie Rental System

```mermaid
flowchart LR
    %% Actors
    Customer([Customer])
    Guest([Guest])
    Admin([Admin])
    Staff([Staff])
    SysAdmin([System Administrator])
    Owner([Business Owner])

    %% System boundary
    subgraph AuraReelsSystem["Aura Reels Movie Rental System"]
        Register((Register Account))
        Login((Login))
        Browse((Browse Movies))
        Search((Search Movies))
        Rent((Rent Movie))
        History((View Rental History))
        Trailer((Watch Trailer))
        ManageCatalog((Manage Movie Catalog))
        ManageUsers((Manage User Accounts))
        Reports((Generate Reports))
        Maintenance((System Maintenance))
        Analytics((View Business Analytics))
        Payment((Process Payment))
        Notification((Send Notification))
    end

    %% Customer interactions
    Customer --> Register
    Customer --> Login
    Customer --> Browse
    Customer --> Search
    Customer --> Rent
    Customer --> History
    Customer --> Trailer

    %% Guest interactions
    Guest --> Browse
    Guest --> Search
    Guest --> Register

    %% Admin interactions
    Admin --> ManageCatalog
    Admin --> ManageUsers
    Admin --> Reports

    %% Staff interactions
    Staff --> ManageCatalog
    Staff --> Reports

    %% System admin interactions
    SysAdmin --> ManageUsers
    SysAdmin --> Maintenance

    %% Owner interactions
    Owner --> Reports
    Owner --> Analytics

    %% Include relationships
    Rent --> Payment
    Rent --> Notification
