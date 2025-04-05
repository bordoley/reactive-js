import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  expectToThrowError,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { PureSynchronousObservableLike } from "../../computations.js";
import {
  Optional,
  Tuple2,
  arrayEquality,
  bindMethod,
  isSome,
  newInstance,
  pipe,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
  tuple,
} from "../../functions.js";
import { increment, scale } from "../../math.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_error,
  VirtualTimeSchedulerLike_run,
  delayMs,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as Runnable from "../Runnable.js";
import * as SynchronousObservable from "../SynchronousObservable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const m = Computation.makeModule<SynchronousObservable.Signature>(
  SynchronousObservable,
);

testModule(
  "SynchronousObservable",
  ComputationModuleTests(m),
  DeferredComputationModuleTests(m),
  SynchronousComputationModuleTests(m),
  DeferredReactiveComputationModuleTests(m),
  describe(
    "combineLatest",
    test(
      "combineLatest from two interspersing sources",
      pipeLazy(
        SynchronousObservable.combineLatest<number, number>(
          pipe([3, 5, 7], Computation.fromReadonlyArray(m, { delay: 2 })),
          pipe([2, 4], Computation.fromReadonlyArray(m, { delay: 3 })),
        ),
        SynchronousObservable.toRunnable<Tuple2<number, number>>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)],
          {
            valuesEquality: arrayEquality(),
          },
        ),
      ),
    ),
  ),
  describe(
    "compute",
    test("batch mode", () => {
      const result: number[] = [];
      pipe(
        SynchronousObservable.compute(() => {
          const fromValueWithDelay = __constant(
            (
              delay: number,
              value: number,
            ): PureSynchronousObservableLike<number> =>
              pipe([value], Computation.fromReadonlyArray(m, { delay })),
          );
          const obs1 = __memo(fromValueWithDelay, 10, 5);
          const result1 = __await<number>(obs1);
          const obs2 = __memo(fromValueWithDelay, 20, 10);
          const result2 = __await<number>(obs2);
          const obs3 = __memo(fromValueWithDelay, 30, 7);
          const result3 = __await<number>(obs3);

          return result1 + result2 + result3;
        }),
        SynchronousObservable.takeLast<number>(),
        SynchronousObservable.forEach<number>(bindMethod(result, Array_push)),
        SynchronousObservable.toRunnable(),
        Runnable.last(),
      );

      pipe(result, expectArrayEquals([22]));
    }),
    test("combined-latest mode", () => {
      const result: number[] = [];
      pipe(
        SynchronousObservable.compute(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Computation.fromReadonlyArray(m)),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            const result = __await(next);
            return result;
          },
          { mode: "combine-latest" },
        ),
        SynchronousObservable.keep(isSome),
        SynchronousObservable.forEach<number>(bindMethod(result, Array_push)),
        SynchronousObservable.toRunnable(),
        Runnable.last(),
      );

      pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
    }),
    test("when compute function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const subscription = pipe(
        SynchronousObservable.compute(() => {
          raise(error);
        }),
        EventSource.subscribe({ scheduler: vts }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(error),
      );
    }),
    test(
      "conditional hooks",
      pipeLazy(
        SynchronousObservable.compute(
          () => {
            const src = __constant(
              pipe(
                [0, 1, 2, 3, 4, 5],
                Computation.fromReadonlyArray(m, { delay: 5 }),
              ),
            );
            const src2 = __constant(
              SynchronousObservable.genPure(function* () {
                let x = 100;
                while (true) {
                  x++;
                  yield x;
                  yield delayMs(2);
                }
              }),
            );

            const v = __await(src);

            if (v % 2 === 0) {
              __memo(increment, 1);
              return __await(src2);
            }
            return v;
          },
          { mode: "batched" },
        ),
        SynchronousObservable.toRunnable({ maxMicroTaskTicks: 1 }),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    test(
      "conditional await",
      pipeLazy(
        SynchronousObservable.compute<number>(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Computation.fromReadonlyArray(m, { delay: 5 }),
            ),
          );
          const src2 = __constant(
            SynchronousObservable.genPure(function* () {
              let x = 100;
              while (true) {
                x++;
                yield x;
                yield delayMs(2);
              }
            }),
          );

          const src3 = __constant(
            pipe(
              [1],
              Computation.fromReadonlyArray(m, { delay: 1, delayStart: true }),
              SynchronousObservable.repeat(40),
            ),
          );

          const v = __await(src);

          if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
          } else {
            __await(src3);
            return v;
          }
        }),
        SynchronousObservable.distinctUntilChanged<number>(),
        SynchronousObservable.toRunnable({ maxMicroTaskTicks: 1 }),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
  ),
  describe(
    "keyFrame",
    test(
      "keyframing from 0 to 10 over a duration of 10 clock clicks",
      pipeLazy(
        SynchronousObservable.keyFrame(10),
        SynchronousObservable.map(scale(0, 10)),
        SynchronousObservable.toRunnable({
          maxMicroTaskTicks: 1,
        }),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      ),
    ),
  ),
  // Ideally these tests would be part of SequentialReactiveComputationModuleTests
  // but writing dependable tests that use real time is slow at best and ripe for
  // flakiness. The implementation is shared so only test using Observable.
  describe(
    "merge",
    test("with sources that have the same delays", () => {
      const [ev1, ev2, ev3] = pipe(
        [
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ],
        ReadonlyArray.map(Computation.fromReadonlyArray(m, { delay: 3 })),
      );

      pipe(
        SynchronousObservable.merge(ev1, ev2, ev3),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      );
    }),
    test(
      "with sources that have the different delays",
      pipeLazy(
        SynchronousObservable.merge<number>(
          pipe(
            [0, 2, 3, 5, 6],
            Computation.fromReadonlyArray(m, { delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Computation.fromReadonlyArray(m, { delay: 2, delayStart: true }),
          ),
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test("when one source throws", () => {
      using vts = VirtualTimeScheduler.create();

      const subscription = pipe(
        SynchronousObservable.merge(
          pipe([1, 4, 7], Computation.fromReadonlyArray(m, { delay: 2 })),
          SynchronousObservable.concat(
            SynchronousObservable.delay(5),
            Computation.raise(m),
          ),
        ),
        EventSource.subscribe({ scheduler: vts }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        pipeLazy(subscription, Disposable.raiseIfDisposedWithError),
        expectToThrow,
      );
    }),
    test("merging merged sources", () => {
      pipe(
        SynchronousObservable.merge(
          SynchronousObservable.merge(
            pipe([1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 })),
            SynchronousObservable.concat(
              SynchronousObservable.delay(3),
              Computation.empty(m),
              pipe([4, 5, 6], Computation.fromReadonlyArray(m, { delay: 1 })),
            ),
            m.merge<number>(
              SynchronousObservable.concat(
                SynchronousObservable.delay(6),
                Computation.empty(m),
                pipe([7, 8, 9], Computation.fromReadonlyArray(m, { delay: 1 })),
              ),
              SynchronousObservable.concat(
                SynchronousObservable.delay(9),
                Computation.empty(m),
                pipe(
                  [10, 11, 12],
                  Computation.fromReadonlyArray(m, { delay: 1 }),
                ),
              ),
            ),
          ),
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      );
    }),
  ),
  describe(
    "mergeAll",
    test(
      "with queueing",
      pipeLazy(
        [
          pipe([1, 3, 5], Computation.fromReadonlyArray(m, { delay: 3 })),
          pipe([2, 4, 6], Computation.fromReadonlyArray(m, { delay: 3 })),
          pipe(
            [9, 10],
            Computation.fromReadonlyArray(m, { delay: 3, delayStart: true }),
          ),
        ],
        Computation.fromReadonlyArray(m),
        SynchronousObservable.mergeAll({
          concurrency: 2,
        }),
        SynchronousObservable.toRunnable<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]),
      ),
    ),
    test(
      "without delay, merge all observables as they are produced",
      pipeLazy(
        [1, 2, 3],
        Computation.fromReadonlyArray(m),
        SynchronousObservable.map(x => Computation.ofValues(m, x, x, x)),
        SynchronousObservable.mergeAll({
          concurrency: 1,
        }),
        SynchronousObservable.toRunnable<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
  ),
  describe(
    "spring",
    testAsync(
      "test with spring",
      pipeLazyAsync(
        SynchronousObservable.spring(),
        SynchronousObservable.toRunnable({ maxMicroTaskTicks: 1 }),
        Runnable.last<number>(),
        expectEquals<Optional<number>>(1),
      ),
    ),
  ),
  describe(
    "takeUntil",
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [10, 20, 30, 40, 50],
        Computation.fromReadonlyArray(m, { delay: 2 }),
        SynchronousObservable.takeUntil<number>(
          pipe(
            [1],
            Computation.fromReadonlyArray(m, { delay: 3, delayStart: true }),
          ),
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([10, 20]),
      ),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        SynchronousObservable.genPure(function* counter() {
          let x = 0;

          yield delayMs(1);

          while (true) {
            yield x;
            yield delayMs(1);
            x++;
          }
        }),
        SynchronousObservable.takeFirst({ count: 101 }),
        SynchronousObservable.throttle<number>(50, { mode: "first" }),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([0, 50, 100]),
      ),
    ),
    test(
      "last",
      pipeLazy(
        SynchronousObservable.genPure(function* counter() {
          let x = 0;

          yield delayMs(1);

          while (true) {
            yield x;
            yield delayMs(1);
            x++;
          }
        }),
        SynchronousObservable.takeFirst({ count: 200 }),
        SynchronousObservable.throttle<number>(50, { mode: "last" }),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),
    test(
      "interval",
      pipeLazy(
        SynchronousObservable.genPure(function* counter() {
          let x = 0;

          yield delayMs(1);

          while (true) {
            yield x;
            yield delayMs(1);
            x++;
          }
        }),
        SynchronousObservable.takeFirst({ count: 200 }),
        SynchronousObservable.throttle<number>(75, { mode: "interval" }),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([0, 74, 75, 149, 150, 199]),
      ),
    ),
  ),
  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Computation.fromReadonlyArray(m, { delay: 1 }),
        SynchronousObservable.withLatestFrom<number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 2 })),
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<Tuple2<number, number>>(),
        expectArrayEquals(
          [tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)],
          {
            valuesEquality: arrayEquality(),
          },
        ),
      ),
    ),
    test(
      "when latest produces no values",
      pipeLazy(
        [0],
        Computation.fromReadonlyArray(m, { delay: 1 }),
        SynchronousObservable.withLatestFrom(
          Computation.empty(m),

          returns(1),
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test("when latest throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const result = pipe(
        [0],
        Computation.fromReadonlyArray(m, { delay: 1 }),
        SynchronousObservable.withLatestFrom(
          Computation.raise(m, {
            raise: returns(error),
          }),
          returns(1),
        ),
        EventSource.subscribe({ scheduler: vts }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        pipeLazy(result, Disposable.raiseIfDisposedWithError),
        expectToThrowError(error),
      );
    }),
    test(
      "with selector",
      pipeLazy(
        [0, 1, 2, 3],
        Computation.fromReadonlyArray(m, { delay: 1 }),
        SynchronousObservable.withLatestFrom<number, number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 2 })),
          (x, y) => x + y,
        ),
        SynchronousObservable.toRunnable(),
        Runnable.toReadonlyArray<number>(),
        expectArrayEquals([0, 1, 3, 4]),
      ),
    ),
  ),
  describe(
    "zipLatest",
    test(
      "zip two delayed sources",
      pipeLazy(
        SynchronousObservable.zipLatest<number, number>(
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            Computation.fromReadonlyArray(m, { delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 2, 3, 4],
            Computation.fromReadonlyArray(m, { delay: 2, delayStart: true }),
          ),
        ),
        m.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        SynchronousObservable.toRunnable<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([2, 5, 8, 11]),
      ),
    ),
  ),
)({
  beforeEach() {
    const scheduler = HostScheduler.create();
    DefaultScheduler.set(scheduler);
  },
  afterEach() {
    DefaultScheduler.dispose();
  },
});

((_: SynchronousObservable.Signature) => {})(SynchronousObservable);
