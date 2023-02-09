import Container from "../../containers/Container";
import ReadonlyArray from "../../containers/ReadonlyArray";
import {
  arrayEquality,
  identity,
  pipe,
  pipeLazy,
  raise,
} from "../../functions";
import Enumerable from "../../ix/Enumerable";
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
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  reduceTests,
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
  test,
  testAsync,
  testModule,
} from "../testing";

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

const toEnumerableTests = describe(
  "toEnumerable",
  test(
    "with an enumerable observable",
    pipeLazy(
      [1, 2, 3, 4],
      ReadonlyArray.toRunnableObservable(),
      RunnableObservable.toEnumerable(),
      Enumerable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4]),
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

testModule(
  "RunnableObservable",
  bufferTests(RunnableObservable),
  catchErrorTests(RunnableObservable),
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
  ignoreElementsTests(RunnableObservable),
  keepTests(RunnableObservable),
  mapTests(RunnableObservable),
  mapToTests(RunnableObservable),
  mergeTests,
  pairwiseTests(RunnableObservable),
  reduceTests(RunnableObservable),
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
  takeWhileTests(RunnableObservable),
  throwIfEmptyTests(RunnableObservable),
  zipWithTests<RunnableObservableLike>(RunnableObservable),
  toEnumerableTests,
  toPromiseTests,
  zipTests,
);
