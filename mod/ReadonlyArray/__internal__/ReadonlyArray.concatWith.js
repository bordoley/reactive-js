/// <reference types="./ReadonlyArray.concatWith.d.ts" />

import ReadonlyArray_concat from "./ReadonlyArray.concat.js";
const ReadonlyArray_concatWith = (snd) => (fst) => ReadonlyArray_concat(fst, snd);
export default ReadonlyArray_concatWith;
