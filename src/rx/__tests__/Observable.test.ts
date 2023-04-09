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
} from "../../__internal__/testing.js";
import { Optional, pipe, raise } from "../../functions.js";
import * as ReadonlyArray from "../../keyed-containers/ReadonlyArray.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import * as Streamable from "../../streaming/Streamable.js";
import { DisposableLike_error, QueueableLike_enqueue } from "../../util.js";
import * as Observable from "../Observable.js";
import { __bindMethod, __do, __observe, __stream } from "../effects.js";

const computeTests = describe(
  "compute",

  testAsync("__stream", async () => {
    const result = await pipe(
      Observable.compute(() => {
        const stream = __stream(Streamable.identity<number>());
        const push = __bindMethod(stream, QueueableLike_enqueue);

        const result = __observe(stream) ?? 0;
        __do(push, result + 1);

        return result;
      }),
      Observable.takeFirst({ count: 10 }),
      Observable.buffer(),
      Observable.lastAsync(),
    );

    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }),
);

const onSubscribeTests = describe(
  "onSubscribe",
  test("when subscribe function returns a teardown function", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

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
    const scheduler = Scheduler.createVirtualTimeScheduler();
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
    const scheduler = Scheduler.createVirtualTimeScheduler();
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

const fromAsyncFactoryTests = describe(
  "fromAsyncFactory",
  testAsync("when promise resolves", async () => {
    const result = await pipe(
      Observable.fromAsyncFactory(async () => {
        await Promise.resolve(1);
        return 2;
      }),
      Observable.lastAsync(),
    );
    pipe(result, expectEquals(2 as Optional<number>));
  }),
  testAsync("when promise fails with an exception", async () => {
    await pipe(
      Observable.fromAsyncFactory(async () => {
        await Promise.resolve(1);
        raise();
      }),
      Observable.lastAsync(),
      expectPromiseToThrow,
    );
  }),
  testAsync("when factory throws an exception", async () => {
    await pipe(
      Observable.fromAsyncFactory(async () => {
        raise();
      }),
      Observable.lastAsync(),
      expectPromiseToThrow,
    );
  }),
);

testModule(
  "Observable",
  computeTests,
  fromAsyncFactoryTests,
  onSubscribeTests,
  shareTests,
);
