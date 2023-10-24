/// <reference types="./Indexed.toReadonlyMap.d.ts" />

import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
const Indexed_toReadonlyMap = () => (indexed) => {
    const map = newInstance(Map);
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
        map.set(i, indexed[KeyedLike_get](i));
    }
    return map;
};
export default Indexed_toReadonlyMap;
