import { Array_length } from "../../../__internal__/constants.js";
import { returns } from "../../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keys: ReadonlyArray.Signature["keys"] =
  /*@__PURE__*/ returns(<TKey>(arr: readonly unknown[]) => ({
    *[Symbol.iterator]() {
      for (let i = 0; i < arr[Array_length]; i++) {
        yield i as TKey;
      }
    },
  })) as ReadonlyArray.Signature["keys"];

export default ReadonlyArray_keys;
