import Container from "../../containers/Container";
import ReadonlyArray from "../../containers/ReadonlyArray";
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
import { RunnableObservableLike } from "../../rx";
import RunnableObservable from "../../rx/RunnableObservable";
import Scheduler from "../../scheduling/Scheduler";
import Disposable from "../../util/Disposable";
import {
  bufferTests,
  catchErrorTests,
  concatAllTests,
  concatMapTests,
  concatTests,
  concatWithTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  endWithTests,
  everySatisfyTests,
  forEachTests,
  fromArrayTests,
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  reduceTests,
  retryTests,
  scanAsyncTests,
  scanTests,
  skipFirstTests,
  someSatisfyTests,
  startWithTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  zipTests as zipOperatorTests,
  zipWithTests,
} from "../operators";
import {
  describe,
  expectArrayEquals,
  expectPromiseToThrow,
  expectToThrow,
  expectToThrowError,
  test,
  testAsync,
  testModule,
} from "../testing";

const combineLatestTests = describe(
  "combineLatest",
  test(
    "combineLatest",
    pipeLazy(
      RunnableObservable.combineLatest(
        pipe(
          RunnableObservable.generate(incrementBy(2), returns(1), { delay: 2 }),
          RunnableObservable.takeFirst({ count: 3 }),
        ),
        pipe(
          RunnableObservable.generate(incrementBy(2), returns(0), { delay: 3 }),
          RunnableObservable.takeFirst({ count: 2 }),
        ),
      ),
      RunnableObservable.toReadonlyArray(),
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
        pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 3 })),
        pipe([4, 5, 6], ReadonlyArray.toRunnableObservable()),
        pipe([7, 8, 9], ReadonlyArray.toRunnableObservable({ delay: 2 })),
      ],
      ReadonlyArray.toRunnableObservable({ delay: 5 }),
      RunnableObservable.exhaust(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 7, 8, 9]),
    ),
  ),
);

const mergeTests = describe(
  "merge",
  test(
    "two arrays",
    pipeLazy(
      RunnableObservable.merge(
        pipe(
          [0, 2, 3, 5, 6],
          ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 4, 7],
          ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }),
        ),
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
    ),
  ),
  test(
    "when one source throws",
    pipeLazy(
      pipeLazy(
        RunnableObservable.merge(
          pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2 })),
          Container.throws(RunnableObservable, { delay: 5 })(raise),
        ),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),
);

const switchAllTests = describe(
  "switchAll",
  test(
    "with empty source",
    pipeLazy(
      RunnableObservable.empty({ delay: 1 }),
      RunnableObservable.switchAll(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([] as unknown[]),
    ),
  ),
  test(
    "when source throw",
    pipeLazy(
      pipeLazy(
        raise,
        Container.throws(RunnableObservable),
        RunnableObservable.switchAll(),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
      identity,
    ),
  ),
  test(
    "concating arrays",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnableObservable({ delay: 1 }),
      Container.concatMap<RunnableObservableLike, number, number>(
        {
          concatAll: RunnableObservable.switchAll,
          map: RunnableObservable.map,
        },
        _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 0 })),
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),
  test(
    "overlapping notification",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnableObservable({ delay: 4 }),
      Container.concatMap<RunnableObservableLike, number, number>(
        {
          concatAll: RunnableObservable.switchAll,
          map: RunnableObservable.map,
        },
        _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 })),
      ),
      RunnableObservable.toReadonlyArray(),
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
      ReadonlyArray.toRunnableObservable({ delay: 1 }),
      RunnableObservable.takeUntil(
        pipe(
          [1],
          ReadonlyArray.toRunnableObservable({ delay: 3, delayStart: true }),
        ),
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
);

const throttleTests = describe(
  "throttle",
  test(
    "first",
    pipeLazy(
      RunnableObservable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      RunnableObservable.takeFirst({ count: 100 }),
      RunnableObservable.throttle(50, { mode: "first" }),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([0, 49, 99]),
    ),
  ),

  test(
    "last",
    pipeLazy(
      RunnableObservable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      RunnableObservable.takeFirst({ count: 200 }),
      RunnableObservable.throttle(50, { mode: "last" }),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([49, 99, 149, 199]),
    ),
  ),

  test(
    "interval",
    pipeLazy(
      RunnableObservable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      RunnableObservable.takeFirst({ count: 200 }),
      RunnableObservable.throttle(75, { mode: "interval" }),
      RunnableObservable.toReadonlyArray(),
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
        throttle(_ => throws({ fromArray, mapT })(raise)),
        toRunnable(),
        last(),
      ),
      expectToThrow,
    ),
  ),*/
);

const timeoutTests = describe(
  "timeout",
  test(
    "throws when a timeout occurs",
    pipeLazy(
      pipeLazy(
        [1],
        ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }),
        RunnableObservable.timeout(1),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when timeout is greater than observed time",
    pipeLazy(
      [1],
      ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }),
      RunnableObservable.timeout(3),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1]),
    ),
  ),
);

const toPromiseTests = describe(
  "toPromise",
  testAsync("when observable completes without producing a value", async () => {
    const scheduler = Scheduler.createHostScheduler();
    try {
      await pipe(
        pipe(
          RunnableObservable.empty(),
          RunnableObservable.toPromise(scheduler),
        ),
        expectPromiseToThrow,
      );
    } finally {
      pipe(scheduler, Disposable.dispose());
    }
  }),
);

