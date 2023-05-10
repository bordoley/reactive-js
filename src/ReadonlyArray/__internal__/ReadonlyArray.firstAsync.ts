import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_firstAsync: ReadonlyArray.Signature["firstAsync"] =
  <T>() =>
  (arr: ReadonlyArray<T>) =>
    Promise.resolve(arr[0]);

export default ReadonlyArray_firstAsync;
