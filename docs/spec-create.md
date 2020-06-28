---
id: create
title: Create Operation
sidebar_label: Create Operation
---

## Create Operation

The create operation accepts a single input type as argument.

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
  createNote(input: CreateNoteInput!): Note!
}
```

The input type for this create operation looks as follows:

```graphql
input CreateNoteInput {
  ## To support client side ID creation
  id: ID
  title: String!
  description: String
}
```
