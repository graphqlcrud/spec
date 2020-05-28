---
id: spec-find
title: Find Operation
---

## Find multiple objects Specification

Find operation can be respresented as follows

```graphql
type Query {
  findNotes(filter: NoteFilter, orderBy: OrderByInput): [Note]!
}
```

Finding objects can be done by creating numerous helpers.
Filter input type:
```graphql
input NoteFilter {
  id: IDInput
  title: StringInput
  description: StringInput
  and: [NoteFilter]
  or: [NoteFilter]
  not: NoteFilter
}

OrderBy input type:
```graphql
input OrderByInput {
  field: String!
  order: SortDirectionEnum = ASC
}
```

To enable filtering for specific Scalars we can create individual InputTypes.
For example for String scalar this could be:
```graphql
input StringInput {
  ne: String
  eq: String
  le: String
  lt: String
  ge: String
  gt: String
  in: [String]
  contains: String
  startsWith: String
  endsWith: String
}
```

For ID type input will look as follows:
```graphql
input IDInput {
  ne: ID
  eq: ID
}
```

## Variations

### Pagination

```graphql
type Query {
  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!
}

## Special type created as wrapper for pagination
type NoteResultList {
  items: [Note]!
  offset: Int
  limit: Int
  count: Int
}

## Represents page request
input PageRequest {
  limit: Int
  offset: Int
}
```
