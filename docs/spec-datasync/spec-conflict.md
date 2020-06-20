---
id: conflict-resolution
title: Server-Side Conflict Resolution
sidebar_label: Conflict Resolution
---

If a client goes offline, there is a strong possiblity that the cached data may not be consistent with the data from the source. Thus it is advisable to have some mechanism for detecting this inconsistency and some way to resolve this. For example, requiring an `updatedAt` timestamp for every mutation is a decent way to ensure this:

```graphql
input MutateCommentInput {
  id: ID!
  title: String
  description: String
  updatedAt: String!
}
```

This could possibly detect inconsistencies when issuing mutations and possibly resolve them or inform the client about the differences, for example:

```json
{
  "conflictInfo": {
    "serverState": {
      "id": "5eedae1367d72e2192561723",
      "text": "AlreadyUpdatedTitle",
      "_deleted": false,
      "createdAt": "1592634899084",
      "updatedAt": "1592634899084"
    },
    "clientState": {
      "id": "5eedae1367d72e2192561723",
      "text": "ClientSideUpdate",
      "updatedAt": "1592634898093"
    }
  }
}
```

