---
id: datasync
title: Data Synchronization
---

This is an optional part of the spec that is meant to support offline-first GraphQL clients. It outlines the features and specifications needed to have for smooth offline operation.

It consists of two aspects:

- Fetch data that was changed based on the client side timestamp
- Ensure data consistency using timestamp provided.

A GraphQL API is require to provide the following features for compliance with the spec:

### Delta Queries

These are a special kind of query that necessarily takes a `lastSync` argument and for every type that fetches the changed data for that type since the point in time specified by the `lastSync` argument. An example type definition for this would be:

```graphql
type Comment {
  id: ID!
  text: String
  description: String
}

type Query {
  syncComments(lastSync: String!, filter: CommentFilter): CommentDeltaList!
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
  lastSync: String
}
```

Each object of this list is a snapshot of the current state of the row/document in the database, along with the timestamps that show when it was last changed(`updatedAt`), and when it was created(`createdAt`). It also provides info on if the row was deleted(`_deleted`), in which case the `updatedAt` timestamp says when it was deleted.

The objects to be fetched in the delta query can also be filtered by using the `filter` argument 
which would work exactly like the filter in the [find](./spec-find.md) query.

### Server-side Conflict resolution

If a client goes offline, there is a strong possiblity that the cached data may not be consistent with the data from the source. Thus it is advisable to to have some mechanism for detecting this inconsistency and some way to resolve this. For example, requiring an `updatedAt` timestamp for every mutation is a decent way to ensure this:

```graphql
input MutateCommentInput {
  id: ID!
  title: String
  description: String
  updatedAt: String!
}
```

This could possibly detect inconsistencies when issuing mutations and possibly resolve them or inform the client about the differences, for example:

```json
{
  "conflictInfo": {
    "serverState": {
      "id": "5eedae1367d72e2192561723",
      "text": "AlreadyUpdatedTitle",
      "_deleted": false,
      "createdAt": "1592634899084",
      "updatedAt": "1592634899084"
    },
    "clientState": {
      "id": "5eedae1367d72e2192561723",
      "text": "ClientSideUpdate",
      "updatedAt": "1592634898093"
    }
  }
}
```

