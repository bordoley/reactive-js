import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrow,
  test,
  testModule,
} from "../__internal__/testing.js";
import { identityLazy, none, pipe, pipeLazy } from "../functions.js";
import HigherOrderObservableBaseTypeClassTests from "./fixtures/HigherOrderObservableBaseTypeClassTests.js";

import RunnableContainerTypeClassTests from "./fixtures/RunnableContainerTypeClassTests.js";

testModule(
  "Runnable",
  RunnableContainerTypeClassTests(Runnable),
  HigherOrderObservableBaseTypeClassTests<Runnable.Type>(
    Runnable,
    identityLazy,
  ),
  describe(
    "exhaust",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [
          pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 3 })),
          pipe([4, 5, 6], Runnable.fromReadonlyArray()),
          pipe([7, 8, 9], Runnable.fromReadonlyArray({ delay: 2 })),
        ],
        Runnable.fromReadonlyArray({ delay: 5 }),
        Runnable.exhaust(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 7, 8, 9]),
      ),
    ),
  ),
  describe(
    "merge",
    test(
      "two arrays",
      pipeLazy(
        Observable.merge(
          pipe(
            [0, 2, 3, 5, 6],
            Runnable.fromReadonlyArray({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Runnable.fromReadonlyArray({ delay: 2, delayStart: true }),
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
          Observable.merge(
            pipe([1, 4, 7], Runnable.fromReadonlyArray({ delay: 2 })),
            Observable.throws({ delay: 5 }),
          ),
          Runnable.toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
  ),

  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Runnable.switchAll(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([] as unknown[]),
      ),
    ),
    test(
      "when source throw",
      pipeLazy(
        pipeLazy(
          Observable.throws(),
          Runnable.switchAll(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Runnable.fromReadonlyArray({ delay: 1 }),
        Runnable.switchMap(_ =>
          pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 0 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "overlapping notification",
      pipeLazy(
        [none, none, none],
        Runnable.fromReadonlyArray({ delay: 4 }),
        Runnable.switchMap(_ =>
          pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 2 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
  ),
);

((_: Runnable.Signature) => {})(Runnable);
