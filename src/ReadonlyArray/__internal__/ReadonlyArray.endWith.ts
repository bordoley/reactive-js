import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_concat from "./ReadonlyArray.concat.js";

const ReadonlyArray_endWith: ReadonlyArray.Signature["endWith"] =
  <T>(...snd: readonly T[]) =>
  (fst: ReadonlyArray<T>) =>
    ReadonlyArray_concat(fst, snd);

export default ReadonlyArray_endWith;
