import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  StatelessComputationOperator,
} from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const StatelessComputationOperatorTests = <
  TComputationType extends ComputationType,
>(
  computations: ComputationTypeOf<TComputationType>,
  operator: StatelessComputationOperator<TComputationType, unknown, unknown>,
) =>
  describe(
    "StatelessComputationOperator",

    computations[Computation_pureSynchronousOfT] &&
      test(
        "with PureSynchronous input, returns PureSynchronous output",
        pipeSomeLazy(
          computations[Computation_pureSynchronousOfT],
          ComputationExpect.isPureSynchronous,
          operator,
          ComputationExpect.isPureSynchronous,
        ),
      ),

    computations[Computation_synchronousWithSideEffectsOfT] &&
      test(
        "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_synchronousWithSideEffectsOfT],
          ComputationExpect.isSynchronousWithSideEffects,
          operator,
          ComputationExpect.isSynchronousWithSideEffects,
        ),
      ),

    computations[Computation_pureDeferredOfT] &&
      test(
        "with PureDeferred input, returns PureDeferred output",
        pipeSomeLazy(
          computations[Computation_pureDeferredOfT],
          ComputationExpect.isPureDeferred,
          ComputationExpect.isNotSynchronous,
          operator,
          ComputationExpect.isPureDeferred,
          ComputationExpect.isNotSynchronous,
        ),
      ),

    computations[Computation_deferredWithSideEffectsOfT] &&
      test(
        "with DeferredWithSideEffects input, returns DeferredWithSideEffects output",
        pipeSomeLazy(
          computations[Computation_deferredWithSideEffectsOfT],
          ComputationExpect.isDeferredWithSideEffects,
          ComputationExpect.isNotSynchronous,
          operator,
          ComputationExpect.isDeferredWithSideEffects,
          ComputationExpect.isNotSynchronous,
        ),
      ),

    computations[Computation_multicastOfT] &&
      test(
        "with Multicasted input, returns Multicasted output",
        pipeSomeLazy(
          computations[Computation_multicastOfT],
          ComputationExpect.isMulticasted,
          operator,
          ComputationExpect.isMulticastedAndNotDisposable,
        ),
      ),
  );

export default StatelessComputationOperatorTests;
