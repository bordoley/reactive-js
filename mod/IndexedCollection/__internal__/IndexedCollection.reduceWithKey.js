/// <reference types="./IndexedCollection.reduceWithKey.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_reduceWithKey = (reducer, initialValue) => (indexed) => {
    const count = indexed[CollectionLike_count];
    let acc = initialValue();
    for (let i = 0; i < count; i++) {
        acc = reducer(acc, indexed[KeyedCollectionLike_get](i), i);
    }
    return acc;
};
export default IndexedCollection_reduceWithKey;
