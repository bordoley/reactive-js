import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationOperatorWithSideEffects,
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
} from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const ComputationOperatorWithSideEffectsTests = <
  TComputationType extends ComputationType,
>(
  computations: ComputationTypeOf<TComputationType>,
  operator: ComputationOperatorWithSideEffects<
    TComputationType,
    unknown,
    unknown
  >,
) => {
  return describe(
    "ComputationOperatorWithSideEffects",

    computations[Computation_pureSynchronousOfT] &&
      test(
        "with PureSynchronous input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_pureSynchronousOfT],
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computations[Computation_synchronousWithSideEffectsOfT] &&
      test(
        "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_synchronousWithSideEffectsOfT],
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computations[Computation_pureDeferredOfT] &&
      test(
        "with PureDeferred input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_pureDeferredOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),

    computations[Computation_deferredWithSideEffectsOfT] &&
      test(
        "with DeferredWithSideEffects input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_deferredWithSideEffectsOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),

    computations[Computation_multicastOfT] &&
      test(
        "with Multicasted input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_multicastOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),
  );
};

export default ComputationOperatorWithSideEffectsTests;
