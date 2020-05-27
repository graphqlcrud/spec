---
id: spec-subscriptions
title: Subscriptions
---

Subscriptions are divided to 3 different groups of changes
Create, Update and Delete subscriptions that users can use with filtering capabilities

``` graphql
input NoteSubscriptionFilter {
  id: ID
  title: String
  description: String
}

type Subscription {
  newNote(filter: NoteSubscriptionFilter): Note!
  updatedNote(filter: NoteSubscriptionFilter): Note!
  deletedNote(filter: NoteSubscriptionFilter): Note!
}
```