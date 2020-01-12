import { createVirtualTimeScheduler } from "@reactive-js/schedulers";
import {
  consumeAsync,
  ConsumeRequestType,
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

test("consumeAsync", () => {
  const iter = fromIterable([1, 2, 3, 4, 5, 6]);

  pipe(
    iter,
    consumeAsync(
      (acc, next) =>
        ofValue({
          type: ConsumeRequestType.Continue,
          req: 1,
          acc: acc + next,
        }),
      () => ({ type: ConsumeRequestType.Continue, req: 1, acc: 0 }),
    ),
    toValue(),
    expect,
  ).toEqual(21);

  pipe(
    iter,
    consumeAsync(
      (acc, next) =>
        ofValue(
          acc > 0
            ? {
                type: ConsumeRequestType.Done,
                acc: acc + next,
              }
            : {
                type: ConsumeRequestType.Continue,
                req: 1,
                acc: acc + next,
              },
        ),
      () => ({ type: ConsumeRequestType.Continue, req: 1, acc: 0 }),
    ),
    toValue(),
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

  iter.notifySafe();
  iter.notifySafe(2);

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

  iter.notifySafe();
  iter.notifySafe(2);
  iter.notifySafe(3);
  iter.notifySafe(5);

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

  iter.notifySafe();
  iter.notifySafe(2);

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});
