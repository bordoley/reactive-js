/// <reference types="./ReadonlyArray.toReadonlyArray.d.ts" />

import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
const ReadonlyArray_toReadonlyArray = 
/*@__PURE__*/ IndexedCollection_toContainer((values, startIndex, count) => startIndex === 0 && count === values.length
    ? values
    : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(), ReadonlyArray_getLength);
export default ReadonlyArray_toReadonlyArray;
