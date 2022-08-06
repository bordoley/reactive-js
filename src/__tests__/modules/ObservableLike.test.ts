import {
  describe,
  expectArrayEquals,
  expectIsSome,
  expectPromiseToThrow,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  mockFn,
  test,
  testAsync,
} from "../../__internal__/testing";
import { concatMap, throws } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import {
  arrayEquality,
  incrementBy,
  pipe,
  pipeLazy,
  raise,
  returns,
} from "../../functions";
import { toReadonlyArray as enumerableToReadonlyArray } from "../../ix/EnumerableLike";
import {
  ObservableLike,
  deferObservable,
  emptyObservable,
  enumerableObservableType,
  generateObservable,
} from "../../rx";
import {
  bufferT,
  combineLatest,
  concatT,
  decodeWithCharsetT,
  distinctUntilChangedT,
  forEach,
  forEachT,
  keepT,
  map,
  mapT,
  merge,
  onSubscribe,
  pairwiseT,
  reduceT,
  scanT,
  share,
  skipFirstT,
  subscribe,
  switchAll,
  switchAllT,
  takeFirst,
  takeFirstT,
  takeLastT,
  takeUntil,
  takeWhileT,
  throwIfEmptyT,
  toEnumerable,
  toPromise,
  toReadonlyArray,
  toReadonlyArrayT,
  zip,
  zipLatest,
  zipT,
} from "../../rx/ObservableLike";
import {
  createHostScheduler,
  createVirtualTimeScheduler,
} from "../../scheduling";
import { run } from "../../util/ContinuationLike";
import { dispose, getException } from "../../util/DisposableLike";
import {
  bufferTests,
  concatTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  forEachTests,
  keepTests,
  mapTests,
  pairwiseTests,
  reduceTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  zipTests,
} from "../operators";

export const ObservableLikeTests = describe(
  "ObservableLike",
  bufferTests({
    fromArray: toObservable,
    ...bufferT,
    ...toReadonlyArrayT,
  }),
  describe(
    "combineLatest",
    test(
      "combineLatest",
      pipeLazy(
        combineLatest(
          pipe(
            generateObservable(incrementBy(2), returns(1), { delay: 2 }),
            takeFirst({ count: 3 }),
          ),
          pipe(
            generateObservable(incrementBy(2), returns(0), { delay: 3 }),
            takeFirst({ count: 2 }),
          ),
        ),
        toReadonlyArray(),
        expectArrayEquals(
          [[3, 2] as readonly [number, number], [5, 2], [5, 4], [7, 4]],
          arrayEquality(),
        ),
      ),
    ),
  ),
  concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  decodeWithCharsetTests({
    fromArray: toObservable,
    defer: f => deferObservable(f, { type: enumerableObservableType }),
    ...decodeWithCharsetT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
  }),
  keepTests({
    fromArray: toObservable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  describe(
    "merge",
    test(
      "two arrays",
      pipeLazy(
        merge(
          pipe([0, 2, 3, 5, 6], toObservable({ delay: 1, delayStart: true })),
          pipe([1, 4, 7], toObservable({ delay: 2, delayStart: true })),
        ),
        toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      pipeLazy(
        pipeLazy(
          merge(
            pipe([1, 4, 7], toObservable({ delay: 2 })),
            throws({ fromArray: toObservable, ...mapT }, { delay: 5 })(raise),
          ),
          toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = createVirtualTimeScheduler();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe([1], toObservable(), onSubscribe(f), subscribe(scheduler));

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      run(scheduler);

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback function throws", () => {
      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(
        [1],
        toObservable(),
        onSubscribe(raise),
        subscribe(scheduler),
      );

      pipe(subscription, getException, expectIsSome);
    }),
  ),
  pairwiseTests({
    fromArray: toObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
  }),
  reduceTests({
    fromArray: toObservable,
    ...reduceT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  describe(
    "share",
    test("shared observable zipped with itself", () => {
      const scheduler = createVirtualTimeScheduler();
      const shared = pipe(
        [1, 2, 3],
        toObservable({ delay: 1 }),
        share(scheduler, { replay: 1 }),
      );

      let result: number[] = [];
      pipe(
        zip(shared, shared),
        map<[number, number], number>(([a, b]) => a + b),
        forEach<number>(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      run(scheduler);
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),
  skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        emptyObservable({ delay: 1 }),
        switchAll(),
        toReadonlyArray(),
        expectArrayEquals([] as unknown[]),
      ),
    ),
    test(
      "when source throw",
      pipeLazy(
        pipeLazy(
          raise,
          throws({
            fromArray: <T>() => toObservable<T>({ delay: 0 }),
            ...mapT,
          }),
          switchAll(),
          toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        toObservable({ delay: 1 }),
        concatMap<ObservableLike, number, number>(
          { ...switchAllT, ...mapT },
          _ => pipe([1, 2, 3], toObservable({ delay: 0 })),
        ),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "overlapping notification",
      pipeLazy(
        [1, 2, 3],
        toObservable({ delay: 4 }),
        concatMap<ObservableLike, number, number>(
          { ...switchAllT, ...mapT },
          _ => pipe([1, 2, 3], toObservable({ delay: 2 })),
        ),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
  ),
  takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
  }),
  describe(
    "takeUntil",
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [1, 2, 3, 4, 5],
        toObservable({ delay: 1 }),
        takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),
  takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
  throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
  }),
  describe(
    "toEnumerable",
    test(
      "with an enumerable observable",
      pipeLazy(
        [1, 2, 3, 4],
        toObservable(),
        toEnumerable(),
        enumerableToReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  ),
  describe(
    "toPromise",
    testAsync(
      "when observable completes without producing a value",
      async () => {
        const scheduler = createHostScheduler();
        try {
          await pipe(
            pipe(emptyObservable(), toPromise(scheduler)),
            expectPromiseToThrow,
          );
        } finally {
          pipe(scheduler, dispose());
        }
      },
    ),
  ),
  zipTests({
    fromArray: toObservable,
    ...zipT,
    ...toReadonlyArrayT,
  }),
  describe(
    "zip",
    test(
      "with synchronous and non-synchronous sources",
      pipeLazy(
        zip(
          pipe([1, 2], toObservable({ delay: 1 })),
          pipe([2, 3], toObservable()),
          pipe([3, 4, 5], toObservable({ delay: 1 })),
        ),
        toReadonlyArray(),
        expectArrayEquals(
          [[1, 2, 3] as readonly number[], [2, 3, 4]],
          arrayEquality(),
        ),
      ),
    ),
    test(
      "fast with slow",
      pipeLazy(
        zip(
          pipe([1, 2, 3], toObservable({ delay: 1 })),
          pipe([1, 2, 3], toObservable({ delay: 5 })),
        ),
        toReadonlyArray(),
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
          zip(
            pipe(raise, throws({ fromArray: toObservable, ...mapT })),
            pipe([1, 2, 3], toObservable()),
          ),
          map<readonly [unknown, number], number>(([, b]) => b),
          toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "zipLatest",
    test(
      "zipLatestWith",
      pipeLazy(
        zipLatest(
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            toObservable({ delay: 1, delayStart: true }),
          ),
          pipe([1, 2, 3, 4], toObservable({ delay: 2, delayStart: true })),
        ),
        map<[number, number], number>(([a, b]) => a + b),
        toReadonlyArray(),
        expectArrayEquals([2, 5, 8, 11]),
      ),
    ),
  ),
);
