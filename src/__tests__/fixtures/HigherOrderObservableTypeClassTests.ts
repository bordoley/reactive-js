import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowAsync,
  test,
  testAsync,
} from "../../__internal__/testing.js";
import {
  Function1,
  identity,
  pipe,
  pipeAsync,
  pipeLazyAsync,
  returns,
} from "../../functions.js";
import {
  ContainerOf,
  HigherOrderObservableTypeClass,
  RunnableLike,
} from "../../types.js";

const HigherOrderObservableTypeClassTests = <C extends Observable.Type>(
  m: HigherOrderObservableTypeClass<C, Runnable.Type>,
  fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>,
) =>
  describe(
    "HigherOrderObservableTypeClass",

    describe(
      "catchError",
      testAsync("when source throws", async () => {
        const e = {};
        await pipeAsync(
          Observable.throws<number>({ raise: returns(e) }),
          fromRunnable<number>(),
          m.catchError<number>(_ =>
            pipe([1, 2, 3], Observable.fromReadonlyArray()),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3]),
        );
      }),
      testAsync(
        "when source does not throw",
        pipeLazyAsync(
          [4, 5, 6],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.catchError<number>(_ =>
            pipe([1, 2, 3], Observable.fromReadonlyArray()),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([4, 5, 6]),
        ),
      ),
    ),

    describe(
      "switchAll",
      testAsync(
        "with empty source",
        pipeLazyAsync(
          Observable.empty<RunnableLike>({ delay: 1 }),
          fromRunnable<RunnableLike>(),
          m.switchAll<number>(),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([] as readonly number[]),
        ),
      ),
      test(
        "when source throw",
        pipeLazyAsync(
          pipeLazyAsync(
            Observable.throws<RunnableLike<number>>(),
            fromRunnable<RunnableLike<number>>(),
            m.switchAll<number>(),
            Observable.toReadonlyArrayAsync(),
          ),
          expectToThrowAsync,
        ),
      ),
    ),

    describe(
      "scanLast",
      testAsync(
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
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      testAsync(
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
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      testAsync(
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
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 3, 6]),
        ),
      ),

      testAsync(
        "fast src, fast acc",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.scanLast<number, number>(
            (acc, x) => pipe([x + acc], Runnable.fromReadonlyArray()),
            returns(0),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 3, 6]),
        ),
      ),
    ),

    describe(
      "scanMany",
      // FIXME: This test succeeds on DENO, but fails in node with timeout
      /* testAsync(
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
          Observable.forEach(console.log),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),*/
      testAsync(
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
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),
    ),
  );

export default HigherOrderObservableTypeClassTests;
