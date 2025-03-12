import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  expectToThrowAsync,
  expectToThrowError,
  test,
  testAsync,
} from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Observable from "../../../computations/Observable.js";
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
  ObservableLike,
  PureDeferredComputationOf,
  PureSynchronousComputationOf,
  SynchronousComputationWithSideEffectsOf,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  compose,
  newInstance,
  pipe,
  pipeAsync,
  pipeLazy,
  returns,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import { SchedulerLike, VirtualTimeSchedulerLike_run } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests from "./operators/AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests.js";
import ComputationOperatorWithSideEffectsTests from "./operators/ComputationOperatorWithSideEffectsTests.js";
import StatefulAsynchronousComputationOperatorTests from "./operators/StatefulAsynchronousComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessAsynchronousComputationOperatorTests from "./operators/StatelessAsynchronousComputationOperatorTests.js";

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
    [Computation_pureSynchronousOfT]: pureSynchronousOfT,
    [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT,
    [Computation_pureDeferredOfT]: pureDeferredOfT,
    [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT,
    [Computation_multicastOfT]: multicastOfT,
  } = computationType;

  return describe(
    "ConcurrentReactiveComputationModule",
    describe(
      "fromPromise",
      testAsync("when the promise resolves", async () => {
        using scheduler = HostScheduler.create();
        const promise = Promise.resolve(1);

        await pipeAsync(
          promise,
          m.fromPromise(),
          m.toObservable<number>(),
          Observable.lastAsync(scheduler),
          expectEquals<Optional<number>>(1),
        );
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

      ComputationTest.isMulticastedAndNotDisposable(
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
      pureSynchronousOfT &&
        ComputationTest.isPureSynchronous(
          m.merge(pureSynchronousOfT, pureSynchronousOfT),
        ),
      pureSynchronousOfT &&
        synchronousWithSideEffectsOfT &&
        ComputationTest.isSynchronousWithSideEffects(
          m.merge(synchronousWithSideEffectsOfT, pureSynchronousOfT),
        ),
      pureDeferredOfT &&
        ComputationTest.isPureDeferred(
          m.merge(pureDeferredOfT, pureDeferredOfT),
        ),
      multicastOfT &&
        ComputationTest.isMulticastedAndNotDisposable(
          m.merge(multicastOfT, multicastOfT),
        ),
      multicastOfT &&
        pureDeferredOfT &&
        ComputationTest.isPureDeferred(m.merge(multicastOfT, pureDeferredOfT)),
      multicastOfT &&
        pureDeferredOfT &&
        deferredWithSideEffectsOfT &&
        ComputationTest.isDeferredWithSideEffects(
          m.merge(multicastOfT, pureDeferredOfT, deferredWithSideEffectsOfT),
        ),
    ),
    describe("never", ComputationTest.isMulticasted(m.never())),
    describe(
      "withLatestFrom",
      test("when source and latest are interlaced", () => {
        using vts = VirtualTimeScheduler.create();

        const result: Tuple2<number, number>[] = [];

        pipe(
          [0, 1, 2, 3],
          Observable.fromReadonlyArray({ delay: 1 }),
          m.fromObservable<number>(vts),
          m.withLatestFrom<number, number>(
            pipe(
              [0, 1, 2, 3],
              Observable.fromReadonlyArray<number>({ delay: 2 }),
              m.fromObservable<number>(vts),
            ),
          ),
          m.toObservable(),
          Observable.forEach(bind(result.push, result)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        expectArrayEquals(
          [tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)],
          {
            valuesEquality: arrayEquality(),
          },
        )(result);
      }),
      test("when latest produces no values", () => {
        using vts = VirtualTimeScheduler.create();

        const result: number[] = [];

        pipe(
          [0],
          Observable.fromReadonlyArray({ delay: 1 }),
          m.fromObservable<number>(vts),
          m.withLatestFrom(
            pipe(
              Observable.empty<number>({ delay: 0 }),
              m.fromObservable<number>(vts),
            ),
            returns(1),
          ),
          m.toObservable(),
          Observable.forEach(bind(result.push, result)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        expectArrayEquals([] as number[])(result);
      }),
      test("when latest throws", () => {
        using vts = VirtualTimeScheduler.create();

        const error = newInstance(Error);

        const result = pipe(
          [0],
          Observable.fromReadonlyArray({ delay: 1 }),
          m.fromObservable<number>(vts),
          m.withLatestFrom(
            pipe(
              Observable.raise<number>({ raise: returns(error) }),
              m.fromObservable<number>(vts),
            ),
            returns(1),
          ),
          m.toObservable(),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        pipe(
          pipeLazy(result, Disposable.raiseIfDisposedWithError),
          expectToThrowError(error),
        );
      }),
      test("with selector", () => {
        using vts = VirtualTimeScheduler.create();

        const result: number[] = [];

        pipe(
          [0, 1, 2, 3],
          Observable.fromReadonlyArray({ delay: 1 }),
          m.fromObservable<number>(vts),
          m.withLatestFrom<number, number, number>(
            pipe(
              [0, 1, 2, 3],
              Observable.fromReadonlyArray<number>({ delay: 2 }),
              m.fromObservable<number>(vts),
            ),
            (x, y) => x + y,
          ),
          m.toObservable(),
          Observable.forEach(bind(result.push, result)),
          Observable.subscribe(vts),
        );

        vts[VirtualTimeSchedulerLike_run]();

        expectArrayEquals([0, 1, 3, 4])(result);
      }),
      pureSynchronousOfT &&
        StatefulSynchronousComputationOperatorTests(
          computationType,
          m.withLatestFrom(pureSynchronousOfT),
        ),
      synchronousWithSideEffectsOfT &&
        ComputationOperatorWithSideEffectsTests(
          computationType,
          m.withLatestFrom(synchronousWithSideEffectsOfT),
        ),
      pureDeferredOfT &&
        StatefulAsynchronousComputationOperatorTests(
          computationType,
          m.withLatestFrom(pureDeferredOfT),
        ),
      deferredWithSideEffectsOfT &&
        AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests(
          computationType,
          m.withLatestFrom(deferredWithSideEffectsOfT),
        ),
      multicastOfT &&
        StatelessAsynchronousComputationOperatorTests(
          computationType,
          m.withLatestFrom(multicastOfT),
        ),
    ),
  );
};

export default ConcurrentReactiveComputationModuleTests;
