import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_concat: ReadonlyArray.Signature["concat"] = <T>(
  ...obs: readonly ReadonlyArray<T>[]
) => obs.flat(1);

export default ReadonlyArray_concat;
