/// <reference types="./IndexedCollection.toReadonlyArray.d.ts" />

import { abs } from "../../../__internal__/math.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../../collections.js";
import { newInstance, pick } from "../../../functions.js";
import IndexedCollection_toCollection from "./IndexedCollection.toCollection.js";
const IndexedCollection_toReadonlyArray = 
/*@__PURE__*/ IndexedCollection_toCollection((values, startIndex, count) => {
    const result = newInstance(Array, abs(count));
    let resultIndex = 0;
    let index = startIndex;
    let cnt = count;
    while (cnt > 0) {
        result[resultIndex] = values[KeyedCollectionLike_get](index);
        cnt--;
        index++;
        resultIndex++;
    }
    while (cnt < 0) {
        result[resultIndex] = values[KeyedCollectionLike_get](index);
        cnt++;
        index--;
        resultIndex++;
    }
    return result;
}, pick(CollectionLike_count));
export default IndexedCollection_toReadonlyArray;
