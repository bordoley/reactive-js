import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_fromIteratorFactory from "./Enumerable.fromIteratorFactory.js";

const Enumerable_fromReadonlyArray: Enumerable.Signature["fromReadonlyArray"] =
  <T>(options?: { count?: number; start?: number }) =>
  (arr: readonly T[]) =>
    pipe(function* (): Iterator<T> {
      let [start, count] = parseArrayBounds(arr, options);

      for (; count !== 0; count > 0 ? (start++, count--) : (start--, count++)) {
        yield arr[start];
      }
    }, Enumerable_fromIteratorFactory());

export default Enumerable_fromReadonlyArray;
