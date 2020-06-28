---
id: concepts
title: Concepts
sidebar_label: Concepts
---

## CRUD methods

GraphQL CRUD defines different CRUD capabilities that represents 
various operations that can be executed on a set of objects:

- Create: create an object
- Update: update a specific object's properties
- Delete: delete a specific object by its ID 
- Get: get a specific object by its ID
- Find: find multiple objects

## Input types

GraphQL CRUD defines common input type categories that can be used in various CRUD methods to define operations.
For example, the Create operation will use a specific input type that does not require an object ID.

## Capabilities

GraphQL CRUD defines different capabilities that developers can enable to modify 
what queries can be made against the service. Examples of these capabilities include:

- Pagination: Ability to paginate content
- Filtering: Ability to peform filtering on specific fields
- Countability: Ability to count the total number of objects
- Consistency: Ability to verify whether a write operation is overriding data

## Variations

Apart from a reference implementation, GraphQL CRUD provides different variations 
of the provided queries and mutations that can be used for different needs.

