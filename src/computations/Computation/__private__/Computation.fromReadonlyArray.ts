import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import {
  ComputationModule,
  ComputationTypeLike,
  PickComputationModule,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_fromReadonlyArray: Computation.Signature["fromReadonlyArray"] =

    <
      TComputationType extends ComputationTypeLike,
      TComputationModule extends PickComputationModule<
        ComputationModule<TComputationType>,
        "genPure"
      >,
    >(
      m: TComputationModule,
      options?: { readonly count?: number; readonly start?: number },
    ) =>
    <T>(array: readonly T[]) =>
      m.genPure<T>(function* ComputationFromReadonlyArray() {
        let [start, count] = parseArrayBounds(array, options);

        while (count !== 0) {
          yield array[start];
          count > 0 ? (start++, count--) : (start--, count++);
        }
      }, options);

export default Computation_fromReadonlyArray;
