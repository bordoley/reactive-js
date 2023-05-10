import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_zip: ReadonlyArray.Signature["zip"] = ((
  ...arrays: readonly ReadonlyArray<unknown>[]
) => {
  const minCount = Math.min(...arrays.map(v => v.length));

  const result: ReadonlyArray<unknown>[] = [];

  for (let i = 0; i < minCount; i++) {
    const inner: unknown[] = [];
    for (let j = 0; j < arrays.length; j++) {
      inner.push(arrays[j][i]);
    }
    result.push(inner);
  }

  return result;
}) as unknown as ReadonlyArray.Signature["zip"];

export default ReadonlyArray_zip;
