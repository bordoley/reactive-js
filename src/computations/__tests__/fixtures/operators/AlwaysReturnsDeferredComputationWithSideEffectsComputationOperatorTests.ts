import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationOf,
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffectsOf,
} from "../../../../computations.js";
import { Function1, pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests =
  <TComputationType extends ComputationType>(
    computations: ComputationTypeOf<TComputationType>,
    operator: Function1<
      ComputationOf<TComputationType, any>,
      DeferredComputationWithSideEffectsOf<TComputationType, unknown>
    >,
  ) =>
    describe(
      "AlwaysReturnsDeferredComputationWithSideEffectsComputationOperator",

      computations[Computation_pureSynchronousOfT] &&
        test(
          "with PureSynchronous input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computations[Computation_pureSynchronousOfT],
            ComputationExpect.isPureSynchronous,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),

      computations[Computation_synchronousWithSideEffectsOfT] &&
        test(
          "with SynchronousWithSideEffects input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computations[Computation_synchronousWithSideEffectsOfT],
            ComputationExpect.isSynchronousWithSideEffects,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),

      computations[Computation_pureDeferredOfT] &&
        test(
          "with PureDeferred input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computations[Computation_pureDeferredOfT],
            ComputationExpect.isPureDeferred,
            ComputationExpect.isNotSynchronous,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
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
          "with Multicasted input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computations[Computation_multicastOfT],
            ComputationExpect.isMulticasted,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),
    );

export default AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests;
