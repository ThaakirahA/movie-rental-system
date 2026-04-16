# 🎬 State Transition Diagrams  
## Aura Reels Movie Rental System

This section models how key system objects change state based on user actions, system events, and administrative controls.

---

# 🎥 Core User Interaction Objects

## 1. Movie

```mermaid
stateDiagram-v2
    [*] --> Available
    Available --> Reserved : Add to cart
    Reserved --> Available : Removed / timeout
    Reserved --> Rented : Rental confirmed
    Rented --> Available : Rental ended
    Available --> Unavailable : Admin disables
    Unavailable --> Available : Admin restores
```

---

## 2. Rental

```mermaid
stateDiagram-v2
    [*] --> Created
    Created --> PendingPayment : Checkout
    PendingPayment --> Confirmed : [payment valid]
    PendingPayment --> Cancelled : [payment failed]
    Confirmed --> Active : Rental starts
    Active --> Completed : Rental ends
    Active --> Cancelled : Cancel before activation
```

---

## 3. Rental Cart

```mermaid
stateDiagram-v2
    [*] --> Empty
    Empty --> Active : Add movie
    Active --> Updated : Modify cart
    Updated --> Active
    Active --> CheckedOut : Checkout
    CheckedOut --> Empty
    Active --> Abandoned
    Abandoned --> Empty
```

---

# 👤 User & Session Management

## 4. User Account

```mermaid
stateDiagram-v2
    [*] --> Unregistered
    Unregistered --> Registered
    Registered --> Active
    Active --> LoggedIn
    LoggedIn --> Active
    Active --> Suspended
    Suspended --> Active
```

---

## 5. User Session

```mermaid
stateDiagram-v2
    [*] --> Inactive
    Inactive --> Active : Login
    Active --> Idle
    Idle --> Active
    Active --> Expired
    Idle --> Expired
    Active --> Inactive : Logout
    Expired --> Inactive
```

---

# 💳 Transaction & System Processes

## 6. Payment

```mermaid
stateDiagram-v2
    [*] --> Initiated
    Initiated --> Processing
    Processing --> Successful
    Processing --> Failed
    Failed --> Processing
    Successful --> Recorded
```

---

## 7. Report

```mermaid
stateDiagram-v2
    [*] --> Requested
    Requested --> Generating
    Generating --> Generated
    Generated --> Viewed
    Generated --> Exported
    Viewed --> Archived
    Exported --> Archived
```

---

# 🎞 Media Interaction

## 8. Trailer

```mermaid
stateDiagram-v2
    [*] --> Unloaded
    Unloaded --> Loading
    Loading --> Playing
    Loading --> Error
    Playing --> Paused
    Paused --> Playing
    Playing --> Ended
    Ended --> Unloaded
    Error --> Unloaded
```

---
