import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectIsSome,
  expectPromiseToThrow,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowAsync,
  expectToThrowError,
  expectTrue,
  mockFn,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import {
  __await,
  __constant,
  __do,
  __memo,
  __observe,
  __state,
  __stream,
} from "../../computations/Observable/effects.js";
import * as Observable from "../../computations/Observable.js";
import * as Streamable from "../../computations/Streamable.js";
import * as Subject from "../../computations/Subject.js";
import {
  ComputationOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffects,
  MulticastComputation,
  ObservableLike,
  PureDeferredComputation,
  PureSynchronousComputation,
  PureSynchronousObservableLike,
  StoreLike_value,
  StreamableLike_stream,
  SynchronousComputationWithSideEffects,
  SynchronousObservableLike,
} from "../../computations.js";
import {
  Optional,
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  error,
  ignore,
  isSome,
  lessThan,
  newInstance,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
  tuple,
} from "../../functions.js";
import { increment, incrementBy, scale } from "../../math.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Queue from "../../utils/Queue.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  OverflowBackpressureStrategy,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_push,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as WritableStore from "../WritableStore.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
import * as ComputationTest from "./fixtures/helpers/ComputationTest.js";
import AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests from "./fixtures/operators/AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests.js";
import ComputationOperatorWithSideEffectsTests from "./fixtures/operators/ComputationOperatorWithSideEffectsTests.js";
import HigherOrderComputationOperatorTests from "./fixtures/operators/HigherOrderComputationOperatorTests.js";
import StatefulAsynchronousComputationOperatorTests from "./fixtures/operators/StatefulAsynchronousComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./fixtures/operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessAsynchronousComputationOperatorTests from "./fixtures/operators/StatelessAsynchronousComputationOperatorTests.js";
import StatelessComputationOperatorTests from "./fixtures/operators/StatelessComputationOperatorTests.js";

const ObservableTypes = {
  [Computation_pureSynchronousOfT]: Observable.empty({ delay: 1 }),
  [Computation_synchronousWithSideEffectsOfT]: pipe(
    Observable.empty(),
    Observable.forEach(ignore),
  ),
  [Computation_pureDeferredOfT]: pipe(
    Observable.empty(),
    Observable.subscribeOn(HostScheduler.create()),
  ),
  [Computation_deferredWithSideEffectsOfT]: pipe(
    Observable.empty(),
    Observable.subscribeOn(HostScheduler.create()),
    Observable.forEach(ignore),
  ),
  [Computation_multicastOfT]: Observable.never(),
};

