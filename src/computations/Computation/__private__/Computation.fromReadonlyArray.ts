import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import {
  ComputationModule,
  ComputationTypeLike,
  PickComputationModule,
} from "../../../computations.js";
import { YieldDelay, delayMs } from "../../../utils.js";
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
      options?: {
        readonly count?: number;
        readonly start?: number;
        delay?: number;
        delayStart?: boolean;
      },
    ) =>
    <T>(array: readonly T[]) => {
      const delay = options?.delay ?? 0;
      const delayStart = (options?.delayStart ?? false) && delay > 0;

      return m.genPure<T | YieldDelay>(
        function* ComputationFromReadonlyArray() {
          let [start, count] = parseArrayBounds(array, options);

          if (delayStart && count > 0) {
            yield delayMs(delay);
          }

          while (count !== 0) {
            yield array[start];

            count > 0 ? (start++, count--) : (start--, count++);

            if (delay > 0 && count > 0) {
              yield delayMs(delay);
            }
          }
        },
      );
    };

export default Computation_fromReadonlyArray;
