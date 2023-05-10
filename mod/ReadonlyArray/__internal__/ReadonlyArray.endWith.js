/// <reference types="./ReadonlyArray.endWith.d.ts" />

import ReadonlyArray_concat from "./ReadonlyArray.concat.js";
const ReadonlyArray_endWith = (...snd) => (fst) => ReadonlyArray_concat(fst, snd);
export default ReadonlyArray_endWith;
