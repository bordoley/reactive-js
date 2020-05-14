import {
  compose,
  pipe,
  returns,
  increment,
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  identity,
  incrementBy,
  sum,
  bind,
  defer,
  ignore,
} from "../lib/functions";
import {
  forEach as forEachEnumerable,
  fromArray as fromArrayEnumerable,
} from "../lib/enumerable";
import {
  await_,
  buffer,
  combineLatestWith,
  compute,
  concat,
  concatWith,
  contains,
  createObservable,
  distinctUntilChanged,
  empty,
  everySatisfy,
  forEach,
  fromArray,
  fromIterable,
  fromPromise,
  generate,
  ignoreElements,
  keep,
  map,
  merge,
  mergeWith,
  never,
  noneSatisfy,
  fromValue,
  onNotify,
  repeat,
  retry,
  scan,
  scanAsync,
  share,
  someSatisfy,
  subscribe,
  takeFirst,
  takeLast,
  takeWhile,
  throttle,
  ThrottleMode,
  throwIfEmpty,
  throws,
  timeout,
  toArray,
  toPromise,
  toValue,
  withLatestFrom,
  zip,
  catchError,
  genMap,
  endWith,
  mapTo,
  reduce,
  skipFirst,
  switchMap,
  onSubscribe,
  startWith,
  createSubject,
  exhaustMap,
  mergeMap,
  switchAll,
  zipWith,
  zipWithLatestFrom,
  dispatchTo,
  dispatch,
  zipLatestWith,
} from "../lib/observable";
import {
  createHostScheduler,
  createVirtualTimeScheduler,
} from "../lib/scheduler";
import {
  test,
  describe,
  testAsync,
  expectArrayEquals,
  expectToThrowError,
  expectTrue,
  expectFalse,
  expectEquals,
  expectToThrow,
  expectPromiseToThrow,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectSome,
} from "../lib/internal/testing";
import { dispose } from "../lib/disposable";

const scheduler = createHostScheduler();

