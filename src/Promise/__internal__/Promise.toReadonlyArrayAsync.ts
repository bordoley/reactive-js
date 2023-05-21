import type * as Promise from "../../Promise.js";

const Promise_toReadonlyArrayAsync: Promise.Signature["toReadonlyArrayAsync"] =
  <T>() =>
  (promise: Promise<T>) =>
    promise.then<readonly T[]>((v: T): ReadonlyArray<T> => [v]);

export default Promise_toReadonlyArrayAsync;
