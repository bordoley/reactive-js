import {
  consume,
  consumeAsync,
  done,
  fromArray,
  fromIterable,
  generate,
  notify,
} from "../asyncEnumerable";
import { Error, addTeardown } from "../disposable";
import { defer, increment, pipe, returns } from "../functions";
import { fromArrayT, subscribe, toRunnable } from "../observable";
import { Option, none } from "../option";
import { last } from "../runnable";
import { createVirtualTimeScheduler } from "../scheduler";
import { stream } from "../streamable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectNone,
  test,
} from "../testing";
import { fromValue } from "../container";

export const tests = describe(
  "async-enumerable",
  test("consume", () => {
    const enumerable = fromIterable<number>()([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      consume((acc, next) => notify(acc + next), returns<number>(0)),
      toRunnable(),
      last(),
      expectEquals(21),
    );

    pipe(
      enumerable,
      consume(
        (acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)),
        returns<number>(0),
      ),
      toRunnable(),
      last(),
      expectEquals(3),
    );
  }),

  describe(
    "consumeAsync",
    test(
      "when the consumer early terminates",
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) =>
            fromValue(fromArrayT)(
              acc > 0 ? done(acc + next) : notify(acc + next),
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
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) => pipe(acc + next, notify, fromValue(fromArrayT)),
          returns<number>(0),
        ),
        toRunnable(),
        last(),
        expectEquals(21),
      ),
    ),
  ),

  test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray<number>());
    const enumerator = pipe(enumerable, stream(scheduler));

    const result: number[] = [];
    pipe(
      enumerator,
      subscribe(scheduler, x => result.push(x)),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(
      fromIterable<number>()([1, 2, 3, 4, 5, 6]),
      stream(scheduler),
    );

    const result: number[] = [];
    let error: Option<Error> = none;
    const subscription = pipe(
      enumerator,
      subscribe(scheduler, x => result.push(x)),
    );

    addTeardown(subscription, e => {
      error = e;
    });

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    scheduler.run();

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
      subscribe(scheduler, x => result.push(x)),
    );

    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
);
