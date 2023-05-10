import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_concatAll: ReadonlyArray.Signature["concatAll"] =
  <T>() =>
  (obs: ReadonlyArray<ReadonlyArray<T>>) =>
    obs.flat(1);

export default ReadonlyArray_concatAll;
