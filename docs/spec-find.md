---
id: find
title: Find Operation
---

## Find multiple objects Specification

Find operation allows to fetch multiple objects from the database using filtering, sorting and pagination capabilities.

## Filtering

Boolean operations supported in filter:
- AND
- NOT
- OR

Matematical operators supported in filter
- Not Equals: '&#60;&#62;'
- Equals: '='
- Less or Equals: '<='
- Less: '<'
- Greater Equals: '>=
- Greater: '>'


String opperations supported in filter

- Contains: 'like'
- Startswith: 'like'
- Endswith: 'like'


Capabilities not supported

- Sorting by multiple fields
- Aggregation (Group by) apart from counting 

## Example query

```graphql
type Query {
  findNotes(filter: NoteFilter, orderBy: OrderByInput): [NoteResultList]!
}
```

Finding objects can be done by creating numerous helpers.
Filter input type:

```graphql
input NoteFilter {
  id: IDInput
  title: StringInput
  clickCount: IntInput
  floatValue: FloatInput
  description: StringInput
  and: [NoteFilter]
  or: [NoteFilter]
  not: NoteFilter
}
```

OrderBy input type:
```graphql
input OrderByInput {
  field: String!
  order: SortDirectionEnum = ASC
}

enum SortDirectionEnum {
  DESC
  ASC
}
```

To enable filtering for specific Scalars we can create individual InputTypes.
For example, for the five built-in Scalars this could be:

```graphql
input StringInput {
  ne: String
  eq: String
  le: String
  lt: String
  ge: String
  gt: String
  in: [String!]
  contains: String
  startsWith: String
  endsWith: String
}

input BooleanInput {
  ne: Boolean
  eq: Boolean
}

input FloatInput {
  ne: Float
  eq: Float
  le: Float
  lt: Float
  ge: Float
  gt: Float
  in: [Float!]
}

input IntInput {
  ne: Int
  eq: Int
  le: Int
  lt: Int
  ge: Int
  gt: Int
  in: [Int!]
}

input IDInput {
  ne: ID
  eq: ID
  in: [ID!]
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
