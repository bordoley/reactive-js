import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";

import { tuple } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_entries: ReadonlyArray.Signature["entries"] =
  <T, TKey extends number = number>(options?: {
    count?: number;
    start?: number;
  }) =>
  (arr: readonly T[]) =>
    Iterable_createPure(function* () {
      let [start, count] = parseArrayBounds(arr, options);

      for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        yield tuple(start as TKey, arr[start]);
      }
    });

export default ReadonlyArray_entries;