const withLatestFromTest = describe(
  "withLatestFrom",
  test(
    "when source and latest are interlaced",
    pipeLazy(
      [0, 1, 2, 3],
      ReadonlyArray.toRunnableObservable({ delay: 1 }),
      RunnableObservable.withLatestFrom(
        pipe([0, 1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 })),
        (a, b) => [a, b],
      ),
      RunnableObservable.toReadonlyArray(),
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
      ReadonlyArray.toRunnableObservable({ delay: 1 }),
      RunnableObservable.withLatestFrom(RunnableObservable.empty(), sum),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([] as number[]),
    ),
  ),
  test("when latest throws", () => {
    const error = newInstance(Error);

    pipe(
      pipeLazy(
        [0],
        ReadonlyArray.toRunnableObservable({ delay: 1 }),
        RunnableObservable.withLatestFrom(
          Container.throws(RunnableObservable)(returns(error)),
          sum,
        ),
        RunnableObservable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
      expectToThrowError(error),
    );
  }),
);

const zipTests = describe(
  "zip",
  zipOperatorTests<RunnableObservableLike>(RunnableObservable),
  test(
    "with synchronous and non-synchronous sources",
    pipeLazy(
      RunnableObservable.zip(
        pipe([1, 2], ReadonlyArray.toRunnableObservable({ delay: 1 })),
        pipe([2, 3], ReadonlyArray.toRunnableObservable()),
        pipe([3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 })),
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals(
        [[1, 2, 3] as readonly number[], [2, 3, 4]],
        arrayEquality(),
      ),
    ),
  ),
  test(
    "fast with slow",
    pipeLazy(
      RunnableObservable.zip(
        pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 })),
        pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 5 })),
      ),
      RunnableObservable.toReadonlyArray(),
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
        RunnableObservable.zip(
          pipe(raise, Container.throws(RunnableObservable)),
          pipe([1, 2, 3], ReadonlyArray.toRunnableObservable()),
        ),
        RunnableObservable.map<readonly [unknown, number], number>(
          ([, b]) => b,
        ),
        RunnableObservable.toReadonlyArray(),
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
      RunnableObservable.zipLatest(
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8],
          ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 2, 3, 4],
          ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }),
        ),
      ),
      RunnableObservable.map<[number, number], number>(([a, b]) => a + b),
      RunnableObservable.toReadonlyArray(),
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
        Container.throws(RunnableObservable)(raise),
        RunnableObservable.zipWithLatestFrom(
          pipe([1], ReadonlyArray.toRunnableObservable()),
          (_, b) => b,
        ),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3],
        ReadonlyArray.toRunnableObservable({ delay: 1 }),
        RunnableObservable.zipWithLatestFrom(
          Container.throws(RunnableObservable)(raise),
          (_, b) => b,
        ),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnableObservable({ delay: 2 }),
      RunnableObservable.zipWithLatestFrom(
        pipe([2, 4], ReadonlyArray.toRunnableObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([3, 6]),
    ),
  ),

  test(
    "when this completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnableObservable({ delay: 2 }),
      RunnableObservable.zipWithLatestFrom(
        pipe([2, 4, 6, 8], ReadonlyArray.toRunnableObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([3, 6, 11]),
    ),
  ),
);

testModule(
  "RunnableObservable",
  bufferTests(RunnableObservable),
  catchErrorTests(RunnableObservable),
  combineLatestTests,
  concatTests<RunnableObservableLike>(RunnableObservable),
  concatAllTests<RunnableObservableLike>(RunnableObservable),
  concatMapTests(RunnableObservable),
  concatWithTests<RunnableObservableLike>(RunnableObservable),
  decodeWithCharsetTests(RunnableObservable),
  distinctUntilChangedTests(RunnableObservable),
  endWithTests<RunnableObservableLike>(RunnableObservable),
  everySatisfyTests(RunnableObservable),
  exhaustTests,
  forEachTests(RunnableObservable),
  fromArrayTests<RunnableObservableLike>(RunnableObservable),
  ignoreElementsTests(RunnableObservable),
  keepTests(RunnableObservable),
  mapTests(RunnableObservable),
  mapToTests(RunnableObservable),
  mergeTests,
  pairwiseTests(RunnableObservable),
  reduceTests(RunnableObservable),
  retryTests<RunnableObservableLike>(RunnableObservable),
  scanTests(RunnableObservable),
  scanAsyncTests<RunnableObservableLike, RunnableObservableLike>(
    RunnableObservable,
    RunnableObservable,
  ),
  skipFirstTests(RunnableObservable),
  someSatisfyTests(RunnableObservable),
  startWithTests<RunnableObservableLike>(RunnableObservable),
  switchAllTests,
  takeFirstTests(RunnableObservable),
  takeLastTests(RunnableObservable),
  takeUntilTests,
  takeWhileTests(RunnableObservable),
  throttleTests,
  throwIfEmptyTests(RunnableObservable),
  timeoutTests,
  withLatestFromTest,
  zipWithTests<RunnableObservableLike>(RunnableObservable),
  toPromiseTests,
  zipTests,
  zipLatestTests,
  zipWithLatestTests,
);
