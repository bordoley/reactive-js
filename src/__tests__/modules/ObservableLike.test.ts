import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  expectPromiseToThrow,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowError,
  expectTrue,
  mockFn,
  test,
  testAsync,
} from "../../__internal__/__internal__testing";
import { concatMap, throws } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import {
  arrayEquality,
  identity,
  increment,
  incrementBy,
  newInstance,
  pipe,
  pipeLazy,
  raise,
  returns,
  sum,
} from "../../functions";
import { toReadonlyArray as enumerableToReadonlyArray } from "../../ix/EnumerableLike";
import {
  RunnableObservableLike,
  deferRunnableObservableT,
  emptyObservable,
  generateObservable,
} from "../../rx";
import {
  combineLatest,
  concat,
  forEach,
  map,
  merge,
  onSubscribe,
  retry,
  share,
  subscribe,
  takeFirst,
  takeUntil,
  throttle,
  timeout,
  toEnumerable,
  toFlowable,
  toPromise,
  toReadonlyArray,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
} from "../../rx/ObservableLike";
import {
  bufferT,
  catchErrorT,
  concatT,
  decodeWithCharsetT,
  distinctUntilChangedT,
  exhaust,
  forEachT,
  keepT,
  mapT,
  pairwiseT,
  reduceT,
  scanAsyncT,
  scanT,
  skipFirstT,
  switchAll,
  switchAllT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  throwIfEmptyT,
  toReadonlyArrayT,
  zipT,
} from "../../rx/RunnableObservableLike";
import {
  createHostScheduler,
  createVirtualTimeScheduler,
} from "../../scheduling";
import { dispatch, dispatchTo } from "../../scheduling/DispatcherLike";
import { getCurrentTime, schedule } from "../../scheduling/SchedulerLike";
import { stream } from "../../streaming/StreamableLike";
import { run } from "../../util/ContinuationLike";
import { dispose, getException, isDisposed } from "../../util/DisposableLike";
import {
  bufferTests,
  catchErrorTests,
  concatTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  forEachTests,
  keepTests,
  mapTests,
  pairwiseTests,
  reduceTests,
  scanAsyncTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  zipTests as zipOperatorTests,
} from "../operators";

const combineLatestTests = describe(
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
);

const exhaustTests = describe(
  "exhaust",
  test(
    "when the initial observable never disposes",
    pipeLazy(
      [
        pipe([1, 2, 3], toObservable({ delay: 3 })),
        pipe([4, 5, 6], toObservable()),
        pipe([7, 8, 9], toObservable({ delay: 2 })),
      ],
      toObservable({ delay: 5 }),
      exhaust(),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 7, 8, 9]),
    ),
  ),
);

const mergeTests = describe(
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
);

const onSubscribeTests = describe(
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
);

const retryTests = describe(
  "retry",
  test(
    "repeats the observable n times",
    pipeLazy(
      concat(
        pipe([1, 2, 3], toObservable()),
        pipe(
          raise,
          throws<RunnableObservableLike, number>({
            fromArray: toObservable,
            ...mapT,
          }),
        ),
      ),
      retry(),
      takeFirst({ count: 6 }),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3]),
    ),
  ),
);

const shareTests = describe(
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
);

const switchAllTests = describe(
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
          fromArray: toObservable,
          ...mapT,
        }),
        switchAll(),
        toReadonlyArray(),
      ),
      expectToThrow,
      identity,
    ),
  ),
  test(
    "concating arrays",
    pipeLazy(
      [1, 2, 3],
      toObservable({ delay: 1 }),
      concatMap<RunnableObservableLike, number, number>(
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
      concatMap<RunnableObservableLike, number, number>(
        { ...switchAllT, ...mapT },
        _ => pipe([1, 2, 3], toObservable({ delay: 2 })),
      ),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
    ),
  ),
);

const takeUntilTests = describe(
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
);

const timeoutTests = describe(
  "timeout",
  test(
    "throws when a timeout occurs",
    pipeLazy(
      pipeLazy(
        [1],
        toObservable({ delay: 2, delayStart: true }),
        timeout(1),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when timeout is greater than observed time",
    pipeLazy(
      [1],
      toObservable({ delay: 2, delayStart: true }),
      timeout(3),
      toReadonlyArray(),
      expectArrayEquals([1]),
    ),
  ),
);

const throttleTests = describe(
  "throttle",
  test(
    "first",
    pipeLazy(
      generateObservable(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 100 }),
      throttle(50, { mode: "first" }),
      toReadonlyArray(),
      expectArrayEquals([0, 49, 99]),
    ),
  ),

  test(
    "last",
    pipeLazy(
      generateObservable(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 200 }),
      throttle(50, { mode: "last" }),
      toReadonlyArray(),
      expectArrayEquals([49, 99, 149, 199]),
    ),
  ),

  test(
    "interval",
    pipeLazy(
      generateObservable(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 200 }),
      throttle(75, { mode: "interval" }),
      toReadonlyArray(),
      expectArrayEquals([0, 74, 149, 199]),
    ),
  ),

  /*
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
  ),*/
);

