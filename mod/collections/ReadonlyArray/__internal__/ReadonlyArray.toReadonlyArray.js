/// <reference types="./ReadonlyArray.toReadonlyArray.d.ts" />

import IndexedCollection_toCollection from "../../IndexedCollection/__internal__/IndexedCollection.toCollection.js";
const ReadonlyArray_toReadonlyArray = 
/*@__PURE__*/ IndexedCollection_toCollection((values, startIndex, count) => startIndex === 0 && count === values.length
    ? values
    : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(), v => v.length);
export default ReadonlyArray_toReadonlyArray;
