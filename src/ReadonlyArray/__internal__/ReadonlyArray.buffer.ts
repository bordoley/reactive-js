import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_buffer: ReadonlyArray.Signature["buffer"] = <T>(
  count: number,
) => {
  count = clampPositiveNonZeroInteger(count);

  return (array: ReadonlyArray<T>) => {
    const result: T[][] = [];

    const length = array.length;
    let buffer: T[] = [];
    for (let i = 0; i < length; i++) {
      buffer.push(array[i]);

      if (buffer.length >= count) {
        result.push(buffer);
        buffer = [];
      }
    }

    if (buffer.length > 0) {
      result.push(buffer);
    }

    return result;
  };
};

export default ReadonlyArray_buffer;
