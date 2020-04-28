import {
  test,
  describe,
  testAsync,
  expectArrayEquals,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectToThrowError,
  expectTrue,
  expectFalse,
  expectEquals,
  expectToThrow,
  expectPromiseToThrow,
} from "../src/testing";
import { createDisposable, disposed, DisposableLike } from "../src/disposable";
import { Option } from "../src/option";
import {
  pipe,
  returns,
  increment,
  alwaysFalse,
  alwaysTrue,
  arrayEquals,
  referenceEquals,
} from "../src/functions";
import {
  AbstractHostScheduler,
  SchedulerLike,
  schedule,
  createVirtualTimeScheduler,
} from "../src/scheduler";
import { AbstractSubscriber } from "../src/internal/observable/subscriber";
import {
  buffer,
  combineLatest,
  concat,
  concatAll,
  contains,
  createObservable,
  createSubject,
  distinctUntilChanged,
  empty,
  every,
  forEach,
  fromArray,
  fromIterable,
  fromPromise,
  fromScheduledValues,
  generate,
  ignoreElements,
  keep,
  map,
  merge,
  never,
  none,
  ofValue,
  onNotify,
  repeat,
  scan,
  scanAsync,
  ScanAsyncMode,
  share,
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
  subscribeOn,
} from "../src/observable";

// A simple scheduler for testing promise functions where a VTS cannot be used
class PromiseTestScheduler extends AbstractHostScheduler {
  get now(): number {
    return Date.now();
  }

  scheduleDelayed(
    _callback: (shouldYield: Option<() => boolean>) => void,
    _delay: number,
  ): DisposableLike {
    return disposed;
  }

  scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike {
    const disposable = createDisposable();
    new Promise((resolve, reject) => {
      try {
        callback(undefined);
        resolve();
      } catch (e) {
        reject(e);
      }
    }).then();
    return disposable;
  }
}

const promiseScheduler: SchedulerLike = new PromiseTestScheduler();

const arrayOfArraysEqual = arrayEquals<number>(referenceEquals);

