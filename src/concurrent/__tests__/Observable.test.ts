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
import * as Computation from "../../computations/Computation.js";
import ComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "../../computations/__tests__/fixtures/ConcurrentReactiveComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "../../computations/__tests__/fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "../../computations/__tests__/fixtures/SynchronousComputationModuleTests.js";
import * as ComputationExpect from "../../computations/__tests__/fixtures/helpers/ComputationExpect.js";
import * as ComputationTest from "../../computations/__tests__/fixtures/helpers/ComputationTest.js";
import ComputationOperatorWithSideEffectsTests from "../../computations/__tests__/fixtures/operators/ComputationOperatorWithSideEffectsTests.js";
import HigherOrderComputationOperatorTests from "../../computations/__tests__/fixtures/operators/HigherOrderComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "../../computations/__tests__/fixtures/operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessAsynchronousComputationOperatorTests from "../../computations/__tests__/fixtures/operators/StatelessAsynchronousComputationOperatorTests.js";
import {
  ComputationModule,
  ComputationOf,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  DeferredComputationWithSideEffects,
  PureDeferredComputation,
  PureSynchronousComputation,
  SynchronousComputationWithSideEffects,
} from "../../computations.js";
import {
  DeferredObservableWithSideEffectsLike,
  DispatcherLikeEvent_completed,
  DispatcherLike_complete,
  ObservableLike,
  PureSynchronousObservableLike,
  SchedulerLike_now,
  StreamableLike_stream,
  SynchronousObservableLike,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStore from "../../events/WritableStore.js";
import { EventListenerLike_notify, StoreLike_value } from "../../events.js";
import {
  Function1,
  Optional,
  Tuple2,
  arrayEquality,
  bindMethod,
  error,
  ignore,
  increment,
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
  scale,
  tuple,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Queue from "../../utils/Queue.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  OverflowBackpressureStrategy,
  QueueableLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as HostScheduler from "../HostScheduler.js";
import {
  __await,
  __bindMethod,
  __constant,
  __do,
  __memo,
  __observe,
  __state,
  __stream,
} from "../Observable/effects.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as Subject from "../Subject.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

const DeferredReactiveObservableOperator = (
  op: Function1<ObservableLike<any>, ObservableLike<unknown>>,
) =>
  describe(
    "DeferredReactiveObservableOperator",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        ComputationExpect.isPureSynchronous,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        ComputationExpect.isSynchronousWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        ComputationExpect.isPureDeferred,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        ComputationExpect.isPureDeferred,
      ),
    ),
  );

const DeferringObservableOperatorTests = (
  op: Function1<ObservableLike<any>, ObservableLike<any>>,
) =>
  describe(
    "DeferringObservableOperatorTests",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        ComputationExpect.isPureDeferred,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        ComputationExpect.isPureDeferred,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
  );

const AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests = (
  op: Function1<ObservableLike<any>, DeferredObservableWithSideEffectsLike>,
) =>
  describe(
    "AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        ComputationExpect.isDeferredWithSideEffects,
      ),
    ),
  );

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

