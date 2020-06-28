---
id: create
title: Create Operation
sidebar_label: Create Operation
---

## Create Specification

Create operation is enabled accepting single inputType as argument

For `Note` type:

```graphql
type Note {
  id: ID!
  title: String!
  description: String
  comments: [Comment]!
}
```

Following mutation can be used

```graphql
type Mutation {
  createNote(input: CreateNoteInput!): Note
}
```

Input type for create operation looks as follows:

```graphql
input CreateNoteInput {
  ## To support client side id creation
  id: ID
  title: String!
  description: String
}
```