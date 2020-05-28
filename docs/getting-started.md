---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Introduction

GraphQL CRUD is a superset of GraphQL giving developers
patterns for building standard data driven GraphLQL APIs.
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
For most of the projects CRUD operations turn out to be a very common pattern. Definifing this very common pattern enables the community to build tooling specific to the common CRUD style API.

## Targets of this spec

1. Define minimal subset of the CRUD capabilities 
that every application or developer can consume.
2. Provide overview of the data access methods that are used to fetch data
3. Avoid corner cases or specifics of individual CRUD implementations 
4. Define lenient standard based on practices, existing API and providers
that do not enforce specific query or mutation names etc.
5. Provide set of the reference implementations for *different programming languages* in case you want to adopt reference
implementation
6. Provide capabilities available in vanilla GraphQL (no preprocessors, helpers, annotations etc.)

## Non targets of this spec

1. Define every possible method to map database or SQL Capabilities

Over the years we seen issues with developers adopting very open CRUD capabilities on the client. 
There is no silverbullet that will give developers both flexiblity of the query capabilities on the client 
and underlying security and control over what data is exposed to the public. 
That is why we define only the most common use cases and do not target to provide mapping to every capability that database exposes.

2) Map CRUD specifics of the popular platforms 

GraphQL CRUD borrows patterns from existing GraphQL schemas and large GraphQL providers like AWS AppSync or Hasura,
however it is not focusing tightly on any specific provider itself. 


3) Defining best practices for writing GraphQL schemas

GraphQL CRUD focuses only on providing CRUD capaiblities. 
For general rules for GraphQL schemas see [GraphQL Rules](https://graphql-rules.com)

