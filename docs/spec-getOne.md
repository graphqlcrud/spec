---
id: getOne
title: Get Operation
sidebar_label: Get Operation
---

## Get Operation

Fetching an object by ID can be enabled by specifying an `id` argument. 
The ID can represent any unique field that object has.

For the Note type, this can be:

```graphql
getNote(id: ID!): Note
```
