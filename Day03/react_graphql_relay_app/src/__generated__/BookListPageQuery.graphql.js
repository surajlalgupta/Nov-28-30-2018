/**
 * @flow
 * @relayHash 4d8e51b127cbc44cfdd48b8f8dbc748d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookListPageQueryVariables = {| |};
export type BookListPageQueryResponse = {|
  +allBooks: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: {|
        +id: string,
        +title: string,
        +price: ?number,
      |},
    |}>,
  |},
|};
*/


/*
query BookListPageQuery {
  allBooks(first: 1, after: "sadsd") {
    edges {
      cursor
      node {
        id
        title
        price
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "BookEdge",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookListPageQuery",
  "id": null,
  "text": "query BookListPageQuery {\n  allBooks(first: 1, after: \"sadsd\") {\n    edges {\n      cursor\n      node {\n        id\n        title\n        price\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "allBooks"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "BookListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "allBooks",
        "name": "__BookListPage_allBooks_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "BookConnection",
        "plural": false,
        "selections": v0
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBooks",
        "storageKey": "allBooks(after:\"sadsd\",first:1)",
        "args": [
          {
            "kind": "Literal",
            "name": "after",
            "value": "sadsd",
            "type": "String"
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 1,
            "type": "Int!"
          }
        ],
        "concreteType": "BookConnection",
        "plural": false,
        "selections": v0
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allBooks",
        "args": [
          {
            "kind": "Literal",
            "name": "after",
            "value": "sadsd",
            "type": "String"
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 1,
            "type": "Int!"
          }
        ],
        "handle": "connection",
        "key": "BookListPage_allBooks",
        "filters": null
      }
    ]
  }
};
})();
(node/*: any*/).hash = '281639c8dafdb7a095343b2f50f54740';
module.exports = node;
