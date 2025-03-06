import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationOperatorWithSideEffects,
  ComputationType,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffectsOf,
  MulticastComputationOf,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SynchronousComputationWithSideEffectsOf,
} from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const ComputationOperatorWithSideEffectsTests = <
  TComputation extends ComputationType,
>(
  computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<
      TComputation,
      unknown
    >;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<
      TComputation,
      unknown
    >;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<
      TComputation,
      unknown
    >;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<
      TComputation,
      unknown
    >;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<
      TComputation,
      unknown
    >;
  },
  operator: ComputationOperatorWithSideEffects<TComputation, unknown, unknown>,
) => {
  return describe(
    "ComputationOperatorWithSideEffects",

    computationType[Computation_pureSynchronousOfT] &&
      test(
        "with PureSynchronous input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_pureSynchronousOfT],
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computationType[Computation_synchronousWithSideEffectsOfT] &&
      test(
        "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_synchronousWithSideEffectsOfT],
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computationType[Computation_pureDeferredOfT] &&
      test(
        "with PureDeferred input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_pureDeferredOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),

    computationType[Computation_deferredWithSideEffectsOfT] &&
      test(
        "with DeferredWithSideEffects input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_deferredWithSideEffectsOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),

    computationType[Computation_multicastOfT] &&
      test(
        "with Multicasted input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_multicastOfT],
          operator,
          ComputationExpect.isDeferredWithSideEffects,
        ),
      ),
  );
};

export default ComputationOperatorWithSideEffectsTests;
