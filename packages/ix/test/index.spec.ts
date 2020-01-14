import { createVirtualTimeScheduler } from "@reactive-js/schedulers";
import {
  reduce,
  reduceAsync,
  ReducerRequestType,
  fromArray,
  fromIterable,
  generate,
} from "../src/index";
import { pipe } from "@reactive-js/pipe";
import {
  subscribe,
  onNotify,
  onDispose,
  ofValue,
  toValue,
} from "@reactive-js/rx";
import { ErrorLike } from "@reactive-js/disposable";

test("reduce", () => {
  const iter = fromIterable([1, 2, 3, 4, 5, 6]);

  pipe(
    iter,
    reduce(
      (acc, next) => ({
        type: ReducerRequestType.Continue,
        req: undefined,
        acc: acc + next,
      }),
      () => ({ type: ReducerRequestType.Continue, req: undefined, acc: 0 }),
    ),
    toValue,
    expect,
  ).toEqual(21);

  pipe(
    iter,
    reduce(
      (acc, next) =>
        acc > 0
          ? {
              type: ReducerRequestType.Done,
              acc: acc + next,
            }
          : {
              type: ReducerRequestType.Continue,
              req: undefined,
              acc: acc + next,
            },

      () => ({ type: ReducerRequestType.Continue, req: undefined, acc: 0 }),
    ),
    toValue,
    expect,
  ).toEqual(3);
});

test("reduceAsync", () => {
  const iter = fromIterable([1, 2, 3, 4, 5, 6]);

  pipe(
    iter,
    reduceAsync(
      (acc, next) =>
        ofValue({
          type: ReducerRequestType.Continue,
          req: undefined,
          acc: acc + next,
        }),
      () => ({ type: ReducerRequestType.Continue, req: undefined, acc: 0 }),
    ),
    toValue,
    expect,
  ).toEqual(21);

  pipe(
    iter,
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
                req: undefined,
                acc: acc + next,
              },
        ),
      () => ({ type: ReducerRequestType.Continue, req: undefined, acc: 0 }),
    ),
    toValue,
    expect,
  ).toEqual(3);
});

test("fromArray", () => {
  const scheduler = createVirtualTimeScheduler();
  const iter = fromArray([1, 2, 3, 4, 5, 6]).enumerateAsync(scheduler);

  const result: number[] = [];
  pipe(
    iter,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch();
  iter.dispatch();

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});

test("fromIterable", () => {
  const scheduler = createVirtualTimeScheduler();
  const iter = fromIterable([1, 2, 3, 4, 5, 6]).enumerateAsync(scheduler);

  const result: number[] = [];
  let error: ErrorLike | undefined = undefined;
  pipe(
    iter,
    onNotify(x => result.push(x)),
    onDispose(e => {
      error = e;
    }),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch();
  iter.dispatch();
  iter.dispatch();
  iter.dispatch();
  iter.dispatch();

  scheduler.run();

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  expect(error).toBeUndefined();
});

test("generate", () => {
  const scheduler = createVirtualTimeScheduler();
  const iter = generate(
    x => x + 1,
    () => 0,
  ).enumerateAsync(scheduler);

  const result: number[] = [];
  pipe(
    iter,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch();
  iter.dispatch();

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});
