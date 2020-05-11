import {
  done,
  continue_,
  reduce,
  reduceAsync,
  fromArray,
  fromIterable,
  generate,
} from "../src/asyncEnumerable";
import { Exception } from "../src/disposable";
import { pipe, increment, returns } from "../src/functions";
import { fromValue, subscribe, onNotify, toValue } from "../src/observable";
import { none, Option } from "../src/option";
import { createVirtualTimeScheduler } from "../src/scheduler";
import {
  test,
  describe,
  expectEquals,
  expectNone,
  expectArrayEquals,
} from "../src/internal/testing";

export const tests = describe(
  "async-enumerable",
  test("reduce", () => {
    const enumerable = fromIterable([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      reduce((acc, next) => continue_(acc + next), returns<number>(0)),
      toValue(),
      expectEquals(21),
    );

    pipe(
      enumerable,
      reduce(
        (acc, next) => (acc > 0 ? done(acc + next) : continue_(acc + next)),
        returns<number>(0),
      ),
      toValue(),
      expectEquals(3),
    );
  }),

  describe(
    "reduceAsync",
    test("when the reducer early terminates", () =>
      pipe(
        [1, 2, 3, 4, 5, 6],
        fromIterable,
        reduceAsync(
          (acc, next) =>
            fromValue()(acc > 0 ? done(acc + next) : continue_(acc + next)),
          returns<number>(0),
        ),
        toValue(),
        expectEquals(3),
      )),
    test("when the reducer never terminates", () =>
      pipe(
        [1, 2, 3, 4, 5, 6],
        fromIterable,
        reduceAsync(
          (acc, next) => pipe(acc + next, continue_, fromValue()),
          returns<number>(0),
        ),
        toValue(),
        expectEquals(21),
      )),
  ),

  test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = fromArray([1, 2, 3, 4, 5, 6]).stream(scheduler);

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = fromIterable([1, 2, 3, 4, 5, 6]).stream(scheduler);

    const result: number[] = [];
    let error: Option<Exception> = none;
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    ).add(e => {
      error = e;
    });

    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
  }),

  test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = generate(increment, returns<number>(0)).stream(
      scheduler,
    );

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    enumerator.dispatch();
    enumerator.dispatch();
    enumerator.dispatch();

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
);
