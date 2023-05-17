import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import {
  Function1,
  identity,
  pipe,
  pipeLazyAsync,
  returns,
} from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, RunnableLike } from "../../types.js";

const HigherOrderObservableBaseTypeClassTests = <C extends Observable.Type>(
  m: HigherOrderObservableBaseTypeClass<C, Runnable.Type>,
  fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>,
) =>
  describe(
    "HigherOrderObservableBaseTypeClass",

    describe(
      "scanLast",
      test(
        "fast src, slow acc",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.scanLast<number, number>(
            (acc, x) =>
              pipe([x + acc], Runnable.fromReadonlyArray({ delay: 4 })),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync(),
          x => x ?? [],
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      test(
        "slow src, fast acc",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray({ delay: 4 }),
          fromRunnable<number>(),
          m.scanLast<number, number>(
            (acc, x) =>
              pipe([x + acc], Observable.fromReadonlyArray({ delay: 4 })),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync(),
          x => x ?? [],
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      test(
        "slow src, slow acc",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray({ delay: 4 }),
          fromRunnable<number>(),
          m.scanLast<number, number>(
            (acc, x) =>
              pipe([x + acc], Runnable.fromReadonlyArray({ delay: 4 })),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync<readonly number[]>(),
          x => x ?? [],
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      test(
        "fast src, fast acc",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.scanLast<number, number>(
            (acc, x) => pipe([x + acc], Runnable.fromReadonlyArray()),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync<readonly number[]>(),
          x => x ?? [],
          expectArrayEquals([1, 3, 6]),
        ),
      ),
    ),

    describe(
      "scanMany",
      test(
        "slow src, fast acc",
        pipeLazyAsync(
          [1, 1, 1],
          Observable.fromReadonlyArray({ delay: 10 }),
          fromRunnable<number>(),
          m.scanMany<number, number>(
            (acc, next) =>
              pipe(
                Observable.generate<number>(identity, returns(next + acc), {
                  delay: 1,
                }),
                Observable.takeFirst({ count: 3 }),
              ),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync<readonly number[]>(),
          x => x ?? [],
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),
      test(
        "fast src, slow acc",
        pipeLazyAsync(
          [1, 1, 1],
          Observable.fromReadonlyArray({ delay: 1 }),
          fromRunnable<number>(),
          m.scanMany<number, number>(
            (acc, next) =>
              pipe(
                Observable.generate<number>(identity, returns(next + acc), {
                  delay: 10,
                }),
                Observable.takeFirst({ count: 3 }),
              ),
            returns(0),
          ),
          Observable.buffer<number>(),
          Observable.lastAsync(),
          x => x ?? [],
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),
    ),
  );

export default HigherOrderObservableBaseTypeClassTests;
