import { pipe, returns, incrementBy, sum } from "../src/functions";
import {
  subscribe,
  onNotify as onNotifyObs,
  buffer,
  takeFirst,
  startWith,
} from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import {
  empty,
  identity,
  lift,
  map,
  mapReq,
  onNotify,
  scan,
  createActionReducer,
  mapTo,
  sink,
} from "../src/streamable";
import {
  test,
  describe,
  expectArrayEquals,
  expectEquals,
  expectTrue,
  expectFalse,
} from "../src/internal/testing";
import { none } from "../src/option";

export const tests = describe(
  "streamable",
  test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const stream = createActionReducer<number, number>(
      sum,
      returns<number>(0),
    ).stream(scheduler);

    stream.dispatch(1);
    stream.dispatch(2);
    stream.dispose();

    let result: number[] = [];
    pipe(
      stream,
      onNotifyObs(x => {
        result.push(x);
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([0, 1, 3]));
  }),
  describe(
    "empty",
    test("with no delay", () => {
      const scheduler = createVirtualTimeScheduler();
      const stream = empty<void, number>().stream(scheduler);

      stream.dispatch();
      stream.dispatch();

      let result: number[] = [];
      const subscription = pipe(
        stream,
        onNotifyObs(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );
      scheduler.run();

      pipe(result, expectArrayEquals([]));
      expectTrue(stream.isDisposed);
      expectTrue(subscription.isDisposed);
    }),

    test("with delay", () => {
      const scheduler = createVirtualTimeScheduler();
      const stream = empty<void, number>({ delay: 4 }).stream(scheduler);

      stream.dispatch();
      stream.dispatch();

      let result: number[] = [];
      let disposedTime = 0;
      const subscription = pipe(
        stream,
        onNotifyObs(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      ).add(_ => {
        disposedTime = scheduler.now;
      });
      scheduler.run();

      pipe(result, expectArrayEquals([]));
      expectTrue(stream.isDisposed);
      expectTrue(subscription.isDisposed);
      pipe(disposedTime, expectEquals(4));
    }),
  ),
  test("with multiple subscribers", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<number>(),
      map(incrementBy(100)),
    ).stream(scheduler);

    pipe(stream.subscriberCount, expectEquals(0));
    const sub1 = pipe(stream, subscribe(scheduler));
    pipe(stream.subscriberCount, expectEquals(1));
    const sub2 = pipe(stream, subscribe(scheduler));
    pipe(stream.subscriberCount, expectEquals(2));
    sub1.dispose();
    pipe(stream.subscriberCount, expectEquals(1));
    sub2.dispose();
    pipe(stream.subscriberCount, expectEquals(0));
  }),
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<number>(),
      map(incrementBy(100)),
    ).stream(scheduler);

    stream.dispatch(10);
    stream.dispatch(20);
    stream.dispatch(30);
    stream.dispose();

    let result: readonly number[] = [];
    const subscription = pipe(
      stream,
      buffer(),
      onNotifyObs(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
  }),

  test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<number>(),
      mapReq<number, number, number>(incrementBy(100)),
      mapReq<number, string, number>(x => Number.parseInt(x)),
    ).stream(scheduler);

    stream.dispatch("10");
    stream.dispatch("20");
    stream.dispatch("30");
    stream.dispose();

    let result: readonly number[] = [];
    const subscription = pipe(
      stream,
      buffer(),
      onNotifyObs(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
  }),
  test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const stream = pipe(
      identity<number>(),
      onNotify(x => {
        result.push(x);
      }),
    ).stream(scheduler);

    stream.dispatch(1);
    stream.dispatch(2);
    stream.dispatch(3);
    stream.dispose();

    expectTrue(stream.isDisposed);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
  test("scan", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const stream = pipe(
      identity<number>(),
      scan(sum, returns<number>(0)),
      onNotify(x => {
        result.push(x);
      }),
    ).stream(scheduler);

    stream.dispatch(1);
    stream.dispatch(2);
    stream.dispatch(3);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 3, 6]));
  }),
  test("sink", () => {
    const scheduler = createVirtualTimeScheduler();

    const src = pipe(
      identity<void>(),
      scan((acc, _) => acc + 1, returns<number>(0)),
      lift(takeFirst(3)),
    );

    let result = 0;
    const dest = pipe(
      identity<number>(),
      scan((acc, _) => acc + 1, returns<number>(0)),
      onNotify(v => {
        result = v;
      }),
      mapTo(none),
      lift(startWith(none)),
    );

    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    expectFalse(subscription.isDisposed);

    scheduler.run();

    expectTrue(subscription.isDisposed);
    pipe(result, expectEquals(3));
  }),
);
