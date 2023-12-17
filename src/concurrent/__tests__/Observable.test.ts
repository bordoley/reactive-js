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
import * as Enumerable from "../../collections/Enumerable.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { PureComputationModule, keepType, mapTo } from "../../computations.js";
import PureComputationModuleTests from "../../computations/__tests__/fixtures/PureComputationModuleTests.js";
import {
  DeferredObservableLike,
  DispatcherLikeEvent_completed,
  DispatcherLike_complete,
  FlowableLike_flow,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  PauseableLike_pause,
  PauseableLike_resume,
  PureRunnableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { StoreLike_value } from "../../events.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStotre from "../../events/WritableStore.js";
import {
  Optional,
  Tuple2,
  alwaysTrue,
  arrayEquality,
  bind,
  error,
  ignore,
  increment,
  incrementBy,
  invoke,
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
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
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
import * as Streamable from "../Streamable.js";
import * as Subject from "../Subject.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Observable",
  PureComputationModuleTests(
    Observable as PureComputationModule<Observable.PureRunnableComputation>,
    Observable.toReadonlyArray,
  ),
  describe(
    "backpressureStrategy",
    testAsync(
      "with a throw backpressure strategy",
      Disposable.usingAsyncLazy(HostScheduler.create)(async scheduler => {
        await expectToThrowAsync(
          pipeLazyAsync(
            Observable.create(observer => {
              for (let i = 0; i < 10; i++) {
                observer[QueueableLike_enqueue](i);
              }
            }),
            Observable.backpressureStrategy(1, "throw"),
            Observable.toReadonlyArrayAsync<number>(scheduler),
          ),
        );
      }),
    ),
    testAsync(
      "with a drop latest backpressure strategy",
      pipeLazyAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, "drop-latest"),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([0]),
      ),
    ),
    testAsync(
      "with a drop-oldest latest backpressure strategy",
      pipeLazyAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, "drop-oldest"),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([9]),
      ),
    ),
    test(
      "it passes through notifications",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.backpressureStrategy(1, "drop-latest"),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),
  describe(
    "catchError",
    test("when the source throws", () => {
      const e1 = "e1";
      let result: Optional<string> = none;
      pipe(
        Observable.throws({ raise: () => e1 }),
        Observable.catchError<number>((e: Error) => {
          result = e.message;
        }),
        Observable.toReadonlyArray(),
      );

      pipe(result, expectEquals<Optional<string>>(e1));
    }),
    test("when the error handler throws an error", () => {
      const e1 = "e1";
      const e2 = "e2";

      let result: Optional<unknown> = none;

      pipe(
        Observable.throws({ raise: () => e1 }),
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
    test("when the error handler throws an error from a delayed source", () => {
      const e1 = "e1";
      const e2 = "e2";

      let result: Optional<unknown> = none;

      pipe(
        Observable.empty({ delay: 1 }),
        Observable.concatWith(Observable.throws({ raise: () => e1 })),
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
      "combineLatest",
      pipeLazy(
        Observable.combineLatest<number, number>(
          pipe(
            Enumerable.generate(incrementBy(2), returns(1)),
            Observable.fromEnumerable({ delay: 2 }),
            Observable.takeFirst({ count: 3 }),
          ),
          pipe(
            Enumerable.generate(incrementBy(2), returns(0)),
            Observable.fromEnumerable({ delay: 3 }),
            Observable.takeFirst({ count: 2 }),
          ),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
  ),
  describe(
    "computeDeferred",
    testAsync("__stream", async () => {
      const result = await pipe(
        Observable.computeDeferred(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = __bindMethod(stream, QueueableLike_enqueue);

          const result = __observe(stream) ?? 0;
          __do(push, result + 1);

          return result;
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync<readonly number[]>(),
      );

      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
    testAsync("__state", async () => {
      const result = await pipe(
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
        Observable.lastAsync<readonly number[]>(),
      );

      pipe(result ?? [], expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
    }),
  ),
  describe(
    "computeRunnable",
    test("batch mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeRunnable(() => {
          const fromValueWithDelay = __constant(
            (delay: number, value: number): RunnableLike<number> =>
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
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.run(),
      );

      pipe(result, expectArrayEquals([22]));
    }),
    test("combined-latest mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeRunnable(
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
        keepType<
          Observable.RunnableWithSideEffectsComputation,
          Optional<number>,
          number
        >(Observable, isSome),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.run(),
      );

      pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
    }),
    test("conditional hooks", () => {
      const result: number[] = [];
      pipe(
        Observable.computeRunnable(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Observable.fromReadonlyArray({ delay: 5 }),
            ),
          );
          const src2 = __constant(
            pipe(
              Enumerable.generate(increment, returns(100)),
              Observable.fromEnumerable({ delay: 2 }),
            ),
          );

          const v = __await(src);

          if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
          }
          return v;
        }),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.run(),
      );

      pipe(
        result,
        expectArrayEquals([
          101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5,
        ]),
      );
    }),
  ),
  describe(
    "concat",
    test(
      "concats the input containers in order",
      pipeLazy(
        Observable.concat(
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
          pipe([4, 5, 6], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
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
    "concatAll",
    test(
      "concating pure Runnables",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 2 })),
        ],
        Observable.fromReadonlyArray<PureRunnableLike<number>>(),
        Observable.concatAll<number>(),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
  describe(
    "concatMany",
    test(
      "concating an empty array returns the empty observable",
      pipeLazy(Observable.concatMany([]), expectEquals(Observable.empty())),
    ),
  ),
  describe(
    "concatMap",
    testAsync(
      "maps each value to a container and flattens",
      pipeLazyAsync(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.concatMap(
          pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
        ),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.concatMap(
          pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          {
            innerType: Observable.PureRunnableType,
          },
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "concatWith",
    test(
      "concats two containers together",
      pipeLazy(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.concatWith(pipe([2, 3, 4], Observable.fromReadonlyArray())),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
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
  ),
  describe(
    "dispatchTo",
    test(
      "when backpressure exception is thrown",
      Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
          backpressureStrategy: "throw",
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
    ),
    test(
      "when completed successfully",
      Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
          backpressureStrategy: "overflow",
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
    ),
    test(
      "when completed successfully from delayed source",
      Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
          backpressureStrategy: "overflow",
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
  ),
  describe(
    "empty",
    test("with delay", () => {
      let disposedTime = -1;
      const scheduler = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 5 }),
        Observable.subscribe(scheduler),
        Disposable.onComplete(() => {
          disposedTime = scheduler[SchedulerLike_now];
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(disposedTime, expectEquals(5));
    }),
  ),
  describe(
    "endWith",
    test(
      "appends the additional values to the end of the container",
      pipeLazy(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.endWith(2, 3, 4),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
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
        Observable.exhaust<number>({
          innerType: Observable.PureRunnableType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),
  describe(
    "exhaustMap",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.exhaustMap<number, number>(
          _ =>
            pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          {
            innerType: Observable.PureRunnableType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),
  describe(
    "firstAsync",
    testAsync("empty source", async () => {
      const result = await pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(),
      );
      pipe(result, expectIsNone);
    }),
    testAsync("it returns the first value", async () => {
      const result = await pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(1));
    }),
  ),
  describe(
    "flatMapAsync",
    testAsync(
      "mapping a number to a promise",
      pipeLazyAsync(
        1,
        Observable.fromValue(),
        Observable.flatMapAsync(async x => await Promise.resolve(x)),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1]),
      ),
    ),
  ),
  describe(
    "flatMapIterable",
    test(
      "maps the incoming value with the inline generator function",
      pipeLazy(
        [none, none],
        Observable.fromReadonlyArray(),
        Observable.flatMapIterable(function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "maps the incoming value with the inline generator function, with delayed source",
      pipeLazy(
        [none, none],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.flatMapIterable(function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "flow",
    test("a source with delay", () => {
      const scheduler = VirtualTimeScheduler.create();

      const generateObservable = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.flow(),
        invoke(FlowableLike_flow, scheduler),
      );

      generateObservable[PauseableLike_resume](),
        scheduler[SchedulerLike_schedule](
          () => generateObservable[PauseableLike_pause](),
          {
            delay: 2,
          },
        );

      scheduler[SchedulerLike_schedule](
        () => generateObservable[PauseableLike_resume](),
        {
          delay: 4,
        },
      );

      scheduler[SchedulerLike_schedule](
        () => generateObservable[DisposableLike_dispose](),
        {
          delay: 6,
        },
      );

      const f = mockFn();
      const subscription = pipe(
        generateObservable,
        Observable.forEach((x: number) => {
          f(scheduler[SchedulerLike_now], x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(
        f.calls as [][],
        expectArrayEquals(
          [
            [1, 0],
            [2, 1],
            [5, 2],
          ],
          { valuesEquality: arrayEquality() },
        ),
      );

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
    test("flow a generating source", () => {
      const scheduler = VirtualTimeScheduler.create();

      const flowed = pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.flow(),
        invoke(FlowableLike_flow, scheduler),
        Disposable.addTo(scheduler),
      );

      scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
      });

      const f = mockFn();
      const subscription = pipe(
        flowed,
        Observable.withCurrentTime<unknown, Tuple2<number, any>>(tuple),
        Observable.forEach(([time, v]: Tuple2<number, any>) => {
          f(time, v);
        }),
        Observable.subscribe(scheduler),
        Disposable.addTo(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(
        f.calls as [][],
        expectArrayEquals(
          [
            [2, 0],
            [2, 1],
            [2, 2],
          ],
          { valuesEquality: arrayEquality() },
        ),
      );

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
  ),
  describe(
    "forEach",
    test("invokes the effect for each notified value", () => {
      const result: number[] = [];

      pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forEach((x: number) => {
          result.push(x + 10);
        }),
        Observable.run(),
      ),
        pipe(result, expectArrayEquals([11, 12, 13]));
    }),
    test("when the effect function throws", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray({ delay: 3 }),
          Observable.forEach(_ => {
            throw err;
          }),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  ),
  describe(
    "forkMerge",
    test("with pure src and inner runnables with side-effects", () => {
      const obs: RunnableWithSideEffectsLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.forkMerge<
          number,
          RunnableLike<number>,
          RunnableWithSideEffectsLike<number>
        >(
          Observable.flatMapIterable(_ => [1, 2]),
          Observable.flatMapIterable(_ => [3, 4]),
        ),
      );

      pipe(
        obs,
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]),
      );

      expectTrue(obs[ObservableLike_isDeferred]);
      expectTrue(obs[ObservableLike_isRunnable]);
      expectFalse(obs[ObservableLike_isPure]);
    }),
    test("runnable with effects src and pure inner runnables", () => {
      const obs: RunnableWithSideEffectsLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forEach(ignore),
        Observable.forkMerge(
          mapTo<Observable.RunnableWithSideEffectsComputation, number>(
            Observable,
            1,
          ),
          mapTo<Observable.RunnableWithSideEffectsComputation, number>(
            Observable,
            2,
          ),
        ),
      );

      pipe(
        obs,
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2]),
      );

      expectTrue(obs[ObservableLike_isDeferred]);
      expectTrue(obs[ObservableLike_isRunnable]);
      expectFalse(obs[ObservableLike_isPure]);
    }),
    test("with pure runnable src and pure inner runnables", () => {
      const obs: PureRunnableLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forkMerge(
          mapTo<Observable.PureRunnableComputation, number>(Observable, 1),
          mapTo<Observable.PureRunnableComputation, number>(Observable, 2),
        ),
      );

      pipe(
        obs,
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2]),
      );

      expectTrue(obs[ObservableLike_isDeferred]);
      expectTrue(obs[ObservableLike_isRunnable]);
      expectTrue(obs[ObservableLike_isPure]);
    }),
    test("with multicast src and pure inner transforms", () => {
      const forked = pipe(
        Subject.create(),
        Observable.forkMerge(
          mapTo<Observable.MulticastObservableComputation, number>(
            Observable,
            1,
          ),
          mapTo<Observable.MulticastObservableComputation, number>(
            Observable,
            2,
          ),
        ),
      );

      expectFalse(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectTrue(forked[ObservableLike_isPure]);
    }),
    test("with multicast src and deferred inner transforms", () => {
      const forked = pipe(
        Subject.create(),
        Observable.forkMerge<
          number,
          MulticastObservableLike,
          ObservableLike<number>
        >(
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          mapTo<Observable.MulticastObservableComputation, number>(
            Observable,
            2,
          ),
        ),
      );

      expectTrue(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectFalse(forked[ObservableLike_isPure]);
    }),
    test("with runnable pure src and deferred transforms", () => {
      const forked = pipe(
        [],
        Observable.fromReadonlyArray<number>(),
        x => x,
        Observable.forkMerge<
          number,
          PureRunnableLike<number>,
          DeferredObservableLike<number>
        >(
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          mapTo<Observable.PureRunnableComputation, number>(Observable, 2),
        ),
      );

      expectTrue(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectFalse(forked[ObservableLike_isPure]);
    }),
    testAsync("src with side-effects is only subscribed to once", async () => {
      const sideEffect = mockFn();
      const src = pipe(
        0,
        Observable.fromValue(),
        Observable.forEach(sideEffect),
      );

      await pipeAsync(
        src,
        Observable.forkMerge(
          Observable.flatMapIterable(_ => [1, 2, 3]),
          Observable.flatMapIterable(_ => [4, 5, 6]),
        ),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      );

      pipe(sideEffect, expectToHaveBeenCalledTimes(1));
    }),
  ),
  describe(
    "fromAsyncFactory",
    testAsync("when promise resolves", async () => {
      const result = await pipe(
        async () => {
          await Promise.resolve(1);
          return 2;
        },
        Observable.fromAsyncFactory(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals(2 as Optional<number>));
    }),

    testAsync("when promise fails with an exception", async () => {
      await pipe(
        async () => {
          await Promise.resolve(1);
          raise();
        },
        Observable.fromAsyncFactory(),
        Observable.lastAsync(),
        expectPromiseToThrow,
      );
    }),
    testAsync("when factory throws an exception", async () => {
      await pipe(
        async () => {
          raise();
        },
        Observable.fromAsyncFactory(),
        Observable.lastAsync(),
        expectPromiseToThrow,
      );
    }),
  ),
  describe(
    "fromAsyncIterable",
    testAsync(
      "infinite immediately resolving iterable",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike) => {
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
        },
      ),
    ),
    testAsync(
      "iterable that completes",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike) => {
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
        },
      ),
    ),

    testAsync(
      "iterable that throws",
      pipeLazy(
        Disposable.usingAsyncLazy(HostScheduler.create)(
          async (scheduler: SchedulerLike) => {
            const e = error();

            const result = await pipe(
              (async function* foo() {
                throw e;
              })(),
              Observable.fromAsyncIterable(),
              Observable.lastAsync(scheduler, { capacity: 1 }),
            );

            pipe(result, expectEquals(e as unknown));
          },
        ),
        expectToThrowAsync,
      ),
    ),
  ),
  describe(
    "fromIterable",
    test("fromIterable with delay", () => {
      const result: number[] = [];
      pipe(
        [9, 9, 9, 9],
        Observable.fromIterable({ delay: 2 }),
        Observable.withCurrentTime(t => t),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.run(),
      );
      pipe(result, expectArrayEquals([0, 2, 4, 6]));
    }),
  ),
  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(
        promise,
        Observable.fromPromise(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(1));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(promise, Observable.fromPromise(), Observable.lastAsync()),
        expectPromiseToThrow,
      );
    }),
  ),
  describe(
    "fromStore",
    test("it publishes the current value and all subsequent values", () => {
      const store = WritableStotre.create<number>(-1);
      const scheduler = VirtualTimeScheduler.create();

      const result: number[] = [];

      pipe(
        store,
        Observable.fromStore(),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 3 }),
        Observable.takeFirst({ count: 3 }),
        Observable.forEach<number>(x => {
          store[StoreLike_value] = x;
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }),
  ),
  describe(
    "ignoreElements",
    test(
      "ignores all elements",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.ignoreElements<number>(),
        Observable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
  ),
  describe(
    "lastAsync",
    testAsync("empty source", async () => {
      const result = await pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(),
      );
      pipe(result, expectIsNone);
    }),
    testAsync("it returns the last value", async () => {
      const result = await pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(3));
    }),
  ),
  describe(
    "merge",
    test("validate output runtime type", () => {
      const pureEnumerable = pipe([1, 2, 3], Observable.fromReadonlyArray());
      const enumerableWithSideEffects = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forEach(ignore),
      );
      const pureRunnable = pipe(
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
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
        runnableWithSideEffects,
        deferred,
        multicast,
      );

      pipe(merged1[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged1[ObservableLike_isPure], expectEquals(false));
      pipe(merged1[ObservableLike_isRunnable], expectEquals(false));

      const merged2 = Observable.merge(pureEnumerable, pureRunnable, multicast);

      pipe(merged2[ObservableLike_isDeferred], expectEquals(false));
      pipe(merged2[ObservableLike_isPure], expectEquals(true));
      pipe(merged2[ObservableLike_isRunnable], expectEquals(false));

      const merged3 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
        runnableWithSideEffects,
        deferred,
        Observable.never(),
      );

      pipe(merged3[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged3[ObservableLike_isPure], expectEquals(false));
      pipe(merged3[ObservableLike_isRunnable], expectEquals(false));

      const merged4 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
        runnableWithSideEffects,
      );

      pipe(merged4[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged4[ObservableLike_isPure], expectEquals(false));
      pipe(merged4[ObservableLike_isRunnable], expectEquals(true));

      const merged5 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
      );

      pipe(merged5[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged5[ObservableLike_isPure], expectEquals(false));
      pipe(merged5[ObservableLike_isRunnable], expectEquals(true));

      const merged6 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
      );

      pipe(merged6[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged6[ObservableLike_isPure], expectEquals(false));
      pipe(merged6[ObservableLike_isRunnable], expectEquals(true));

      const merged7 = Observable.merge(pureEnumerable, pureEnumerable);

      pipe(merged7[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged7[ObservableLike_isPure], expectEquals(true));
      pipe(merged7[ObservableLike_isRunnable], expectEquals(true));
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
            Observable.throws({ delay: 5 }),
          ),
          Observable.run(),
        ),
        expectToThrow,
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
          innerType: Observable.PureRunnableType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]),
      ),
    ),
  ),
  describe(
    "mergeMap",
    testAsync(
      "without delay, merge all observables as they are produced",
      pipeLazyAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.mergeMap<number, number>(x =>
          pipe([x, x, x], Observable.fromReadonlyArray<number>()),
        ),
        Observable.toReadonlyArrayAsync(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
    test(
      "without delay, merge all observables as they are produced",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.mergeMap<number, number>(
          x => pipe([x, x, x], Observable.fromReadonlyArray<number>()),
          {
            innerType: Observable.PureRunnableType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
  ),
  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = VirtualTimeScheduler.create();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(scheduler),
      );

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test(
      "when callback function throws",
      Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
        const subscription = pipe(
          [1],
          Observable.fromReadonlyArray(),
          Observable.onSubscribe(raise),
          Observable.subscribe(vts),
        );

        pipe(subscription[DisposableLike_error], expectIsSome);
      }),
    ),

    test("when callback returns a disposable", () => {
      const scheduler = VirtualTimeScheduler.create();

      const disp = Disposable.create();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(scheduler),
      );

      expectFalse(disp[DisposableLike_isDisposed]);
      pipe(f, expectToHaveBeenCalledTimes(1));

      scheduler[VirtualTimeSchedulerLike_run]();

      expectTrue(disp[DisposableLike_isDisposed]);
      expectIsNone(disp[DisposableLike_error]);
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback only performs sideeffects", () => {
      const scheduler = VirtualTimeScheduler.create();

      let called = false;

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(() => {
          called = true;
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      expectTrue(called);
    }),
  ),
  describe(
    "reduce",
    test(
      "summing all values from delayed source",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 3 }),
        Observable.reduce<number, number>(
          (acc, next) => acc + next,
          returns(0),
        ),
        expectEquals(6),
      ),
    ),
  ),
  describe(
    "repeat",
    test(
      "when repeating forever.",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.repeat<number>(),
        Observable.takeFirst<number>({ count: 8 }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]),
      ),
    ),
    test(
      "when repeating a finite amount of times.",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.repeat<number>(3),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
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
      "when repeating with a predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.repeat<number>(lessThan(1)),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
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
    test("when the repeat function throws", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray(),
          Observable.repeat(_ => {
            throw err;
          }),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
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
    "retry",
    test(
      "retrys the container on an exception",
      pipeLazy(
        Observable.concat(
          pipe(
            Enumerable.generate(increment, returns(0)),
            Observable.fromEnumerable(),
            Observable.takeFirst({ count: 3 }),
          ),
          Observable.throws(),
        ),
        Observable.retry(alwaysTrue),
        Observable.takeFirst<number>({ count: 6 }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "retrys with the default predicate",
      pipeLazy(
        Observable.concat(
          pipe(
            Enumerable.generate(increment, returns(0)),
            Observable.fromEnumerable(),
            Observable.takeFirst({ count: 3 }),
          ),
          Observable.throws(),
        ),
        Observable.retry(),
        Observable.takeFirst<number>({ count: 6 }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "share",
    test("shared observable zipped with itself", () => {
      const scheduler = VirtualTimeScheduler.create();
      const shared = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.forEach(ignore),
        Observable.share(scheduler, { replay: 1 }),
      );

      let result: number[] = [];
      pipe(
        Observable.zipLatest(shared, shared),
        Observable.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),

  describe(
    "startWith",
    test(
      "appends the additional values to the start of the container",
      pipeLazy(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.startWith(2, 3, 4),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4, 0, 1]),
      ),
    ),
  ),
  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        Observable.empty(),
        Observable.switchAll<number>({
          innerType: Observable.PureRunnableType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([] as readonly number[]),
      ),
    ),
  ),
  describe(
    "switchMap",
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.switchMap<number, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray()),
          {
            innerType: Observable.PureRunnableType,
          },
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
        Observable.switchMap<number, number>(
          x =>
            pipe(
              [x, x, x],
              Observable.fromReadonlyArray<number>({
                delay: 1,
                delayStart: true,
              }),
            ),
          {
            innerType: Observable.PureRunnableType,
          },
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
        Observable.switchMap<void, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          {
            innerType: Observable.PureRunnableType,
          },
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

        Observable.switchMap<number, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray()),
          {
            innerType: Observable.PureRunnableType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
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
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        Enumerable.generate(increment, returns<number>(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.takeFirst({ count: 100 }),
        Observable.throttle<number>(50, { mode: "first" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 49, 99]),
      ),
    ),

    test(
      "last",
      pipeLazy(
        Enumerable.generate(increment, returns<number>(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(50, { mode: "last" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),
    test(
      "interval",
      pipeLazy(
        Enumerable.generate(increment, returns<number>(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(75, { mode: "interval" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),
  ),
  describe(
    "takeLast",
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray(),
        Observable.takeLast(),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([5]),
      ),
    ),
    test(
      "when count is 0",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray(),

        // Some implementations special case this
        Observable.takeLast({ count: 0 }),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test(
      "when count is less than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray(),
        Observable.takeLast({ count: 3 }),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([3, 4, 5]),
      ),
    ),
    test(
      "when count is greater than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray(),
        Observable.takeLast({ count: 10 }),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray(),
        Observable.takeLast(),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([5]),
      ),
    ),
  ),
  describe(
    "throwIfEmpty",
    test("when source is empty", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray(),
          Observable.throwIfEmpty(() => error),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(error),
      );
    }),
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
    test("when factory throw", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray(),
          Observable.throwIfEmpty(() => {
            throw error;
          }),
          Observable.toReadonlyArray(),
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
      "when source is not empty",
      pipeLazy(
        [1],
        Observable.fromReadonlyArray(),
        Observable.throwIfEmpty(returns(none)),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1]),
      ),
    ),
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
      const scheduler = VirtualTimeScheduler.create();
      pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toEventSource(scheduler),
        EventSource.addEventHandler(bind(Array.prototype.push, result)),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2]));
    }),
  ),
  describe(
    "toReadonlyArrayAsync",
    testAsync(
      "with pure delayed source",
      pipeLazyAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 3 }),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
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
        Observable.withLatestFrom(Observable.empty<number>(), returns(1)),
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
            Observable.throws<number>({ raise: returns(error) }),
            returns(1),
          ),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),
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
  ),
);

((_: Observable.Signature) => {})(Observable);
