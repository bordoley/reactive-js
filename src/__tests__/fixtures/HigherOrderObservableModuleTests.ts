import * as Observable from "../../Observable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import * as Runnable from "../../Runnable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowAsync,
  testAsync,
} from "../../__internal__/testing.js";
import {
  Function1,
  Optional,
  identity,
  none,
  pipe,
  pipeAsync,
  pipeLazyAsync,
  returns,
} from "../../functions.js";
import {
  ContainerOf,
  HigherOrderObservableModule,
  RunnableLike,
} from "../../types.js";

const HigherOrderObservableModuleTests = <C extends Observable.Type>(
  m: HigherOrderObservableModule<C, Runnable.Type>,
  fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>,
) =>
  describe(
    "HigherOrderObservableModule",

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
        "when source throws and the error handler also throws",
        async () => {
          const e1 = "e1";
          const e2 = "e2";

          let result: Optional<unknown> = none;

          await pipeAsync(
            Observable.throws<number>({ raise: returns(e1) }),
            fromRunnable<number>(),
            m.catchError<number>(_ => {
              throw e2;
            }),
            Observable.catchError<number>(e => {
              result = e["cause"];
            }),
            Observable.toReadonlyArrayAsync(),
          );

          pipe(
            result as ReadonlyArray<Error>,
            ReadonlyArray.map(x => x.message),
            expectArrayEquals([e2, e1]),
          );
        },
      ),
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
      "exhaust",
      testAsync(
        "when the initial observable never disposes",
        pipeLazyAsync(
          [
            pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
            pipe([4, 5, 6], Observable.fromReadonlyArray<number>()),
            pipe([7, 8, 9], Observable.fromReadonlyArray<number>()),
          ],
          Observable.fromReadonlyArray(),
          fromRunnable<RunnableLike<number>>(),
          m.exhaust<number>(),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),

    describe(
      "exhaustMap",
      testAsync(
        "when the initial observable never disposes",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.exhaustMap<number, number>(_ =>
            pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),

    describe(
      "mergeMap",
      testAsync(
        "without delay, merge all observables as they are produced",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.mergeMap<number, number>(x =>
            pipe([x, x, x], Observable.fromReadonlyArray<number>()),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
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
              pipe([x + acc], Observable.fromReadonlyArray({ delay: 1 })),
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
            (acc, x) => pipe([x + acc], Observable.fromReadonlyArray()),
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
      testAsync(
        "fast src, fast acc",
        pipeLazyAsync(
          [1, 1, 1],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.scanMany<number, number>(
            (acc, next) =>
              pipe(
                Observable.generate<number>(identity, returns(next + acc)),
                Observable.takeFirst({ count: 3 }),
              ),
            returns(0),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),
      testAsync(
        "fast src, slow acc",
        pipeLazyAsync(
          [1, 1, 1],
          Observable.fromReadonlyArray(),
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
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        ),
      ),
    ),

    describe(
      "switchAll",
      testAsync(
        "with empty source",
        pipeLazyAsync(
          Observable.empty<RunnableLike>(),
          fromRunnable<RunnableLike>(),
          m.switchAll<number>(),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([] as readonly number[]),
        ),
      ),
      testAsync(
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
      "switchMap",
      testAsync(
        "only produce the last observable",
        pipeLazyAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          fromRunnable<number>(),
          m.switchMap<number, number>(x =>
            pipe(
              [x, x, x],
              Observable.fromReadonlyArray<number>({
                delay: 1,
                delayStart: true,
              }),
            ),
          ),
          Observable.toReadonlyArrayAsync(),
          expectArrayEquals([3, 3, 3]),
        ),
      ),
    ),
  );

export default HigherOrderObservableModuleTests;
