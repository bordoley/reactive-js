import {
  describe,
  expectArrayEquals,
  Test,
  test,
} from "../../../__internal__/testing.js";
import {
  ComputationOf,
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
} from "../../../computations.js";
import {
  arrayEquality,
  bind,
  Function1,
  incrementBy,
  isSome,
  Optional,
  pipe,
  returns,
  tuple,
  Tuple2,
} from "../../../functions.js";
import {
  ObservableLike,
  SchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../../concurrent.js";
import * as VirtualTimeScheduler from "../../../concurrent/VirtualTimeScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";

const ConcurrentReactiveComputationModuleTests = <
  TComputation extends ComputationType,
>(
  m: ConcurrentReactiveComputationModule<TComputation> & {
    fromObservable: <T>(
      scheduler: SchedulerLike,
    ) => Function1<ObservableLike<T>, ComputationOf<TComputation, T>>;
    toObservable: <T>() => Function1<
      ComputationOf<TComputation, T>,
      ObservableLike<T>
    >;
  },
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
) => {
  const {
    [Computation_pureSynchronousOfT]: pureSynchronousComputationOfT,
    [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT,
    [Computation_pureDeferredOfT]: pureDeferredOfT,
    [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT,
    [Computation_multicastOfT]: multicastOfT,
  } = computationType;

  return describe(
    "ConcurrentReactiveComputationModule",
    describe(
      "combineLatest",
      test("combineLatest from two interspersing sources", () => {
        using vts = VirtualTimeScheduler.create();
        const result: Tuple2<number, number>[] = [];

        pipe(
          m.combineLatest<number, number>(
            pipe(
              Observable.generate(incrementBy(2), returns(1), { delay: 2 }),
              Observable.takeFirst<number>({ count: 3 }),
              m.fromObservable(vts),
            ),
            pipe(
              Observable.generate(incrementBy(2), returns(0), { delay: 3 }),
              Observable.takeFirst<number>({ count: 2 }),
              m.fromObservable(vts),
            ),
          ),
          m.toObservable(),
          Observable.forEach(bind(result.push, result)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(
          result,
          expectArrayEquals(
            [tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)],
            {
              valuesEquality: arrayEquality(),
            },
          ),
        );
      }),
      ...pipe(
        [
          pureSynchronousComputationOfT &&
            ComputationTest.isPureSynchronous(
              m.combineLatest(
                pureSynchronousComputationOfT,
                pureSynchronousComputationOfT,
              ),
              " when all inputs are pureSynchronous",
            ),

          pureSynchronousComputationOfT &&
            synchronousWithSideEffectsOfT &&
            ComputationTest.isSynchronousWithSideEffects(
              m.combineLatest(
                pureSynchronousComputationOfT,
                synchronousWithSideEffectsOfT,
              ),
              " when combining pureSynchronous and synchronousWithSideEffects inputs",
            ),

          synchronousWithSideEffectsOfT &&
            ComputationTest.isSynchronousWithSideEffects(
              m.combineLatest(
                synchronousWithSideEffectsOfT,
                synchronousWithSideEffectsOfT,
              ),
              " when all inputs are synchronousWithSideEffects",
            ),

          pureDeferredOfT &&
            ComputationTest.isPureDeferred(
              m.combineLatest(pureDeferredOfT, pureDeferredOfT),
              " when all inputs are PureDeferred",
            ),

          pureSynchronousComputationOfT &&
            pureDeferredOfT &&
            ComputationTest.isPureDeferred(
              m.combineLatest(pureSynchronousComputationOfT, pureDeferredOfT),
              " when combining pureSynchronous and pureDeferred inputs",
            ),

          multicastOfT &&
            pureDeferredOfT &&
            ComputationTest.isPureDeferred(
              m.combineLatest(multicastOfT, pureDeferredOfT),
              " when combining pureDeferred and multicast inputs",
            ),

          pureDeferredOfT &&
          deferredWithSideEffectsOfT &&
            multicastOfT &&
            ComputationTest.isDeferredWithSideEffects(
              m.combineLatest(
                pureDeferredOfT,
                deferredWithSideEffectsOfT,
                multicastOfT,
              ),
              " when combining multicast, pureDeferred and deferredithSideEffect inputs"
            ),

          multicastOfT &&
            ComputationTest.isMulticasted(
              m.combineLatest(multicastOfT, multicastOfT, multicastOfT),
            ),
        ],
        Computation.keepType(Iterable)<Optional<Test>, Test>(isSome),
        Iterable.toReadonlyArray(),
      ),
    ),
  );
};

export default ConcurrentReactiveComputationModuleTests;
