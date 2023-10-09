/// <reference types="./IndexedCollection.entries.d.ts" />

import { CollectionLike_count, Collection_type, KeyedCollectionLike_get, } from "../../../collections.js";
import { pick, pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import IndexedCollection_toCollection from "./IndexedCollection.toCollection.js";
const IndexedCollection_entries = 
/*@__PURE__*/ IndexedCollection_toCollection((indexed, startIndex, count) => {
    function* IndexedCollection_entries() {
        for (; count !== 0; count > 0 ? (startIndex++, count--) : (startIndex--, count++)) {
            yield [
                startIndex,
                indexed[KeyedCollectionLike_get](startIndex),
            ];
        }
    }
    return Enumerable_create(() => pipe(IndexedCollection_entries(), Enumerator_fromIterator()));
}, pick(CollectionLike_count));
export default IndexedCollection_entries;
