import { concatMap, throws } from "../../containers/Container";
import { toRunnableObservable } from "../../containers/ReadonlyArray";
import {
  arrayEquality,
  identity,
  pipe,
  pipeLazy,
  raise,
} from "../../functions";
import Enumerable from "../../ix/Enumerable";
import { RunnableObservableLike } from "../../rx";
import RunnableObservable, {
  empty,
  exhaust,
  map,
  merge,
  switchAll,
  toEnumerable,
  toPromise,
  toReadonlyArray,
  zip,
} from "../../rx/RunnableObservable";
import { createHostScheduler } from "../../scheduling/Scheduler";
import { dispose } from "../../util/Disposable";
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
        pipe([1, 2, 3], toRunnableObservable({ delay: 3 })),
        pipe([4, 5, 6], toRunnableObservable()),
        pipe([7, 8, 9], toRunnableObservable({ delay: 2 })),
      ],
      toRunnableObservable({ delay: 5 }),
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
        pipe(
          [0, 2, 3, 5, 6],
          toRunnableObservable({ delay: 1, delayStart: true }),
        ),
        pipe([1, 4, 7], toRunnableObservable({ delay: 2, delayStart: true })),
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
          pipe([1, 4, 7], toRunnableObservable({ delay: 2 })),
          throws(RunnableObservable, { delay: 5 })(raise),
        ),
        toReadonlyArray(),
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
      empty({ delay: 1 }),
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
        throws(RunnableObservable),
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
      toRunnableObservable({ delay: 1 }),
      concatMap<RunnableObservableLike, number, number>(
        { concatAll: switchAll, map },
        _ => pipe([1, 2, 3], toRunnableObservable({ delay: 0 })),
      ),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
    ),
  ),
  test(
    "overlapping notification",
    pipeLazy(
      [1, 2, 3],
      toRunnableObservable({ delay: 4 }),
      concatMap<RunnableObservableLike, number, number>(
        { concatAll: switchAll, map },
        _ => pipe([1, 2, 3], toRunnableObservable({ delay: 2 })),
      ),
      toReadonlyArray(),
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
      toRunnableObservable(),
      toEnumerable(),
      Enumerable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4]),
    ),
  ),
);

const toPromiseTests = describe(
  "toPromise",
  testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
      await pipe(pipe(empty(), toPromise(scheduler)), expectPromiseToThrow);
    } finally {
      pipe(scheduler, dispose());
    }
  }),
);

const zipTests = describe(
  "zip",
  zipOperatorTests(RunnableObservable),
  test(
    "with synchronous and non-synchronous sources",
    pipeLazy(
      zip(
        pipe([1, 2], toRunnableObservable({ delay: 1 })),
        pipe([2, 3], toRunnableObservable()),
        pipe([3, 4, 5], toRunnableObservable({ delay: 1 })),
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
        pipe([1, 2, 3], toRunnableObservable({ delay: 1 })),
        pipe([1, 2, 3], toRunnableObservable({ delay: 5 })),
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
          pipe(raise, throws(RunnableObservable)),
          pipe([1, 2, 3], toRunnableObservable()),
        ),
        map<readonly [unknown, number], number>(([, b]) => b),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),
);

testModule(
  "RunnableObservable",
  bufferTests(RunnableObservable),
  catchErrorTests(RunnableObservable),
  concatTests(RunnableObservable),
  concatAllTests<RunnableObservableLike>(RunnableObservable),
  concatMapTests(RunnableObservable),
  concatWithTests(RunnableObservable),
  decodeWithCharsetTests(RunnableObservable),
  distinctUntilChangedTests(RunnableObservable),
  endWithTests(RunnableObservable),
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
  startWithTests(RunnableObservable),
  switchAllTests,
  takeFirstTests(RunnableObservable),
  takeLastTests(RunnableObservable),
  takeWhileTests(RunnableObservable),
  throwIfEmptyTests(RunnableObservable),
  zipWithTests(RunnableObservable),
  toEnumerableTests,
  toPromiseTests,
  zipTests,
);
