import {
  Test,
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  expectToThrowAsync,
  test,
  testAsync,
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
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../../concurrent/VirtualTimeScheduler.js";
import {
  ObservableLike,
  SchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../../../concurrent.js";
import {
  Function1,
  Optional,
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  compose,
  incrementBy,
  isSome,
  newInstance,
  none,
  pipe,
  pipeLazy,
  returns,
  tuple,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { Array_push } from "../../../__internal__/constants.js";
import * as Disposable from "../../../utils/Disposable.js";

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
              " when combining multicast, pureDeferred and deferredithSideEffect inputs",
            ),

          multicastOfT &&
            ComputationTest.isMulticasted(
              m.combineLatest(multicastOfT, multicastOfT, multicastOfT),
              " when coming multicast inputs",
            ),
        ],
        Computation.keepType(Iterable)<Optional<Test>, Test>(isSome),
        Iterable.toReadonlyArray(),
      ),
    ),
    describe(
      "fromPromise",
      testAsync("when the promise resolves", async () => {
        using scheduler = HostScheduler.create();
        const promise = Promise.resolve(1);

        let result: Optional<number> = none;

        await pipe(
          promise,
          m.fromPromise(),
          m.toObservable(),
          Observable.forEach<number>(e => {
            result = e;
          }),
          Observable.lastAsync(scheduler),
        );

        pipe(result, expectEquals<Optional<number>>(1));
      }),

      testAsync("when the promise reject", async () => {
        using scheduler = HostScheduler.create();

        const error = newInstance(Error);
        const promise = Promise.reject(error);

        await expectToThrowAsync(() =>
          pipe(
            promise,
            m.fromPromise(),
            m.toObservable(),
            Observable.lastAsync(scheduler),
          ),
        );
      }),

      ComputationTest.isMulticasted(
        pipe(Promise.resolve(true), m.fromPromise()),
      ),
    ),
    describe(
      "merge",
      test("with sources that have the same delays", () => {
        using vts = VirtualTimeScheduler.create();

        const result: number[] = [];
        const [ev1, ev2, ev3] = pipe(
          [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
          ],
          ReadonlyArray.map<
            number[],
            ComputationOf<TComputation, number>,
            number
          >(
            compose(
              Observable.fromReadonlyArray({ delay: 3 }),
              m.fromObservable(vts),
            ),
          ),
        );

        pipe(
          m.merge(ev1, ev2, ev3),
          m.toObservable(),
          Observable.forEach(bindMethod(result, Array_push)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      }),
      test("with sources that have the different delays", () => {
        using vts = VirtualTimeScheduler.create();

        const result: number[] = [];

        pipe(
          m.merge(
            pipe(
              [0, 2, 3, 5, 6],
              Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
              m.fromObservable(vts),
            ),
            pipe(
              [1, 4, 7],
              Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
              m.fromObservable(vts),
            ),
          ),
          m.toObservable(),
          Observable.forEach(bindMethod(result, Array_push)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]));
      }),
      test("when one source throws", () => {
        using vts = VirtualTimeScheduler.create();

        const subscription = pipe(
          m.merge(
            pipe(
              [1, 4, 7],
              Observable.fromReadonlyArray({ delay: 2 }),
              m.fromObservable(vts),
            ),
            pipe(Observable.raise({ delay: 5 }), m.fromObservable(vts)),
          ),
          m.toObservable(),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(
          pipeLazy(subscription, Disposable.raiseIfDisposedWithError),
          expectToThrow,
        );
      }),
      test("merging merged sources", () => {
        using vts = VirtualTimeScheduler.create();
        const result: number[] = [];

        pipe(
          m.merge(
            m.merge(
              pipe(
                [1, 2, 3],
                Observable.fromReadonlyArray({ delay: 1 }),
                m.fromObservable(vts),
              ),
              pipe(
                Observable.empty({ delay: 3 }),
                Computation.concatWith(Observable)(
                  pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 })),
                ),
                m.fromObservable(vts),
              ),
              m.merge(
                pipe(
                  Observable.empty({ delay: 6 }),
                  Computation.concatWith(Observable)(
                    pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 1 })),
                  ),
                  m.fromObservable(vts),
                ),
                pipe(
                  Observable.empty({ delay: 9 }),
                  Computation.concatWith(Observable)(
                    pipe(
                      [10, 11, 12],
                      Observable.fromReadonlyArray({ delay: 1 }),
                    ),
                  ),
                  m.fromObservable(vts),
                ),
              ),
            ),
          ),
          m.toObservable(),
          Observable.forEach(bindMethod(result, Array_push)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(
          result,
          expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        );
      }),
    ),
  );
};

export default ConcurrentReactiveComputationModuleTests;
