/// <reference types="./IndexedCollection.keys.d.ts" />

import { CollectionLike_count, } from "../../../collections.js";
import { returns } from "../../../functions.js";
function* iterate(indexed) {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        yield i;
    }
}
const IndexedCollection_keys = 
/*@__PURE__*/ returns(iterate);
export default IndexedCollection_keys;