testModule(
  "Observable",
  describe(
    "effects",
    test("calling an effect from outside a computation expression throws", () => {
      expectToThrow(() => __constant(0));
    }),
  ),
  ComputationModuleTests(
    Observable as ComputationModule<Observable.Computation> & {
      fromReadonlyArray: <T>() => Function1<
        ReadonlyArray<T>,
        ComputationOf<Observable.Computation, T>
      >;
      toReadonlyArray: <T>() => Function1<
        ComputationOf<Observable.Computation, T>,
        ReadonlyArray<T>
      >;
    },
    ObservableTypes,
  ),
  DeferredReactiveComputationModuleTests(Observable, ObservableTypes),
  SynchronousComputationModuleTests<Observable.Computation>(
    Observable,
    ObservableTypes,
  ),
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
          Observable.create(observer => {
            for (let i = 0; i < 10; i++) {
              observer[QueueableLike_enqueue](i);
            }
          }),
          Observable.backpressureStrategy(1, ThrowBackpressureStrategy),
          Observable.toReadonlyArrayAsync<number>(scheduler),
        ),
      );
    }),
    testAsync("with a drop latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, DropLatestBackpressureStrategy),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([0]),
      );
    }),
    testAsync("with a drop-oldest latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, DropOldestBackpressureStrategy),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([9]),
      );
    }),
    test(
      "it passes through notifications",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.backpressureStrategy(1, DropLatestBackpressureStrategy),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    StatefulSynchronousComputationOperatorTests(
      ObservableTypes,
      Observable.backpressureStrategy(10, DropLatestBackpressureStrategy),
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
    "computeDeferred",
    testAsync("__stream", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = __bindMethod(stream, QueueableLike_enqueue);

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
          const push = __bindMethod(state, QueueableLike_enqueue);
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
      subject[EventListenerLike_notify](1);

      await pipeAsync(
        Observable.computeDeferred(() => {
          const result = __await(subject);
          __do(bindMethod(subject, DisposableLike_dispose));

          return result;
        }),
        Observable.distinctUntilChanged<number>(),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([1]),
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
    ComputationTest.isPureSynchronous(
      Observable.concat(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ComputationTest.isPureDeferred(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.concat(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        );
      })(),
    ),
    ComputationTest.isSynchronousWithSideEffects(
      Observable.concat(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ComputationTest.isDeferredWithSideEffects(
      Observable.concat(
        Observable.create(ignore),
        Observable.empty({ delay: 1 }),
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
          pipe(Promise.resolve(1), Observable.fromPromise()),
        ),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([1]),
      );
    }),
    ComputationTest.isPureDeferred(Observable.defer(Subject.create)),
  ),
  describe(
    "dispatchTo",
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.dispatchTo(
        Streamable.identity()[StreamableLike_stream](
          VirtualTimeScheduler.create(),
        ),
      ),
    ),
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
          Observable.dispatchTo<number>(stream),
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

      let completed = false;

      pipe(
        stream,
        EventSource.addEventHandler(ev => {
          if (ev === DispatcherLikeEvent_completed) {
            completed = true;
          }
        }),
      );

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray(),
        Observable.dispatchTo<number>(stream),
        Observable.toReadonlyArray(),
      );

      expectTrue(completed);
    }),
    test("when completed successfully from delayed source", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: 1,
      });

      let completed = false;

      pipe(
        stream,
        EventSource.addEventHandler(ev => {
          if (ev === DispatcherLikeEvent_completed) {
            completed = true;
          }
        }),
      );

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.dispatchTo<number>(stream),
        Observable.toReadonlyArray(),
      );

      expectTrue(completed);
    }),
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
    ComputationTest.isPureSynchronous(Observable.empty({ delay: 1 })),
  ),
  describe(
    "enqueue",
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
    /*
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.flatMapAsync(async x => await Promise.resolve(x)),
    ),*/
  ),
  describe(
    "forkMerge",
    testAsync(
      "with pure src and inner runnables with side-effects",
      async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray<number>({ delay: 1 }),
          Observable.forkMerge<number, number>(
            Computation.concatMapIterable(Observable)(_ => [1, 2]),
            Computation.concatMapIterable(Observable)(_ => [3, 4]),
          ),
          Observable.toReadonlyArrayAsync(scheduler),
          expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]),
        );
      },
    ),

    testAsync("src with side-effects is only subscribed to once", async () => {
      using scheduler = HostScheduler.create();
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
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      );

      pipe(sideEffect, expectToHaveBeenCalledTimes(1));
    }),
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
    ComputationTest.isMulticasted(
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
    ComputationTest.isPureSynchronous(
      pipe(
        (function* Generator() {
          throw newInstance(Error);
        })(),
        Observable.fromIterable(),
      ),
    ),
  ),
  describe(
    "fromReadonlyArray",
    ComputationTest.isPureSynchronous(
      pipe([], Observable.fromReadonlyArray({ delay: 1 })),
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
        Observable.forEach<number>(x => {
          store[StoreLike_value] = x;
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }),
    ComputationTest.isMulticasted(
      pipe(WritableStore.create<number>(-1), Observable.fromStore()),
    ),
  ),
  describe(
    "fromValue",
    ComputationTest.isPureSynchronous(
      pipe("a", Observable.fromValue({ delay: 1 })),
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
    "merge",
    test("validate output runtime type", () => {
      const pureSynchronousObservable = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
      );
      const runnableWithSideEffects = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.forEach(ignore),
      );
      const deferred = pipe(
        () => Promise.resolve(1),
        Observable.fromAsyncFactory(),
      );
      const multicast = Subject.create();

      const merged1 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
        deferred,
        multicast,
      );
      ComputationExpect.isDeferredWithSideEffects(merged1);

      const merged2 = Observable.merge(pureSynchronousObservable, multicast);
      ComputationExpect.isPureDeferred(merged2);

      const merged3 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
        deferred,
        Observable.never(),
      );
      ComputationExpect.isDeferredWithSideEffects(merged3);

      const merged4 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
      );
      ComputationExpect.isSynchronousWithSideEffects(merged4);

      const merged7 = Observable.merge(
        pureSynchronousObservable,
        pureSynchronousObservable,
      );
      ComputationExpect.isPureSynchronous(merged7);

      const merged8 = Observable.merge(Subject.create(), Subject.create());
      ComputationExpect.isMulticasted(merged8);
    }),
    test(
      "two arrays",
      pipeLazy(
        Observable.merge(
          pipe(
            [0, 2, 3, 5, 6],
            Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      pipeLazy(
        pipeLazy(
          Observable.merge(
            pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2 })),
            Observable.raise({ delay: 5 }),
          ),
          Observable.run(),
        ),
        expectToThrow,
      ),
    ),
    test(
      "merging merged observable",
      pipeLazy(
        Observable.merge(
          Observable.merge(
            pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
            Observable.concat(
              Observable.empty({ delay: 3 }),
              pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 })),
            ),
          ),
          Observable.merge(
            Observable.concat(
              Observable.empty({ delay: 6 }),
              pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 1 })),
            ),
            Observable.concat(
              Observable.empty({ delay: 9 }),
              pipe([10, 11, 12], Observable.fromReadonlyArray({ delay: 1 })),
            ),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      ),
    ),
    ComputationTest.isPureSynchronous(
      Observable.merge(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ComputationTest.isPureDeferred(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.merge(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        );
      })(),
    ),
    ComputationTest.isSynchronousWithSideEffects(
      Observable.merge(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ComputationTest.isMulticasted(
      Observable.merge(Subject.create(), Subject.create()),
    ),
    ComputationTest.isPureDeferred(
      Observable.merge(Subject.create(), Observable.empty({ delay: 1 })),
    ),
    ComputationTest.isDeferredWithSideEffects(
      Observable.merge(
        Observable.create(ignore),
        Subject.create(),
        Observable.empty({ delay: 1 }),
      ),
    ),
  ),
  describe(
    "mergeAll",
    test(
      "with queueing",
      pipeLazy(
        [
          pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([9, 10], Observable.fromReadonlyArray({ delay: 3 })),
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
          Computation.flatMap(
            Observable,
            "mergeAll",
          )<number, number>(x =>
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
    ComputationTest.isMulticasted(
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

      ComputationExpect.isMulticasted(shared);

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
  describe("never", ComputationTest.isMulticasted(Observable.never())),
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

      expectFalse(disp[DisposableLike_isDisposed]);
      pipe(f, expectToHaveBeenCalledTimes(1));

      vts[VirtualTimeSchedulerLike_run]();

      expectTrue(disp[DisposableLike_isDisposed]);
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

      expectTrue(called);
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
  ),
  describe(
    "subscribeOn",
    StatelessAsynchronousComputationOperatorTests(
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
        Computation.flatMap(
          Observable,
          "switchAll",
        )<number, number>(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "only produce the last observable",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Computation.flatMap(
          Observable,
          "switchAll",
        )<number, number>(x =>
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
        Computation.flatMap(
          Observable,
          "switchAll",
        )<void, number>(_ =>
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
        Computation.flatMap(
          Observable,
          "switchAll",
        )<number, number>(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())),
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
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.takeUntil(
          pipe(
            [1],
            Observable.fromReadonlyArray({ delay: 3, delayStart: true }),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.takeUntil(Observable.empty({ delay: 1 })),
    ),
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.takeUntil(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.takeUntil(
        pipe(
          () => Promise.resolve(1),
          Observable.fromAsyncFactory(),
          Observable.forEach(ignore),
        ),
      ),
    ),
    DeferringObservableOperatorTests(Observable.takeUntil(Subject.create())),
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
        Observable.takeFirst({ count: 100 }),
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
    DeferredReactiveObservableOperator(Observable.throttle(1)),
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
        EventSource.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2]));
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
    DeferredReactiveObservableOperator(Observable.withCurrentTime(returns)),
  ),
  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.withLatestFrom(
          pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          tuple<number, number>,
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
    test(
      "when latest produces no values",
      pipeLazy(
        [0],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.withLatestFrom(
          Observable.empty<number>({ delay: 0 }),
          returns(1),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test("when latest throws", () => {
      const error = newInstance(Error);

      pipe(
        pipeLazy(
          [0],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.withLatestFrom(
            Observable.raise<number>({ raise: returns(error) }),
            returns(1),
          ),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),
    DeferredReactiveObservableOperator(
      Observable.withLatestFrom(Observable.empty({ delay: 1 }), returns),
    ),
    ComputationOperatorWithSideEffectsTests(
      ObservableTypes,
      Observable.withLatestFrom(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        returns,
      ),
    ),
    DeferringObservableOperatorTests(
      Observable.withLatestFrom(Subject.create(), returns),
    ),
  ),
  describe(
    "zipLatest",
    test(
      "zip two delayed observable",
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
    ComputationTest.isPureSynchronous(
      Observable.zipLatest(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ComputationTest.isPureDeferred(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.zipLatest(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        );
      })(),
    ),
    ComputationTest.isSynchronousWithSideEffects(
      Observable.zipLatest(
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    ComputationTest.isPureDeferred(
      Observable.zipLatest(Observable.empty({ delay: 1 }), Subject.create()),
    ),
    ComputationTest.isDeferredWithSideEffects(
      Observable.zipLatest(
        pipe(async () => {
          throw new Error();
        }, Observable.fromAsyncFactory()),
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
  ),
);

((_: Observable.Signature) => {})(Observable);
