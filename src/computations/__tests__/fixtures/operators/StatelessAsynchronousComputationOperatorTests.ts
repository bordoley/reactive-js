import { Test, describe, test } from "../../../../__internal__/testing.js";
import {
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
  StatelessAsynchronousComputationOperator,
  SynchronousComputationWithSideEffectsOf,
} from "../../../../computations.js";
import { Optional, isSome, pipe, pipeSomeLazy } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";
import * as Iterable from "../../../Iterable.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";

const StatelessAsynchronousComputationOperatorTests = <
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
  operator: StatelessAsynchronousComputationOperator<
    TComputation,
    unknown,
    unknown
  >,
) =>
  describe(
    "StatelessAsynchronousComputationOperatorTests",
    ...pipe(
      [
        computationType[Computation_pureSynchronousOfT] &&
          test(
            "with PureSynchronous input, returns PureDeferred output",
            pipeSomeLazy(
              computationType[Computation_pureSynchronousOfT],
              ComputationExpect.isPureSynchronous,
              operator,
              ComputationExpect.isPureDeferred,
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
            "with Multicasted input, returns Multicasted output",
            pipeSomeLazy(
              computationType[Computation_multicastOfT],
              ComputationExpect.isMulticasted,
              operator,
              ComputationExpect.isMulticasted,
            ),
          ),
      ],
      Computation.keepType(Iterable)<Optional<Test>, Test>(isSome),
      Iterable.toReadonlyArray(),
    ),
  );

export default StatelessAsynchronousComputationOperatorTests;
