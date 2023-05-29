/// <reference types="./IndexedCollection.toReadonlyMap.d.ts" />

import { newInstance } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_toReadonlyMap = () => (indexed) => {
    const map = newInstance(Map);
    const length = indexed[CollectionLike_count];
    for (let i = 0; i < length; i++) {
        map.set(i, indexed[KeyedCollectionLike_get](i));
    }
    return map;
};
export default IndexedCollection_toReadonlyMap;
