import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { memoize } from "../../../functions.js";
import type * as Computation from "../../Computation.js";

const Computation_fromReadonlyArray: Computation.Signature["fromReadonlyArray"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(options?: { readonly count?: number; readonly start?: number }) =>
      (array: readonly T[]) =>
        m.genPure<T>(function* ComputationFromReadonlyArray() {
          let [start, count] = parseArrayBounds(array, options);

          while (count !== 0) {
            yield array[start];
            count > 0 ? (start++, count--) : (start--, count++);
          }
        }, options),
  ) as Computation.Signature["fromReadonlyArray"];

export default Computation_fromReadonlyArray;
