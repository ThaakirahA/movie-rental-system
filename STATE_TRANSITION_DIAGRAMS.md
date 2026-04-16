# 🎬 State Transition Diagrams  
## Aura Reels Movie Rental System

This document presents the state transition diagrams for key objects in the Aura Reels Movie Rental System. Each diagram illustrates how objects change states in response to user actions, system events, and administrative operations.

---

## 1. Movie Object

```mermaid
stateDiagram-v2
    [*] --> Available
    Available --> Reserved : User adds to cart
    Reserved --> Available : Cart expired / removed from cart
    Reserved --> Rented : Rental confirmed
    Rented --> Available : Rental period ended
    Available --> Unavailable : Admin disables movie
    Unavailable --> Available : Admin restores movie
```

---

## 2. User Account Object

```mermaid
stateDiagram-v2
    [*] --> Unregistered
    Unregistered --> Registered : User submits registration
    Registered --> Active : Registration validated
    Active --> LoggedIn : User logs in
    LoggedIn --> Active : User logs out
    Active --> Suspended : Admin suspends account
    Suspended --> Active : Admin reactivates account
```

---

## 3. Rental Cart Object

```mermaid
stateDiagram-v2
    [*] --> Empty
    Empty --> Active : User adds movie
    Active --> Updated : User adds/removes movie
    Updated --> Active : Cart saved
    Active --> CheckedOut : User proceeds to checkout
    CheckedOut --> Empty : Rental completed
    Active --> Abandoned : User leaves without checkout
    Abandoned --> Empty : Cart cleared
```

---

## 4. Rental Object

```mermaid
stateDiagram-v2
    [*] --> Created
    Created --> PendingPayment : User confirms checkout
    PendingPayment --> Confirmed : [payment valid]
    PendingPayment --> Cancelled : [payment failed]
    Confirmed --> Active : Rental starts
    Active --> Completed : Rental period ends
    Active --> Cancelled : Admin/user cancels before activation
```

---

## 5. Payment Object

```mermaid
stateDiagram-v2
    [*] --> Initiated
    Initiated --> Processing : User submits payment
    Processing --> Successful : [payment approved]
    Processing --> Failed : [payment declined]
    Failed --> Processing : User retries payment
    Successful --> Recorded : System stores payment record
    Recorded --> [*]
```

---

## 6. User Session Object

```mermaid
stateDiagram-v2
    [*] --> Inactive
    Inactive --> Active : User logs in
    Active --> Idle : No activity detected
    Idle --> Active : User interacts with system
    Active --> Expired : Session timeout
    Idle --> Expired : Session timeout
    Active --> Inactive : User logs out
    Expired --> Inactive : Session cleared
```

---

## 7. Report Object

```mermaid
stateDiagram-v2
    [*] --> Requested
    Requested --> Generating : Admin/Owner requests report
    Generating --> Generated : Report data compiled
    Generated --> Viewed : User opens report
    Generated --> Exported : User downloads report
    Viewed --> Archived : Report stored for later use
    Exported --> Archived : Report stored for later use
```

---

## 8. Trailer Object

```mermaid
stateDiagram-v2
    [*] --> Unloaded
    Unloaded --> Loading : User selects watch trailer
    Loading --> Playing : Trailer loaded successfully
    Loading --> Error : Trailer failed to load
    Playing --> Paused : User pauses trailer
    Paused --> Playing : User resumes trailer
    Playing --> Ended : Trailer finishes
    Ended --> Unloaded : User closes trailer
    Error --> Unloaded : User retries / closes trailer
```

---
