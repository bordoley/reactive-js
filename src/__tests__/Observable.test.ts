import * as Containers from "../Containers.js";
import * as Disposable from "../Disposable.js";
import * as Enumerable from "../Enumerable.js";
import * as EventSource from "../EventSource.js";
import * as IndexedCollection from "../IndexedCollection.js";
import * as Observable from "../Observable.js";
import {
  __bindMethod,
  __do,
  __observe,
  __stream,
} from "../Observable/effects.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
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
} from "../__internal__/testing.js";
import {
  Optional,
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  bind,
  bindMethod,
  compose,
  greaterThan,
  identity,
  ignore,
  increment,
  incrementBy,
  isEven,
  lessThan,
  newInstance,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
} from "../functions.js";
import {
  DeferredObservableBaseLike,
  DispatcherLikeEvent_completed,
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumerableLike,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  MulticastObservableLike,
  ObservableBaseLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  PauseableLike_pause,
  PauseableLike_resume,
  PublisherLike_observerCount,
  QueueableLike_enqueue,
  ReactiveContainerModule,
  ReplayObservableLike_buffer,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_notify,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../types.js";
import ReactiveContainerModuleTests from "./fixtures/ReactiveContainerModuleTests.js";

testModule(
  "Observable",
  ...ReactiveContainerModuleTests(
    Observable as ReactiveContainerModule<Observable.EnumerableContainer>,
    () => Disposable.disposed,
    <T>() => ReadonlyArray.toObservable<T>(),
    <T>() => ReadonlyArray.fromEnumerable<T>(),
  ),
  describe(
    "backpressureStrategy",
    testAsync(
      "with a throw backpressure strategy",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async scheduler => {
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
        },
      ),
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
        Observable.throws({ raise: () => e1 }),
        Observable.delay(1),
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
        Observable.combineLatest(
          pipe(
            Observable.generate(incrementBy(2), returns(1)),
            Observable.delay(2),
            Observable.takeFirst({ count: 3 }),
          ),
          pipe(
            Observable.generate(incrementBy(2), returns(0)),
            Observable.delay(3),
            Observable.takeFirst({ count: 2 }),
          ),
        ),
        Observable.toReadonlyArray<readonly [number, number]>(),
        expectArrayEquals(
          [[3, 2] as readonly [number, number], [5, 2], [5, 4], [7, 4]],
          arrayEquality(),
        ),
      ),
    ),
  ),
  describe(
    "compute",
    testAsync("__stream", async () => {
      const result = await pipe(
        Observable.compute(() => {
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
          pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1)),
          pipe([4, 5, 6], Observable.fromReadonlyArray(), Observable.delay(4)),
        ),
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
        Observable.delay(0),
        Observable.concatMap(
          pipeLazy(
            [1, 2, 3],
            Observable.fromReadonlyArray(),
            Observable.delay(2),
          ),
        ),
        Observable.toReadonlyArrayAsync<number>(),
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
    "contains",
    describe(
      "strict equality comparator",
      test(
        "source is empty",
        pipeLazy(
          [],
          Observable.fromReadonlyArray(),
          Observable.contains(1),
          expectEquals(false),
        ),
      ),
      test(
        "source contains value",
        pipeLazy(
          [0, 1, 2],
          Observable.fromReadonlyArray(),
          Observable.contains(1),
          expectEquals(true),
        ),
      ),
      test(
        "source does not contain value",
        pipeLazy(
          [2, 3, 4],
          Observable.fromReadonlyArray(),
          Observable.contains(1),
          expectEquals(false),
        ),
      ),
    ),
    describe(
      "custom equality comparator",
      test(
        "source is empty",
        pipeLazy(
          [],
          Observable.fromReadonlyArray(),
          Observable.contains(1, { equality: (a, b) => a === b }),
          expectEquals(false),
        ),
      ),
      test(
        "source contains value",
        pipeLazy(
          [0, 1, 2],
          Observable.fromReadonlyArray(),
          Observable.contains(1, { equality: (a, b) => a === b }),
          expectEquals(true),
        ),
      ),
      test(
        "source does not contain value",
        pipeLazy(
          [2, 3, 4],
          Observable.fromReadonlyArray(),
          Observable.contains(1, { equality: (a, b) => a === b }),
          expectEquals(false),
        ),
      ),
    ),
  ),
  describe(
    "createPublisher",
    test("with replay", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const publisher = Observable.createPublisher<number>({ replay: 2 });
      pipe(
        [1, 2, 3, 4],
        ReadonlyArray.forEach(bindMethod(publisher, SinkLike_notify)),
      );
      publisher[DisposableLike_dispose]();

      const result: number[] = [];
      pipe(
        publisher,
        Observable.forEach(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 4]));
    }),

    test("with multiple observers", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const publisher = Observable.createPublisher();
      pipe(publisher[PublisherLike_observerCount], expectEquals(0));
      const sub1 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[PublisherLike_observerCount], expectEquals(1));
      const sub2 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[PublisherLike_observerCount], expectEquals(2));
      const sub3 = pipe(
        Observable.create(observer => {
          publisher[ObservableLike_observe](observer);
          publisher[ObservableLike_observe](observer);
        }),
        Observable.subscribe(scheduler),
      );
      pipe(publisher[PublisherLike_observerCount], expectEquals(3));
      sub3[DisposableLike_dispose]();
      pipe(publisher[PublisherLike_observerCount], expectEquals(2));
      sub1[DisposableLike_dispose]();
      pipe(publisher[PublisherLike_observerCount], expectEquals(1));
      sub2[DisposableLike_dispose]();
      pipe(publisher[PublisherLike_observerCount], expectEquals(0));
    }),
    test("notifying a disposed publisher", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const publisher = Observable.createPublisher<number>();

      const result: number[] = [];

      const publisherSubscription = pipe(
        publisher,
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      const generateSubscription = pipe(
        Observable.generate(increment, returns(-1)),
        Observable.delay(3, { delayStart: true }),
        Observable.forEach(bindMethod(publisher, SinkLike_notify)),
        Observable.subscribe(scheduler),
      );

      scheduler[SchedulerLike_schedule](
        () => {
          publisher[DisposableLike_dispose]();
        },
        { delay: 7 },
      );

      scheduler[SchedulerLike_schedule](
        () => {
          generateSubscription[DisposableLike_dispose]();
        },
        { delay: 10 },
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      expectTrue(publisherSubscription[DisposableLike_isDisposed]);

      pipe(result, expectArrayEquals([0, 1]));
    }),
    test("subscribing to a publisher disposed with an error", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const publisher = Observable.createPublisher<number>();

      const e = new Error();
      publisher[DisposableLike_dispose](e);

      const subscription = pipe(publisher, Observable.subscribe(scheduler));

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
    test("notifing an observer that throws an exception on overflow", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const publisher = Observable.createPublisher<number>();

      const subscription = pipe(
        publisher,
        Observable.subscribe(scheduler, {
          backpressureStrategy: "throw",
          capacity: 1,
        }),
      );

      publisher[SinkLike_notify](1);
      publisher[SinkLike_notify](2);
      publisher[SinkLike_notify](3);

      expectIsSome(subscription[DisposableLike_error]);
    }),
  ),
  describe(
    "decodeWithCharset",
    test("decoding ascii from runnable", () => {
      const str = "abcdefghijklmnsopqrstuvwxyz";

      pipe(
        [str],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
        Observable.encodeUtf8(),
        Observable.decodeWithCharset(),
        Observable.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
    test("decoding ascii from enumerable", () => {
      const str = "abcdefghijklmnsopqrstuvwxyz";

      pipe(
        [str],
        Observable.fromReadonlyArray(),
        Observable.encodeUtf8(),
        Observable.decodeWithCharset(),
        Observable.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
    test("decoding multi-byte code points", () => {
      const str = String.fromCodePoint(8364);
      pipe(
        [str],
        Observable.fromReadonlyArray(),
        Observable.encodeUtf8(),
        Observable.decodeWithCharset(),
        Observable.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
  ),
  describe(
    "dispatchTo",
    test("when backpressure exception is thrown", () => {
      const vts = Scheduler.createVirtualTimeScheduler();
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
    test("when completed successfully", () => {
      const vts = Scheduler.createVirtualTimeScheduler();
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
    test("when completed successfully from delayed source", () => {
      const vts = Scheduler.createVirtualTimeScheduler();
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
        Observable.delay(1),
        Observable.dispatchTo<number>(stream),
        Observable.toReadonlyArray(),
      );

      expectTrue(completed);
    }),
  ),
  describe(
    "empty",
    test("returns an empty enumerator", () => {
      const enumerator = pipe(Observable.empty(), Observable.enumerate());

      expectFalse(enumerator[EnumeratorLike_move]());
      expectTrue(enumerator[DisposableLike_isDisposed]);
    }),
    test("with delay", () => {
      let disposedTime = -1;
      const scheduler = Scheduler.createVirtualTimeScheduler();
      pipe(
        Observable.empty(),
        Observable.delay(5, { delayStart: true }),
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
    "enqueue",
    test("when backpressure exception is thrown", () => {
      const vts = Scheduler.createVirtualTimeScheduler();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "throw",
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
      const vts = Scheduler.createVirtualTimeScheduler();
      const stream = Streamable.identity<number>()[StreamableLike_stream](vts, {
        backpressureStrategy: "overflow",
        capacity: MAX_SAFE_INTEGER,
        replay: MAX_SAFE_INTEGER,
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
        Observable.enqueue<number>(stream),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        stream[ReplayObservableLike_buffer],
        IndexedCollection.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 2, 2, 2, 3, 3, 3, 4]),
      );

      expectFalse(completed);
    }),
  ),
  describe(
    "enumerate",
    test(
      "with higher order observable and no delay",
      pipeLazy(
        Observable.generate<EnumerableLike<number>>(
          _ => pipe(1, Observable.fromValue()),
          returns(Observable.empty<number>()),
        ),
        Observable.takeFirst<EnumerableLike<number>>({ count: 100 }),
        Enumerable.concatAll(),
        Observable.takeFirst({ count: 10 }),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      ),
    ),
    test("calling move on a completed Enumerator", () => {
      const enumerator = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.enumerate(),
      );

      while (enumerator[EnumeratorLike_move]()) {}

      expectFalse(enumerator[EnumeratorLike_hasCurrent]);
      expectTrue(enumerator[DisposableLike_isDisposed]);
      expectIsNone(enumerator[DisposableLike_error]);

      expectFalse(enumerator[EnumeratorLike_move]());
    }),
  ),
  describe(
    "everySatisfy",
    test(
      "source is empty",
      pipeLazy(
        [],
        Observable.fromReadonlyArray(),
        Observable.everySatisfy(alwaysFalse),
        expectEquals(true),
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.everySatisfy(alwaysTrue),
        expectEquals(true),
      ),
    ),
    test(
      "delayed source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
        Observable.everySatisfy(alwaysTrue),
        expectEquals(true),
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.everySatisfy(alwaysFalse),
        expectEquals(false),
      ),
    ),
    test(
      "delayed source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
        Observable.everySatisfy(alwaysFalse),
        expectEquals(false),
      ),
    ),
  ),
  describe(
    "first",
    test(
      "returns the first item in the src",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.first(),
        expectEquals<Optional<number>>(1),
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
        Observable.fromReadonlyArray(),
        Observable.delay(2),
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
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const generateObservable = pipe(
        Observable.generate(increment, returns(-1)),
        Observable.delay(1, { delayStart: true }),
        Observable.flow(scheduler),
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
          arrayEquality(),
        ),
      );

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
    test("flow a generating source", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const flowed = pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.flow(scheduler),
        Disposable.addTo(scheduler),
      );

      scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
      });

      const f = mockFn();
      const subscription = pipe(
        flowed,
        Observable.withCurrentTime((time, v) => [time, v]),
        Observable.forEach(([time, v]: [number, any]) => {
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
          arrayEquality(),
        ),
      );

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
  ),

  describe(
    "forEach",
    test("validate return type with multicast observable input", () => {
      const publisher = Observable.createPublisher<number>();
      pipe(publisher[ObservableLike_isDeferred], expectEquals(false));
      pipe(publisher[ObservableLike_isEnumerable], expectEquals(false));
      pipe(publisher[ObservableLike_isPure], expectEquals(true));
      pipe(publisher[ObservableLike_isRunnable], expectEquals(false));

      const lifted = pipe(publisher, Observable.forEach(identity));

      pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
      pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
      pipe(lifted[ObservableLike_isPure], expectEquals(false));
      pipe(lifted[ObservableLike_isRunnable], expectEquals(false));
    }),
    test("validate return type with deferred observable input", () => {
      const src = Observable.create(_ => {});
      pipe(src[ObservableLike_isDeferred], expectEquals(true));
      pipe(src[ObservableLike_isEnumerable], expectEquals(false));
      pipe(src[ObservableLike_isPure], expectEquals(false));
      pipe(src[ObservableLike_isRunnable], expectEquals(false));

      const lifted = pipe(src, Observable.forEach(identity));

      pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
      pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
      pipe(lifted[ObservableLike_isPure], expectEquals(false));
      pipe(lifted[ObservableLike_isRunnable], expectEquals(false));
    }),
    test("validate return type with pure runnable input", () => {
      const src = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
      );
      pipe(src[ObservableLike_isDeferred], expectEquals(true));
      pipe(src[ObservableLike_isEnumerable], expectEquals(false));
      pipe(src[ObservableLike_isPure], expectEquals(true));
      pipe(src[ObservableLike_isRunnable], expectEquals(true));

      const lifted = pipe(src, Observable.forEach(identity));

      pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
      pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
      pipe(lifted[ObservableLike_isPure], expectEquals(false));
      pipe(lifted[ObservableLike_isRunnable], expectEquals(true));
    }),
    test("validate return type with pure enumable input", () => {
      const src = pipe([1, 2, 3], Observable.fromReadonlyArray());
      pipe(src[ObservableLike_isDeferred], expectEquals(true));
      pipe(src[ObservableLike_isEnumerable], expectEquals(true));
      pipe(src[ObservableLike_isPure], expectEquals(true));
      pipe(src[ObservableLike_isRunnable], expectEquals(true));

      const lifted = pipe(src, Observable.forEach(identity));

      pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
      pipe(lifted[ObservableLike_isEnumerable], expectEquals(true));
      pipe(lifted[ObservableLike_isPure], expectEquals(false));
      pipe(lifted[ObservableLike_isRunnable], expectEquals(true));
    }),
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

    test("when the effect function throws with enumerable source", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray(),
          Observable.forEach(_ => {
            throw err;
          }),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),

    test("when the effect function throws with runnable source", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray(),
          Observable.delay(3),
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
    "fork merge",
    test("with pure src and inner runnables with side-effects", () => {
      const obs: RunnableWithSideEffectsLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forkMerge<
          number,
          EnumerableLike<number>,
          RunnableWithSideEffectsLike<number>
        >(
          Observable.flatMapIterable(_ => [1, 2]),
          Observable.flatMapIterable(_ => [3, 4]),
        ),
      );

      pipe(
        obs,
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3, 4, 3, 4, 3, 4]),
      );

      expectTrue(obs[ObservableLike_isDeferred]);
      expectTrue(obs[ObservableLike_isRunnable]);
      expectFalse(obs[ObservableLike_isPure]);
      expectFalse(obs[ObservableLike_isEnumerable]);
    }),
    test("runnable with effects src and pure inner runnables", () => {
      const obs: RunnableWithSideEffectsLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forEach(ignore),
        Observable.forkMerge(
          Containers.mapTo<Observable.RunnableWithSideEffectsContainer, number>(
            Observable,
            1,
          ),
          Containers.mapTo<Observable.RunnableWithSideEffectsContainer, number>(
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
      expectFalse(obs[ObservableLike_isEnumerable]);
    }),
    test("with pure runnable src and pure inner runnables", () => {
      const obs: RunnableLike<number> = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.forkMerge(
          Containers.mapTo<Observable.RunnableContainer, number>(Observable, 1),
          Containers.mapTo<Observable.RunnableContainer, number>(Observable, 2),
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
      expectFalse(obs[ObservableLike_isEnumerable]);
    }),
    test("with multicast src and pure inner transforms", () => {
      const forked: MulticastObservableLike = pipe(
        Observable.createPublisher(),
        Observable.forkMerge(
          Containers.mapTo<Observable.MulticastObservableContainer, number>(
            Observable,
            1,
          ),
          Containers.mapTo<Observable.MulticastObservableContainer, number>(
            Observable,
            2,
          ),
        ),
      );

      expectFalse(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectTrue(forked[ObservableLike_isPure]);
      expectFalse(forked[ObservableLike_isEnumerable]);
    }),
    test("with multicast src and deferred inner transforms", () => {
      const forked = pipe(
        Observable.createPublisher(),
        Observable.forkMerge<
          number,
          MulticastObservableLike,
          ObservableBaseLike<number>
        >(
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          Containers.mapTo<Observable.MulticastObservableContainer, number>(
            Observable,
            2,
          ),
        ),
      );

      expectTrue(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectFalse(forked[ObservableLike_isPure]);
      expectFalse(forked[ObservableLike_isEnumerable]);
    }),
    test("with runnable pure src and deferred transforms", () => {
      const forked = pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.forkMerge<
          number,
          EnumerableLike<number>,
          DeferredObservableBaseLike<number>
        >(
          Observable.flatMapAsync(_ => Promise.resolve(1)),
          Containers.mapTo<Observable.EnumerableContainer, number>(
            Observable,
            2,
          ),
        ),
      );

      expectTrue(forked[ObservableLike_isDeferred]);
      expectFalse(forked[ObservableLike_isRunnable]);
      expectFalse(forked[ObservableLike_isPure]);
      expectFalse(forked[ObservableLike_isEnumerable]);
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
    "fromIterable",
    test("fromIterable with delay", () => {
      const result: number[] = [];
      pipe(
        [9, 9, 9, 9],
        Observable.fromIterable(),
        Observable.delay(2),
        Observable.withCurrentTime(t => t),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.run(),
      );
      pipe(result, expectArrayEquals([0, 2, 4, 6]));
    }),
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
        Observable.fromReadonlyArray(),
        Observable.delay(2),
      );
      const runnableWithSideEffects = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(2),
        Observable.forEach(ignore),
      );
      const deferred = pipe(
        () => Promise.resolve(1),
        Observable.fromAsyncFactory(),
      );
      const multicast = Observable.createPublisher();

      const merged1 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
        runnableWithSideEffects,
        deferred,
        multicast,
      );

      pipe(merged1[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged1[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged1[ObservableLike_isPure], expectEquals(false));
      pipe(merged1[ObservableLike_isRunnable], expectEquals(false));

      const merged2 = Observable.merge(pureEnumerable, pureRunnable, multicast);

      pipe(merged2[ObservableLike_isDeferred], expectEquals(false));
      pipe(merged2[ObservableLike_isEnumerable], expectEquals(false));
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
      pipe(merged3[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged3[ObservableLike_isPure], expectEquals(false));
      pipe(merged3[ObservableLike_isRunnable], expectEquals(false));

      const merged4 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
        runnableWithSideEffects,
      );

      pipe(merged4[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged4[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged4[ObservableLike_isPure], expectEquals(false));
      pipe(merged4[ObservableLike_isRunnable], expectEquals(true));

      const merged5 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
        pureRunnable,
      );

      pipe(merged5[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged5[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged5[ObservableLike_isPure], expectEquals(false));
      pipe(merged5[ObservableLike_isRunnable], expectEquals(true));

      const merged6 = Observable.merge(
        pureEnumerable,
        enumerableWithSideEffects,
      );

      pipe(merged6[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged6[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged6[ObservableLike_isPure], expectEquals(false));
      pipe(merged6[ObservableLike_isRunnable], expectEquals(true));

      const merged7 = Observable.merge(pureEnumerable, pureEnumerable);

      pipe(merged7[ObservableLike_isDeferred], expectEquals(true));
      pipe(merged7[ObservableLike_isEnumerable], expectEquals(false));
      pipe(merged7[ObservableLike_isPure], expectEquals(true));
      pipe(merged7[ObservableLike_isRunnable], expectEquals(true));
    }),
    test(
      "two arrays",
      pipeLazy(
        Observable.merge(
          pipe(
            [0, 2, 3, 5, 6],
            Observable.fromReadonlyArray(),
            Observable.delay(1, { delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Observable.fromReadonlyArray(),
            Observable.delay(2, { delayStart: true }),
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
            pipe(
              [1, 4, 7],
              Observable.fromReadonlyArray(),
              Observable.delay(2),
            ),
            pipe(Observable.throws(), Observable.delay(5)),
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
          pipe([1, 3, 5], Observable.fromReadonlyArray(), Observable.delay(3)),
          pipe([2, 4, 6], Observable.fromReadonlyArray(), Observable.delay(3)),
          pipe([9, 10], Observable.fromReadonlyArray(), Observable.delay(3)),
        ],
        Observable.fromReadonlyArray(),
        Runnable.mergeAll<number>({
          concurrency: 2,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]),
      ),
    ),
  ),
  describe(
    "last",
    test("empty source", () => {
      const result = pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.last(),
      );
      pipe(result, expectIsNone);
    }),
    test("it returns the last value", () => {
      const result = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.last(),
      );
      pipe(result, expectEquals<Optional<number>>(3));
    }),
    test("it returns the last value when delayed", () => {
      const result = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay<number>(3),
        Observable.last(),
      );
      pipe(result, expectEquals<Optional<number>>(3));
    }),
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
  ),
  describe(
    "noneSatisfy",
    test(
      "no values satisfy the predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.noneSatisfy(greaterThan(5)),
        expectTrue,
      ),
    ),
    test(
      "empty input",
      pipeLazy(
        [],
        Observable.fromReadonlyArray(),
        Observable.noneSatisfy(greaterThan(5)),
        expectTrue,
      ),
    ),
    test(
      "some satisfy",
      pipeLazy(
        [1, 2, 30, 4, 3],
        Observable.fromReadonlyArray(),
        Observable.noneSatisfy(greaterThan(5)),
        expectFalse,
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
        Observable.fromReadonlyArray(),
        Observable.delay(1),
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
        Observable.fromReadonlyArray(),
        Observable.delay(2),
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
          Observable.fromReadonlyArray(),
          Observable.delay(3),
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
            Observable.generate(increment, returns(0)),
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
            Observable.generate(increment, returns(0)),
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
    "someSatisfy",
    test(
      "some satisfies predicate",
      pipeLazy(
        [1, 2, 30, 4],
        Observable.fromReadonlyArray(),
        Observable.someSatisfy(greaterThan(5)),
        expectTrue,
      ),
    ),
    test(
      "some satisfies predicate with delay",
      pipeLazy(
        [1, 2, 30, 4],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
        Observable.someSatisfy(greaterThan(5)),
        expectTrue,
      ),
    ),
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
    "takeUntil",
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [1, 2, 3, 4, 5],
        ReadonlyArray.toObservable(),
        Observable.delay(1),
        Observable.takeUntil(
          pipe(
            [1],
            ReadonlyArray.toObservable(),
            Observable.delay(3, { delayStart: true }),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(
        [1],
        ReadonlyArray.toObservable(),
        Observable.onSubscribe(f),
        Observable.subscribe(scheduler),
      );

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback function throws", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const subscription = pipe(
        [1],
        ReadonlyArray.toObservable(),
        Observable.onSubscribe(raise),
        Observable.subscribe(scheduler),
      );

      pipe(subscription[DisposableLike_error], expectIsSome);
    }),

    test("when call back returns a disposable", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const disp = Disposable.create();
      const f = mockFn(disp);

      pipe(
        [1],
        ReadonlyArray.toObservable(),
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
  ),
  describe(
    "reduce",
    test(
      "summing all values from delayed source",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(3),
        Observable.reduce<number, number>(
          (acc, next) => acc + next,
          returns(0),
        ),
        expectEquals(6),
      ),
    ),
  ),
  describe(
    "share",
    test("shared observable zipped with itself", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const shared = pipe(
        [1, 2, 3],
        ReadonlyArray.toObservable(),
        Observable.delay(1),
        Observable.forEach(ignore),
        Observable.share(scheduler, { replay: 1 }),
      );

      let result: number[] = [];
      pipe(
        Observable.zip(shared, shared),
        Observable.map<[number, number], number>(([a, b]) => a + b),
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),
  describe(
    "switchMap",
    testAsync(
      "concating arrays",
      pipeLazyAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.switchMap<number, number>(_ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArrayAsync(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1)),
        Observable.delay(1, { delayStart: true }),
        Observable.takeFirst({ count: 100 }),
        Observable.throttle<number>(50, { mode: "first" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 49, 99]),
      ),
    ),

    test(
      "last",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1)),
        Observable.delay(1, { delayStart: true }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(50, { mode: "last" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),

    test(
      "interval",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1)),
        Observable.delay(1, { delayStart: true }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(75, { mode: "interval" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 74, 149, 199]),
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
          Observable.fromReadonlyArray(),
          Observable.delay(1),
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
          Observable.fromReadonlyArray(),
          Observable.delay(1),
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
        Observable.fromReadonlyArray(),
        Observable.delay(1),
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
      pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toEventSource(),
        EventSource.addEventHandler(bind(Array.prototype.push, result)),
      );

      pipe(result, expectArrayEquals([0, 1, 2]));
    }),
  ),
  describe(
    "toIterable",
    test("when the source completes without error", () => {
      const iter = pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toIterable(),
      );

      pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
    }),
  ),
  describe(
    "toReadonlyArrayAsync",
    testAsync(
      "with pure delayed source",
      pipeLazyAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(3),
        Observable.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),
  describe(
    "toReadonlySet",
    test(
      "with delayed source",
      pipeLazy(
        [1, 2, 1, 3, 2, 6, 5, 3, 6],
        Observable.fromReadonlyArray(),
        Observable.delay(2),
        Observable.toReadonlySet<number>(),
        x => Array.from(x).sort(),
        expectArrayEquals([1, 2, 3, 5, 6]),
      ),
    ),
  ),
  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
        Observable.withLatestFrom(
          pipe(
            [0, 1, 2, 3],
            Observable.fromReadonlyArray(),
            Observable.delay(2),
          ),
          (a: number, b: number): [number, number] => [a, b],
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [
            [0, 0],
            [1, 0],
            [2, 1],
            [3, 1],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "when latest produces no values",
      pipeLazy(
        [0],
        Observable.fromReadonlyArray(),
        Observable.delay(1),
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
          Observable.fromReadonlyArray(),
          Observable.delay(1),
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
    "zip",
    test(
      "when all inputs are the same length",
      pipeLazy(
        Observable.zip(
          pipe([1, 2, 3, 4, 5], Observable.fromReadonlyArray()),
          pipe([5, 4, 3, 2, 1], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals<readonly [number, number]>(
          [
            [1, 5],
            [2, 4],
            [3, 3],
            [4, 2],
            [5, 1],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "when inputs are different length",
      pipeLazy(
        Observable.zip(
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
          pipe([5, 4, 3, 2, 1], Observable.fromReadonlyArray()),
          pipe([1, 2, 3, 4], Observable.fromReadonlyArray()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals<readonly [number, number, number]>(
          [
            [1, 5, 1],
            [2, 4, 2],
            [3, 3, 3],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "with synchronous and non-synchronous sources",
      pipeLazy(
        Observable.zip(
          pipe([1, 2], Observable.fromReadonlyArray(), Observable.delay(1)),
          pipe([2, 3], Observable.fromReadonlyArray()),
          pipe(
            [3, 4, 5, 6],
            Observable.fromReadonlyArray(),
            Observable.delay(1),
          ),
        ),
        Observable.toReadonlyArray<readonly [number, number, number]>(),
        expectArrayEquals(
          [[1, 2, 3] as readonly number[], [2, 3, 4]],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "fast with slow",
      pipeLazy(
        Observable.zip(
          pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1)),
          pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(5)),
        ),
        Observable.toReadonlyArray<readonly [number, number]>(),
        expectArrayEquals(
          [[1, 1] as readonly number[], [2, 2], [3, 3]],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "when source throws",
      pipeLazy(
        pipeLazy(
          Observable.zip(
            Observable.throws(),
            pipe([1, 2, 3], Observable.fromReadonlyArray()),
          ),
          Observable.map<readonly [unknown, number], number>(([, b]) => b),
          Observable.run(),
        ),
        expectToThrow,
      ),
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
            Observable.fromReadonlyArray(),
            Observable.delay(1, { delayStart: true }),
          ),
          pipe(
            [1, 2, 3, 4],
            Observable.fromReadonlyArray(),
            Observable.delay(2, { delayStart: true }),
          ),
        ),
        Observable.map<readonly [number, number], number>(([a, b]) => a + b),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 5, 8, 11]),
      ),
    ),
  ),
  describe(
    "zipWith",
    test(
      "when inputs are different lengths",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.zipWith<number, number>(
          pipe([1, 2, 3, 4], Observable.fromReadonlyArray<number>()),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals<readonly [number, number]>(
          [
            [1, 1],
            [2, 2],
            [3, 3],
          ],
          arrayEquality(),
        ),
      ),
    ),
  ),
  test("composite operators with both enumerable and runnable sources", () => {
    const op = compose(
      Observable.map(incrementBy(2)),
      Observable.keep(isEven),
      Observable.map(incrementBy(2)),
      Observable.buffer({ count: 3 }),
      Observable.takeFirst({ count: 3 }),
      Observable.skipFirst(),
      Observable.takeWhile(lessThan(100)),
      Observable.pairwise<number>(),
    );

    const enumerated = pipe(
      Observable.generate(increment, returns(-1)),
      op,
      Observable.toReadonlyArray(),
    );

    const observed = pipe(
      Observable.generate(increment, returns(-1)),
      Observable.delay(5),
      op,
      Observable.toReadonlyArray(),
    );

    pipe(observed, expectArrayEquals(enumerated));
  }),
);

((_: Observable.Signature) => {})(Observable);
