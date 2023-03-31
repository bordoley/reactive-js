/// <reference types="./Indexed.toReadonlyArray.d.ts" />

import { newInstance } from "../../../functions.js";
import { CollectionLike_count, IndexedLike_get, } from "../../../util.js";
const Indexed_toReadonlyArray = () => (queue) => {
    const count = queue[CollectionLike_count];
    const result = newInstance(Array, count);
    for (let i = 0; i < count; i++) {
        result[i] = queue[IndexedLike_get](i);
    }
    return result;
};
export default Indexed_toReadonlyArray;