const toEnumerableTests = describe(
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
);

const toFlowableTests = describe(
  "toFlowable",
  test("flow a generating source", () => {
    const scheduler = createVirtualTimeScheduler();

    const generateStream = pipe(
      generateObservable(increment, returns(-1), {
        delay: 1,
        delayStart: true,
      }),
      toFlowable(),
      stream(scheduler),
    );

    pipe(generateStream, dispatch("resume"));

    pipe(
      scheduler,
      schedule(pipeLazy("pause", dispatchTo(generateStream)), {
        delay: 2,
      }),
    );

    pipe(
      scheduler,
      schedule(pipeLazy("resume", dispatchTo(generateStream)), {
        delay: 4,
      }),
    );

    pipe(
      scheduler,
      schedule(pipeLazy(generateStream, dispose()), { delay: 5 }),
    );

    const f = mockFn();
    const subscription = pipe(
      generateStream,
      forEach<number>(x => {
        f(getCurrentTime(scheduler), x);
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));

    pipe(subscription, isDisposed, expectTrue);
  }),
);

const toPromiseTests = describe(
  "toPromise",
  testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
      await pipe(
        pipe(emptyObservable(), toPromise(scheduler)),
        expectPromiseToThrow,
      );
    } finally {
      pipe(scheduler, dispose());
    }
  }),
);

const withLatestFromTest = describe(
  "withLatestFrom",
  test(
    "when source and latest are interlaced",
    pipeLazy(
      [0, 1, 2, 3],
      toObservable({ delay: 1 }),
      withLatestFrom(pipe([0, 1, 2, 3], toObservable({ delay: 2 })), (a, b) => [
        a,
        b,
      ]),
      toReadonlyArray(),
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
      toObservable({ delay: 1 }),
      withLatestFrom(emptyObservable(), sum),
      toReadonlyArray(),
      expectArrayEquals([] as number[]),
    ),
  ),
  test("when latest throws", () => {
    const error = newInstance(Error);

    pipe(
      pipeLazy(
        [0],
        toObservable({ delay: 1 }),
        withLatestFrom(
          throws({ fromArray: toObservable, ...mapT })(returns(error)),
          sum,
        ),
        toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
      expectToThrowError(error),
    );
  }),
);

const zipTests = describe(
  "zip",
  ...zipOperatorTests({
    fromArray: toObservable,
    ...zipT,
    ...toReadonlyArrayT,
  }).tests,
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
);

const zipLatestTests = describe(
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
);

const zipWithLatestTests = describe(
  "zipWithLatestFrom",
  test(
    "when source throws",
    pipeLazy(
      pipeLazy(
        throws({ fromArray: toObservable, ...mapT })(raise),
        zipWithLatestFrom(pipe([1], toObservable()), (_, b) => b),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3],
        toObservable({ delay: 1 }),
        zipWithLatestFrom(
          throws({ fromArray: toObservable, ...mapT })(raise),
          (_, b) => b,
        ),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other completes first",
    pipeLazy(
      [1, 2, 3],
      toObservable({ delay: 2 }),
      zipWithLatestFrom(
        pipe([2, 4], toObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      toReadonlyArray(),
      expectArrayEquals([3, 6]),
    ),
  ),

  test(
    "when this completes first",
    pipeLazy(
      [1, 2, 3],
      toObservable({ delay: 2 }),
      zipWithLatestFrom(
        pipe([2, 4, 6, 8], toObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      toReadonlyArray(),
      expectArrayEquals([3, 6, 11]),
    ),
  ),
);

export default describe(
  "ObservableLike",
  bufferTests({
    fromArray: toObservable,
    ...bufferT,
    ...toReadonlyArrayT,
  }),
  catchErrorTests({
    fromArray: toObservable,
    ...catchErrorT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  combineLatestTests,
  concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  decodeWithCharsetTests({
    fromArray: toObservable,
    ...deferRunnableObservableT,
    ...decodeWithCharsetT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  exhaustTests,
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
  mergeTests,
  onSubscribeTests,
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
  retryTests,
  scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  scanAsyncTests<RunnableObservableLike, RunnableObservableLike>(
    {
      fromArray: toObservable,
      ...scanAsyncT,
      ...toReadonlyArrayT,
    },
    {
      fromArray: toObservable,
    },
  ),
  shareTests,
  skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  switchAllTests,
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
  takeUntilTests,
  takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
  throttleTests,
  throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
  }),
  timeoutTests,
  toEnumerableTests,
  toFlowableTests,
  toPromiseTests,
  withLatestFromTest,
  zipTests,
  zipLatestTests,
  zipWithLatestTests,
);
