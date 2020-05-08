import {
  compose,
  pipe,
  returns,
  increment,
  alwaysFalse,
  alwaysTrue,
  arrayEquals,
  referenceEquals,
} from "../src/functions";
import {
  await_,
  buffer,
  combineLatest,
  concat,
  contains,
  createObservable,
  distinctUntilChanged,
  empty,
  everySatisfy,
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
  noneSatisfy,
  fromValue,
  onNotify,
  repeat,
  scan,
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
  //onSubscribe,
} from "../src/observable";
import {
  createHostScheduler,
  createVirtualTimeScheduler,
} from "../src/scheduler";
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
} from "../src/testing";
import { Option } from "../src/option";
import { Exception } from "../src/disposable";

const scheduler = createHostScheduler();

const arrayOfArraysEqual = arrayEquals<number>(referenceEquals);

export const tests = describe(
  "observable",
  test("await_", () => {
    pipe(
      [0, 1, 2, 3, 4],
      fromArray(),
      await_(compose(fromValue(), endWith(1))),
      toValue(),
      expectEquals(0),
    );
  }),
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
      catchError(_ => fromValue()(1)),
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
      concat(fromValue()(1), fromValue()(2), fromValue()(3)),
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
      pipe([2, 3, 4], fromArray(), contains(1), toValue(), expectFalse)),
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
      [1, 1, 1, 2, 2, 3, 3, 3],
      fromArray(),
      distinctUntilChanged(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  describe(
    "everySatisfy",
    test("source is empty", () =>
      pipe(empty(), everySatisfy(alwaysFalse), toValue(), expectTrue)),
    test("source values pass predicate", () =>
      pipe([1, 2, 3], fromArray(), everySatisfy(alwaysTrue), toValue(), expectTrue)),
    test("source values fail predicate", () =>
      pipe([1, 2, 3], fromArray(), everySatisfy(alwaysFalse), toValue(), expectFalse)),
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
        () =>
          pipe(
            throws(returns(error)),
            forEach(_ => {}),
          ),
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

  test("genMap", () =>
    pipe(
      undefined,
      fromValue(),
      genMap(function*(_) {
        yield 1;
        yield 2;
        yield 3;
      }),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  test("ignoreElements", () =>
    pipe(
      [1, 2, 3],
      fromArray(),
      ignoreElements(),
      endWith(4),
      toArray(),
      expectArrayEquals([4]),
    )),

  test("keep", () =>
    pipe(
      [1, 2, 3],
      fromArray(),
      keep(x => x > 1),
      toArray(),
      expectArrayEquals([2, 3]),
    )),

  test("mapTo", () =>
    pipe(
      [1, 2, 3],
      fromArray(),
      mapTo(2),
      toArray(),
      expectArrayEquals([2, 2, 2]),
    )),

  test("merge", () => {
    pipe(
      merge(
        pipe([0, 2, 3, 5, 6], fromArray({ delay: 1 })),
        pipe([1, 4, 7], fromArray({ delay: 2 })),
      ),
      toArray(),
      expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
    );
  }),

  test("never", () => pipe(() => pipe(never(), toValue()), expectToThrow)),

  describe(
    "noneSatisfy",
    test("source is empty", () =>
      pipe(empty(), noneSatisfy(alwaysFalse), toValue(), expectTrue)),
    test("source values pass predicate", () =>
      pipe([1, 2, 3], fromArray(), noneSatisfy(alwaysTrue), toValue(), expectFalse)),
    test("source values fail predicate", () =>
      pipe([1, 2, 3], fromArray(), noneSatisfy(alwaysFalse), toValue(), expectTrue)),
  ),

  test("reduce", () =>
    pipe(
      [1, 1, 1],
      fromArray(),
      reduce((acc: number, next) => next + acc, returns(0)),
      toValue(),
      expectEquals(3),
    )),

  describe(
    "repeat",
    test("repeats the observable n times", () =>
      pipe(1, fromValue(), repeat(3), toArray(), expectArrayEquals([1, 1, 1]))),

    test("when the repeat function throws", () => {
      const error = new Error();

      pipe(
        () =>
          pipe(
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

  test("scan", () =>
    pipe(
      [1, 1, 1],
      fromArray(),
      scan((acc: number, next) => next + acc, returns(0)),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

  test("share", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      share(scheduler, 1),
    );

    let err: Option<Exception> = undefined;
    pipe(
      zip([shared, shared], (a, b) => a + b),
      buffer(),
      onNotify(expectArrayEquals([2, 4, 6])),
      subscribe(scheduler),
    ).add(e => { 
      err = e
    });

    scheduler.run();

    if(err !== undefined) {
      const { cause } = err;
      throw cause;
    }
  }),

  test("skipFirst", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray(),
      skipFirst(2),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    )),

  test("switchMap", () =>
    pipe(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      switchMap(_ => pipe([1, 2, 3], fromArray())),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    )),

  test("takeFirst", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray(),
      takeFirst(2),
      toArray(),
      expectArrayEquals([1, 2]),
    )),

  test("takeLast", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray(),
      takeLast(3),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    )),

  test("takeWhile", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray(),
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
        1,
        fromValue(),
        throwIfEmpty(() => undefined),
        toValue(),
        expectEquals(1),
      )),
  ),

  describe(
    "timeout",
    test("throws when a timeout occurs", () =>
      pipe(
        () => pipe(1, fromValue({ delay: 2 }), timeout(1), toArray()),
        expectToThrow,
      )),

    test("when timeout is greater than observed time", () =>
      pipe(1, fromValue({ delay: 2 }), timeout(3), toValue(), expectEquals(1))),
  ),

  describe(
    "withLatestFrom",
    test("when source and latest are interlaced", () =>
      pipe(
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
            pipe([1, 2], fromArray()),
            pipe([1, 2], fromArray(), map(increment)),
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
            pipe([1, 2], fromArray({ delay: 1 })),
            pipe([2, 3], fromIterable()),
            pipe([3, 4, 5], fromArray({ delay: 1 })),
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
