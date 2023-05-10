import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_concat from "./ReadonlyArray.concat.js";

const ReadonlyArray_startWith: ReadonlyArray.Signature["startWith"] =
  <T>(...fst: readonly T[]) =>
  (snd: ReadonlyArray<T>) =>
    ReadonlyArray_concat(fst, snd);

export default ReadonlyArray_startWith;
