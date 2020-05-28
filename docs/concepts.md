---
id: concepts
title: Concepts
sidebar_label: Concepts
---

## Specification concepts

Specification uses following vocabulary to define GraphQL queries


## CRUD method

GraphQL CRUD defines different CRUD capabilities that represents 
various operations that can be executed on the set of the objects:

- Create: creation of the object
- Update: update of the any object properties
- Delete: delete entire object by id 
- Get: get specific object by id
- Find: find multiple objects using query

## Input types

GraphQL CRUD defines common input type categories that can be used in various CRUD methods to define operations.
For example Create operation will use specific input type that does not require object ID.

## Capabilities

GraphQL CRUD defines different capabilities that developers can enable to modify 
how queries can be defined. Good example of this capabilities are:

- Pagination: Ability to paginate content
- Filtering: Ability to peform filtering on specific fields
- Countability: Ability to count number of entire for query
- Consistency: Ability to verify if write operation is not overriding data.

## Variations

Apart from reference implementation GraphQL CRUD provides different variations 
of the queries and mutations that can be used for different needs etc.

## Extensions

GraphQL CRUD provides various extensions for more advanced use cases like:

- Querying Server Side Delta
- Subscriptions filtering etc.
