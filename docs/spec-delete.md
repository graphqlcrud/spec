---
id: spec-delete
title: Delete operation
---

## Delete Operation

Delete operation is enabled accepting single inputType as arguments

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
    deleteNote(input: MutateNoteInput!): Note!
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

### Contidional deletion

Conditional deletion can be enabled for the cases where we want to perform deletion 
operation only after meeting certain criteria

```graphql
type Mutation {
  deleteNote(input: MutateNoteInput!, where: DeleteNoteFilter): Note!
}
```
Input type for filtering has all fields marked as optional
```graphql
input DeleteNoteFilter {
  title: StringInput
  description: String
}
```
