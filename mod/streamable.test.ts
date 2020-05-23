import { dispose, addTeardown } from "./disposable.ts";
import {
  test,
  describe,
  expectArrayEquals,
  expectEquals,
  expectTrue,
  expectFalse,
} from "./experimental/testing.ts";
import { pipe, returns, incrementBy, sum } from "./functions.ts";
import {
  subscribe,
  onNotify as onNotifyObs,
  buffer,
  takeFirst,
  startWith,
  dispatch,
} from "./observable.ts";
import { none } from "./option.ts";
import { createVirtualTimeScheduler } from "./scheduler.ts";
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
  stream,
} from "./streamable.ts";

export const tests = describe(
  "streamable",
  test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = stream(
      createActionReducer<number, number>(sum, returns<number>(0)),
      scheduler,
    );

    dispatch(actionReducerStream, 1);
    dispatch(actionReducerStream, 2);
    dispose(actionReducerStream);

    let result: number[] = [];
    pipe(
      actionReducerStream,
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
      const emptyStream = stream(empty<void, number>(), scheduler);

      dispatch(emptyStream, none);
      dispatch(emptyStream, none);

      let result: number[] = [];
      const subscription = pipe(
        emptyStream,
        onNotifyObs(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );
      scheduler.run();

      pipe(result, expectArrayEquals([]));
      expectTrue(emptyStream.isDisposed);
      expectTrue(subscription.isDisposed);
    }),

    test("with delay", () => {
      const scheduler = createVirtualTimeScheduler();
      const emptyStream = stream(
        empty<void, number>({ delay: 4 }),
        scheduler,
      );

      dispatch(emptyStream, none);
      dispatch(emptyStream, none);

      let result: number[] = [];
      let disposedTime = 0;
      const subscription = pipe(
        emptyStream,
        onNotifyObs(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );
      addTeardown(subscription, _ => {
        disposedTime = scheduler.now;
      });
      scheduler.run();

      pipe(result, expectArrayEquals([]));
      expectTrue(emptyStream.isDisposed);
      expectTrue(subscription.isDisposed);
      pipe(disposedTime, expectEquals(4));
    }),
  ),
  test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();

    const incrStream = stream(
      pipe(identity<number>(), map(incrementBy(100))),
      scheduler,
    );

    pipe(incrStream.observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(2));
    dispose(sub1);
    pipe(incrStream.observerCount, expectEquals(1));
    dispose(sub2);
    pipe(incrStream.observerCount, expectEquals(0));
  }),
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const incrStream = stream(
      pipe(identity<number>(), map(incrementBy(100))),
      scheduler,
    );

    dispatch(incrStream, 10);
    dispatch(incrStream, 20);
    dispatch(incrStream, 30);
    dispose(incrStream);

    let result: readonly number[] = [];
    const subscription = pipe(
      incrStream,
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

    const incrStream = stream(
      pipe(
        identity<number>(),
        mapReq<number, number, number>(incrementBy(100)),
        mapReq<number, string, number>(x => Number.parseInt(x)),
      ),
      scheduler,
    );

    dispatch(incrStream, "10");
    dispatch(incrStream, "20");
    dispatch(incrStream, "30");
    dispose(incrStream);

    let result: readonly number[] = [];
    const subscription = pipe(
      incrStream,
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
    const notifyStream = stream(
      pipe(
        identity<number>(),
        onNotify(x => {
          result.push(x);
        }),
      ),
      scheduler,
    );

    dispatch(notifyStream, 1);
    dispatch(notifyStream, 2);
    dispatch(notifyStream, 3);
    dispose(notifyStream);

    expectTrue(notifyStream.isDisposed);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
  test("scan", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const scanStream = stream(
      pipe(
        identity<number>(),
        scan(sum, returns<number>(0)),
        onNotify(x => {
          result.push(x);
        }),
      ),
      scheduler,
    );

    dispatch(scanStream, 1);
    dispatch(scanStream, 2);
    dispatch(scanStream, 3);

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
