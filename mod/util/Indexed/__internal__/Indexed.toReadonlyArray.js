/// <reference types="./Indexed.toReadonlyArray.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../../containers.js";
import { newInstance } from "../../../functions.js";
const Indexed_toReadonlyArray = () => (queue) => {
    const count = queue[CollectionLike_count];
    const result = newInstance(Array, count);
    for (let i = 0; i < count; i++) {
        result[i] = queue[KeyedCollectionLike_get](i);
    }
    return result;
};
export default Indexed_toReadonlyArray;
