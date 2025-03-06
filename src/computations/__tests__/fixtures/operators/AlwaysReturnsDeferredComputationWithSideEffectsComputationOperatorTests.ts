import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationOf,
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
import { Function1, pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests =
  <TComputation extends ComputationType>(
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
    operator: Function1<
      ComputationOf<TComputation, any>,
      DeferredComputationWithSideEffectsOf<TComputation, unknown>
    >,
  ) =>
    describe(
      "AlwaysReturnsDeferredComputationWithSideEffectsComputationOperator",

      computationType[Computation_pureSynchronousOfT] &&
        test(
          "with PureSynchronous input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computationType[Computation_pureSynchronousOfT],
            ComputationExpect.isPureSynchronous,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),

      computationType[Computation_synchronousWithSideEffectsOfT] &&
        test(
          "with SynchronousWithSideEffects input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computationType[Computation_synchronousWithSideEffectsOfT],
            ComputationExpect.isSynchronousWithSideEffects,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),

      computationType[Computation_pureDeferredOfT] &&
        test(
          "with PureDeferred input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computationType[Computation_pureDeferredOfT],
            ComputationExpect.isPureDeferred,
            ComputationExpect.isNotSynchronous,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
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
          "with Multicasted input, returns DeferredWithSideEffects output",
          pipeSomeLazy(
            computationType[Computation_multicastOfT],
            ComputationExpect.isMulticasted,
            operator,
            ComputationExpect.isDeferredWithSideEffects,
            ComputationExpect.isNotSynchronous,
          ),
        ),
    );

export default AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests;
