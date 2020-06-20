---
id: delta-queries
title: Delta Query Specification
---

Delta Queries extend the GraphQLCRUD spec to support offline-first GraphQL clients. It outlines the features and specifications needed to for smooth offline operation.

It consists of two aspects:

- Fetch data that was changed based on a client side `lastChanged` token.
- Ensure data consistency using the aforementioned `lastChanged` token provided.

### What are Delta Queries?

These are a special kind of query that necessarily takes a `lastChanged` argument and for every type that fetches the changed data for that type since the point in time specified by the `lastChanged` argument. An example type definition for this would be:

```graphql
type Comment {
  id: ID!
  text: String
  description: String
}

type Query {
  syncComments(lastChanged: String!, filter: CommentFilter): CommentDeltaList!
}
```

In the above example, the delta query is `syncComments` which returns a list of `CommentDelta` type:

```graphql
type CommentDelta {
  id: ID!
  text: String
  description: String
  createdAt: String
  updatedAt: String
  _deleted: Boolean
}

type CommentDeltaList {
  items: [CommentDelta]!
  lastChanged: String
}
```

Each object of this list is a snapshot of the current state of the row/document in the database, along with the timestamps that show when it was last changed(`updatedAt`), and when it was created(`createdAt`). It also provides info on if the row was deleted(`_deleted`), in which case `updatedAt` says when it was deleted.

The objects to be fetched in the delta query can also be filtered by using the `filter` argument 
which would work exactly like the filter in the [find](./spec-find.md) query.
