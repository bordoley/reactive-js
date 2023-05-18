import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_repeat: ReadonlyArray.Signature["repeat"] =
  <T>(count: number) =>
  (arr: ReadonlyArray<T>) => {
    let arrays: (readonly T[])[] = [];

    for (let i = 0; i < count; i++) {
      arrays.push(arr);
    }

    return arrays.flat(1);
  };

export default ReadonlyArray_repeat;
