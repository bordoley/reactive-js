/// <reference types="./IndexedCollection.everySatisfy.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_everySatisfy = (predicate) => indexed => {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        if (!predicate(indexed[KeyedCollectionLike_get](i))) {
            return false;
        }
    }
    return true;
};
export default IndexedCollection_everySatisfy;
