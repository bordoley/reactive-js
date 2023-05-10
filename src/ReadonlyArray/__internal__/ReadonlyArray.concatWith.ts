import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_concat from "./ReadonlyArray.concat.js";

const ReadonlyArray_concatWith: ReadonlyArray.Signature["concatWith"] =
  <T>(snd: ReadonlyArray<T>) =>
  (fst: ReadonlyArray<T>) =>
    ReadonlyArray_concat(fst, snd);

export default ReadonlyArray_concatWith;
