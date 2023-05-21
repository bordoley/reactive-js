import * as Observable from "../Observable.js";
import * as Scheduler from "../Scheduler.js";
import * as Store from "../Store.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { identity, increment, pipe, returns } from "../functions.js";
import { StoreLike_value, VirtualTimeSchedulerLike_run } from "../types.js";

testModule(
  "Store",
  describe(
    "toObservable",
    test("", () => {
      const store = Store.create<number>(0);
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const result: number[] = [];
      pipe(
        store,
        Store.toObservable(),
        Observable.withCurrentTime(identity),
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      pipe(
        Observable.generate(increment, returns(-1), { delay: 3 }),
        Observable.takeFirst({ count: 3 }),
        Observable.forEach<number>(x => {
          store[StoreLike_value] = x;
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 3, 6]));
    }),
  ),
);

((_: Store.Signature) => {})(Store);
