# 🎬 Use Case Diagram – Aura Reels Movie Rental System

This diagram illustrates the interactions between the primary actors (Customer and Administrator) and the core functionalities of the system.

```mermaid
flowchart LR
    Customer[Customer]
    Guest[Guest]
    Staff[Staff]
    Admin[Administrator]
    SysAdmin[System Administrator]
    Owner[Business Owner]

    UC1([Register Account])
    UC2([Login])
    UC3([Browse Movies])
    UC4([Search Movies])
    UC5([View Movie Details])
    UC6([Watch Trailer])
    UC7([Add to Rental Cart])
    UC8([Rent Movie])
    UC9([View Rental History])
    UC10([Manage Movie Catalog])
    UC11([Manage User Accounts])
    UC12([Generate Reports])
    UC13([Maintain System])
    UC14([Process Payment])
    UC15([Send Rental Confirmation])

    Guest --> UC1
    Guest --> UC3
    Guest --> UC4
    Guest --> UC5

    Customer --> UC2
    Customer --> UC3
    Customer --> UC4
    Customer --> UC5
    Customer --> UC6
    Customer --> UC7
    Customer --> UC8
    Customer --> UC9

    Staff --> UC10
    Staff --> UC12

    Admin --> UC10
    Admin --> UC11
    Admin --> UC12

    SysAdmin --> UC11
    SysAdmin --> UC13

    Owner --> UC12

    UC8 -.-> UC14
    UC8 -.-> UC15
