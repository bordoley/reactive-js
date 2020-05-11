import {
  compose,
  pipe,
  returns,
  increment,
  alwaysFalse,
  alwaysTrue,
  arrayEquals,
  referenceEquals,
  identity,
} from "../src/functions";
import {
  forEach as forEachEnumerable,
  fromArray as fromArrayEnumerable,
} from "../src/enumerable";
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
  mockFn,
  expectToHaveBeenCalledTimes,
  expectSome,
} from "../src/internal/testing";

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

  describe(
    "buffer",
    test("with duration and maxBufferSize", () =>
      pipe(
        concat(
          pipe([1, 2, 3, 4], fromArray()),
          pipe([1, 2, 3], fromArray({ delay: 1 })),
          pipe(4, fromValue({ delay: 8 })),
        ),
        buffer({ duration: 4, maxBufferSize: 3 }),
        toArray(),
        expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayOfArraysEqual),
      )),
    test("when duration observable throws", () =>
      expectToThrow(() =>
        pipe(
          [1, 2, 3, 4],
          fromArray(),
          buffer({ duration: _ => throws()(() => new Error()) }),
          toArray(() => createVirtualTimeScheduler({ maxMicroTaskTicks: 1 })),
        ),
      )),
  ),

  describe(
    "catchError",
    test("source completes successfully", () =>
      pipe(
        pipe(1, fromValue()),
        catchError(_ => fromValue()(2)),
        toArray(),
        expectArrayEquals([1]),
      )),
    test("source throws, error caught and ignored", () => {
      const error = new Error();
      pipe(
        1, 
        fromValue(),
        concatWith(pipe(error, returns, throws())),
        catchError(_ => {}),
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

  test("combineLatest", () =>
    pipe(
      generate((i: number) => i + 2, returns(3), { delay: 2 }),
      takeFirst(3),
      combineLatestWith(
        pipe(
          generate((i: number) => i + 2, returns(2), { delay: 3 }),
          takeFirst(2),
        ),
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
    test("when queuing multiple events", () =>
      pipe(
        createObservable(dispatcher => {
          dispatcher.dispatch(1);
          dispatcher.dispatch(2);
          dispatcher.dispatch(3);
          dispatcher.dispose();
        }),
        toArray(() => createVirtualTimeScheduler({ maxMicroTaskTicks: 1 })),
        expectArrayEquals([1, 2, 3]),
      )),
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
      subject.dispose();

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
      sub1.dispose();
      pipe(subject.subscriberCount, expectEquals(1));
      sub2.dispose();
      pipe(subject.subscriberCount, expectEquals(0));
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
      pipe(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysTrue),
        toValue(),
        expectTrue,
      )),
    test("source values fail predicate", () =>
      pipe(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysFalse),
        toValue(),
        expectFalse,
      )),
    test("when the predicate throws", () =>
      expectToThrow(() =>
        pipe(
          [1, 2, 3],
          fromArray(),
          everySatisfy(_ => {
            throw new Error();
          }),
          toValue(),
        ),
      )),
  ),

  test("exhaustMap", () =>
    pipe(
      [fromArray()([1, 2, 3]), fromArray()([4, 5, 6]), fromArray()([7, 8, 9])],
      fromArray(),
      exhaustMap(identity),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    )),

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
            error,
            returns,
            throws(),
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

  describe(
    "merge",
    test("two arrays", () =>
      pipe(
        merge(
          pipe([0, 2, 3, 5, 6], fromArray({ delay: 1 })),
          pipe([1, 4, 7], fromArray({ delay: 2 })),
        ),
        toArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      )),
    test("when one source throws", () =>
      expectToThrow(() =>
        pipe(
          [1, 4, 7], 
          fromArray({ delay: 2 }),
          mergeWith(
            throws({ delay: 5 })(() => new Error()),
          ),
          toValue(),
        ),
      )),
  ),

  describe(
    "mergeMap",
    test("when a mapped observable throws", () =>
      expectToThrow(() =>
        pipe(
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
      )),
    test("when the map function throws", () =>
      expectToThrow(() =>
        pipe(
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
      )),
  ),

  test("never", () => expectToThrow(() => pipe(never(), toValue()))),

  describe(
    "noneSatisfy",
    test("source is empty", () =>
      pipe(empty(), noneSatisfy(alwaysFalse), toValue(), expectTrue)),
    test("source values pass predicate", () =>
      pipe(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(alwaysTrue),
        toValue(),
        expectFalse,
      )),
    test("source values fail predicate", () =>
      pipe(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(alwaysFalse),
        toValue(),
        expectTrue,
      )),
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
          d.dispose({ cause: new Error() });
        }
      });
      pipe(src, retry(), toArray(), expectArrayEquals([1, 1, 2]));
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

  describe(
    "scanAsync",
    test("fast src, slow acc", () =>
      pipe(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>(
          (acc, x) => fromValue({ delay: 4 })(x + acc),
          () => 0,
        ),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      )),

    test("slow src, fast acc", () =>
      pipe(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>(
          (acc, x) => fromValue()(x + acc),
          () => 0,
        ),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      )),

    test("slow src, slow acc", () =>
      pipe(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>(
          (acc, x) => fromValue({ delay: 4 })(x + acc),
          () => 0,
        ),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      )),

    test("fast src, fast acc", () =>
      pipe(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>(
          (acc, x) => fromValue()(x + acc),
          () => 0,
        ),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      )),
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
      zip([shared, shared], (a, b) => a + b),
      buffer(),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),

  test("skipFirst", () =>
    pipe(
      [1, 2, 3, 4, 5],
      fromArray(),
      skipFirst(2),
      toArray(),
      expectArrayEquals([3, 4, 5]),
    )),

  describe(
    "someSatisfy",
    test("when predicate throws", () =>
      expectToThrow(() =>
        pipe(
          1,
          fromValue(),
          someSatisfy(_ => {
            throw new Error();
          }),
          toValue(),
        ),
      )),
  ),

  test("startWith", () =>
    pipe(
      [1, 2, 3],
      fromArray(),
      startWith(0),
      toArray(),
      expectArrayEquals([0, 1, 2, 3]),
    )),

  describe(
    "switchAll",
    test("with empty source", () =>
      pipe(empty(), switchAll(), toArray(), expectArrayEquals([]))),

    test("when source throw", () =>
      expectToThrow(() =>
        pipe(
          () => new Error(),
          throws(),
          switchAll(),
          toArray(),
          expectArrayEquals([]),
        ),
      )),
  ),

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

  describe(
    "takeLast",
    test("takes the last n items", () =>
      pipe(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeLast(3),
        toArray(),
        expectArrayEquals([3, 4, 5]),
      )),
    test("when pipeline throws", () =>
      expectToThrow(() =>
        pipe(() => new Error(), throws(), takeLast(), toValue()),
      )),
  ),

  describe(
    "takeWhile",
    test("exclusive", () =>
      pipe(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeWhile(x => x < 3),
        toArray(),
        expectArrayEquals([1, 2]),
      )),
    test("inclusive", () =>
      pipe(
        [1, 2, 3, 4, 5],
        fromArray(),
        takeWhile(x => x < 3, { inclusive: true }),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      )),
  ),

  describe(
    "throttle",
    test("first", () =>
      pipe(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(100),
        throttle(50, ThrottleMode.First),
        toArray(),
        expectArrayEquals([0, 49]),
      )),

    test("last", () =>
      pipe(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(200),
        throttle(50, ThrottleMode.Last),
        toArray(),
        expectArrayEquals([49, 99, 149, 199]),
      )),

    test("interval", () =>
      pipe(
        generate(increment, returns<number>(0), { delay: 1 }),
        takeFirst(200),
        throttle(75, ThrottleMode.Interval),
        toArray(),
        expectArrayEquals([0, 74, 149, 199]),
      )),

    test("when duration observable throws", () =>
      expectToThrow(() =>
        pipe(
          [1, 2, 3, 4, 5],
          fromArray({ delay: 1 }),
          throttle(_ => throws()(() => new Error())),
          toValue(),
        ),
      )),
  ),
  describe(
    "throwIfEmpty",
    test("when source is empty", () =>
      expectToThrow(() =>
        pipe(
          empty(),
          throwIfEmpty(() => undefined),
          toValue(),
        ),
      )),

    test("when source is not empty", () =>
      pipe(
        1,
        returns,
        compute(),
        throwIfEmpty(() => undefined),
        toValue(),
        expectEquals(1),
      )),
  ),

  describe(
    "timeout",
    test("throws when a timeout occurs", () =>
      expectToThrow(() =>
        pipe(1, fromValue({ delay: 2 }), timeout(1), toArray()),
      )),

    test("when timeout is greater than observed time", () =>
      pipe(1, fromValue({ delay: 2 }), timeout(3), toValue(), expectEquals(1))),
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
    test("when latest produces no values", () =>
      pipe(
        [0],
        fromArray({ delay: 1 }),
        withLatestFrom(empty<number>(), (a, b) => a + b),
        toArray(),
        expectArrayEquals([]),
      )),
    test("when latest throws", () => {
      const error = new Error();

      pipe(
        () =>
          pipe(
            [0],
            fromArray({ delay: 1 }),
            withLatestFrom(throws<number>()(returns(error)), (a, b) => a + b),
            toArray(),
            expectArrayEquals([]),
          ),
        expectToThrowError(error),
      );
    }),
  ),

  describe(
    "zip",
    test("with non-delayed sources", () =>
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
    test("with synchronous and non-synchronous sources", () =>
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
    test("fast with slow", () =>
      pipe(
        [1, 2, 3],
        fromArray({ delay: 1 }),
        zipWith(
          pipe([1, 2, 3], fromArray({ delay: 5 })),
          (x, y) => [x, y],
        ),
        toArray(),
        expectArrayEquals(
          [
            [1, 1],
            [2, 2],
            [3, 3],
          ],
          arrayOfArraysEqual,
        ),
      )),
    test("when source throws", () =>
      expectToThrow(() =>
        pipe(
          () => {
            throw new Error();
          },
          throws(),
          zipWith(
            fromArray()([1, 2, 3]),
            (_, b) => b,
          ),
          toArray(),
        ),
      )),
  ),

  describe(
    "zipWithLatestFrom",
    test("when source throws", () =>
      pipe(
        () =>
          pipe(
            throws()(() => new Error()),
            zipWithLatestFrom(fromValue()(1), (_, b) => b),
            toValue(),
          ),
        expectToThrow,
      )),

    test("when other throws", () =>
      pipe(
        () =>
          pipe(
            [1, 2, 3],
            fromArray({ delay: 1 }),
            zipWithLatestFrom(
              throws()(() => new Error()),
              (_, b) => b,
            ),
            toValue(),
          ),
        expectToThrow,
      )),

    test("when other throws", () =>
      pipe(
        [1],
        fromArray({ delay: 1 }),
        zipWithLatestFrom(fromArray()([2]), (_, b) => b),
        toValue(),
        expectEquals(2),
      )),
  ),
);
