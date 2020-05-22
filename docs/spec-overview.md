---
id: spec-overview
title: Overview
sidebar_label: Overview
---

Specification 

## Areas covered

This specification describes all aspects of a flexible GraphQL API suitable for relational databases.

## Focus on API, not implementation/runtime characteristics

GraphQLCRUD is a collection of specifications for GraphQL APIs that are designed to work well with specific database technologies. GraphQLCRUD is concerned with the API surface, not the implementation. As such two implementations of GraphQLCRUD could choose to store data in different ways, but applications interacting with the data through the GraphQLCRUD API wouldn't be able to tell the difference.

## SDL

Examples are used throughout this spec to show the final schema generated for a specific data model. In all examples, the SDL notation is used to define the data model. The benefit of SDL is that it is database independent, so we can use the same notation accross all supported databases.

