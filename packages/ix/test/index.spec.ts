import { createVirtualTimeScheduler } from "@reactive-js/schedulers";
import { fromArray, fromIterable, generate, scanAsync } from "../src/index";
import { pipe } from "@reactive-js/pipe";
import {
  subscribe,
  onNotify,
  onDispose,
  ofValue,
  takeLast,
} from "@reactive-js/rx";
import { ErrorLike } from "@reactive-js/disposable";

test("fromArray", () => {
  const scheduler = createVirtualTimeScheduler();
  const iter = fromArray([1, 2, 3, 4, 5, 6]).enumerateAsync(scheduler);

  const result: number[] = [];
  pipe(
    iter,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  iter.notify();
  iter.notify(2);

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

  iter.notify();
  iter.notify(2);
  iter.notify(3);
  iter.notify(5);

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

  iter.notify();
  iter.notify(2);

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});

test("scanAsync", () => {
  const scheduler = createVirtualTimeScheduler(1);
  const iter = fromIterable([1, 2, 3, 4, 5, 6]);

  let result = 0;
  pipe(
    iter,
    scanAsync(
      (acc, next) => ofValue({ result: acc + next }),
      () => ({ request: undefined, result: 0 }),
      scheduler,
    ),
    takeLast(),
    onNotify(x => {
      result = x;
    }),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(result).toEqual(21);
});
