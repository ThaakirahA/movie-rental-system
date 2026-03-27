# 🎬 Use Case Diagram – Aura Reels Movie Rental System

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

# Key Actors and Their Roles
Guest

A guest is an unregistered user who can browse movies, search for movies, view movie details, and register for an account.

Customer

A customer is a registered user who can log into the system, browse movies, search for movies, view movie details, watch trailers, add movies to a rental cart, rent movies, and view their rental history.

Staff

Staff members are responsible for managing the movie catalog and generating reports related to movie rentals and system usage.

Administrator

The administrator oversees system operations, manages the movie catalog, manages user accounts, and generates reports.

System Administrator

The system administrator is responsible for maintaining the system, managing technical configurations, and ensuring system security and uptime.

Business Owner

The business owner uses system reports to monitor performance, user activity, and rental trends.

Relationships Between Actors and Use Cases

The diagram shows how each actor interacts with the system based on their responsibilities.

The Customer performs the main system actions such as browsing movies, searching, renting, and viewing rental history. The Guest has limited access and must register to become a customer.

The Rent Movie use case includes Process Payment and Send Rental Confirmation, since both are required to complete a rental.

Staff and Administrator both manage the movie catalog and generate reports. The System Administrator maintains the system and manages technical aspects. The Business Owner uses reports to monitor system performance and growth.

Alignment with Stakeholder Concerns

This diagram aligns with stakeholder needs identified in Assignment 4.

Customers need fast and easy rentals, which are supported by browsing, searching, and renting use cases. Staff and administrators require efficient management tools, which are supported by catalog and user management use cases. The system administrator ensures reliability and security through system maintenance. The business owner monitors success through reporting.

This ensures the system meets usability, performance, and management requirements.
