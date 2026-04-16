# 🎬 Activity Diagrams  
## Aura Reels Movie Rental System

This section models the main workflows of the Aura Reels Movie Rental System using activity diagrams. These diagrams show how users, administrators, and the system interact to complete key processes.

---

# 👤 User Access Workflows

## 1. User Registration

```mermaid
flowchart TD
    A([Start]) --> B[User opens registration page]
    B --> C[User enters details]
    C --> D[System validates input]
    D --> E{Details valid?}
    E -- Yes --> F[Create account]
    F --> G[Display success message]
    G --> H([End])
    E -- No --> I[Display validation errors]
    I --> C
```

---

## 2. User Login

```mermaid
flowchart TD
    A([Start]) --> B[User opens login page]
    B --> C[User enters credentials]
    C --> D[System validates credentials]
    D --> E{Credentials valid?}
    E -- Yes --> F[Grant access]
    F --> G[Open dashboard / home page]
    G --> H([End])
    E -- No --> I[Display login error]
    I --> C
```

---

# 🎥 Movie Discovery Workflows

## 3. Browse Movies

```mermaid
flowchart TD
    A([Start]) --> B[User opens movie catalogue]
    B --> C[System retrieves available movies]
    C --> D{Movies available?}
    D -- Yes --> E[Display movie list]
    E --> F([End])
    D -- No --> G[Display no movies message]
    G --> F
```

---

## 4. Search Movies

```mermaid
flowchart TD
    A([Start]) --> B[User enters search keyword]
    B --> C[User clicks search]
    C --> D[System searches movie catalogue]
    D --> E{Results found?}
    E -- Yes --> F[Display matching movies]
    F --> G([End])
    E -- No --> H[Display no results message]
    H --> G
```

---

## 5. View Movie Details

```mermaid
flowchart TD
    A([Start]) --> B[User selects movie]
    B --> C[System retrieves movie details]
    C --> D{Movie found?}
    D -- Yes --> E[Display title, genre, rating, description]
    E --> F([End])
    D -- No --> G[Display error message]
    G --> F
```

---

# 🛒 Rental Workflows

## 6. Add Movie to Cart

```mermaid
flowchart TD
    A([Start]) --> B[User selects movie]
    B --> C{User logged in?}
    C -- Yes --> D{Movie available?}
    C -- No --> E[Prompt user to log in]
    E --> F([End])
    D -- Yes --> G[Add movie to cart]
    G --> H[Update cart]
    H --> I([End])
    D -- No --> J[Display unavailable message]
    J --> I
```

---

## 7. Rent Movie

```mermaid
flowchart TD
    A([Start]) --> B[User opens cart]
    B --> C{Cart has movie?}
    C -- No --> D[Display empty cart message]
    D --> Z([End])
    C -- Yes --> E[Proceed to checkout]
    E --> F[System calculates rental details]
    F --> G[User confirms rental]
    G --> H[Process payment]
    H --> I{Payment valid?}
    I -- No --> J[Display payment failed message]
    J --> Z
    I -- Yes --> K[Create rental record]
    K --> L[Update movie availability]
    K --> M[Send confirmation message]
    L --> N[Display rental success]
    M --> N
    N --> Z([End])
```

---

# 📊 Administrative Workflow

## 8. Generate Report

```mermaid
flowchart TD
    A([Start]) --> B[Admin/Owner requests report]
    B --> C[System gathers report data]
    C --> D[System generates report]
    D --> E{View or export?}
    E -- View --> F[Display report]
    E -- Export --> G[Download report]
    F --> H([End])
    G --> H
```

---