export const tests = describe(
  "observable",
  test(
    "await_",
    defer(
      [0, 1, 2, 3, 4],
      fromArray(),
      await_(compose(fromValue(), endWith(1))),
      toValue(),
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
        toArray(),
        expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()),
      ),
    ),
    test(
      "when duration observable throws",
      bind(
        expectToThrow,
        defer(
          [1, 2, 3, 4],
          fromArray(),
          buffer({ duration: _ => throws()(() => new Error()) }),
          toArray(bind(createVirtualTimeScheduler, { maxMicroTaskTicks: 1 })),
        ),
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
          toArray(),
        ),
      );
    }),
  ),

  test(
    "combineLatest",
    defer(
      generate(incrementBy(2), returns(3), { delay: 2 }),
      takeFirst(3),
      combineLatestWith(
        pipe(generate(incrementBy(2), returns(2), { delay: 3 }), takeFirst(2)),
      ),
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

  test(
    "concat",
    defer(
      concat(fromValue()(1), fromValue()(2), fromValue()(3)),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  describe(
    "contains",
    test(
      "source is empty",
      defer(empty<number>(), contains(1), toValue(), expectFalse),
    ),
    test(
      "source contains value",
      defer(
        generate(increment, returns<number>(0)),
        contains(1),
        toValue(),
        expectTrue,
      ),
    ),
    test(
      "source does not contain value",
      defer([2, 3, 4], fromArray(), contains(1), toValue(), expectFalse),
    ),
  ),

  describe(
    "createObservable",
    test("disposes the subscriber if onSubscribe throws", () => {
      const cause = new Error();
      const observable = createObservable(_ => {
        throw cause;
      });
      pipe(() => pipe(observable, toValue()), expectToThrowError(cause));
    }),
    test(
      "when queuing multiple events",
      defer(
        createObservable(dispatcher => {
          dispatch(dispatcher, 1);
          dispatch(dispatcher, 2);
          dispatch(dispatcher, 3);
          dispose(dispatcher);
        }),
        toArray(bind(createVirtualTimeScheduler, { maxMicroTaskTicks: 1 })),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "createSubject",
    test("with replay", () => {
      const subject = createSubject(2);
      pipe(
        [1, 2, 3, 4],
        fromArrayEnumerable,
        forEachEnumerable(dispatchTo(subject)),
      );
      dispose(subject);

      pipe(subject, toArray(), expectArrayEquals([3, 4]));
    }),
    test("with multiple subscribers", () => {
      const scheduler = createVirtualTimeScheduler();

      const subject = createSubject();
      pipe(subject.subscriberCount, expectEquals(0));
      const sub1 = pipe(subject, subscribe(scheduler));
      pipe(subject.subscriberCount, expectEquals(1));
      const sub2 = pipe(subject, subscribe(scheduler));
      pipe(subject.subscriberCount, expectEquals(2));
      dispose(sub1);
      pipe(subject.subscriberCount, expectEquals(1));
      dispose(sub2);
      pipe(subject.subscriberCount, expectEquals(0));
    }),
  ),

  test(
    "distinctUntilChanges",
    defer(
      [1, 1, 1, 2, 2, 3, 3, 3],
      fromArray(),
      distinctUntilChanged(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  describe(
    "everySatisfy",
    test(
      "source is empty",
      defer(empty(), everySatisfy(alwaysFalse), toValue(), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysTrue),
        toValue(),
        expectTrue,
      ),
    ),
    test(
      "source values fail predicate",
      defer(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysFalse),
        toValue(),
        expectFalse,
      ),
    ),
    test(
      "when the predicate throws",
      bind(
        expectToThrow,
        defer(
          [1, 2, 3],
          fromArray(),
          everySatisfy(_ => {
            throw new Error();
          }),
          toValue(),
        ),
      ),
    ),
  ),

  test(
    "exhaustMap",
    defer(
      [fromArray()([1, 2, 3]), fromArray()([4, 5, 6]), fromArray()([7, 8, 9])],
      fromArray(),
      exhaustMap(identity),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  describe(
    "forEach",
    test("iterates through all values", () => {
      let acc = 0;
      pipe(
        [1, 2, 3],
        fromArray(),
        forEach(v => {
          acc += v;
        }),
      );
      pipe(acc, expectEquals(6));
    }),
    test("throws if source throws", () => {
      const error = new Error();
      pipe(
        defer(error, returns, throws(), forEach(ignore)),
        expectToThrowError(error),
      );
    }),
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
      genMap(function*(_) {
        yield 1;
        yield 2;
        yield 3;
      }),
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
      toArray(),
      expectArrayEquals([4]),
    ),
  ),

  test(
    "keep",
    defer(
      [1, 2, 3],
      fromArray(),
      keep(x => x > 1),
      toArray(),
      expectArrayEquals([2, 3]),
    ),
  ),

  test(
    "mapTo",
    defer(
      [1, 2, 3],
      fromArray(),
      mapTo(2),
      toArray(),
      expectArrayEquals([2, 2, 2]),
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
        toArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      bind(
        expectToThrow,
        defer(
          [1, 4, 7],
          fromArray({ delay: 2 }),
          mergeWith(throws({ delay: 5 })(() => new Error())),
          toValue(),
        ),
      ),
    ),
  ),

  describe(
    "mergeMap",
    test(
      "when a mapped observable throws",
      bind(
        expectToThrow,
        defer(
          [
            fromArray({ delay: 1 })([1, 2, 3]),
            throws({ delay: 2 })(() => {
              throw new Error();
            }),
          ],
          fromArray(),
          mergeMap(identity),
          toValue(),
        ),
      ),
    ),
    test(
      "when the map function throws",
      bind(
        expectToThrow,
        defer(
          [1, 2, 3, 4],
          fromArray(),
          mergeMap(x => {
            if (x > 2) {
              throw new Error();
            }
            return fromValue()(x);
          }),
          toValue(),
        ),
      ),
    ),
  ),

  test("never", bind(expectToThrow, defer(never(), toValue()))),

  describe(
    "noneSatisfy",
    test(
      "source is empty",
      defer(empty(), noneSatisfy(alwaysFalse), toValue(), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(alwaysTrue),
        toValue(),
        expectFalse,
      ),
    ),
    test(
      "source values fail predicate",
      defer(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(alwaysFalse),
        toValue(),
        expectTrue,
      ),
    ),
  ),

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
      const f = () => {
        throw new Error();
      };
      const subscription = pipe(
        1,
        fromValue(),
        onSubscribe(f),
        subscribe(scheduler),
      );

      pipe(subscription.error, expectSome);
    }),
  ),

  test(
    "reduce",
    defer(
      [1, 1, 1],
      fromArray(),
      reduce(sum, returns(0)),
      toValue(),
      expectEquals(3),
    ),
  ),

  describe(
    "repeat",
    test(
      "repeats the observable n times",
      defer(1, fromValue(), repeat(3), toArray(), expectArrayEquals([1, 1, 1])),
    ),

    test("when the repeat function throws", () => {
      const error = new Error();

      pipe(
        defer(
          1,
          fromValue(),
          repeat(_ => {
            throw error;
          }),
          toArray(),
        ),
        expectToThrowError(error),
      );
    }),
  ),

  describe(
    "retry",
    test("repeats the observable n times", () => {
      let retried = false;
      const lib = createObservable(d => {
        dispatch(d, 1);
        if (retried) {
          dispatch(d, 2);
          dispose(d);
        } else {
          retried = true;
          dispose(d, { cause: new Error() });
        }
      });
      pipe(lib, retry(), toArray(), expectArrayEquals([1, 1, 2]));
    }),
  ),

  test(
    "scan",
    defer(
      [1, 1, 1],
      fromArray(),
      scan(sum, returns(0)),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
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
      share(scheduler, 1),
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

  test(
    "skipFirst",
    defer(
      [1, 2, 3, 4, 5],
      fromArray(),
      skipFirst(2),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    ),
  ),

  describe(
    "someSatisfy",
    test(
      "when predicate throws",
      bind(
        expectToThrow,
        defer(
          1,
          fromValue(),
          someSatisfy(_ => {
            throw new Error();
          }),
          toValue(),
        ),
      ),
    ),
  ),

  test(
    "startWith",
    defer(
      [1, 2, 3],
      fromArray(),
      startWith(0),
      toArray(),
      expectArrayEquals([0, 1, 2, 3]),
    ),
  ),

  describe(
    "switchAll",
    test(
      "with empty source",
      defer(empty(), switchAll(), toArray(), expectArrayEquals([])),
    ),

    test(
      "when source throw",
      bind(
        expectToThrow,
        defer(
          () => new Error(),
          throws(),
          switchAll(),
          toArray(),
          expectArrayEquals([]),
        ),
      ),
    ),
  ),

  test(
    "switchMap",
    defer(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      switchMap(_ => pipe([1, 2, 3], fromArray())),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),

  test(
    "takeFirst",
    defer(
      [1, 2, 3, 4, 5],
      fromArray(),
      takeFirst(2),
      toArray(),
      expectArrayEquals([1, 2]),
    ),
  ),

  describe(
    "takeLast",
    test(
      "takes the last n items",
      defer(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeLast(3),
        toArray(),
        expectArrayEquals([3, 4, 5]),
      ),
    ),
    test(
      "when pipeline throws",
      bind(
        expectToThrow,
        defer(() => new Error(), throws(), takeLast(), toValue()),
      ),
    ),
  ),

  describe(
    "takeWhile",
    test(
      "exclusive",
      defer(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeWhile(x => x < 3),
        toArray(),
        expectArrayEquals([1, 2]),
      ),
    ),
    test(
      "inclusive",
      defer(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeWhile(x => x < 3, { inclusive: true }),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "throttle",
    test(
      "first",
      defer(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(100),
        throttle(50, ThrottleMode.First),
        toArray(),
        expectArrayEquals([0, 49]),
      ),
    ),

    test(
      "last",
      defer(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(200),
        throttle(50, ThrottleMode.Last),
        toArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),

    test(
      "interval",
      defer(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(200),
        throttle(75, ThrottleMode.Interval),
        toArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),

    test(
      "when duration observable throws",
      bind(
        expectToThrow,
        defer(
          [1, 2, 3, 4, 5],
          fromArray({ delay: 1 }),
          throttle(_ => throws()(() => new Error())),
          toValue(),
        ),
      ),
    ),
  ),
  describe(
    "throwIfEmpty",
    test(
      "when source is empty",
      bind(
        expectToThrow,
        defer(
          empty(),
          throwIfEmpty(() => undefined),
          toValue(),
        ),
      ),
    ),

    test(
      "when source is not empty",
      defer(
        1,
        returns,
        compute(),
        throwIfEmpty(() => undefined),
        toValue(),
        expectEquals(1),
      ),
    ),
  ),

  describe(
    "timeout",
    test(
      "throws when a timeout occurs",
      bind(
        expectToThrow,
        defer(1, fromValue({ delay: 2 }), timeout(1), toArray()),
      ),
    ),

    test(
      "when timeout is greater than observed time",
      defer(1, fromValue({ delay: 2 }), timeout(3), toValue(), expectEquals(1)),
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
          generate(increment, returns<number>(3)),
        ),
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
      bind(
        expectToThrow,
        defer(
          () => {
            throw new Error();
          },
          throws(),
          zipWith(fromArray()([1, 2, 3])),
          map(([, b]) => b),
          toArray(),
        ),
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
      toArray(),
      expectArrayEquals([2, 5, 8, 11]),
    ),
  ),

  describe(
    "zipWithLatestFrom",
    test(
      "when source throws",
      bind(
        expectToThrow,
        defer(
          throws()(() => new Error()),
          zipWithLatestFrom(fromValue()(1), (_, b) => b),
          toValue(),
        ),
      ),
    ),

    test(
      "when other throws",
      bind(
        expectToThrow,
        defer(
          [1, 2, 3],
          fromArray({ delay: 1 }),
          zipWithLatestFrom(
            throws()(() => new Error()),
            (_, b) => b,
          ),
          toValue(),
        ),
      ),
    ),

    test(
      "when other completes first",
      defer(
        [1],
        fromArray({ delay: 1 }),
        zipWithLatestFrom(fromArray()([2]), (_, b) => b),
        toValue(),
        expectEquals(2),
      ),
    ),
  ),
);
