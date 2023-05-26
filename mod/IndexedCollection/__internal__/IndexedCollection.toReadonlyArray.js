/// <reference types="./IndexedCollection.toReadonlyArray.d.ts" />

import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import { KeyedCollectionLike_get } from "../../types.js";
import Collection_getCount from "./Collection.getCount.js";
const IndexedCollection_toReadonlyArray = 
/*@__PURE__*/ IndexedCollection_toContainer((values, startIndex, count) => {
    const result = newInstance(Array, count);
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
}, Collection_getCount);
export default IndexedCollection_toReadonlyArray;
