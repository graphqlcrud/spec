---
id: subscriptions
title: Subscriptions
---

## Subscriptions

Subscriptions are divided to three different groups of changes: Create, Update and Delete.

Subscriptions can be used with filtering to only receive events that match the provide filter.

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