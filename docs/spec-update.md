---
id: spec-update
title: spec-update
sidebar_label: spec-update
---

## Update Specification

Update operation is enabled accepting single inputType as arguments

For `Note` type:
```graphql
type Note {
  id: ID!
  title: String!
  description: String
  comments: [Comment]!
}
```

Following mutation will be created:
```graphql
type Mutation {
    updateNote(input: MutateNoteInput!): Note!
}
```

Input type for update operation looks as follows
```graphql
input MutateNoteInput {
  # ID field is required for update
  id: ID!
  title: String
  description: String
}
```

## Variations

### Contidional updates

Conditional updates can be enabled for the cases where we want to perform update 
operation only after meeting certain criteria

```graphql
type Mutation {
  updateNote(input: MutateNoteInput!, where: UpdateNoteFilter): Note!
}
```
Input type for filtering has all fields marked as optional
```graphql
input UpdateNoteFilter {
  title: String
  description: String
}
```