export const tests = describe(
  "observable",
  test("buffer", () => {
    pipe(
      fromScheduledValues(
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 1],
        [1, 2],
        [1, 3],
        [8, 4],
      ),
      buffer({ duration: 4, maxBufferSize: 3 }),
      toArray(),
      expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayOfArraysEqual),
    );
  }),

  test("catchError", () => {
    const error = new Error();
    pipe(
      throws(returns(error)),
      catchError(e => ofValue(1)),
      toValue(),
      expectEquals(1),
    );
  }),

  test("combineLatest", () =>
    pipe(
      combineLatest(
        [
          pipe(
            generate((i: number) => i + 2, returns(3), 2),
            takeFirst(3),
          ),
          pipe(
            generate((i: number) => i + 2, returns(2), 3),
            takeFirst(2),
          ),
        ],
        (a, b) => [a, b],
      ),
      toArray(),
      expectArrayEquals(
        [
          [3, 2],
          [5, 2],
          [5, 4],
          [7, 4],
        ],
        arrayOfArraysEqual,
      ),
    )),

  test("concat", () => {
    pipe(
      concat(ofValue(1), ofValue(2), ofValue(3)),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    );
  }),

  describe(
    "contains",
    test("source is empty", () =>
      pipe(empty<number>(), contains(1), toValue(), expectFalse)),
    test("source contains value", () =>
      pipe(
        generate(increment, returns<number>(0)),
        contains(1),
        toValue(),
        expectTrue,
      )),
    test("source does not contain value", () =>
      pipe(fromArray([2, 3, 4]), contains(1), toValue(), expectFalse)),
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
  ),

  test("distinctUntilChanges", () =>
    pipe(
      fromArray([1, 1, 1, 2, 2, 3, 3, 3]),
      distinctUntilChanged(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  describe(
    "every",
    test("source is empty", () =>
      pipe(empty(), every(alwaysFalse), toValue(), expectTrue)),
    test("source values pass predicate", () =>
      pipe(fromArray([1, 2, 3]), every(alwaysTrue), toValue(), expectTrue)),
    test("source values fail predicate", () =>
      pipe(fromArray([1, 2, 3]), every(alwaysFalse), toValue(), expectFalse)),
  ),

  describe(
    "none",
    test("source is empty", () =>
      pipe(empty(), none(alwaysFalse), toValue(), expectTrue)),
    test("source values pass predicate", () =>
      pipe(fromArray([1, 2, 3]), none(alwaysTrue), toValue(), expectFalse)),
    test("source values fail predicate", () =>
      pipe(fromArray([1, 2, 3]), none(alwaysFalse), toValue(), expectTrue)),
  ),

  describe(
    "forEach",
    test("iterates through all values", () => {
      let acc = 0;
      pipe(
        fromArray([1, 2, 3]),
        forEach(v => {
          acc += v;
        }),
      );
      pipe(acc, expectEquals(6));
    }),
    test("throws if source throws", () => {
      const error = new Error();
      pipe(
        () =>
          pipe(
            throws(returns(error)),
            forEach(v => {}),
          ),
        expectToThrowError(error),
      );
    }),
  ),

  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const factory = () => Promise.resolve(1);
      const result = await pipe(
        factory,
        fromPromise,
        toPromise(promiseScheduler),
      );

      pipe(result, expectEquals(1));
    }),

    testAsync("when the promise reject", async () => {
      const error = new Error();
      const factory = () => Promise.reject(error);

      await pipe(
        pipe(factory, fromPromise, toPromise(promiseScheduler)),
        expectPromiseToThrow,
      );
    }),
  ),

  test("genMap", () =>
    pipe(
      ofValue(undefined),
      genMap(function*(ev) {
        yield 1;
        yield 2;
        yield 3;
      }),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  test("ignoreElements", () =>
    pipe(
      fromArray([1, 2, 3]),
      ignoreElements(),
      endWith(4),
      toArray(),
      expectArrayEquals([4]),
    )),

  test("keep", () =>
    pipe(
      fromArray([1, 2, 3]),
      keep(x => x > 1),
      toArray(),
      expectArrayEquals([2, 3]),
    )),

  test("mapTo", () =>
    pipe(
      fromArray([1, 2, 3]),
      mapTo(2),
      toArray(),
      expectArrayEquals([2, 2, 2]),
    )),

  test("merge", () => {
    pipe(
      merge(
        fromArray([0, 2, 3, 5, 6], { delay: 1 }),
        fromArray([1, 4, 7], { delay: 2 }),
      ),
      toArray(),
      expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
    );
  }),

  test("never", () => pipe(() => pipe(never(), toValue()), expectToThrow)),

  test("reduce", () =>
    pipe(
      fromArray([1, 1, 1]),
      reduce((acc: number, next) => next + acc, returns(0)),
      toValue(),
      expectEquals(3),
    )),

  describe(
    "repeat",
    test("repeats the observable n times", () =>
      pipe(ofValue(1), repeat(3), toArray(), expectArrayEquals([1, 1, 1]))),

    test("when the repeat function throws", () => {
      const error = new Error();

      pipe(
        () =>
          pipe(
            ofValue(1),
            repeat(_ => {
              throw error;
            }),
            toArray(),
          ),
        expectToThrowError(error),
      );
    }),
  ),

  test("scan", () =>
    pipe(
      fromArray([1, 1, 1]),
      scan((acc: number, next) => next + acc, returns(0)),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  test("share", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe(
      fromArray([1, 2, 3], { delay: 1 }),
      share(scheduler, 1),
    );

    let result = [0, 0];
    pipe(
      shared,
      withLatestFrom(shared, (a, b) => [a, b]),
      onNotify(x => {
        result = x;
      }),
      onSubscribe(x => scheduler.run()),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([3, 3]));
  }),

  test("skipFirst", () =>
    pipe(
      fromArray([1, 2, 3, 4, 5]),
      skipFirst(2),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    )),

  test("switchMap", () =>
    pipe(
      fromArray([1, 2, 3], { delay: 1 }),
      switchMap(_ => fromArray([1, 2, 3])),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    )),

  test("takeFirst", () =>
    pipe(
      fromArray([1, 2, 3, 4, 5]),
      takeFirst(2),
      toArray(),
      expectArrayEquals([1, 2]),
    )),

  test("takeLast", () =>
    pipe(
      fromArray([1, 2, 3, 4, 5]),
      takeLast(3),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    )),

  test("takeWhile", () =>
    pipe(
      fromArray([1, 2, 3, 4, 5]),
      takeWhile(x => x < 3),
      toArray(),
      expectArrayEquals([1, 2]),
    )),

  describe(
    "throttle",
    test("first", () =>
      pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(100),
        throttle(50, ThrottleMode.First),
        toArray(),
        expectArrayEquals([0, 49]),
      )),

    test("last", () =>
      pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(200),
        throttle(50, ThrottleMode.Last),
        toArray(),
        expectArrayEquals([49, 99, 149, 199]),
      )),

    test("interval", () =>
      pipe(
        generate(increment, returns<number>(0), 1),
        takeFirst(200),
        throttle(75, ThrottleMode.Interval),
        toArray(),
        expectArrayEquals([0, 74, 149, 199]),
      )),
  ),

  describe(
    "throwIfEmpty",
    test("when source is empty", () =>
      pipe(
        () =>
          pipe(
            empty(),
            throwIfEmpty(() => undefined),
            toValue(),
          ),
        expectToThrow,
      )),

    test("when source is not empty", () =>
      pipe(
        ofValue(1),
        throwIfEmpty(() => undefined),
        toValue(),
        expectEquals(1),
      )),
  ),

  describe(
    "timeout",
    test("throws when a timeout occurs", () =>
      pipe(() => pipe(ofValue(1, 2), timeout(1), toArray()), expectToThrow)),

    test("when timeout is greater than observed time", () =>
      pipe(ofValue(1, 2), timeout(3), toValue(), expectEquals(1))),
  ),

  describe(
    "withLatestFrom",
    test("when source and latest are interlaced", () =>
      pipe(
        fromArray([0, 1, 2, 3], { delay: 1 }),
        withLatestFrom(fromArray([0, 1, 2, 3], { delay: 2 }), (a, b) => [a, b]),
        toArray(),
        expectArrayEquals(
          [
            [1, 0],
            [2, 0],
            [3, 1],
          ],
          arrayOfArraysEqual,
        ),
      )),
  ),

  describe(
    "zip",
    test("zip non-delayed sources", () =>
      pipe(
        zip(
          [
            fromArray([1, 2]),
            pipe(fromArray([1, 2]), map(increment)),
            generate(increment, returns<number>(3)),
          ],
          (x, y, z) => [x, y, z],
        ),
        toArray(),
        expectArrayEquals(
          [
            [1, 2, 3],
            [2, 3, 4],
          ],
          arrayOfArraysEqual,
        ),
      )),
    test("zip with-delayed sources", () =>
      pipe(
        zip(
          [
            fromArray([1, 2], { delay: 1 }),
            fromIterable([2, 3]),
            fromArray([3, 4, 5], { delay: 1 }),
          ],
          (x, y, z) => [x, y, z],
        ),
        toArray(),
        expectArrayEquals(
          [
            [1, 2, 3],
            [2, 3, 4],
          ],
          arrayOfArraysEqual,
        ),
      )),
  ),
);