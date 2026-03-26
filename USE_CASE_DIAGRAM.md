# Use Case Diagram – Aura Reels Movie Rental System

## Use Case Diagram (Enhanced UML)

```mermaid
flowchart TD

Customer((Customer))
Admin((Administrator))
Staff((Staff))
SysAdmin((System Admin))
Owner((Business Owner))

subgraph System

Login[Login]
Register[Register]
Browse[Browse Movies]
Search[Search Movies]
Rent[Rent Movie]
History[View Rental History]
Manage[Manage Movies]
Reports[Generate Reports]
Notify[Receive Notification]

end

Customer --> Register
Customer --> Login
Customer --> Browse
Customer --> Search
Customer --> Rent
Customer --> History

Admin --> Manage
Admin --> Reports

Staff --> Manage
SysAdmin --> Reports
Owner --> Reports

Rent -->|<<include>>| Login
Rent -->|<<include>>| Search
Rent -->|<<include>>| Notify

Search -->|<<extend>>| Browse
