import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  StatefulSynchronousComputationOperator,
} from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const StatefulSynchronousComputationOperatorTests = <
  TComputation extends ComputationType,
>(
  computationType: ComputationTypeOf<TComputation>,
  operator: StatefulSynchronousComputationOperator<TComputation, any, unknown>,
) =>
  describe(
    "StatefulSynchronousComputationOperator",

    computationType[Computation_pureSynchronousOfT] &&
      test(
        "with PureSynchronous input, returns PureSynchronous output",
        pipeSomeLazy(
          computationType[Computation_pureSynchronousOfT],
          ComputationExpect.isPureSynchronous,
          operator,
          ComputationExpect.isPureSynchronous,
        ),
      ),

    computationType[Computation_synchronousWithSideEffectsOfT] &&
      test(
        "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_synchronousWithSideEffectsOfT],
          ComputationExpect.isSynchronousWithSideEffects,
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computationType[Computation_pureDeferredOfT] &&
      test(
        "with PureDeferred input, returns PureDeferred output",
        pipeSomeLazy(
          computationType[Computation_pureDeferredOfT],
          ComputationExpect.isPureDeferred,
          ComputationExpect.isNotSynchronous,
          operator,
          ComputationExpect.isPureDeferred,
          ComputationExpect.isNotSynchronous,
        ),
      ),

    computationType[Computation_deferredWithSideEffectsOfT] &&
      test(
        "with DeferredWithSideEffects input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computationType[Computation_deferredWithSideEffectsOfT],
          ComputationExpect.isDeferredWithSideEffects,
          ComputationExpect.isNotSynchronous,
          operator,
          ComputationExpect.isDeferredWithSideEffects,
          ComputationExpect.isNotSynchronous,
        ),
      ),

    computationType[Computation_multicastOfT] &&
      test(
        "with Multicasted input, returns PureDeferred output",
        pipeSomeLazy(
          computationType[Computation_multicastOfT],
          ComputationExpect.isMulticasted,
          operator,
          ComputationExpect.isPureDeferred,
          ComputationExpect.isNotSynchronous,
        ),
      ),
  );

export default StatefulSynchronousComputationOperatorTests;
