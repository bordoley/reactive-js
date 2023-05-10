import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_first: ReadonlyArray.Signature["first"] =
  <T>() =>
  (values: ReadonlyArray<T>) =>
    values[0];

export default ReadonlyArray_first;
