---
id: spec-getOne
title: Get Operation
sidebar_label: Get Operation
---

## Get single object 

Fetching the note by id can be enabled by specifying id as element. 
Id can be mapped to id of the object on the resolver level.

```graphql
getNote(id: ID!): Note
```