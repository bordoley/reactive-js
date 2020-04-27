import { test, describe, expectToEqual, expectNone } from "../src/testing";
import { Exception } from "../src/disposable";
import { subscribe, onNotify, ofValue, toValue } from "../src/observable";
import { none, Option } from "../src/option";
import { pipe } from "../src/pipe";
import { createVirtualTimeScheduler } from "../src/scheduler";
import {
  reduce,
  reduceAsync,
  ReducerRequestType,
  fromArray,
  fromIterable,
  generate,
} from "../src/async-enumerable";
import { incr, returns } from "../src/functions";

export const tests = describe("async-enumerable",
  test("reduce", () => {
    const enumerable = fromIterable([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      reduce(
        (acc, next) => ({
          type: ReducerRequestType.Continue,
          acc: acc + next,
        }),
        returns<number>(0),
      ),
      toValue(),
      expectToEqual(21),
    );

    pipe(
      enumerable,
      reduce(
        (acc, next) =>
          acc > 0
            ? {
                type: ReducerRequestType.Done,
                acc: acc + next,
              }
            : {
                type: ReducerRequestType.Continue,
                acc: acc + next,
              },

        returns<number>(0),
      ),
      toValue(),
      expectToEqual(3),
    );
  }),

  test("reduceAsync", () => {
    const enumerable = fromIterable([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      reduceAsync(
        (acc, next) =>
          ofValue({
            type: ReducerRequestType.Continue,
            acc: acc + next,
          }),
        returns<number>(0),
      ),
      toValue(),
      expectToEqual(21),
    );

    pipe(
      enumerable,
      reduceAsync(
        (acc, next) =>
          ofValue(
            acc > 0
              ? {
                  type: ReducerRequestType.Done,
                  acc: acc + next,
                }
              : {
                  type: ReducerRequestType.Continue,
                  acc: acc + next,
                },
          ),
        returns<number>(0),
      ),
      toValue(),
      expectToEqual(3),
    );
  }),

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

    pipe(result, expectToEqual([1, 2, 3]));
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

    pipe(result, expectToEqual([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
  }),

  test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = generate(incr, returns<number>(0)).stream(scheduler);

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

    pipe(result, expectToEqual([1, 2, 3]));
  }),
);
