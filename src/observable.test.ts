import { dispatchTo } from "./dispatcher";
import { dispose } from "./disposable";
import {
  test,
  describe,
  testAsync,
  expectArrayEquals,
  expectToThrowError,
  expectEquals,
  expectToThrow,
  expectPromiseToThrow,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectSome,
  expectNone,
} from "./experimental/testing";
import {
  compose,
  pipe,
  returns,
  increment,
  arrayEquality,
  identity,
  incrementBy,
  sum,
  defer,
  ignore,
  raise,
} from "./functions";
import { createMonadTests } from "./monad.test";
import * as Observable from "./observable";
import {
  await_,
  buffer,
  combineLatestWith,
  compute,
  concat,
  concatWith,
  createObservable,
  empty,
  fromArray,
  fromIterable,
  fromPromise,
  generate,
  ignoreElements,
  map,
  merge,
  mergeWith,
  never,
  fromValue,
  onNotify,
  retry,
  scanAsync,
  share,
  subscribe,
  takeFirst,
  takeLast,
  throttle,
  ThrottleMode,
  throwIfEmpty,
  throws,
  timeout,
  toPromise,
  withLatestFrom,
  zip,
  catchError,
  genMap,
  endWith,
  switchMap,
  onSubscribe,
  createSubject,
  exhaustMap,
  mergeMap,
  switchAll,
  zipWith,
  zipWithLatestFrom,
  zipLatestWith,
  toRunnable,
} from "./observable";
import {
  fromArray as fromArrayRunnable,
  forEach,
  last,
  toArray,
} from "./runnable";
import { createHostScheduler, createVirtualTimeScheduler } from "./scheduler";

const scheduler = createHostScheduler();

