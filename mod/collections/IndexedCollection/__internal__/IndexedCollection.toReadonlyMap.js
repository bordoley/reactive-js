/// <reference types="./IndexedCollection.toReadonlyMap.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
const IndexedCollection_toReadonlyMap = () => (indexed) => {
    const map = newInstance(Map);
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        map.set(i, indexed[KeyedCollectionLike_get](i));
    }
    return map;
};
export default IndexedCollection_toReadonlyMap;
