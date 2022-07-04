import {
  compute,
  concatMap,
  concatWith,
  empty,
  fromValue,
  throws,
  zipWith,
} from "../container";
import { dispose } from "../disposable";
import { forEach as enumeratorForEach } from "../enumerator";
import {
  arrayEquality,
  identity,
  ignore,
  increment,
  incrementBy,
  newInstance,
  pipe,
  pipeLazy,
  raise,
  returns,
  sum,
} from "../functions";
import { genMap } from "../liftable";
import {
  ObservableLike,
  Subject,
  __do,
  __memo,
  __observe,
  buffer,
  catchError,
  combineLatestWith,
  concat,
  concatAllT,
  concatT,
  createObservable,
  distinctUntilChanged,
  exhaustT,
  fromArray,
  fromArrayT,
  fromIterable,
  fromIteratorT,
  fromPromise,
  generate,
  getObserverCount,
  keepT,
  map,
  mapT,
  merge,
  mergeAllT,
  mergeT,
  never,
  observable,
  onNotify,
  onSubscribe,
  repeat,
  retry,
  scan,
  scanAsync,
  share,
  skipFirst,
  subscribe,
  switchAll,
  switchAllT,
  takeFirst,
  takeLast,
  takeWhile,
  throttle,
  throwIfEmpty,
  timeout,
  toPromise,
  toRunnable,
  withLatestFrom,
  zip,
  zipLatestWith,
  zipT,
  zipWithLatestFrom,
} from "../observable";
import { Option, isSome } from "../option";
import {
  forEach,
  fromArray as fromArrayRunnable,
  last,
  toArray,
} from "../runnable";
import { createHostScheduler, createVirtualTimeScheduler } from "../scheduler";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectNone,
  expectPromiseToThrow,
  expectSome,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowError,
  mockFn,
  test,
  testAsync,
} from "../testing";
import { createZippableTests } from "./enumerable.test";
import { createRunnableTests } from "./runnable.test";

