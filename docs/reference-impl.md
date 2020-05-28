---
id: reference-impl
title: Reference implementations
sidebar_label: Implementations
---

GraphQL CRUD can be applied out of the box using https://graphback.dev 

## Reference Implementations

### Node.js 

[Graphback](https://graphback.dev) provides ability to generate schema that will be fully compatible with the 
GraphQLCRUD and also connect it directly to Postgress, MongoDB and other datasources without writing any code.

### JavaScript

[Offix](https://offix.dev) provides reference implementation for the delta sync queries and implements GraphQL CRUD on the client side.


## Libraries that partialy implement GraphQL CRUD

Specification was build based on numerous community implementations

- AWS AppSync
- Prisma 
- Hasura 
- Postgraphile
- SQLMancer
- TypeORM
- GraphCMS
- GraphQL CLI
- GraphQL-serve
- create-graphql

## Relation to Relay

Relay (https://relay.dev/) provides similar capabilites to GraphQL CRUD.
However GraphQL CRUD takes more leanient and less verbose approach for building GraphQL Queries.
Both standard are incompatibile with each other
