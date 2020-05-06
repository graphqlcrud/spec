GraphQLCRUD
--------

*Working Draft – April 2020*

**Introduction**

GraphQL CRUD is an superset of the GraphQL giving developers
patterns for building standard data driven GraphLQL APIs.

**Targets of this spec**

- Define minimal subset of the CRUD capabilities 
that every application or developer can consume.
- Avoid corner cases or specifics of individual CRUD implementations 
- Define lenient standard based on practices, 
that do not enforce specific query or mutation names etc.
- Provide set of the reference implementations for different languages:
 - JavaScript 
 - Golang
 - Java

**Non targets of this spec**

- Define every possible method to map database. 
GraphQL CRUD exposes useful
- Map CRUD specifics of the popular platforms 
- Defining best practices for writing GraphQL
Please check https://graphql-rules.com instead

**Adopters** 

- Prisma (flavour with advanced query capabilities)
- Hasura (flavour with advanced query capabilities)
- AWS AppSync
- Postgraphile
- GraphCMS
- GraphQL-CLI
- GraphQL-Serve
- Add your own framework

**Other standards** 

*opencrud.org* -  no longer mantained draft focusing on providing database mapping 
*GraphQL Relay* - production ready standard for GraphQL based CRUD
*OData 4.0* - non graphql specific

# [Overview](1-overview.md)

# [Relational](2-crud/2-1-overview.md)
