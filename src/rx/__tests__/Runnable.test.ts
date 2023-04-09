import {
  describe,
  expectArrayEquals,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowError,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  bufferTests,
  catchErrorTests,
  concatAllTests,
  concatMapTests,
  concatTests,
  concatWithTests,
  containsTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  endWithTests,
  everySatisfyTests,
  forEachTests,
  fromReadonlyArrayTests,
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  pickTests,
  reduceTests,
  retryTests,
  scanLastTests,
  scanManyTests,
  scanTests,
  skipFirstTests,
  startWithTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  zipTests as zipOperatorTests,
  zipWithTests,
} from "../../__tests__/operators.js";
import {
  arrayEquality,
  identity,
  increment,
  incrementBy,
  isSome,
  newInstance,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import * as ReadonlyArray from "../../keyed-containers/ReadonlyArray.js";
import { RunnableLike } from "../../rx.js";
import {
  SchedulerLike_now,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { StreamableLike_stream } from "../../streaming.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../util.js";
import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import { __await, __memo } from "../effects.js";

const combineLatestTests = describe(
  "combineLatest",
  test(
    "combineLatest",
    pipeLazy(
      Runnable.combineLatest(
        pipe(
          Runnable.generate(incrementBy(2), returns(1), { delay: 2 }),
          Runnable.takeFirst({ count: 3 }),
        ),
        pipe(
          Runnable.generate(incrementBy(2), returns(0), { delay: 3 }),
          Runnable.takeFirst({ count: 2 }),
        ),
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals(
        [[3, 2] as readonly [number, number], [5, 2], [5, 4], [7, 4]],
        arrayEquality(),
      ),
    ),
  ),
);

const computeTests = describe(
  "compute",
  test("batch mode", () => {
    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): RunnableLike<number> =>
      pipe([value], Runnable.fromReadonlyArray({ delay }));

    pipe(
      Runnable.compute(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);

        return result1 + result2 + result3;
      }),
      Runnable.takeLast<number>(),
      Runnable.toReadonlyArray(),
      expectArrayEquals([22]),
    );
  }),
  test("combined-latest mode", () => {
    const oneTwoThreeDelayed = pipe(
      [1, 2, 3],
      Runnable.fromReadonlyArray({ delay: 1 }),
    );
    const createOneTwoThree = (_: unknown) =>
      pipe([1, 2, 3], Runnable.fromReadonlyArray());

    pipe(
      Runnable.compute(
        () => {
          const v = __await(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __await(next);
        },
        { mode: "combine-latest" },
      ),
      Runnable.keepType(isSome),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    );
  }),
  test("conditional hooks", () => {
    const src = pipe(
      [0, 1, 2, 3, 4, 5],
      Runnable.fromReadonlyArray({ delay: 5 }),
    );
    const src2 = Runnable.generate(increment, returns(100), {
      delay: 2,
      delayStart: false,
    });

    pipe(
      Runnable.compute(() => {
        const v = __await(src);

        if (v % 2 === 0) {
          __memo(increment, 1);
          return __await(src2);
        }
        return v;
      }),
      Runnable.toReadonlyArray(),
      expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]),
    );
  }),
);

const exhaustTests = describe(
  "exhaust",
  test(
    "when the initial observable never disposes",
    pipeLazy(
      [
        pipe([1, 2, 3], ReadonlyArray.toRunnable({ delay: 3 })),
        pipe([4, 5, 6], ReadonlyArray.toRunnable()),
        pipe([7, 8, 9], ReadonlyArray.toRunnable({ delay: 2 })),
      ],
      ReadonlyArray.toRunnable({ delay: 5 }),
      Runnable.exhaust(),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 7, 8, 9]),
    ),
  ),
);

