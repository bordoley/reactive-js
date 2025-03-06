import { Test, describe } from "../../../../__internal__/testing.js";
import {
  ComputationType,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentReactiveComputationModule,
  DeferredComputationWithSideEffectsOf,
  MulticastComputationOf,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SynchronousComputationWithSideEffectsOf,
} from "../../../../computations.js";
import { Optional, isSome, pipe } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";
import * as Iterable from "../../../Iterable.js";
import * as ComputationTest from "../helpers/ComputationTest.js";

const CombineConstructorTests = <TComputation extends ComputationType>(
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
  operator: ConcurrentReactiveComputationModule<TComputation>["combineLatest"],
) => {
  const {
    [Computation_pureSynchronousOfT]: pureSynchronousComputationOfT,
    [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT,
    [Computation_pureDeferredOfT]: pureDeferredOfT,
    [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT,
    [Computation_multicastOfT]: multicastOfT,
  } = computationType;
  return describe(
    "CombineConstructorTests",
    ...pipe(
      [
        pureSynchronousComputationOfT &&
          ComputationTest.isPureSynchronous(
            operator(
              pureSynchronousComputationOfT,
              pureSynchronousComputationOfT,
            ),
            " when all inputs are pureSynchronous",
          ),

        pureSynchronousComputationOfT &&
          synchronousWithSideEffectsOfT &&
          ComputationTest.isSynchronousWithSideEffects(
            operator(
              pureSynchronousComputationOfT,
              synchronousWithSideEffectsOfT,
            ),
            " when combining pureSynchronous and synchronousWithSideEffects inputs",
          ),

        synchronousWithSideEffectsOfT &&
          ComputationTest.isSynchronousWithSideEffects(
            operator(
              synchronousWithSideEffectsOfT,
              synchronousWithSideEffectsOfT,
            ),
            " when all inputs are synchronousWithSideEffects",
          ),

        pureDeferredOfT &&
          ComputationTest.isPureDeferred(
            operator(pureDeferredOfT, pureDeferredOfT),
            " when all inputs are PureDeferred",
          ),

        pureSynchronousComputationOfT &&
          pureDeferredOfT &&
          ComputationTest.isPureDeferred(
            operator(pureSynchronousComputationOfT, pureDeferredOfT),
            " when combining pureSynchronous and pureDeferred inputs",
          ),

        multicastOfT &&
          pureDeferredOfT &&
          ComputationTest.isPureDeferred(
            operator(multicastOfT, pureDeferredOfT),
            " when combining pureDeferred and multicast inputs",
          ),

        pureDeferredOfT &&
          deferredWithSideEffectsOfT &&
          multicastOfT &&
          ComputationTest.isDeferredWithSideEffects(
            operator(pureDeferredOfT, deferredWithSideEffectsOfT, multicastOfT),
            " when combining multicast, pureDeferred and deferredithSideEffect inputs",
          ),

        multicastOfT &&
          ComputationTest.isMulticasted(
            operator(multicastOfT, multicastOfT, multicastOfT),
            " when coming multicast inputs",
          ),
      ],
      Computation.keepType(Iterable)<Optional<Test>, Test>(isSome),
      Iterable.toReadonlyArray(),
    ),
  );
};

export default CombineConstructorTests;
