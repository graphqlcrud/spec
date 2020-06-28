---
id: gettingstarted
title: Getting Started
sidebar_label: Getting Started
---

## Introduction

GraphQL CRUD is a superset of the GraphQL specification that gives developers
patterns for building standard, data-driven GraphQL APIs.
GraphQL CRUD is a fully [GraphQL-compliant](http://facebook.github.io/graphql/) specification that provides patterns for access and modification of data. 
For example, this GraphQL CRUD query retrieves a single user:

```graphql
{
  user(where: { id: 4 }) {
    name
  }
}
```

and returns the following response:

```json
{
  "user": {
    "name": "Mark Zuckerberg"
  }
}
```

## Rationale

GraphQL is a flexible query language supporting many different data access patterns. 
For most projects, CRUD operations turn out to be a very common pattern. Defining this pattern enables the community to build tooling specific to it.

## Targets of GraphQL CRUD

1. Define a minimal subset of CRUD capabilities 
that every application or developer can implement.
2. Provide an overview of the data access methods that are used to fetch data
3. Avoid corner cases or specifics of individual service implementations 
4. Define a lenient standard based on practices, existing APIs and providers
that do not enforce specific naming of root fields, types, etc.
5. Provide a set of the reference implementations for *different programming languages*
6. Provide capabilities native to GraphQL (no preprocessors, helpers, annotations, etc.)

## Non-targets of GraphQL CRUD

1. Define every possible method to map database capabilities

Over the years, we have seen issues with developers adopting very open CRUD capabilities on the client. 
There is no silver bullet that will give developers both flexiblity of the query capabilities on the client 
and underlying security and control over what data is exposed to the public. 
That is why we define only the most common use cases and do not provide a mapping to every capability that a database might expose.

2) Include CRUD specifics of any specific platforms

GraphQL CRUD borrows patterns from existing GraphQL schemas and large GraphQL providers like AWS AppSync and Hasura;
however, it is does not focus on any specific provider itself. 

3) Defining best practices for writing GraphQL schemas

GraphQL CRUD focuses only on providing CRUD capabilities. 
For general rules for GraphQL schemas see [GraphQL Rules](https://graphql-rules.com)
