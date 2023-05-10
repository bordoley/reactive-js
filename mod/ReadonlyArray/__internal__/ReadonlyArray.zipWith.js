/// <reference types="./ReadonlyArray.zipWith.d.ts" />

import ReadonlyArray_zip from "./ReadonlyArray.zip.js";
const ReadonlyArray_zipWith = (...others) => (fst) => ReadonlyArray_zip(fst, ...others);
export default ReadonlyArray_zipWith;
