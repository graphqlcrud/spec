---
id: update
title: Update Operation
---

## Update Operation

The update operation accepts a single input type as an argument.

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
    updateNote(input: MutateNoteInput!): Note
}
```

The input type for this delete operation looks as follows:

```graphql
input MutateNoteInput {
  # ID field is required for update
  id: ID!
  title: String
  description: String
}
```

## Variations

### Conditional updates

Conditional updates can be enabled for cases where we want to perform an update 
operation only after meeting certain criteria.

```graphql
type Mutation {
  updateNote(input: MutateNoteInput!, where: UpdateNoteFilter): Note!
}
```

Unlike the previous example, the input type for filtering has all fields marked as optional.

```graphql
input UpdateNoteFilter {
  title: String
  description: String
}
```
