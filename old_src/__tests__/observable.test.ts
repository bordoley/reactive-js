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
import { genMap } from "../liftableContainer";
import {
  ObservableLike,
  Subject,
  __do,
  __memo,
  __observe,
  buffer,
  catchError,
  combineLatestT,
  concat,
  concatAllT as concatAllTObs,
  createObservable,
  exhaustT,
  fromArray,
  fromIterable,
  fromIteratorT,
  fromPromise,
  generate,
  getObserverCount,
  map,
  mapT as mapTObs,
  merge,
  mergeAllT,
  mergeT,
  never,
  observable,
  onNotify,
  onSubscribe,
  publishTo,
  retry,
  scanAsync,
  share,
  subscribe,
  switchAllT,
  takeFirst,
  takeLast,
  throttle,
  throwIfEmpty,
  timeout,
  toPromise,
  toRunnable,
  withLatestFrom,
  zip,
  zipLatestT,
  zipT as zipTObs,
  zipWithLatestFrom,
} from "../observable";
import { Option, isSome } from "../option";
import {
  forEach,
  fromArray as fromArrayRunnable,
  last,
  toArray,
} from "../runnable";
import {
  concatAllT,
  concatT,
  distinctUntilChangedT,
  fromArrayT,
  generateT,
  keepT,
  mapT,
  repeatT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  toRunnableT,
  zipT,
} from "../runnableObservable";
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
    "exhaustMap",
    pipeLazy(
      [fromArray()([1, 2, 3]), fromArray()([4, 5, 6]), fromArray()([7, 8, 9])],
      fromArray(),
      concatMap({ ...exhaustT, ...mapTObs }, (x: ObservableLike<number>) => x),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),

  test(
    "genMap",
    pipeLazy(
      undefined,
      fromValue(fromArrayT),
      genMap({ ...concatAllTObs, ...fromIteratorT, ...mapTObs }, function* (_) {
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
          >({ ...mergeAllT, ...mapTObs }, identity),
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
          concatMap({ ...mergeAllT, ...mapTObs }, (x: number) => {
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
        zipWith(zipTObs, pipe([1, 2, 3], fromArray({ delay: 5 }))),
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
          zipWith(zipTObs, fromArray()([1, 2, 3])),
          map(([, b]) => b),
          toRunnable(),
          toArray(),
        ),
        expectToThrow,
      ),
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

  test("fromIterable with no start delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const publishTimes: number[] = [];
    pipe(
      [1, 2, 3],
      fromIterable({ delay: 2, delayStart: false }),
      onNotify(_ => publishTimes.push(scheduler.now)),
      subscribe(scheduler),
    );

    pipe(scheduler, enumeratorForEach(ignore));

    pipe(publishTimes, expectArrayEquals([0, 2, 4]));
  }),
  test("generate with no start delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const publishTimes: number[] = [];
    pipe(
      generate(incrementBy(2), returns(1), { delay: 2, delayStart: false }),
      takeFirst({ count: 3 }),
      onNotify(_ => publishTimes.push(scheduler.now)),
      subscribe(scheduler),
    );

    pipe(scheduler, enumeratorForEach(ignore));

    pipe(publishTimes, expectArrayEquals([0, 2, 4]));
  }),
);
