---
id: reference
title: Reference implementations
sidebar_label: Implementations
---

GraphQL CRUD can be applied out of the box using https://graphback.dev 

## Reference Implementations

### Node.js 

[Graphback](https://graphback.dev) provides the ability to generate a schema that will be fully compatible with 
GraphQL CRUD and also connect it directly to Postgres, MongoDB and other datasources without writing any code.

### JavaScript

[Offix](https://offix.dev) provides a reference implementation for delta sync queries and implements GraphQL CRUD on the client side.


## Libraries that partialy implement GraphQL CRUD

This specification was built based on numerous community implementations:

- AWS AppSync
- Prisma
- Hasura
- PostGraphile
- SQLmancer
- TypeORM
- GraphCMS
- GraphQL CLI
- graphql-serve
- create-graphql

## Relation to Relay

Relay (https://relay.dev/) provides similar capabilites to GraphQL CRUD.
However, GraphQL CRUD takes a more lenient and less verbose approach to building GraphQL queries.
Both standard are incompatibile with each other.
