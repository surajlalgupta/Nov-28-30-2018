/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookList_all$ref: FragmentReference;
export type BookList_all = {|
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
  +$refType: BookList_all$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookList_all",
  "type": "Query",
  "metadata": null,
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
      "selections": [
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'd4b63cdcc22efc45f5b105b14d09b41a';
module.exports = node;
