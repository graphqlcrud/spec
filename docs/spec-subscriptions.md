---
id: subscriptions
title: Subscriptions
---

Subscriptions are divided to 3 different groups of changes.

Create, Update and Delete subscriptions can be used with filtering capabilities


```graphql
input NoteSubscriptionFilter {
  id: IDInput
  title: StringInput
  description: StringInput
  and: [NoteFilter]
  or: [NoteFilter]
  not: NoteFilter
}

type Subscription {
  newNote(filter: NoteSubscriptionFilter): Note!
  updatedNote(filter: NoteSubscriptionFilter): Note!
  deletedNote(filter: NoteSubscriptionFilter): Note!
}
```