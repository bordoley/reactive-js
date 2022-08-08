import { concatMap, concatWith, fromValue, throws } from "../container";
import { forEach as enumeratorForEach } from "../enumerator";
import {
  identity,
  ignore,
  increment,
  incrementBy,
  newInstance,
  pipe,
  pipeLazy,
  raise,
  returns,
} from "../functions";
import { genMap } from "../liftableContainer";
import {
  ObservableLike,
  __do,
  __memo,
  __observe,
  catchError,
  concatAllT as concatAllTObs,
  exhaustT,
  fromArray,
  fromIterable,
  fromIteratorT,
  generate,
  mapT as mapTObs,
  mergeAllT,
  onNotify,
  subscribe,
  takeFirst,
  takeLast,
  throttle,
  timeout,
  toRunnable,
} from "../observable";
import { last, toArray } from "../runnable";
import { concatT, fromArrayT, mapT } from "../runnableObservable";
import { createVirtualTimeScheduler } from "../scheduler";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  test,
} from "../testing";

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
