/// <reference types="./ReadonlyArray.startWith.d.ts" />

import ReadonlyArray_concat from "./ReadonlyArray.concat.js";
const ReadonlyArray_startWith = (...fst) => (snd) => ReadonlyArray_concat(fst, snd);
export default ReadonlyArray_startWith;