export const tests = describe(
  "observable",
  test(
    "await_",
    defer(
      [0, 1, 2, 3, 4],
      fromArray(),
      await_(compose(fromValue(), endWith(1))),
      toRunnable(),
      last,
      expectEquals(0),
    ),
  ),

  describe(
    "buffer",
    test(
      "with duration and maxBufferSize",
      defer(
        concat(
          pipe([1, 2, 3, 4], fromArray()),
          pipe([1, 2, 3], fromArray({ delay: 1 })),
          pipe(4, fromValue({ delay: 8 })),
        ),
        buffer({ duration: 4, maxBufferSize: 3 }),
        toRunnable(),
        toArray(),
        expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()),
      ),
    ),
    test(
      "when duration observable throws",
      defer(
        defer(
          [1, 2, 3, 4],
          fromArray(),
          buffer({ duration: _ => throws()(raise) }),
          toRunnable({
            schedulerFactory: defer(
              { maxMicroTaskTicks: 1 },
              createVirtualTimeScheduler,
            ),
          }),
          toArray(),
        ),
        expectToThrow,
      ),
    ),
  ),

  describe(
    "catchError",
    test(
      "source completes successfully",
      defer(
        pipe(1, fromValue()),
        catchError(_ => fromValue()(2)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1]),
      ),
    ),
    test("source throws, error caught and ignored", () => {
      const error = new Error();
      pipe(
        1,
        fromValue(),
        concatWith(pipe(error, returns, throws())),
        catchError(ignore),
        toRunnable(),
        toArray(),
        expectArrayEquals([1]),
      );
    }),
    test("source throws, continues with second observable", () => {
      const error = new Error();
      pipe(
        1,
        fromValue(),
        concatWith(pipe(error, returns, throws())),
        catchError(_ => fromValue()(2)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 2]),
      );
    }),
    test("source throws, catch throws", () => {
      const error = new Error();
      expectToThrow(() =>
        pipe(
          1,
          fromValue(),
          concatWith(pipe(error, returns, throws())),
          catchError(_ => {
            throw error;
          }),
          toRunnable(),
          toArray(),
        ),
      );
    }),
  ),

  test(
    "combineLatest",
    defer(
      generate(incrementBy(2), returns(1), { delay: 2 }),
      takeFirst({ count: 3 }),
      combineLatestWith(
        pipe(
          generate(incrementBy(2), returns(0), { delay: 3 }),
          takeFirst({ count: 2 }),
        ),
      ),
      toRunnable(),
      toArray(),
      expectArrayEquals(
        [
          [3, 2],
          [5, 2],
          [5, 4],
          [7, 4],
        ],
        arrayEquality(),
      ),
    ),
  ),
  describe(
    "createObservable",
    test("disposes the observer if onSubscribe throws", () => {
      const cause = new Error();
      const observable = createObservable(_ => {
        throw cause;
      });
      pipe(
        () => pipe(observable, toRunnable(), last),
        expectToThrowError(cause),
      );
    }),
    test(
      "when queuing multiple events",
      defer(
        createObservable(dispatcher => {
          dispatcher.dispatch(1);
          dispatcher.dispatch(2);
          dispatcher.dispatch(3);
          pipe(dispatcher, dispose());
        }),
        toRunnable({
          schedulerFactory: defer(
            { maxMicroTaskTicks: 1 },
            createVirtualTimeScheduler,
          ),
        }),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "createSubject",
    test("with replay", () => {
      const subject = createSubject({ replay: 2 });
      pipe([1, 2, 3, 4], fromArrayRunnable(), forEach(dispatchTo(subject)));
      pipe(subject, dispose());

      pipe(subject, toRunnable(), toArray(), expectArrayEquals([3, 4]));
    }),
    test("with multiple observers", () => {
      const scheduler = createVirtualTimeScheduler();

      const subject = createSubject();
      pipe(subject.observerCount, expectEquals(0));
      const sub1 = pipe(subject, subscribe(scheduler));
      pipe(subject.observerCount, expectEquals(1));
      const sub2 = pipe(subject, subscribe(scheduler));
      pipe(subject.observerCount, expectEquals(2));
      pipe(sub1, dispose());
      pipe(subject.observerCount, expectEquals(1));
      pipe(sub2, dispose());
      pipe(subject.observerCount, expectEquals(0));
    }),
  ),
  test(
    "exhaustMap",
    defer(
      [fromArray()([1, 2, 3]), fromArray()([4, 5, 6]), fromArray()([7, 8, 9])],
      fromArray(),
      exhaustMap(identity),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const factory = () => Promise.resolve(1);
      const result = await pipe(factory, fromPromise, toPromise(scheduler));

      pipe(result, expectEquals(1));
    }),

    testAsync("when the promise reject", async () => {
      const error = new Error();
      const factory = () => Promise.reject(error);

      await pipe(
        pipe(factory, fromPromise, toPromise(scheduler)),
        expectPromiseToThrow,
      );
    }),
  ),

  test(
    "genMap",
    defer(
      undefined,
      fromValue(),
      genMap(function* (_) {
        yield 1;
        yield 2;
        yield 3;
      }),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  test(
    "ignoreElements",
    defer(
      [1, 2, 3],
      fromArray(),
      ignoreElements(),
      endWith(4),
      toRunnable(),
      toArray(),
      expectArrayEquals([4]),
    ),
  ),

  describe(
    "merge",
    test(
      "two arrays",
      defer(
        merge(
          pipe([0, 2, 3, 5, 6], fromArray({ delay: 1 })),
          pipe([1, 4, 7], fromArray({ delay: 2 })),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      defer(
        defer(
          [1, 4, 7],
          fromArray({ delay: 2 }),
          mergeWith(throws({ delay: 5 })(raise)),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),
  ),

  describe(
    "mergeMap",
    test(
      "when a mapped observable throws",
      defer(
        defer(
          [fromArray({ delay: 1 })([1, 2, 3]), throws({ delay: 2 })(raise)],
          fromArray(),
          mergeMap(identity),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),
    test(
      "when the map function throws",
      defer(
        defer(
          [1, 2, 3, 4],
          fromArray(),
          mergeMap(x => {
            if (x > 2) {
              raise();
            }
            return fromValue()(x);
          }),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),
  ),

  test("never", defer(never(), toRunnable(), last, expectNone)),

  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = createVirtualTimeScheduler();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(1, fromValue(), onSubscribe(f), subscribe(scheduler));

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      scheduler.run();

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback function throws", () => {
      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(
        1,
        fromValue(),
        onSubscribe(raise),
        subscribe(scheduler),
      );

      pipe(subscription.error, expectSome);
    }),
  ),

  describe(
    "retry",
    test("repeats the observable n times", () => {
      let retried = false;
      const src = createObservable(d => {
        d.dispatch(1);
        if (retried) {
          d.dispatch(2);
          d.dispose();
        } else {
          retried = true;
          pipe(d, dispose({ cause: new Error() }));
        }
      });
      pipe(src, retry(), toRunnable(), toArray(), expectArrayEquals([1, 1, 2]));
    }),
  ),

  describe(
    "scanAsync",
    test(
      "fast lib, slow acc",
      defer(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>(
          (acc, x) => fromValue({ delay: 4 })(x + acc),
          returns(0),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, fast acc",
      defer(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>((acc, x) => fromValue()(x + acc), returns(0)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, slow acc",
      defer(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>(
          (acc, x) => fromValue({ delay: 4 })(x + acc),
          returns(0),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "fast lib, fast acc",
      defer(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>((acc, x) => fromValue()(x + acc), returns(0)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),
  ),

  test("share", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      share(scheduler, { replay: 1 }),
    );

    let result: readonly number[] = [];
    pipe(
      zip(shared, shared),
      map(([a, b]) => a + b),
      buffer(),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),

  describe(
    "switchAll",
    test(
      "with empty source",
      defer(
        empty(),
        switchAll(),
        toRunnable(),
        toArray(),
        expectArrayEquals([]),
      ),
    ),

    test(
      "when source throw",
      defer(
        defer(
          raise,
          throws(),
          switchAll(),
          toRunnable(),
          toArray(),
          expectArrayEquals([]),
        ),
        expectToThrow,
      ),
    ),
  ),

  test(
    "switchMap",
    defer(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      switchMap(_ => pipe([1, 2, 3], fromArray())),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),

  describe(
    "takeLast",
    test(
      "when pipeline throws",
      defer(
        defer(raise, throws(), takeLast(), toRunnable(), last),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      defer(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 100 }),
        throttle(50, { mode: ThrottleMode.First }),
        toRunnable(),
        toArray(),
        expectArrayEquals([0, 49]),
      ),
    ),

    test(
      "last",
      defer(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 200 }),
        throttle(50, { mode: ThrottleMode.Last }),
        toRunnable(),
        toArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),

    test(
      "interval",
      defer(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 200 }),
        throttle(75, { mode: ThrottleMode.Interval }),
        toRunnable(),
        toArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),

    test(
      "when duration observable throws",
      defer(
        defer(
          [1, 2, 3, 4, 5],
          fromArray({ delay: 1 }),
          throttle(_ => throws()(raise)),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "throwIfEmpty",
    test(
      "when source is empty",
      defer(
        defer(
          empty(),
          throwIfEmpty(() => undefined),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),

    test(
      "when source is not empty",
      defer(
        1,
        returns,
        compute(),
        throwIfEmpty(() => undefined),
        toRunnable(),
        last,
        expectEquals(1),
      ),
    ),
  ),

  describe(
    "timeout",
    test(
      "throws when a timeout occurs",
      defer(
        defer(1, fromValue({ delay: 2 }), timeout(1), toArray()),
        expectToThrow,
      ),
    ),

    test(
      "when timeout is greater than observed time",
      defer(
        1,
        fromValue({ delay: 2 }),
        timeout(3),
        toRunnable(),
        last,
        expectEquals(1),
      ),
    ),
  ),

  describe(
    "toPromise",
    testAsync(
      "when observable completes without producing a value",
      async () => {
        await pipe(pipe(empty(), toPromise(scheduler)), expectPromiseToThrow);
      },
    ),
  ),

  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      defer(
        [0, 1, 2, 3],
        fromArray({ delay: 1 }),
        withLatestFrom(pipe([0, 1, 2, 3], fromArray({ delay: 2 })), (a, b) => [
          a,
          b,
        ]),
        toRunnable(),
        toArray(),
        expectArrayEquals(
          [
            [1, 0],
            [2, 0],
            [3, 1],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "when latest produces no values",
      defer(
        [0],
        fromArray({ delay: 1 }),
        withLatestFrom(empty<number>(), sum),
        toRunnable(),
        toArray(),
        expectArrayEquals([]),
      ),
    ),
    test("when latest throws", () => {
      const error = new Error();

      pipe(
        defer(
          [0],
          fromArray({ delay: 1 }),
          withLatestFrom(throws<number>()(returns(error)), sum),
          toRunnable(),
          toArray(),
          expectArrayEquals([]),
        ),
        expectToThrowError(error),
      );
    }),
  ),

  describe(
    "zip",
    test(
      "with non-delayed sources",
      defer(
        zip(
          pipe([1, 2], fromArray()),
          pipe([1, 2], fromArray(), map(increment)),
          generate(increment, returns<number>(2)),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals(
          [
            [1, 2, 3],
            [2, 3, 4],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "with synchronous and non-synchronous sources",
      defer(
        zip(
          pipe([1, 2], fromArray({ delay: 1 })),
          pipe([2, 3], fromIterable()),
          pipe([3, 4, 5], fromArray({ delay: 1 })),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals(
          [
            [1, 2, 3],
            [2, 3, 4],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "fast with slow",
      defer(
        [1, 2, 3],
        fromArray({ delay: 1 }),
        zipWith(pipe([1, 2, 3], fromArray({ delay: 5 }))),
        toRunnable(),
        toArray(),
        expectArrayEquals(
          [
            [1, 1],
            [2, 2],
            [3, 3],
          ],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "when source throws",
      defer(
        defer(
          raise,
          throws(),
          zipWith(fromArray()([1, 2, 3])),
          map(([, b]) => b),
          toRunnable(),
          toArray(),
        ),
        expectToThrow,
      ),
    ),
  ),

  test(
    "zipLatestWith",
    defer(
      [1, 2, 3, 4, 5, 6, 7, 8],
      fromArray({ delay: 1 }),
      zipLatestWith(pipe([1, 2, 3, 4], fromArray({ delay: 2 }))),
      map(([a, b]) => a + b),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 5, 8, 11]),
    ),
  ),

  describe(
    "zipWithLatestFrom",
    test(
      "when source throws",
      defer(
        defer(
          throws()(raise),
          zipWithLatestFrom(fromValue()(1), (_, b) => b),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),

    test(
      "when other throws",
      defer(
        defer(
          [1, 2, 3],
          fromArray({ delay: 1 }),
          zipWithLatestFrom(throws()(raise), (_, b) => b),
          toRunnable(),
          last,
        ),
        expectToThrow,
      ),
    ),

    test(
      "when other completes first",
      defer(
        [1],
        fromArray({ delay: 1 }),
        zipWithLatestFrom(fromArray()([2]), (_, b) => b),
        toRunnable(),
        last,
        expectEquals(2),
      ),
    ),
  ),
  createMonadTests(Observable),
);
