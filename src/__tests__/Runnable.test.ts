import * as Observable from "../Observable.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as Runnable from "../Runnable.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  identityLazy,
  increment,
  isSome,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../functions.js";
import { RunnableLike } from "../types.js";
import HigherOrderObservableTypeClassTests from "./fixtures/HigherOrderObservableTypeClassTests.js";

import RunnableContainerTypeClassTests from "./fixtures/RunnableContainerTypeClassTests.js";

testModule(
  "Runnable",
  RunnableContainerTypeClassTests(Runnable),
  HigherOrderObservableTypeClassTests<Runnable.Type>(Runnable, identityLazy),

  describe(
    "compute",
    test(
      "batch mode",
      pipeLazy(
        Runnable.compute(() => {
          const fromValueWithDelay = __constant(
            (delay: number, value: number): RunnableLike<number> =>
              pipe([value], Runnable.fromReadonlyArray({ delay })),
          );
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
      ),
    ),
    test(
      "combined-latest mode",
      pipeLazy(
        Runnable.compute(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Runnable.fromReadonlyArray()),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            return __await(next);
          },
          { mode: "combine-latest" },
        ),
        Runnable.keepType(isSome),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "conditional hooks",
      pipeLazy(
        Runnable.compute(() => {
          const src = __constant(
            pipe([0, 1, 2, 3, 4, 5], Runnable.fromReadonlyArray({ delay: 5 })),
          );
          const src2 = __constant(
            Runnable.generate(increment, returns(100), {
              delay: 2,
              delayStart: false,
            }),
          );

          const v = __await(src);

          if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
          }
          return v;
        }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([
          101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5,
        ]),
      ),
    ),
  ),

  describe(
    "exhaust",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray()),
          pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 2 })),
        ],
        Observable.fromReadonlyArray({ delay: 5 }),
        Runnable.exhaust<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 7, 8, 9]),
      ),
    ),
  ),

  describe(
    "switchMap",
    test(
      "overlapping notification",
      pipeLazy(
        [none, none, none],
        Observable.fromReadonlyArray({ delay: 4 }),
        Runnable.switchMap<void, number>(_ =>
          pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 2 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Runnable.fromReadonlyArray({ delay: 1 }),

        Runnable.switchMap<number, number>(_ =>
          pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 0 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);

((_: Runnable.Signature) => {})(Runnable);
