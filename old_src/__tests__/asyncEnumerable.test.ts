import {
  fromArray,
  fromArrayT,
  fromIterable,
  generate,
  keep,
  map,
  scan,
  scanAsync,
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
import { createVirtualTimeScheduler, schedule } from "../scheduler";
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

    enumerator.move();
    enumerator.move();
    enumerator.move();

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromArray with delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3], fromArray<number>({ delay: 2 }));
    const enumerator = pipe(enumerable, stream(scheduler));

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(_ => result.push(scheduler.now)),
      subscribe(scheduler),
    );

    pipe(
      scheduler,
      schedule(
        () => {
          enumerator.move();
        },
        { delay: 2 },
      ),
    );

    pipe(
      scheduler,
      schedule(
        () => {
          enumerator.move();
        },
        { delay: 6 },
      ),
    );

    pipe(
      scheduler,
      schedule(
        () => {
          enumerator.move();
        },
        { delay: 10 },
      ),
    );

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([4, 8, 12]));
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

    enumerator.move();
    enumerator.move();
    enumerator.move();
    enumerator.move();
    enumerator.move();
    enumerator.move();

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

    enumerator.move();
    enumerator.move();
    enumerator.move();

    pipe(scheduler, forEach(ignore));

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
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
    "scanAsync",
    test(
      "when the consumer early terminates",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        scanAsync(
          (acc, next) => fromValue(fromArrayTObs, { delay: 3 })(acc + next),
          returns<number>(0),
        ),
        takeWhile(x => x < 3, { inclusive: true }),
        toObservable(),
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
        scanAsync(
          (acc, next) =>
            pipe(acc + next, fromValue(fromArrayTObs, { delay: 40 })),
          returns<number>(0),
        ),
        toObservable(),
        toRunnable(),
        last(),
        expectEquals(21),
      ),
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
