import type * as Promise from "../../Promise.js";
import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";

const Promise_toReadonlyArrayAsync: Promise.Signature["toReadonlyArrayAsync"] =
  <T>() =>
  (promise: Promise<T>) =>
    promise.then<readonly T[]>(ReadonlyArray_fromValue());

export default Promise_toReadonlyArrayAsync;
