import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_zip from "./ReadonlyArray.zip.js";

const ReadonlyArray_zipWith: ReadonlyArray.Signature["zipWith"] =
  (...others: ReadonlyArray<unknown>) =>
  (fst: ReadonlyArray<unknown>) =>
    (ReadonlyArray_zip as any)(fst, ...others);

export default ReadonlyArray_zipWith;
