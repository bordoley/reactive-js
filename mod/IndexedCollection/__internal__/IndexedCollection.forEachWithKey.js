/// <reference types="./IndexedCollection.forEachWithKey.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_forEachWithKey = (effect) => indexed => {
    const cnt = indexed[CollectionLike_count];
    for (let i = 0; i < cnt; i++) {
        const v = indexed[KeyedCollectionLike_get](i);
        effect(v, i);
    }
    return indexed;
};
export default IndexedCollection_forEachWithKey;
