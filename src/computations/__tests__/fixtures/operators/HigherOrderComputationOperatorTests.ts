import { describe, test } from "../../../../__internal__/testing.js";
import {
  ComputationType,
  ComputationTypeOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffectsLike,
  HigherOrderComputationOperator,
  PureDeferredComputationLike,
  PureSynchronousComputationLike,
  SynchronousComputationWithSideEffectsLike,
} from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const HigherOrderComputationOperatorTests = <
  TComputationType extends ComputationType,
>(
  computations: ComputationTypeOf<TComputationType>,
  operatorPureSynchronousInner?: HigherOrderComputationOperator<
    TComputationType,
    PureSynchronousComputationLike,
    any,
    unknown
  >,
  operatorSynchronousWithSideEffectsInner?: HigherOrderComputationOperator<
    TComputationType,
    SynchronousComputationWithSideEffectsLike,
    any,
    unknown
  >,
  operatorPureDeferredInner?: HigherOrderComputationOperator<
    TComputationType,
    PureDeferredComputationLike,
    any,
    unknown
  >,
  operatorDeferredWithSideEffectsInner?: HigherOrderComputationOperator<
    TComputationType,
    DeferredComputationWithSideEffectsLike,
    any,
    unknown
  >,
) =>
  describe(
    "HigherOrderComputationOperator",

    computations[Computation_pureSynchronousOfT] &&
      operatorPureSynchronousInner &&
      describe(
        "with PureSynchronousInner",

        computations[Computation_pureSynchronousOfT] &&
          test(
            "with PureSynchronous input, returns PureSynchronous output",
            pipeSomeLazy(
              computations[Computation_pureSynchronousOfT],
              ComputationExpect.isPureSynchronous,
              operatorPureSynchronousInner,
              ComputationExpect.isPureSynchronous,
            ),
          ),

        computations[Computation_synchronousWithSideEffectsOfT] &&
          test(
            "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_synchronousWithSideEffectsOfT],
              ComputationExpect.isSynchronousWithSideEffects,
              operatorPureSynchronousInner,
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
              operatorPureSynchronousInner,
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
              operatorPureSynchronousInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),
      ),
    computations[Computation_synchronousWithSideEffectsOfT] &&
      operatorSynchronousWithSideEffectsInner &&
      describe(
        "with SynchronousWithSideEffectsInner",

        computations[Computation_pureSynchronousOfT] &&
          test(
            "with PureSynchronous input, returns SynchronousWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_pureSynchronousOfT],
              ComputationExpect.isPureSynchronous,
              operatorSynchronousWithSideEffectsInner,
              ComputationExpect.isSynchronousWithSideEffects,
            ),
          ),

        computations[Computation_synchronousWithSideEffectsOfT] &&
          test(
            "with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_synchronousWithSideEffectsOfT],
              ComputationExpect.isSynchronousWithSideEffects,
              operatorSynchronousWithSideEffectsInner,
              ComputationExpect.isSynchronousWithSideEffects,
            ),
          ),

        computations[Computation_pureDeferredOfT] &&
          test(
            "with PureDeferred input, returns DeferredWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_pureDeferredOfT],
              ComputationExpect.isPureDeferred,
              ComputationExpect.isNotSynchronous,
              operatorSynchronousWithSideEffectsInner,
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
              operatorSynchronousWithSideEffectsInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),
      ),
    computations[Computation_pureDeferredOfT] &&
      operatorPureDeferredInner &&
      describe(
        "with PureDeferredInner",

        computations[Computation_pureSynchronousOfT] &&
          test(
            "with PureSynchronous input, returns PureDeferred output",
            pipeSomeLazy(
              computations[Computation_pureSynchronousOfT],
              ComputationExpect.isPureSynchronous,
              operatorPureDeferredInner,
              ComputationExpect.isPureDeferred,
              ComputationExpect.isNotSynchronous,
            ),
          ),

        computations[Computation_synchronousWithSideEffectsOfT] &&
          test(
            "with SynchronousWithSideEffects input, returns DeferredWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_synchronousWithSideEffectsOfT],
              ComputationExpect.isSynchronousWithSideEffects,
              operatorPureDeferredInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),

        computations[Computation_pureDeferredOfT] &&
          test(
            "with PureDeferred input, returns PureDeferred output",
            pipeSomeLazy(
              computations[Computation_pureDeferredOfT],
              ComputationExpect.isPureDeferred,
              ComputationExpect.isNotSynchronous,
              operatorPureDeferredInner,
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
              operatorPureDeferredInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),
      ),
    computations[Computation_deferredWithSideEffectsOfT] &&
      operatorDeferredWithSideEffectsInner &&
      describe(
        "with DeferredWithSideEffectsInner",

        computations[Computation_pureSynchronousOfT] &&
          test(
            "with PureSynchronous input, returns DeferredWithSideEffects output",
            pipeSomeLazy(
              computations[Computation_pureSynchronousOfT],
              ComputationExpect.isPureSynchronous,
              operatorDeferredWithSideEffectsInner,
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
              operatorDeferredWithSideEffectsInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),

        computations[Computation_pureDeferredOfT] &&
          test(
            "with PureDeferred input, returns PureDeferred output",
            pipeSomeLazy(
              computations[Computation_pureDeferredOfT],
              ComputationExpect.isPureDeferred,
              ComputationExpect.isNotSynchronous,
              operatorDeferredWithSideEffectsInner,
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
              operatorDeferredWithSideEffectsInner,
              ComputationExpect.isDeferredWithSideEffects,
              ComputationExpect.isNotSynchronous,
            ),
          ),
      ),
  );

export default HigherOrderComputationOperatorTests;
