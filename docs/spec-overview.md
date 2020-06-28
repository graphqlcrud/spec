---
id: overview
title: Overview
sidebar_label: Overview
---

## Areas covered

This specification describes all aspects of a flexible GraphQL API suitable for relational databases.

## Focus on API

GraphQLCRUD is a collection of specifications for GraphQL APIs that are abstracting from any database technologies. GraphQLCRUD is concerned with the API only and abstracts away the implementation. As such two implementations of GraphQLCRUD could choose to store data in different ways, but applications interacting with the data through the GraphQLCRUD API wouldn't be able to tell the difference.

## Schema Definition Language

Examples are used throughout this spec to show the final schema generated for a specific data model. In all examples, SDL (Schema Definition Language) notation is used to define the data model. The benefit of SDL is that it is database independent, so we can use the same notation accross all supported databases.

## Naming

GraphQL CRUD does not specify how fields generated for each data type must be named. It is up to each GraphQL CRUD implementation to define a naming system. The reference implementation uses the naming convention as listed in the example queries.

## Base schema

The specification is based on the folllowing two models.
Any additional types will be directly referenced in the schema.

```graphql
type Note {
  id: ID!
  title: String!
  description: String
  comments: [Comment]!
}

type Comment {
  id: ID!
  text: String
  description: String
  votes: Int
  note: Note
}
```
