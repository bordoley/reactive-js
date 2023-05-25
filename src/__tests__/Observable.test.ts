import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import {
  __bindMethod,
  __do,
  __observe,
  __stream,
} from "../Observable/effects.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
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
  alwaysTrue,
  arrayEquality,
  bindMethod,
  compose,
  increment,
  incrementBy,
  isEven,
  lessThan,
  newInstance,
  none,
  pipe,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
} from "../functions.js";
import {
  DispatcherLikeEvent_completed,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  PauseableLike_pause,
  PauseableLike_resume,
  PublisherLike_observerCount,
  QueueableLike_enqueue,
  RunnableLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_notify,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../types.js";

testModule(
  "Observable",
  describe(
    "backpressureStrategy",
    testAsync(
      "with a throw backpressure strategy",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async scheduler => {
          expectToThrowAsync(
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
  ),
  describe(
    "catchError",
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
        Observable.forEach((x: number) => {
          result.push(x);
        }),
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
        Observable.forEach<number>(v => {
          result.push(v);
        }),
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
          Observable.toReadonlyArray(),
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
        expectArrayEquals([1, 2, 2, 2, 2, 3, 3, 3, 4]),
      ),
        expectTrue(completed);
    }),
  ),
  describe(
    "empty",
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
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
        pipe(result, expectArrayEquals([11, 12, 13]));
    }),

    test("when the effect function throws", () => {
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
    test(
      "fromIterable with delay",
      pipeLazy(
        [9, 9, 9, 9],
        Observable.fromIterable(),
        Observable.delay(2),
        Observable.withCurrentTime(t => t),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
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
        Observable.toReadonlyArray(),
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
          Observable.toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
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
    "share",
    test("shared observable zipped with itself", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const shared = pipe(
        [1, 2, 3],
        ReadonlyArray.toObservable(),
        Observable.delay(1),
        Observable.share(scheduler, { replay: 1 }),
      );

      let result: number[] = [];
      pipe(
        Observable.zip(shared, shared),
        Observable.map<[number, number], number>(([a, b]) => a + b),
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
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
          Observable.toReadonlyArray(),
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
          Observable.toReadonlyArray(),
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
          Observable.toReadonlyArray(),
          expectArrayEquals([] as number[]),
        ),
        expectToThrowError(error),
      );
    }),
  ),

  describe(
    "zip",
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
        Observable.toReadonlyArray(),
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
        Observable.toReadonlyArray(),
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
          Observable.toReadonlyArray(),
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
  test("composite operators with both enumerable and runnable sources", () => {
    const op = compose(
      Observable.map(incrementBy(2)),
      Observable.keep(isEven),
      Observable.map(incrementBy(2)),
      Observable.buffer({ count: 3 }),
      Observable.takeFirst({ count: 3 }),
      Observable.flatMapIterable<Iterable<number>, number>(x => x),
      Observable.skipFirst(),
      Observable.takeWhile(lessThan(100)),
      Observable.pairwise<number>(),
      x => x as unknown as RunnableLike<number[]>,
      Observable.flatMapIterable<Iterable<number>, number>(x => x),
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
