import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  expectPromiseToThrow,
  expectToHaveBeenCalledTimes,
  mockFn,
  test,
  testAsync,
  testModule,
} from "../../__tests__/testing.js";
import * as ReadonlyArray from "../../containers/ReadonlyArray.js";
import { increment, isSome, pipe, raise, returns } from "../../functions.js";
import { ObservableLike } from "../../rx.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import * as VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../util.js";
import * as Observable from "../Observable.js";
import { __await, __memo } from "../Observable.js";

const onSubscribeTests = describe(
  "onSubscribe",
  test("when subscribe function returns a teardown function", () => {
    const scheduler = VirtualTimeScheduler.create();

    const disp = mockFn();
    const f = mockFn(disp);

    pipe(
      [1],
      ReadonlyArray.toObservable(),
      Observable.onSubscribe(f),
      Observable.subscribe(scheduler),
    );

    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
  }),

  test("when callback function throws", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subscription = pipe(
      [1],
      ReadonlyArray.toObservable(),
      Observable.onSubscribe(raise),
      Observable.subscribe(scheduler),
    );

    pipe(subscription[DisposableLike_error], expectIsSome);
  }),
);

const shareTests = describe(
  "share",
  test("shared observable zipped with itself", () => {
    const scheduler = VirtualTimeScheduler.create();
    const shared = pipe(
      [1, 2, 3],
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.share(scheduler, { replay: 1 }),
    );

    let result: number[] = [];
    pipe(
      Observable.zip(shared, shared),
      Observable.map<[number, number], number>(([a, b]) => a + b),
      Observable.forEach<number>(x => {
        result.push(x);
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),
);

const toPromiseTests = describe(
  "toPromise",
  testAsync("when observable completes without producing a value", async () => {
    const scheduler = Scheduler.createHostScheduler();
    try {
      await pipe(
        pipe(Observable.empty(), Observable.toPromise(scheduler)),
        expectPromiseToThrow,
      );
    } finally {
      scheduler[DisposableLike_dispose]();
    }
  }),
);

const asyncTests = describe(
  "async",
  test("batch mode", () => {
    const scheduler = VirtualTimeScheduler.create();

    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> =>
      pipe([value], Observable.fromReadonlyArray({ delay }));

    let result = -1;

    pipe(
      Observable.async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);

        return result1 + result2 + result3;
      }),
      Observable.takeLast<number>(),
      Observable.forEach<number>(v => {
        result = v;
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(result, expectEquals(22));
  }),
  test("combined-latest mode", () => {
    const scheduler = VirtualTimeScheduler.create();

    const oneTwoThreeDelayed = pipe(
      [1, 2, 3],
      Observable.fromReadonlyArray({ delay: 1 }),
    );
    const createOneTwoThree = (_: unknown) =>
      pipe([1, 2, 3], Observable.fromReadonlyArray());

    const result: number[] = [];

    pipe(
      Observable.async(
        () => {
          const v = __await(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __await(next);
        },
        { mode: "combine-latest" },
      ),
      Observable.keepType(isSome),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  }),
  test("conditional hooks", () => {
    const scheduler = VirtualTimeScheduler.create();

    const src = pipe(
      [0, 1, 2, 3, 4, 5],
      Observable.fromReadonlyArray({ delay: 5 }),
    );
    const src2 = Observable.generate(increment, returns(100), {
      delay: 2,
      delayStart: false,
    });

    const result: number[] = [];

    pipe(
      Observable.async(() => {
        const v = __await(src);

        if (v % 2 === 0) {
          __memo(increment, 1);
          return __await(src2);
        }
        return v;
      }),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(
      result,
      expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]),
    );
  }),
);

testModule(
  "Observable",
  asyncTests,
  onSubscribeTests,
  shareTests,
  toPromiseTests,
);
