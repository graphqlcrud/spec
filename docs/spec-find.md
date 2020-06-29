---
id: find
title: Find Operation
---

## Find Operation

The find operation allows the client to fetch multiple objects from the database using filtering, sorting and pagination capabilities.

## Filtering

Boolean operators supported when filtering:
- AND
- NOT
- OR

Matematical operators supported when filtering:
- Not equal: '&#60;&#62;'
- Equal: '='
- Less than or equal: '<='
- Less than: '<'
- Greater than or equal: '>='
- Greater than: '>'

String opperations supported when filtering:

- Contains: 'like'
- Starts with: 'like'
- Ends with: 'like'

Capabilities not supported:

- Sorting by multiple fields
- Aggregation apart from counting 

## Example query

```graphql
type Query {
  findNotes(filter: NoteFilter, orderBy: OrderByInput): [NoteResultList]!
}
```

Input type for `filter` argument:

```graphql
input NoteFilter {
  id: IDInput
  title: StringInput
  clickCount: IntInput
  floatValue: FloatInput
  description: StringInput
  and: [NoteFilter!]
  or: [NoteFilter!]
  not: NoteFilter
}
```

Input type for `orderBy` argument:

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

To enable filtering by specific scalar fields, we can create individual input types for each scalar:
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
