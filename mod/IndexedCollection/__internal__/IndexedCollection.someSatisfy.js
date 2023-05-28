/// <reference types="./IndexedCollection.someSatisfy.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_someSatisfy = (predicate) => indexed => {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        if (predicate(indexed[KeyedCollectionLike_get](i))) {
            return true;
        }
    }
    return false;
};
export default IndexedCollection_someSatisfy;