export const tests = describe(
  "observable",

  describe(
    "buffer",
    test(
      "with duration and maxBufferSize",
      pipeLazy(
        concat(
          pipe([1, 2, 3, 4], fromArray()),
          pipe([1, 2, 3], fromArray({ delay: 1 })),
          pipe(4, fromValue(fromArrayT, { delay: 8 })),
        ),
        buffer({ duration: 4, maxBufferSize: 3 }),
        toRunnable(),
        toArray(),
        expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()),
      ),
    ),
    test(
      "when duration observable throws",
      pipeLazy(
        pipeLazy(
          [1, 2, 3, 4],
          fromArray(),
          buffer({ duration: _ => throws({ ...fromArrayT, ...mapT })(raise) }),
          toRunnable({
            schedulerFactory: pipeLazy(
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
      pipeLazy(
        pipe(1, fromValue(fromArrayT)),
        catchError(_ => fromValue(fromArrayT)(2)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1]),
      ),
    ),
    test("source throws, error caught and ignored", () => {
      const error = newInstance(Error);
      pipe(
        1,
        fromValue(fromArrayT),
        concatWith(
          concatT,
          pipe(error, returns, throws({ ...fromArrayT, ...mapT })),
        ),
        catchError(ignore),
        toRunnable(),
        toArray(),
        expectArrayEquals([1]),
      );
    }),
    test("source throws, continues with second observable", () => {
      const error = newInstance(Error);
      pipe(
        1,
        fromValue(fromArrayT),
        concatWith(
          concatT,
          pipe(error, returns, throws({ ...fromArrayT, ...mapT })),
        ),
        catchError(_ => fromValue(fromArrayT)(2)),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 2]),
      );
    }),
    test("source throws, catch throws", () => {
      const error = newInstance(Error);
      expectToThrow(() =>
        pipe(
          1,
          fromValue(fromArrayT),
          concatWith(
            concatT,
            pipe(error, returns, throws({ ...fromArrayT, ...mapT })),
          ),
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
    pipeLazy(
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
      const cause = newInstance(Error);
      const observable = createObservable(_ => {
        throw cause;
      });
      pipe(
        () => pipe(observable, toRunnable(), last()),
        expectToThrowError(cause),
      );
    }),
    test(
      "when queuing multiple events",
      pipeLazy(
        createObservable(({ dispatcher }) => {
          dispatcher.dispatch(1);
          dispatcher.dispatch(2);
          dispatcher.dispatch(3);
          pipe(dispatcher, dispose());
        }),
        toRunnable({
          schedulerFactory: pipeLazy(
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
    "Subject",
    test("with replay", () => {
      const subject = newInstance(Subject, 2);
      pipe(
        [1, 2, 3, 4],
        fromArrayRunnable(),
        forEach(x => subject.publish(x)),
      );
      pipe(subject, dispose());

      pipe(subject, toRunnable(), toArray(), expectArrayEquals([3, 4]));
    }),
    test("with multiple observers", () => {
      const scheduler = createVirtualTimeScheduler();

      const subject = newInstance(Subject);
      pipe(subject, getObserverCount, expectEquals(0));
      const sub1 = pipe(subject, subscribe(scheduler));
      pipe(subject, getObserverCount, expectEquals(1));
      const sub2 = pipe(subject, subscribe(scheduler));
      pipe(subject, getObserverCount, expectEquals(2));
      pipe(sub1, dispose());
      pipe(subject, getObserverCount, expectEquals(1));
      pipe(sub2, dispose());
      pipe(subject, getObserverCount, expectEquals(0));
    }),
  ),
  test(
    "exhaustMap",
    pipeLazy(
      [fromArray()([1, 2, 3]), fromArray()([4, 5, 6]), fromArray()([7, 8, 9])],
      fromArray(),
      concatMap({ ...exhaustT, ...mapT }, (x: ObservableLike<number>) => x),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const scheduler = createHostScheduler();
      const factory = () => Promise.resolve(1);
      const result = await pipe(factory, fromPromise, toPromise(scheduler));

      pipe(result, expectEquals(1));
      scheduler.dispose();
    }),

    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const factory = () => Promise.reject(error);
      const scheduler = createHostScheduler();

      await pipe(
        pipe(factory, fromPromise, toPromise(scheduler)),
        expectPromiseToThrow,
      );
      scheduler.dispose();
    }),
  ),

  test(
    "genMap",
    pipeLazy(
      undefined,
      fromValue(fromArrayT),
      genMap({ ...concatAllT, ...fromIteratorT, ...mapT }, function* (_) {
        yield 1;
        yield 2;
        yield 3;
      }),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  describe(
    "merge",
    test(
      "two arrays",
      pipeLazy(
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
      pipeLazy(
        pipeLazy(
          [1, 4, 7],
          fromArray({ delay: 2 }),
          concatWith(
            mergeT,
            throws({ ...fromArrayT, ...mapT }, { delay: 5 })(raise),
          ),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),
  ),

  describe(
    "mergeMap",
    test(
      "when a mapped observable throws",
      pipeLazy(
        pipeLazy(
          [
            fromArray({ delay: 1 })([1, 2, 3]),
            throws({ ...fromArrayT, ...mapT }, { delay: 2 })(raise),
          ],
          fromArray(),
          concatMap<
            ObservableLike<unknown>,
            ObservableLike<ObservableLike<number>>,
            ObservableLike<number>
          >({ ...mergeAllT, ...mapT }, identity),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),
    test(
      "when the map function throws",
      pipeLazy(
        pipeLazy(
          [1, 2, 3, 4],
          fromArray(),
          concatMap({ ...mergeAllT, ...mapT }, (x: number) => {
            if (x > 2) {
              raise();
            }
            return fromValue(fromArrayT)(x);
          }),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),
  ),

  test("never", pipeLazy(never(), toRunnable(), last(), expectNone)),
  test("observable", () => {
    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> => fromValue(fromArrayT, { delay })(value);
    const emptyDelayed = empty(fromArrayT, { delay: 100 });

    const computedObservable = observable(() => {
      const obs1 = __memo(fromValueWithDelay, 10, 5);
      const result1 = __observe(obs1) ?? 0;
      const obs2 = __memo(fromValueWithDelay, 20, 10);
      const result2 = __observe(obs2) ?? 0;
      const obs3 = __memo(fromValueWithDelay, 30, 7);
      const result3 = __observe(obs3) ?? 0;
      __observe(emptyDelayed);

      return result1 + result2 + result3;
    });
    pipe(
      computedObservable,
      takeLast(),
      toRunnable(),
      last(),
      expectEquals(22),
    );

    // switch map test
    const oneTwoThreeDelayed = fromArray({ delay: 1 })([1, 2, 3]);
    const createOneTwoThree = (x: Option<unknown>) =>
      isSome(x) ? fromArray()([1, 2, 3]) : empty(fromArrayT);
    pipe(
      observable(
        () => {
          const v = __observe(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __observe(next);
        },
        { mode: "combine-latest" },
      ),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    );
  }),

  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = createVirtualTimeScheduler();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(1, fromValue(fromArrayT), onSubscribe(f), subscribe(scheduler));

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      pipe(scheduler, enumeratorForEach(ignore));

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback function throws", () => {
      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(
        1,
        fromValue(fromArrayT),
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
      const src = createObservable(({ dispatcher }) => {
        dispatcher.dispatch(1);
        if (retried) {
          dispatcher.dispatch(2);
          dispatcher.dispose();
        } else {
          retried = true;
          pipe(dispatcher, dispose({ cause: newInstance(Error) }));
        }
      });
      pipe(src, retry(), toRunnable(), toArray(), expectArrayEquals([1, 1, 2]));
    }),
  ),

  describe(
    "scanAsync",
    test(
      "fast lib, slow acc",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>(
          (acc, x) => fromValue(fromArrayT, { delay: 4 })(x + acc),
          returns(0),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, fast acc",
      pipeLazy(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>(
          (acc, x) => fromValue(fromArrayT)(x + acc),
          returns(0),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, slow acc",
      pipeLazy(
        [1, 2, 3],
        fromArray({ delay: 4 }),
        scanAsync<number, number>(
          (acc, x) => fromValue(fromArrayT, { delay: 4 })(x + acc),
          returns(0),
        ),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "fast lib, fast acc",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        scanAsync<number, number>(
          (acc, x) => fromValue(fromArrayT)(x + acc),
          returns(0),
        ),
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

    pipe(scheduler, enumeratorForEach(ignore));
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),

  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        empty(fromArrayT),
        switchAll(),
        toRunnable(),
        toArray(),
        expectArrayEquals([]),
      ),
    ),

    test(
      "when source throw",
      pipeLazy(
        pipeLazy(
          raise,
          throws({ ...fromArrayT, ...mapT }),
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
    pipeLazy(
      [1, 2, 3],
      fromArray({ delay: 1 }),
      concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], fromArray())),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),

  describe(
    "takeLast",
    test(
      "when pipeline throws",
      pipeLazy(
        pipeLazy(
          raise,
          throws({ ...fromArrayT, ...mapT }),
          takeLast(),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 100 }),
        throttle(50, { mode: "first" }),
        toRunnable(),
        toArray(),
        expectArrayEquals([0, 49]),
      ),
    ),

    test(
      "last",
      pipeLazy(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 200 }),
        throttle(50, { mode: "last" }),
        toRunnable(),
        toArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),

    test(
      "interval",
      pipeLazy(
        generate(increment, returns<number>(-1), { delay: 1 }),
        takeFirst({ count: 200 }),
        throttle(75, { mode: "interval" }),
        toRunnable(),
        toArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),

    test(
      "when duration observable throws",
      pipeLazy(
        pipeLazy(
          [1, 2, 3, 4, 5],
          fromArray({ delay: 1 }),
          throttle(_ => throws({ ...fromArrayT, ...mapT })(raise)),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "throwIfEmpty",
    test(
      "when source is empty",
      pipeLazy(
        pipeLazy(
          empty(fromArrayT),
          throwIfEmpty(() => undefined),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),

    test(
      "when source is not empty",
      pipeLazy(
        1,
        returns,
        compute({ ...fromArrayT, ...mapT }),
        throwIfEmpty(() => undefined),
        toRunnable(),
        last(),
        expectEquals(1),
      ),
    ),
  ),

  describe(
    "timeout",
    test(
      "throws when a timeout occurs",
      pipeLazy(
        pipeLazy(1, fromValue(fromArrayT, { delay: 2 }), timeout(1), toArray()),
        expectToThrow,
      ),
    ),

    test(
      "when timeout is greater than observed time",
      pipeLazy(
        1,
        fromValue(fromArrayT, { delay: 2 }),
        timeout(3),
        toRunnable(),
        last(),
        expectEquals(1),
      ),
    ),
  ),

  describe(
    "toPromise",
    testAsync(
      "when observable completes without producing a value",
      async () => {
        const scheduler = createHostScheduler();
        await pipe(
          pipe(empty(fromArrayT), toPromise(scheduler)),
          expectPromiseToThrow,
        );
        scheduler.dispose();
      },
    ),
  ),

  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
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
      pipeLazy(
        [0],
        fromArray({ delay: 1 }),
        withLatestFrom(empty(fromArrayT), sum),
        toRunnable(),
        toArray(),
        expectArrayEquals([]),
      ),
    ),
    test("when latest throws", () => {
      const error = newInstance(Error);

      pipe(
        pipeLazy(
          [0],
          fromArray({ delay: 1 }),
          withLatestFrom(
            throws({ ...fromArrayT, ...mapT })(returns(error)),
            sum,
          ),
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
      "with synchronous and non-synchronous sources",
      pipeLazy(
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
      pipeLazy(
        [1, 2, 3],
        fromArray({ delay: 1 }),
        zipWith(zipT, pipe([1, 2, 3], fromArray({ delay: 5 }))),
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
      pipeLazy(
        pipeLazy(
          raise,
          throws({ ...fromArrayT, ...mapT }),
          zipWith(zipT, fromArray()([1, 2, 3])),
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
    pipeLazy(
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
      pipeLazy(
        pipeLazy(
          throws({ ...fromArrayT, ...mapT })(raise),
          zipWithLatestFrom(fromValue(fromArrayT)(1), (_, b) => b),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),

    test(
      "when other throws",
      pipeLazy(
        pipeLazy(
          [1, 2, 3],
          fromArray({ delay: 1 }),
          zipWithLatestFrom(
            throws({ ...fromArrayT, ...mapT })(raise),
            (_, b) => b,
          ),
          toRunnable(),
          last(),
        ),
        expectToThrow,
      ),
    ),

    test(
      "when other completes first",
      pipeLazy(
        [1],
        fromArray({ delay: 1 }),
        zipWithLatestFrom(fromArray()([2]), (_, b) => b),
        toRunnable(),
        last(),
        expectEquals(2),
      ),
    ),
  ),
  createRunnableTests({
    ...concatT,
    ...concatAllT,
    ...fromArrayT,
    ...keepT,
    distinctUntilChanged,
    generate,
    map,
    repeat,
    scan,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable,
  }),
  createZippableTests({ ...fromArrayT, generate, map, toRunnable, zip }),
);
