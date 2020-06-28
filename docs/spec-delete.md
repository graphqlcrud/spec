---
id: delete
title: Delete Operation
---

## Delete Operation

The delete operation accepts a single input type as an argument.

For example, given a `Note` type like:

```graphql
type Note {
  id: ID!
  title: String!
  description: String
  comments: [Comment]!
}
```

The following mutation can be used:

```graphql
type Mutation {
    deleteNote(input: MutateNoteInput!): Note
}
```

The input type for this delete operation looks as follows:

```graphql
input MutateNoteInput {
  title: String
  description: String
}
```