const CombineConstructorTests = (
  operator: Observable.Signature["combineLatest"],
) => {
  const {
    [Computation_pureSynchronousOfT]: pureSynchronousComputationOfT,
    [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT,
    [Computation_pureDeferredOfT]: pureDeferredOfT,
    [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT,
    [Computation_multicastOfT]: multicastOfT,
  } = ObservableTypes;
  return describe(
    "CombineConstructorTests",

    ComputationTest.isPureSynchronous(
      operator(pureSynchronousComputationOfT, pureSynchronousComputationOfT),
      " when all inputs are pureSynchronous",
    ),

    ComputationTest.isSynchronousWithSideEffects(
      operator(pureSynchronousComputationOfT, synchronousWithSideEffectsOfT),
      " when combining pureSynchronous and synchronousWithSideEffects inputs",
    ),

    ComputationTest.isSynchronousWithSideEffects(
      operator(synchronousWithSideEffectsOfT, synchronousWithSideEffectsOfT),
      " when all inputs are synchronousWithSideEffects",
    ),

    ComputationTest.isPureDeferred(
      operator(pureDeferredOfT, pureDeferredOfT),
      " when all inputs are PureDeferred",
    ),

    ComputationTest.isPureDeferred(
      operator(pureSynchronousComputationOfT, pureDeferredOfT),
      " when combining pureSynchronous and pureDeferred inputs",
    ),

    ComputationTest.isPureDeferred(
      operator(multicastOfT, pureDeferredOfT),
      " when combining pureDeferred and multicast inputs",
    ),

    ComputationTest.isDeferredWithSideEffects(
      operator(pureDeferredOfT, deferredWithSideEffectsOfT, multicastOfT),
      " when combining multicast, pureDeferred and deferredWithSideEffect inputs",
    ),

    ComputationTest.isPureDeferred(
      operator(multicastOfT, multicastOfT, multicastOfT),
      " when combining multicast inputs",
    ),
  );
};

testModule(
  "Observable",
  describe(
    "effects",
    test("calling an effect from outside a computation expression throws", () => {
      expectToThrow(() => __constant(0));
    }),
  ),
  ComputationModuleTests(Observable, ObservableTypes),
  DeferredComputationModuleTests(Observable, ObservableTypes),
  DeferredReactiveComputationModuleTests(Observable, ObservableTypes),
  SynchronousComputationModuleTests<Observable.Computation>(Observable),
  ConcurrentReactiveComputationModuleTests(
    {
      ...Observable,
      fromObservable:
        <T>() =>
        (v: ObservableLike<T>) =>
          v as ComputationOf<Observable.Computation, T>,
      toObservable:
        <T>() =>
        (v: ComputationOf<Observable.Computation, T>) =>
          v,
    },
    ObservableTypes,
  ),
  describe(
    "backpressureStrategy",
    testAsync("with a throw backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await expectToThrowAsync(
        pipeLazyAsync(
          Observable.create(async observer => {
            await Promise.resolve();

            try {
              for (let i = 0; i < 10; i++) {
                observer[SinkLike_push](i);
              }

              observer[SinkLike_complete]();
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }
          }),
          Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: ThrowBackpressureStrategy,
          }),
          Observable.toReadonlyArrayAsync<number>(scheduler),
        ),
      );
    }),
    testAsync("with a drop latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(async observer => {
          await Promise.resolve();
          for (let i = 0; i < 10; i++) {
            observer[SinkLike_push](i);
          }
          observer[SinkLike_complete]();
        }),
        Observable.backpressureStrategy({
          capacity: 1,
          backpressureStrategy: DropLatestBackpressureStrategy,
        }),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([0]),
      );
    }),
    testAsync("with a drop-oldest latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(async observer => {
          await Promise.resolve();

          for (let i = 0; i < 10; i++) {
            observer[SinkLike_push](i);
          }
          observer[SinkLike_complete]();
        }),
        Observable.backpressureStrategy({
          capacity: 1,
          backpressureStrategy: DropOldestBackpressureStrategy,
        }),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([9]),
      );
    }),
    test(
      "it passes through notifications",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.backpressureStrategy({
          capacity: 1,
          backpressureStrategy: DropLatestBackpressureStrategy,
        }),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    StatefulSynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.backpressureStrategy({
        capacity: 10,
        backpressureStrategy: DropLatestBackpressureStrategy,
      }),
    ),
  ),
  describe(
    "catchError",
    test("when the error handler throws an error from a delayed source", () => {
      const e1 = "e1";
      const e2 = "e2";

      let result: Optional<unknown> = none;

      pipe(
        Observable.empty({ delay: 1 }),
        Computation.concatWith(Observable)(
          Observable.raise({ raise: () => e1 }),
        ),
        Observable.catchError(_ => {
          throw e2;
        }),
        Observable.catchError<number>(e => {
          result = e["cause"];
        }),
        Observable.toReadonlyArray(),
      );

      pipe(
        result as ReadonlyArray<Error>,
        ReadonlyArray.map(x => x.message),
        expectArrayEquals(["e2", "e1"]),
      );
    }),
  ),
  describe(
    "combineLatest",
    test(
      "combineLatest from two interspersing sources",
      pipeLazy(
        Observable.combineLatest<number, number>(
          pipe(
            Observable.generate(incrementBy(2), returns(1), { delay: 2 }),
            Observable.takeFirst<number>({ count: 3 }),
          ),
          pipe(
            Observable.generate(incrementBy(2), returns(0), { delay: 3 }),
            Observable.takeFirst<number>({ count: 2 }),
          ),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)],
          {
            valuesEquality: arrayEquality(),
          },
        ),
      ),
    ),
    CombineConstructorTests(Observable.combineLatest),
  ),
  describe(
    "computeDeferred",
    testAsync("__stream", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = bindMethod(stream, SinkLike_push);

          const result = __observe(stream) ?? 0;
          __do(push, result + 1);

          return result;
        }),
        Observable.takeFirst<number>({ count: 10 }),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler),
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
          const push = bindMethod(state, SinkLike_push);
          const result = __observe(state) ?? -1;

          if (result > -1) {
            __do(push, () => result + 1);
          }

          return result;
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync<readonly number[]>(scheduler),
        x => x ?? [],
        expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]),
      );
    }),
    testAsync("awaiting a Multicast Observable", async () => {
      using scheduler = HostScheduler.create();
      const subject = Subject.create<number>({ replay: 2 });
      subject[EventListenerLike_notify](200);
      subject[EventListenerLike_notify](100);

      await pipeAsync(
        Observable.computeDeferred(
          () => {
            const result = __await(subject);

            // Need to dispose the subject or the test will hang
            __do(bindMethod(subject, DisposableLike_dispose));

            return result;
          },
          { mode: "combine-latest" },
        ),
        Observable.distinctUntilChanged<number>(),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([200, 100]),
      );
    }),
    ComputationTest.isDeferredWithSideEffects(
      Observable.computeDeferred(() => {}),
    ),
  ),
  describe(
    "computeSynchronousObservable",
    test("batch mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronousObservable(() => {
          const fromValueWithDelay = __constant(
            (delay: number, value: number): SynchronousObservableLike<number> =>
              pipe([value], Observable.fromReadonlyArray({ delay })),
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
        Observable.run(),
      );

      pipe(result, expectArrayEquals([22]));
    }),
    test("combined-latest mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronousObservable(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Observable.fromReadonlyArray()),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            return __await(next);
          },
          { mode: "combine-latest" },
        ),
        Computation.keepType(Observable)(isSome),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.run(),
      );

      pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
    }),
    test("when compute function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const subscription = pipe(
        Observable.computeSynchronousObservable(() => {
          raise(error);
        }),
        Observable.subscribe(vts),
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
        Observable.computeSynchronousObservable(
          () => {
            const src = __constant(
              pipe(
                [0, 1, 2, 3, 4, 5],
                Observable.fromReadonlyArray({ delay: 5 }),
              ),
            );
            const src2 = __constant(
              Observable.generate(increment, returns(100), { delay: 2 }),
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
        Observable.toReadonlyArray(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    test(
      "conditional await",
      pipeLazy(
        Observable.computeSynchronousObservable<number>(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Observable.fromReadonlyArray({ delay: 5 }),
            ),
          );
          const src2 = __constant(
            Observable.generate(increment, returns(100), { delay: 2 }),
          );

          const src3 = __constant(
            pipe(1, Observable.fromValue({ delay: 1 }), Observable.repeat(40)),
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
        Observable.toReadonlyArray(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    ComputationTest.isSynchronousWithSideEffects(
      Observable.computeSynchronousObservable(() => {}),
    ),
  ),
  describe(
    "concat",
    test(
      "concats the input containers in order, when sources have delay",
      pipeLazy(
        Observable.concat(
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 })),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
  describe(
    "create",
    ComputationTest.isDeferredWithSideEffects(Observable.create(ignore)),
  ),
  describe(
    "currentTime",
    test(
      "publish current time from VTS",
      pipeLazy(
        Observable.currentTime,
        Observable.takeFirst({ count: 5 }),
        Observable.toReadonlyArray<number>(),
        // Only delayed scheduled continuations increment the clock
        expectArrayEquals([0, 0, 0, 0, 0]),
      ),
    ),
    ComputationTest.isPureSynchronous(Observable.currentTime),
  ),
  describe(
    "defer",
    testAsync("defering a promise converted to an Observable", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.defer(() =>
          pipe(1, Observable.fromValue(), Observable.multicast(scheduler)),
        ),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([1]),
      );
    }),
    ComputationTest.isPureDeferred(Observable.defer(Subject.create)),
  ),
  describe(
    "empty",
    test("with delay", () => {
      let disposedTime = -1;
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 5 }),
        Observable.subscribe(vts),
        DisposableContainer.onComplete(() => {
          disposedTime = vts[SchedulerLike_now];
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(disposedTime, expectEquals(5));
    }),
  ),
  describe(
    "enqueue",

    test("when backpressure exception is thrown", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
      });

      expectToThrow(
        pipeLazy(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          Observable.fromReadonlyArray(),
          Observable.enqueue<number>(stream),
          Observable.run(),
        ),
      );
    }),
    test("when completed successfully", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: 1,
      });

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray(),
        Observable.enqueue<number>(stream),
        Observable.toReadonlyArray(),
      );

      pipe(
        stream[SinkLike_isCompleted],
        expectTrue("expected stream to be completed"),
      );
    }),
    test("when completed successfully from delayed source", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: 1,
      });

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.enqueue<number>(stream),
        Observable.toReadonlyArray(),
      );

      pipe(
        stream[SinkLike_isCompleted],
        expectTrue("expected stream to be completed"),
      );
    }),
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.enqueue(Queue.create()),
    ),
  ),
  describe(
    "exhaust",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray<number>()),
          pipe([7, 8, 9], Observable.fromReadonlyArray<number>()),
        ],
        Observable.fromReadonlyArray(),
        Observable.exhaust<number>(),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    HigherOrderComputationOperatorTests(
      ObservableTypes,
      Observable.exhaust({
        innerType: PureSynchronousComputation,
      }),
      Observable.exhaust({
        innerType: SynchronousComputationWithSideEffects,
      }),
      Observable.exhaust({
        innerType: PureDeferredComputation,
      }),
      Observable.exhaust({
        innerType: DeferredComputationWithSideEffects,
      }),
    ),
  ),
  describe(
    "firstAsync",
    testAsync("empty source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(scheduler),
        expectIsNone,
      );
    }),
    testAsync("it returns the first value", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(scheduler),
        expectEquals<Optional<number>>(1),
      );
    }),
  ),
  describe(
    "flatMapAsync",
    testAsync("mapping a number to a promise", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        1,
        Observable.fromValue(),
        Observable.flatMapAsync(async x => await Promise.resolve(x)),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1]),
      );
    }),
    HigherOrderComputationOperatorTests(
      ObservableTypes,
      none,
      none,
      none,
      Observable.flatMapAsync(async x => await Promise.resolve(x)),
    ),
  ),
  describe(
    "forkMerge",
    test("with pure src and inner runnables with side-effects", () => {
      using vts = VirtualTimeScheduler.create();
      const result: number[] = [];

      pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray<number>({ delay: 1 }),
        Observable.forkMerge<number, number>(
          Computation.concatMapIterable(Observable)(_ => [1, 2]),
          Computation.concatMapIterable(Observable)(_ => [3, 4]),
        ),
        Observable.forEach(bind(result.push, result)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]));
    }),

    testAsync("src with side-effects is only subscribed to once", async () => {
      using vts = VirtualTimeScheduler.create();
      const result: number[] = [];

      const sideEffect = mockFn();
      const src = pipe(
        0,
        Observable.fromValue(),
        Observable.forEach(sideEffect),
      );

      await pipeAsync(
        src,
        Observable.forkMerge(
          Computation.concatMapIterable(Observable)(_ => [1, 2, 3]),
          Computation.concatMapIterable(Observable)(_ => [4, 5, 6]),
        ),
        Observable.forEach(bind(result.push, result)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
      pipe(sideEffect, expectToHaveBeenCalledTimes(1));
    }),
    StatelessComputationOperatorTests(
      ObservableTypes,
      Observable.forkMerge(
        _ => ObservableTypes[Computation_multicastOfT],
        _ => ObservableTypes[Computation_multicastOfT],
        {
          innerType: MulticastComputation,
        },
      ),
    ),
  ),
  describe(
    "fromAsyncFactory",
    testAsync("when promise resolves", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        async () => {
          await Promise.resolve(1);
          return 2;
        },
        Observable.fromAsyncFactory(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(2),
      );
    }),
    testAsync("when promise fails with an exception", async () => {
      using scheduler = HostScheduler.create();
      await pipe(
        pipe(
          async () => {
            await Promise.resolve(1);
            raise();
          },
          Observable.fromAsyncFactory(),
          Observable.lastAsync(scheduler),
        ),
        expectPromiseToThrow,
      );
    }),
    testAsync("when factory throws an exception", async () => {
      using scheduler = HostScheduler.create();
      await pipe(
        pipe(
          async () => {
            raise();
          },
          Observable.fromAsyncFactory(),
          Observable.lastAsync(scheduler),
        ),
        expectPromiseToThrow,
      );
    }),
    ComputationTest.isDeferredWithSideEffects(
      pipe(async () => {
        raise();
      }, Observable.fromAsyncFactory()),
    ),
  ),
  describe(
    "fromAsyncIterable",
    testAsync("infinite immediately resolving iterable", async () => {
      using scheduler = HostScheduler.create();
      const result = await pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            yield i++;
          }
        })(),
        Observable.fromAsyncIterable(),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler, { capacity: 5 }),
      );

      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
    testAsync("iterable that completes", async () => {
      using scheduler = HostScheduler.create();
      const result = await pipe(
        (async function* foo() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        Observable.fromAsyncIterable(),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler, { capacity: 1 }),
      );

      pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }),
    testAsync(
      "iterable that throws",
      pipeLazy(async () => {
        using scheduler = HostScheduler.create();
        const e = error();

        const result = await pipe(
          (async function* foo() {
            throw e;
          })(),
          Observable.fromAsyncIterable(),
          Observable.lastAsync(scheduler, { capacity: 1 }),
        );

        pipe(result, expectEquals(e as unknown));
      }, expectToThrowAsync),
    ),
    ComputationTest.isDeferredWithSideEffects(
      pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            yield i++;
          }
        })(),
        Observable.fromAsyncIterable(),
      ),
    ),
  ),
  describe(
    "fromEventSource",
    ComputationTest.isMulticastedAndNotDisposable(
      pipe(EventSource.create(ignore), Observable.fromEventSource()),
    ),
  ),
  describe(
    "fromIterable",
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        Observable.fromIterable({ delay: 2 }),
        Observable.withCurrentTime(t => t),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
      ),
    ),
    test(
      "with delay and delayed start",
      pipeLazy(
        [9, 9, 9, 9],
        Observable.fromIterable({ delay: 2, delayStart: true }),
        Observable.withCurrentTime(t => t),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 4, 6, 8]),
      ),
    ),
  ),
  describe(
    "fromStore",
    test("it publishes the current value and all subsequent values", () => {
      const store = WritableStore.create<number>(-1);
      using vts = VirtualTimeScheduler.create();

      const result: number[] = [];

      pipe(
        store,
        Observable.fromStore(),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      pipe(
        Observable.generate(increment, returns(-1), { delay: 3 }),
        Observable.takeFirst({ count: 3 }),
        Computation.notify(Observable)(store),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }),
    ComputationTest.isMulticastedAndNotDisposable(
      pipe(WritableStore.create<number>(-1), Observable.fromStore()),
    ),
  ),
  describe(
    "keyFrame",
    test(
      "keyframing from 0 to 10 over a duration of 10 clock clicks",
      pipeLazy(
        Observable.keyFrame(10),
        Observable.map(scale(0, 10)),
        Observable.toReadonlyArray({
          maxMicroTaskTicks: 1,
        }),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      ),
    ),
  ),
  describe(
    "lastAsync",
    testAsync("empty source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(scheduler),
        expectIsNone,
      );
    }),
    testAsync("it returns the last value", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(3),
      );
    }),
  ),
  describe(
    "mergeAll",
    test(
      "with queueing",
      pipeLazy(
        [
          pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
          pipe(
            [9, 10],
            Observable.fromReadonlyArray({ delay: 3, delayStart: true }),
          ),
        ],
        Observable.fromReadonlyArray(),
        Observable.mergeAll<number>({
          concurrency: 2,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]),
      ),
    ),
    testAsync(
      "without delay, merge all observables as they are produced",
      async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          Computation.flatMap(Observable)<number, number>("mergeAll", x =>
            pipe([x, x, x], Observable.fromReadonlyArray<number>()),
          ),
          Observable.toReadonlyArrayAsync(scheduler),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        );
      },
    ),
    test(
      "without delay, merge all observables as they are produced",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Computation.concatMap(Observable)<number, number>(x =>
          pipe([x, x, x], Observable.fromReadonlyArray<number>()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
    HigherOrderComputationOperatorTests(
      ObservableTypes,
      Observable.mergeAll({
        innerType: PureSynchronousComputation,
      }),
      Observable.mergeAll({
        innerType: SynchronousComputationWithSideEffects,
      }),
      Observable.mergeAll({
        innerType: PureDeferredComputation,
      }),
      Observable.mergeAll({
        innerType: DeferredComputationWithSideEffects,
      }),
    ),
  ),
  describe(
    "multicast",
    ComputationTest.isMulticastedAndDisposable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return pipe(Observable.empty({ delay: 1 }), Observable.multicast(vts));
      })(),
    ),
    test("shared observable zipped with itself, auto disposing", () => {
      using vts = VirtualTimeScheduler.create();
      const shared = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.forEach(ignore),
        Observable.multicast(vts, { replay: 1, autoDispose: true }),
      );

      let result: number[] = [];
      pipe(
        Observable.zipLatest(shared, shared),
        Observable.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),
  describe(
    "onSubscribe",
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.onSubscribe(ignore),
    ),
    test("when subscribe function returns a teardown function", () => {
      using vts = VirtualTimeScheduler.create();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(vts),
      );

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      vts[VirtualTimeSchedulerLike_run]();

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),
    test("when callback function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const subscription = pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(raise),
        Observable.subscribe(vts),
      );

      pipe(subscription[DisposableLike_error], expectIsSome);
    }),
    test("when callback returns a disposable", () => {
      using vts = VirtualTimeScheduler.create();

      const disp = Disposable.create();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(vts),
      );

      pipe(disp[DisposableLike_isDisposed], expectFalse());
      pipe(f, expectToHaveBeenCalledTimes(1));

      vts[VirtualTimeSchedulerLike_run]();

      pipe(disp[DisposableLike_isDisposed], expectTrue());
      expectIsNone(disp[DisposableLike_error]);
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),
    test("when callback only performs sideeffects", () => {
      using vts = VirtualTimeScheduler.create();

      let called = false;

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(() => {
          called = true;
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(called, expectTrue());
    }),
  ),
  describe(
    "repeat",
    test(
      "when repeating a finite amount of times, with delayed source.",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.repeat<number>(3),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate with delayed source",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.repeat<number>(lessThan(1)),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test("when the repeat function throws with delayed source", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray({ delay: 3 }),
          Observable.repeat(_ => {
            throw err;
          }),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  ),
  describe(
    "scanMany",
    test(
      "slow source, fast scan function",
      pipeLazy(
        Observable.generate(increment, returns(-1), {
          delay: 10,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.scanMany(
          (_acc: number, next: number) =>
            pipe(next, Observable.fromValue({ delay: 2 })),
          returns(0),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      ),
    ),
    HigherOrderComputationOperatorTests(
      ObservableTypes,
      Observable.scanMany((_acc, _next) => Observable.empty(), returns(0), {
        innerType: PureSynchronousComputation,
      }),
      Observable.scanMany(
        (_acc, _next) => pipe(Observable.empty(), Observable.forEach(ignore)),
        returns(0),
        { innerType: SynchronousComputationWithSideEffects },
      ),
      Observable.scanMany(
        (_acc, _next) =>
          pipe(Observable.empty(), Observable.subscribeOn(HostScheduler.get())),
        returns(0),
        {
          innerType: PureDeferredComputation,
        },
      ),
      Observable.scanMany(
        (_acc, _next) =>
          pipe(
            Observable.empty(),
            Observable.forEach(ignore),
            Observable.subscribeOn(HostScheduler.get()),
          ),
        returns(0),
        {
          innerType: DeferredComputationWithSideEffects,
        },
      ),
    ),
  ),
  describe(
    "spring",
    testAsync("test with spring", async () => {
      using scheduler = HostScheduler.create();

      await pipeAsync(
        Observable.spring(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(1),
      );
    }),
    ComputationTest.isPureSynchronous(Observable.spring()),
  ),
  describe(
    "subscribeOn",
    StatefulAsynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.subscribeOn(VirtualTimeScheduler.create()),
    ),
  ),
  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        Observable.empty<PureSynchronousObservableLike<number>>({ delay: 1 }),
        Observable.switchAll<number>(),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([] as readonly number[]),
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Computation.flatMap(Observable)<number, number>("switchAll", _ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "only produce the last observable",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Computation.flatMap(Observable)<number, number>("switchAll", x =>
          pipe(
            [x, x, x],
            Observable.fromReadonlyArray<number>({
              delay: 1,
              delayStart: true,
            }),
          ),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([3, 3, 3]),
      ),
    ),
    test(
      "overlapping notification",
      pipeLazy(
        [none, none, none],
        Observable.fromReadonlyArray({ delay: 4 }),
        Computation.flatMap(Observable)<void, number>("switchAll", _ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Computation.flatMap(Observable)<number, number>("switchAll", _ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    HigherOrderComputationOperatorTests(
      ObservableTypes,
      Observable.switchAll({
        innerType: PureSynchronousComputation,
      }),
      Observable.switchAll({
        innerType: SynchronousComputationWithSideEffects,
      }),
      Observable.switchAll({
        innerType: PureDeferredComputation,
      }),
      Observable.switchAll({
        innerType: DeferredComputationWithSideEffects,
      }),
    ),
  ),
  describe(
    "takeUntil",
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [10, 20, 30, 40, 50],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.takeUntil(pipe([1], Observable.fromValue({ delay: 3 }))),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([10, 20]),
      ),
    ),
    StatefulSynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.takeUntil(Observable.empty({ delay: 1 })),
    ),
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.takeUntil(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    StatefulAsynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.takeUntil(
        pipe(
          Observable.empty(),
          Observable.subscribeOn(HostScheduler.create()),
        ),
      ),
    ),
    AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests(
      ObservableTypes,
      Observable.takeUntil(
        pipe(
          () => Promise.resolve(1),
          Observable.fromAsyncFactory(),
          Observable.forEach(ignore),
        ),
      ),
    ),
    StatelessAsynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.takeUntil(Subject.create()),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 101 }),
        Observable.throttle<number>(50, { mode: "first" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 49, 99]),
      ),
    ),
    test(
      "last",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(50, { mode: "last" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),
    test(
      "interval",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(75, { mode: "interval" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),
    StatefulSynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.throttle(1),
    ),
  ),
  describe(
    "throwIfEmpty",
    test("when source is empty and delayed", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.throwIfEmpty(() => error),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),

    test("when factory throws after a delay", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.throwIfEmpty(() => {
            throw error;
          }),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),
    test(
      "when source is not empty with delay",
      pipeLazy(
        [1],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.throwIfEmpty(returns(none)),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1]),
      ),
    ),
  ),
  describe(
    "toEventSource",
    test("when the source completes without error", () => {
      const result: number[] = [];
      using vts = VirtualTimeScheduler.create();
      pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toEventSource(vts),
        Disposable.addTo(vts),
        EventSource.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2]));
    }),
  ),
  describe(
    "toPauseableObservable",
    test("a source with delay", () => {
      using vts = VirtualTimeScheduler.create();

      const generateObservable = pipe(
        Observable.generate(increment, returns(-1), {
          delay: 2,
          delayStart: true,
        }),
        Observable.toPauseableObservable(vts),
      );

      generateObservable[PauseableLike_resume]();

      vts[SchedulerLike_schedule](
        () => {
          generateObservable[PauseableLike_pause]();
          pipe(
            generateObservable[PauseableLike_isPaused][StoreLike_value],
            expectTrue("expect observable to be paused"),
          );
        },
        { delay: 3 },
      );

      vts[SchedulerLike_schedule](
        () => {
          generateObservable[PauseableLike_resume]();

          pipe(
            generateObservable[PauseableLike_isPaused][StoreLike_value],
            expectFalse("expect observable to not be paused"),
          );
        },
        { delay: 4 },
      );

      vts[SchedulerLike_schedule](
        () => generateObservable[DisposableLike_dispose](),
        { delay: 6 },
      );

      const f = mockFn();
      const subscription = pipe(
        generateObservable,
        Observable.forEach((x: number) => {
          f(x);
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      // pipe(f, expectToHaveBeenCalledTimes(2));
      pipe(f.calls.flat(), expectArrayEquals([0, 1]));

      pipe(subscription[DisposableLike_isDisposed], expectTrue());
    }),
    test("flow a generating source", () => {
      using vts = VirtualTimeScheduler.create();

      const flowed = pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toPauseableObservable(vts),
        Disposable.addTo(vts),
      );

      vts[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
      });

      const f = mockFn();
      const subscription = pipe(
        flowed,
        Observable.withCurrentTime<unknown, Tuple2<number, any>>(tuple),
        Observable.forEach(([_, v]: Tuple2<number, any>) => {
          f(v);
        }),
        Observable.subscribe(vts),
        Disposable.addTo(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls.flat(), expectArrayEquals([0, 1, 2]));

      pipe(subscription[DisposableLike_isDisposed], expectTrue());
    }),
    test("when the source throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const flowed = pipe(
        Observable.raise({ raise: () => error }),
        Observable.toPauseableObservable(vts),
        Disposable.addTo(vts),
      );
      flowed[PauseableLike_resume]();

      vts[VirtualTimeSchedulerLike_run]();

      pipe(flowed[DisposableLike_error], expectEquals<Optional<Error>>(error));
    }),
  ),
  describe(
    "toReadonlyArrayAsync",
    testAsync("with pure delayed source", async () => {
      using scheduler = HostScheduler.create();

      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 3 }),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1, 2, 3]),
      );
    }),
    testAsync("with empty non-runnable source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        EventSource.create<number>(l => l[DisposableLike_dispose]()),
        Observable.fromEventSource(),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals<number>([]),
      );
    }),
  ),
  describe(
    "withCurrentTime",
    StatefulSynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.withCurrentTime(returns),
    ),
  ),
  describe(
    "zipLatest",
    test(
      "zip two delayed sources",

      pipeLazy(
        Observable.zipLatest(
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 2, 3, 4],
            Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
          ),
        ),
        Observable.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 5, 8, 11]),
      ),
    ),
    CombineConstructorTests(Observable.zipLatest),
  ),
);

((_: Observable.Signature) => {})(Observable);
