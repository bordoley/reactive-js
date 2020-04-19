import { Exception } from "@reactive-js/disposable";
import {
  subscribe,
  onNotify,
  onDispose,
  ofValue,
  toValue,
} from "@reactive-js/observable";
import { none, Option } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { createVirtualTimeScheduler } from "@reactive-js/scheduler";
import {
  reduce,
  reduceAsync,
  ReducerRequestType,
  fromArray,
  fromIterable,
  generate,
  identity,
  liftReq,
  map,
} from "../src/index";

test("reduce", () => {
  const enumerable = fromIterable([1, 2, 3, 4, 5, 6]);

  pipe(
    enumerable,
    reduce(
      (acc, next) => ({
        type: ReducerRequestType.Continue,
        acc: acc + next,
      }),
      () => 0,
    ),
    toValue(),
    expect,
  ).toEqual(21);

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

      () => 0,
    ),
    toValue(),
    expect,
  ).toEqual(3);
});

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
      () => 0,
    ),
    toValue(),
    expect,
  ).toEqual(21);

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
      () => 0,
    ),
    toValue(),
    expect,
  ).toEqual(3);
});

test("fromArray", () => {
  const scheduler = createVirtualTimeScheduler();
  const enumerator = fromArray([1, 2, 3, 4, 5, 6]).enumerateAsync(scheduler);

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

  expect(result).toEqual([1, 2, 3]);
});

test("fromIterable", () => {
  const scheduler = createVirtualTimeScheduler();
  const enumerator = fromIterable([1, 2, 3, 4, 5, 6]).enumerateAsync(scheduler);

  const result: number[] = [];
  let error: Option<Exception> = none;
  pipe(
    enumerator,
    onNotify(x => result.push(x)),
    onDispose(e => {
      error = e;
    }),
    subscribe(scheduler),
  );

  enumerator.dispatch();
  enumerator.dispatch();
  enumerator.dispatch();
  enumerator.dispatch();
  enumerator.dispatch();
  enumerator.dispatch();

  scheduler.run();

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  expect(error).toBeUndefined();
});

test("generate", () => {
  const scheduler = createVirtualTimeScheduler();
  const enumerator = generate(
    x => x + 1,
    () => 0,
  ).enumerateAsync(scheduler);

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

  expect(result).toEqual([1, 2, 3]);
});

test("liftReq", () => {
  const scheduler = createVirtualTimeScheduler();

  const lifted = pipe(
    identity<string>(),
    liftReq((x: number) => (x + 100).toLocaleString()),
    liftReq(({ val }: { val: number }) => val),
  );

  const enumerator = lifted.enumerateAsync(scheduler);

  const result: string[] = [];
  pipe(
    enumerator,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  enumerator.dispatch({ val: 10 });
  enumerator.dispatch({ val: 20 });
  enumerator.dispatch({ val: 30 });

  scheduler.run();

  expect(result).toEqual(["110", "120", "130"]);
});

test("liftReq", () => {
  const scheduler = createVirtualTimeScheduler();

  const lifted = pipe(
    identity<number>(),
    map(x => x + 100),
    map(x => ({ x })),
  );

  const enumerator = lifted.enumerateAsync(scheduler);

  const result: { x: number }[] = [];
  pipe(
    enumerator,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  enumerator.dispatch(0);
  enumerator.dispatch(1);
  enumerator.dispatch(2);

  scheduler.run();

  expect(result).toEqual([{ x: 100 }, { x: 101 }, { x: 102 }]);
});
