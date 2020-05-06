# Overview

GraphQLCRUD is a fully [GraphQL compliant](http://facebook.github.io/graphql/) query language that provides patterns for accessing and modification of the data. 
For example, this GraphQLCRUD query retrieves a single user:

```graphql
{
  user(where: { id: 4 }) {
    name
  }
}
```

returns:

```json
{
  "user": {
    "name": "Mark Zuckerberg"
  }
}
```

## Rationale

GraphQL is a flexible query language supporting many different data access patterns. 
In practice, simple CRUD operations turn out to be a very common pattern. Standardising this very common pattern enables the community to build tooling specific to the common CRUD style API.

## Work in progress

Specification is still in progress.
Contents bellow are not reflecting actual format of the standard. 