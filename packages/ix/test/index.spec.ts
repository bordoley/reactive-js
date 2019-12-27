import { createVirtualTimeSchedulerResource } from "@reactive-js/schedulers";
import { fromArray, fromIterable, generate } from "../src/index";
import { pipe } from "@reactive-js/pipe";
import { subscribe, onNext } from "@reactive-js/rx";

test("fromArray", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = fromArray([1,2,3,4,5,6], scheduler);
  
  const result: number[] = [];
  pipe(iter, onNext(x => result.push(x)), subscribe(scheduler));

  iter.dispatch(1);
  iter.dispatch(2);

  scheduler.run();

  expect(result).toEqual([1,2,3]);
})

test("fromIterable", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = fromIterable([1,2,3,4,5,6], scheduler);
  
  const result: number[] = [];
  pipe(iter, onNext(x => result.push(x)), subscribe(scheduler));

  iter.dispatch(1);
  iter.dispatch(2);

  scheduler.run();

  expect(result).toEqual([1,2,3]);
})


test("generate", () => {
  const scheduler = createVirtualTimeSchedulerResource();
  const iter = generate(x => x + 1, () => 0, scheduler);
  
  const result: number[] = [];
  pipe(iter, onNext(x => result.push(x)), subscribe(scheduler));

  iter.dispatch(1);
  iter.dispatch(2);

  scheduler.run();

  expect(result).toEqual([1,2,3]);
})