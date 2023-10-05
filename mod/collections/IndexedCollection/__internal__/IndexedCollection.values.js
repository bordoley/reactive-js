/// <reference types="./IndexedCollection.values.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../../collections.js";
import { returns } from "../../../functions.js";
function* iterate(indexed) {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        yield indexed[KeyedCollectionLike_get](i);
    }
}
const IndexedCollection_values = 
/*@__PURE__*/ returns(iterate);
export default IndexedCollection_values;
