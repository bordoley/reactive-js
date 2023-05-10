import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_fromValue: ReadonlyArray.Signature["fromValue"] =
  <T>() =>
  (v: T) =>
    [v];

export default ReadonlyArray_fromValue;
