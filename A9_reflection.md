# 📝 Reflection – Domain Modeling and Class Diagram Design  
## Aura Reels Movie Rental System

This assignment focused on designing a domain model and a class diagram to represent the structure and relationships within the system. While the process helped strengthen my understanding of object-oriented design, several challenges were encountered during the development of the model.

---

## Challenges in Designing the Domain Model

One of the main challenges was identifying the correct level of abstraction when defining domain entities. Initially, it was difficult to decide which entities were essential and which could be excluded. For example, separating entities such as Rental, Payment, and RentalCart required careful consideration to avoid unnecessary complexity while still accurately representing system functionality.

Another challenge was defining attributes and methods for each entity. It was important to ensure that each class had meaningful responsibilities without duplicating functionality across classes. This required aligning the design with real-world system behaviour, ensuring that each method logically belonged to its respective class.

---

## Challenges in Defining Relationships

Defining relationships between classes was another complex aspect. It required understanding when to use associations versus composition. For example, the relationship between User and RentalCart was modelled using composition because the cart belongs directly to the user and cannot exist independently. Similarly, Payment was linked to Rental using composition because a payment is part of the rental process.

Another difficulty was deciding on multiplicity. Determining whether relationships should be one-to-one or one-to-many required careful thinking about how the system operates in real scenarios, such as a user having multiple rentals or a cart containing multiple movies.

---

## Alignment with Previous Assignments

The class diagram aligns closely with previous assignments, particularly Assignment 4 (requirements), Assignment 5 (use cases), and Assignment 8 (state and activity diagrams).

Functional requirements such as user registration, login, browsing movies, and renting movies are directly represented in the class methods and relationships. The use cases from Assignment 5, such as "Add to Rental Cart" and "Rent Movie", are reflected in the interactions between User, RentalCart, Rental, and Payment.

Additionally, the state diagrams from Assignment 8 helped inform the design of class attributes such as status in the Movie, Rental, and Payment classes. The activity diagrams also influenced how workflows were translated into class responsibilities.

---

## Trade-offs and Design Decisions

Several trade-offs were made during the design process. One key decision was to keep User and Admin as separate classes instead of using inheritance. While inheritance could reduce duplication, separating them made the design clearer and easier to understand.

Another trade-off was simplifying relationships to maintain readability. Although more detailed relationships could have been included, such as separate classes for notifications or authentication, these were excluded to keep the diagram focused on core system functionality.

---

## Lessons Learned

This assignment improved my understanding of how to model systems using object-oriented principles. It highlighted the importance of clearly defining responsibilities for each class and ensuring that relationships accurately reflect system behaviour.

I also learned that designing a class diagram is not just about representing data, but about capturing how different parts of the system interact. Ensuring alignment with previous requirements and behavioural models is essential for building a consistent and well-structured system design.

Overall, this assignment strengthened my ability to translate system requirements into a structured and logical class-based design, which is essential for future software development and implementation.

---
