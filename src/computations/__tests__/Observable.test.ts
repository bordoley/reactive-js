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
} from "../../utils.js";
import * as Computation from "../Computation.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const m = Computation.makeModule<Observable.Computation>()(Observable);

testModule(
  "Observable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
  SynchronousComputationModuleTests(m),
  ConcurrentReactiveComputationModuleTests(m),
  /*describe(
    "computeDeferred",
    testAsync("__stream", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = bindMethod(stream, EventListenerLike_notify);

          const streamObservable = __constant(
            pipe(stream, Broadcaster.toProducer(), Producer.to )
          );
          const result = __observe(stream) ?? 0;
          __do(push, result + 1);

          return result;
        }),
        Observable.takeFirst<number>({ count: 10 }),
        Observable.buffer<number>(),
        Computation.lastAsync(Observable)<number[]>({ scheduler }),
        x => x ?? [],
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      );
    }),
    testAsync("__state", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const initialState = __constant((): number => 0);
          const state = __state(initialState);
          const push = bindMethod(state, EventListenerLike_notify);
          const result = __observe(state) ?? -1;

          if (result > -1) {
            __do(push, () => result + 1);
          }

          return result;
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Computation.lastAsync(Observable)<readonly number[]>({ scheduler }),
        x => x ?? [],
        expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]),
      );
    }),
    testAsync("awaiting a Multicast Observable", async () => {
      using scheduler = HostScheduler.create();
      const subject = Publisher.create<number>();
      subject[EventListenerLike_notify](200);
      subject[EventListenerLike_notify](100);

      const subjectObs = pipe(subject, Broadcaster.toObservable());

      await pipeAsync(
        Observable.computeDeferred(
          () => {
            const result = __await(subjectObs);

            // Need to dispose the subject or the test will hang
            __do(bindMethod(subject, DisposableLike_dispose));

            return result;
          },
          { mode: "combine-latest" },
        ),
        Observable.distinctUntilChanged<number>(),
        Computation.toReadonlyArrayAsync(Observable)<number>({ scheduler }),
        expectArrayEquals([200, 100]),
      );
    }),
  ),*/
  describe(
    "computeSynchronous",
    test("batch mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronous(() => {
          const fromValueWithDelay = __constant(
            (
              delay: number,
              value: number,
            ): PureSynchronousObservableLike<number> =>
              pipe([value], Computation.fromReadonlyArray(m)({ delay })),
          );
          const obs1 = __memo(fromValueWithDelay, 10, 5);
          const result1 = __await(obs1);
          const obs2 = __memo(fromValueWithDelay, 20, 10);
          const result2 = __await(obs2);
          const obs3 = __memo(fromValueWithDelay, 30, 7);
          const result3 = __await(obs3);

          return result1 + result2 + result3;
        }),
        Observable.takeLast<number>(),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Computation.last(m)(),
      );

      pipe(result, expectArrayEquals([22]));
    }),
    test("combined-latest mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronous(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Computation.fromReadonlyArray(m)()),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            return __await(next);
          },
          { mode: "combine-latest" },
        ),
        Observable.keep(isSome),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Computation.last(m)(),
      );

      pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
    }),
    test("when compute function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const subscription = pipe(
        Observable.computeSynchronous(() => {
          raise(error);
        }),
        Computation.subscribe(m)({ scheduler: vts }),
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
        Observable.computeSynchronous(
          () => {
            const src = __constant(
              pipe(
                [0, 1, 2, 3, 4, 5],
                Computation.fromReadonlyArray(m)({ delay: 5 }),
              ),
            );
            const src2 = __constant(
              Observable.genPure(
                function* () {
                  let x = 100;
                  while (true) {
                    x++;
                    yield x;
                  }
                },
                { delay: 2 },
              ),
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
        Computation.toReadonlyArray(m)<number>(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    test(
      "conditional await",
      pipeLazy(
        Observable.computeSynchronous<number>(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Computation.fromReadonlyArray(m)({ delay: 5 }),
            ),
          );
          const src2 = __constant(
            Observable.genPure(
              function* () {
                let x = 100;
                while (true) {
                  x++;
                  yield x;
                }
              },
              { delay: 2 },
            ),
          );

          const src3 = __constant(
            pipe(
              [1],
              Computation.fromReadonlyArray(m)({ delay: 1, delayStart: true }),
              Observable.repeat(40),
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
        Observable.distinctUntilChanged<number>(),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
  ),
  describe(
    "keyFrame",
    test(
      "keyframing from 0 to 10 over a duration of 10 clock clicks",
      pipeLazy(
        Observable.keyFrame(10),
        Observable.map(scale(0, 10)),
        Computation.toReadonlyArray(m)({
          maxMicroTaskTicks: 1,
        }),
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
        ReadonlyArray.map(Computation.fromReadonlyArray(m)({ delay: 3 })),
      );

      pipe(
        Observable.merge(ev1, ev2, ev3),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      );
    }),
    test(
      "with sources that have the different delays",
      pipeLazy(
        Observable.merge<number>(
          pipe(
            [0, 2, 3, 5, 6],
            Computation.fromReadonlyArray(m)({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Computation.fromReadonlyArray(m)({ delay: 2, delayStart: true }),
          ),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test("when one source throws", () => {
      using vts = VirtualTimeScheduler.create();

      const subscription = pipe(
        Observable.merge(
          pipe([1, 4, 7], Computation.fromReadonlyArray(m)({ delay: 2 })),
          Observable.concat(Observable.delay(5), Computation.raise(m)()),
        ),
        Computation.subscribe(m)({ scheduler: vts }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        pipeLazy(subscription, Disposable.raiseIfDisposedWithError),
        expectToThrow,
      );
    }),
    test("merging merged sources", () => {
      pipe(
        Observable.merge(
          Observable.merge(
            pipe([1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 })),
            Observable.concat(
              Observable.delay(3),
              Computation.empty(m)(),
              pipe([4, 5, 6], Computation.fromReadonlyArray(m)({ delay: 1 })),
            ),
            m.merge<number>(
              Observable.concat(
                Observable.delay(6),
                Computation.empty(m)(),
                pipe([7, 8, 9], Computation.fromReadonlyArray(m)({ delay: 1 })),
              ),
              Observable.concat(
                Observable.delay(9),
                Computation.empty(m)(),
                pipe(
                  [10, 11, 12],
                  Computation.fromReadonlyArray(m)({ delay: 1 }),
                ),
              ),
            ),
          ),
        ),
        Computation.toReadonlyArray(m)<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      );
    }),
  ),
  describe(
    "spring",
    testAsync(
      "test with spring",
      pipeLazyAsync(
        Observable.spring(),
        Computation.lastAsync(m)(),
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
        Computation.fromReadonlyArray(m)({ delay: 2 }),
        Observable.takeUntil<number>(
          pipe(
            [1],
            Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true }),
          ),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([10, 20]),
      ),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        Observable.genPure(
          function* counter() {
            let x = 0;

            while (true) {
              yield x;
              x++;
            }
          },
          {
            delay: 1,
            delayStart: true,
          },
        ),
        Observable.takeFirst({ count: 101 }),
        Observable.throttle<number>(50, { mode: "first" }),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([0, 49, 99]),
      ),
    ),
    test(
      "last",
      pipeLazy(
        Observable.genPure(
          function* counter() {
            let x = 0;

            while (true) {
              yield x;
              x++;
            }
          },
          {
            delay: 1,
            delayStart: true,
          },
        ),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(50, { mode: "last" }),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),
    test(
      "interval",
      pipeLazy(
        Observable.genPure(
          function* counter() {
            let x = 0;

            while (true) {
              yield x;
              x++;
            }
          },
          {
            delay: 1,
            delayStart: true,
          },
        ),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(75, { mode: "interval" }),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),
  ),
  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom<number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })),
        ),
        Computation.toReadonlyArray(m)(),
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
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom(
          Computation.empty(m)(),

          returns(1),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test("when latest throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const result = pipe(
        [0],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom(
          Computation.raise(m)<number>({
            raise: returns(error),
          }),
          returns(1),
        ),
        Computation.subscribe(m)({ scheduler: vts }),
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
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom<number, number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })),
          (x, y) => x + y,
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([0, 1, 3, 4]),
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
