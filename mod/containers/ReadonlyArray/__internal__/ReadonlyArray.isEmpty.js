/// <reference types="./ReadonlyArray.isEmpty.d.ts" />

import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";
const ReadonlyArray_isEmpty = (arr) => ReadonlyArray_getLength(arr) === 0;
export default ReadonlyArray_isEmpty;
