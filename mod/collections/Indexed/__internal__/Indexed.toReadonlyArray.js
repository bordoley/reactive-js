/// <reference types="./Indexed.toReadonlyArray.d.ts" />

import { abs } from "../../../__internal__/math.js";
import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pick } from "../../../functions.js";
import Indexed_toCollection from "./Indexed.toCollection.js";
const Indexed_toReadonlyArray = 
/*@__PURE__*/ Indexed_toCollection((values, startIndex, count) => {
    const result = newInstance(Array, abs(count));
    let resultIndex = 0;
    let index = startIndex;
    let cnt = count;
    while (cnt > 0) {
        result[resultIndex] = values[KeyedLike_get](index);
        cnt--;
        index++;
        resultIndex++;
    }
    while (cnt < 0) {
        result[resultIndex] = values[KeyedLike_get](index);
        cnt++;
        index--;
        resultIndex++;
    }
    return result;
}, pick(CollectionLike_count));
export default Indexed_toReadonlyArray;
