/// <reference types="./IndexedCollection.entries.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_entries = () => (indexed) => {
    const count = indexed[CollectionLike_count];
    function* IndexedCollectionEntries() {
        for (let i = 0; i < count; i++) {
            yield [i, indexed[KeyedCollectionLike_get](i)];
        }
    }
    return Enumerable_create(() => pipe(IndexedCollectionEntries(), Iterator_enumerate()));
};
export default IndexedCollection_entries;
