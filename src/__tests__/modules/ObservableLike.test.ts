import {
  describe,
  expectArrayEquals,
  expectPromiseToThrow,
  expectToThrow,
  test,
  testAsync,
} from "../../__internal__/testing";
import { throws } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import {
  arrayEquality,
  incrementBy,
  pipe,
  pipeLazy,
  raise,
  returns,
} from "../../functions";
import { emptyObservable, generateObservable } from "../../rx";
import {
  combineLatest,
  forEach,
  map,
  share,
  subscribe,
  takeFirst,
  toPromise,
  toReadonlyArray,
  zip,
  zipLatest,
} from "../../rx/ObservableLike";
import { mapT } from "../../rx/RunnableObservableLike";
import {
  createHostScheduler,
  createVirtualTimeScheduler,
} from "../../scheduling";
import { run } from "../../util/ContinuationLike";
import { dispose } from "../../util/DisposableLike";

export const ObservableLikeTests = describe(
  "ObservableLike",
  describe(
    "combineLatest",
    test(
      "combineLatest",
      pipeLazy(
        combineLatest(
          pipe(
            generateObservable(incrementBy(2), returns(1), { delay: 2 }),
            takeFirst<number>({ count: 3 }),
          ),
          pipe(
            generateObservable(incrementBy(2), returns(0), { delay: 3 }),
            takeFirst<number>({ count: 2 }),
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
