/// <reference types="./IndexedCollection.entries.d.ts" />

import { CollectionLike_count, Container_type, KeyedCollectionLike_get, } from "../../../collections.js";
import { pick } from "../../../functions.js";
import IndexedCollection_toContainer from "./IndexedCollection.toContainer.js";
function* iterate(indexed, startIndex, count) {
    for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
        yield [startIndex, indexed[KeyedCollectionLike_get](startIndex)];
    }
}
const IndexedCollection_entries = 
/*@__PURE__*/ IndexedCollection_toContainer(iterate, pick(CollectionLike_count));
export default IndexedCollection_entries;