const mergeTests = describe(
  "merge",
  test(
    "two arrays",
    pipeLazy(
      Runnable.merge(
        pipe(
          [0, 2, 3, 5, 6],
          ReadonlyArray.toRunnable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 4, 7],
          ReadonlyArray.toRunnable({ delay: 2, delayStart: true }),
        ),
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
    ),
  ),
  test(
    "when one source throws",
    pipeLazy(
      pipeLazy(
        Runnable.merge(
          pipe([1, 4, 7], ReadonlyArray.toRunnable({ delay: 2 })),
          Runnable.throws({ delay: 5 }),
        ),
        Runnable.toReadonlyArray(),
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
      Runnable.empty({ delay: 1 }),
      Runnable.switchAll(),
      Runnable.toReadonlyArray(),
      expectArrayEquals([] as unknown[]),
    ),
  ),
  test(
    "when source throw",
    pipeLazy(
      pipeLazy(
        Runnable.throws(),
        Runnable.switchAll(),
        Runnable.toReadonlyArray(),
      ),
      expectToThrow,
      identity,
    ),
  ),
  test(
    "concating arrays",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnable({ delay: 1 }),
      Runnable.switchMap(_ =>
        pipe([1, 2, 3], ReadonlyArray.toRunnable({ delay: 0 })),
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),
  test(
    "overlapping notification",
    pipeLazy(
      [none, none, none],
      ReadonlyArray.toRunnable({ delay: 4 }),
      Runnable.switchMap(_ =>
        pipe([1, 2, 3], ReadonlyArray.toRunnable({ delay: 2 })),
      ),
      Runnable.toReadonlyArray(),
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
      ReadonlyArray.toRunnable({ delay: 1 }),
      Runnable.takeUntil(
        pipe([1], ReadonlyArray.toRunnable({ delay: 3, delayStart: true })),
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
);

const throttleTests = describe(
  "throttle",
  test(
    "first",
    pipeLazy(
      Runnable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Runnable.takeFirst({ count: 100 }),
      Runnable.throttle(50, { mode: "first" }),
      Runnable.toReadonlyArray(),
      expectArrayEquals([0, 49, 99]),
    ),
  ),

  test(
    "last",
    pipeLazy(
      Runnable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Runnable.takeFirst({ count: 200 }),
      Runnable.throttle(50, { mode: "last" }),
      Runnable.toReadonlyArray(),
      expectArrayEquals([49, 99, 149, 199]),
    ),
  ),

  test(
    "interval",
    pipeLazy(
      Runnable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Runnable.takeFirst({ count: 200 }),
      Runnable.throttle(75, { mode: "interval" }),
      Runnable.toReadonlyArray(),
      expectArrayEquals([0, 74, 149, 199]),
    ),
  ),

  /*
  test(
    "when duration observable throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3, 4, 5],
        fromReadonlyArray({ delay: 1 }),
        throttle(_ => throws({ fromReadonlyArray, mapT })(raise)),
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
        ReadonlyArray.toRunnable({ delay: 2, delayStart: true }),
        Runnable.timeout(1),
        Runnable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when timeout is greater than observed time",
    pipeLazy(
      [1],
      ReadonlyArray.toRunnable({ delay: 2, delayStart: true }),
      Runnable.timeout(3),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1]),
    ),
  ),
);

// FIXME Move these tests into container?
const toFlowableTests = describe(
  "toFlowable",
  test("flow a generating source", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

    const streamableSrc = pipe(
      Runnable.generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
      }),
      Runnable.toFlowable(),
    );

    const generateStream = streamableSrc[StreamableLike_stream](scheduler);

    scheduler[SchedulerLike_schedule](() =>
      generateStream[QueueableLike_enqueue](false),
    );

    scheduler[SchedulerLike_schedule](
      () => generateStream[QueueableLike_enqueue](true),

      {
        delay: 2,
      },
    );

    scheduler[SchedulerLike_schedule](
      () => generateStream[QueueableLike_enqueue](false),
      {
        delay: 4,
      },
    );

    scheduler[SchedulerLike_schedule](
      () => generateStream[DisposableLike_dispose](),
      {
        delay: 6,
      },
    );

    const f = mockFn();
    const subscription = pipe(
      generateStream,
      Observable.forEach<number>(x => {
        f(scheduler[SchedulerLike_now], x);
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(
      f.calls as [][],
      expectArrayEquals(
        [
          [1, 0],
          [4, 1],
          [5, 2],
        ],
        arrayEquality(),
      ),
    );

    pipe(subscription[DisposableLike_isDisposed], expectTrue);
  }),
);

const withLatestFromTest = describe(
  "withLatestFrom",
  test(
    "when source and latest are interlaced",
    pipeLazy(
      [0, 1, 2, 3],
      ReadonlyArray.toRunnable({ delay: 1 }),
      Runnable.withLatestFrom(
        pipe([0, 1, 2, 3], ReadonlyArray.toRunnable({ delay: 2 })),
        (a, b) => [a, b],
      ),
      Runnable.toReadonlyArray(),
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
      ReadonlyArray.toRunnable({ delay: 1 }),
      Runnable.withLatestFrom(Runnable.empty<number>(), (a, b) => a + b),
      Runnable.toReadonlyArray(),
      expectArrayEquals([] as number[]),
    ),
  ),
  test("when latest throws", () => {
    const error = newInstance(Error);

    pipe(
      pipeLazy(
        [0],
        ReadonlyArray.toRunnable({ delay: 1 }),
        Runnable.withLatestFrom(
          Runnable.throws<number>({ raise: returns(error) }),
          (a, b) => a + b,
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
      expectToThrowError(error),
    );
  }),
);

const zipTests = describe(
  "zip",
  zipOperatorTests<RunnableLike>(Runnable),
  test(
    "with synchronous and non-synchronous sources",
    pipeLazy(
      Runnable.zip(
        pipe([1, 2], ReadonlyArray.toRunnable({ delay: 1 })),
        pipe([2, 3], ReadonlyArray.toRunnable()),
        pipe([3, 4, 5], ReadonlyArray.toRunnable({ delay: 1 })),
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals(
        [[1, 2, 3] as readonly number[], [2, 3, 4]],
        arrayEquality(),
      ),
    ),
  ),
  test(
    "fast with slow",
    pipeLazy(
      Runnable.zip(
        pipe([1, 2, 3], ReadonlyArray.toRunnable({ delay: 1 })),
        pipe([1, 2, 3], ReadonlyArray.toRunnable({ delay: 5 })),
      ),
      Runnable.toReadonlyArray(),
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
        Runnable.zip(
          Runnable.throws(),
          pipe([1, 2, 3], ReadonlyArray.toRunnable()),
        ),
        Runnable.map<readonly [unknown, number], number>(([, b]) => b),
        Runnable.toReadonlyArray(),
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
      Runnable.zipLatest(
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8],
          ReadonlyArray.toRunnable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 2, 3, 4],
          ReadonlyArray.toRunnable({ delay: 2, delayStart: true }),
        ),
      ),
      Runnable.map<[number, number], number>(([a, b]) => a + b),
      Runnable.toReadonlyArray(),
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
        Runnable.throws(),
        Runnable.zipWithLatestFrom(
          pipe([1], ReadonlyArray.toRunnable()),
          (_, b) => b,
        ),
        Runnable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3],
        ReadonlyArray.toRunnable({ delay: 1 }),
        Runnable.zipWithLatestFrom(Runnable.throws(), (_, b) => b),
        Runnable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnable({ delay: 2 }),
      Runnable.zipWithLatestFrom(
        pipe([2, 4], ReadonlyArray.toRunnable({ delay: 1 })),
        (a, b) => a + b,
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals([3, 6]),
    ),
  ),

  test(
    "when this completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toRunnable({ delay: 2 }),
      Runnable.zipWithLatestFrom(
        pipe([2, 4, 6, 8], ReadonlyArray.toRunnable({ delay: 1 })),
        (a, b) => a + b,
      ),
      Runnable.toReadonlyArray(),
      expectArrayEquals([3, 6, 11]),
    ),
  ),
);

const runTests = describe(
  "run",
  test(
    "with higher order observable and no delay",
    pipeLazy(
      Runnable.generate(
        _ => pipe(1, Runnable.fromOptional()),
        returns(Runnable.empty()),
      ),
      Runnable.concatAll(),
      Runnable.takeFirst({ count: 10 }),
      Runnable.toReadonlyArray<number>(),
      expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
    ),
  ),
);

testModule(
  "Runnable",
  bufferTests(Runnable),
  catchErrorTests(Runnable),
  combineLatestTests,
  computeTests,
  concatTests<RunnableLike>(Runnable),
  concatAllTests<RunnableLike>(Runnable),
  concatMapTests(Runnable),
  concatWithTests<RunnableLike>(Runnable),
  containsTests(Runnable),
  decodeWithCharsetTests(Runnable),
  distinctUntilChangedTests(Runnable),
  endWithTests<RunnableLike>(Runnable),
  everySatisfyTests(Runnable),
  exhaustTests,
  forEachTests(Runnable),
  fromReadonlyArrayTests<RunnableLike>(Runnable),
  ignoreElementsTests(Runnable),
  keepTests(Runnable),
  mapTests(Runnable),
  mapToTests(Runnable),
  mergeTests,
  pairwiseTests(Runnable),
  pickTests(Runnable),
  reduceTests(Runnable),
  retryTests<RunnableLike>(Runnable),
  runTests,
  scanTests(Runnable),
  scanLastTests<RunnableLike, RunnableLike>(Runnable, Runnable),
  scanManyTests<RunnableLike, RunnableLike>(Runnable, Runnable),
  skipFirstTests(Runnable),
  startWithTests<RunnableLike>(Runnable),
  switchAllTests,
  takeFirstTests(Runnable),
  takeLastTests(Runnable),
  takeUntilTests,
  takeWhileTests(Runnable),
  throttleTests,
  throwIfEmptyTests(Runnable),
  timeoutTests,
  toFlowableTests,
  withLatestFromTest,
  zipWithTests<RunnableLike>(Runnable),
  zipTests,
  zipLatestTests,
  zipWithLatestTests,
);
