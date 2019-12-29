import { createVirtualTimeSchedulerResource } from "@reactive-js/schedulers";
import { fromArray, fromIterable, generate, reduceAsync } from "../src/index";
import { pipe } from "@reactive-js/pipe";
import {
  subscribe,
  onNext,
  ErrorLike,
  onComplete,
  ofValue,
} from "@reactive-js/rx";

test("fromArray", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = fromArray([1, 2, 3, 4, 5, 6]).getIXAsyncIterator(scheduler);

  const result: number[] = [];
  pipe(
    iter,
    onNext(x => result.push(x)),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch(2);

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});

test("fromIterable", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = fromIterable([1, 2, 3, 4, 5, 6]).getIXAsyncIterator(scheduler);

  const result: number[] = [];
  let error: ErrorLike | undefined = undefined;
  pipe(
    iter,
    onNext(x => result.push(x)),
    onComplete(e => {
      error = e;
    }),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch(2);
  iter.dispatch(3);
  iter.dispatch(5);

  scheduler.run();

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  expect(error).toBeUndefined();
});

test("generate", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = generate(
    x => x + 1,
    () => 0,
  ).getIXAsyncIterator(scheduler);

  const result: number[] = [];
  pipe(
    iter,
    onNext(x => result.push(x)),
    subscribe(scheduler),
  );

  iter.dispatch();
  iter.dispatch(2);

  scheduler.run();

  expect(result).toEqual([1, 2, 3]);
});

test("reduceAsync", () => {
  const scheduler = createVirtualTimeSchedulerResource(1);
  const iter = fromIterable([1, 2, 3, 4, 5, 6]);

  let result: number = 0;
  pipe(
    iter,
    reduceAsync(
      (acc, next) => ofValue({ result: acc + next }),
      () => ({ request: undefined, result: 0 }),
      scheduler,
    ),
    onNext(x => {
      result = x;
    }),
    subscribe(scheduler),
  );
  scheduler.run();

  expect(result).toEqual(21);
});
