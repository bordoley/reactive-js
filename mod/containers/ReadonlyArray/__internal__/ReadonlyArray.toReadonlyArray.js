/// <reference types="./ReadonlyArray.toReadonlyArray.d.ts" />

import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_toReadonlyArray = 
/*@__PURE__*/ ReadonlyArray_toContainer((values, startIndex, count) => count >= 0
    ? values.slice(startIndex, count + startIndex)
    : values.slice(startIndex + count + 1, startIndex + 1).reverse());
export default ReadonlyArray_toReadonlyArray;
