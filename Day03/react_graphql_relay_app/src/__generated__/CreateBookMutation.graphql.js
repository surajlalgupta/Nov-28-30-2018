/**
 * @flow
 * @relayHash 9d3ecc2ea57df36f2c03788d999eadc1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBookMutationVariables = {|
  input: {
    id: string,
    title: string,
    price: number,
    authors: $ReadOnlyArray<?string>,
  },
|};
export type CreateBookMutationResponse = {|
  +createBook: ?string,
|};
*/


/*
mutation CreateBookMutation(
  $input: BookInput!
) {
  createBook(book: $input)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "BookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "createBook",
    "args": [
      {
        "kind": "Variable",
        "name": "book",
        "variableName": "input",
        "type": "BookInput"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateBookMutation",
  "id": null,
  "text": "mutation CreateBookMutation(\n  $input: BookInput!\n) {\n  createBook(book: $input)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '8368a1c8b633b09bea67b7306d26067a';
module.exports = node;
