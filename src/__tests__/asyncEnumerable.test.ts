import {
  consumeAsync,
  consumeContinue,
  consumeDone,
  fromArray,
  fromArrayT,
  fromIterable,
  generate,
  keep,
  map,
  scan,
  takeWhile,
  toObservable,
} from "../asyncEnumerable";
import { empty, fromValue } from "../container";
import { Error, onDisposed } from "../disposable";
import { forEach } from "../enumerator";
import {
  alwaysTrue,
  ignore,
  increment,
  isEven,
  pipe,
  pipeLazy,
  returns,
  sum,
} from "../functions";
import {
  __memo,
  __observe,
  fromArrayT as fromArrayTObs,
  onNotify,
  subscribe,
  toRunnable,
} from "../observable";
import { Option, none } from "../option";
import { last, toArray } from "../runnable";
import { createVirtualTimeScheduler } from "../scheduler";
import { __stream, stream } from "../streamable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectNone,
  test,
} from "../testing";

export const tests = describe(
  "async enumerable",

  test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray<number>());
    const enumerator = pipe(enumerable, stream(scheduler));

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify((x: number) => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();

    const result: number[] = [];
    let error: Option<Error> = none;

    const enumerator = pipe(
      fromIterable<number>()([1, 2, 3, 4, 5, 6]),
      stream(scheduler),
    );

    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
      onDisposed(e => {
        error = e;
      }),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
  }),

  test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(
      generate(increment, returns<number>(0)),
      stream(scheduler),
    );

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  describe(
    "consumeAsync",
    test(
      "when the consumer early terminates",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) =>
            fromValue(fromArrayTObs)(
              acc > 0 ? consumeDone(acc + next) : consumeContinue(acc + next),
            ),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(3),
      ),
    ),
    test(
      "when the consumer never terminates",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) =>
            pipe(acc + next, consumeContinue, fromValue(fromArrayTObs)),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(21),
      ),
    ),
  ),
  test(
    "toObservable",
    pipeLazy(
      [1, 2, 3, 4, 5],
      fromArray(),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3, 4, 5]),
    ),
  ),
  test(
    "toObservable",
    pipeLazy(
      [1, 2, 3, 4, 5],
      fromArray(),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3, 4, 5]),
    ),
  ),
  test(
    "map",
    pipeLazy(
      [1, 2, 3, 4, 5],
      fromArray(),
      map(increment),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 3, 4, 5, 6]),
    ),
  ),
  test(
    "keep",
    pipeLazy(
      [1, 2, 3, 4, 5],
      fromArray(),
      keep(isEven),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 4]),
    ),
  ),
  test(
    "map/keep",
    pipeLazy(
      [1, 2, 3, 4, 5],
      fromArray(),
      map(increment),
      keep(isEven),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 4, 6]),
    ),
  ),

  test(
    "keep/map",
    pipeLazy(
      [1, 2, 3, 4, 5, 6],
      fromArray(),
      keep(isEven),
      map(increment),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([3, 5, 7]),
    ),
  ),

  test(
    "scan",
    pipeLazy(
      [1, 1, 1],
      fromArray(),
      scan(sum, returns(0)),
      toObservable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        generate(increment, returns(0)),
        takeWhile(x => x < 4),
        toObservable(),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        fromArray(),
        takeWhile(alwaysTrue),
        toObservable(),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        empty(fromArrayT),
        takeWhile(alwaysTrue),
        toObservable(),
        toRunnable(),
        toArray(),
        expectArrayEquals([]),
      );
    }),

    test(
      "inclusive",
      pipeLazy(
        generate(increment, returns(0)),
        takeWhile(x => x < 4, { inclusive: true }),
        toObservable(),
        toRunnable(),
        toArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  ),
);
