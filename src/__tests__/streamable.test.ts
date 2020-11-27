import { dispose, addTeardown } from "../disposable";
import { pipe, returns, incrementBy, sum } from "../functions";
import {
  __await,
  __memo,
  __observe,
  async,
  empty as emptyObs,
  subscribe,
  fromArray,
  onNotify as onNotifyObs,
  buffer,
  takeFirst,
  startWith,
  StreamLike,
  toRunnable,
} from "../observable";
import { Option, isSome, none } from "../option";
import { toArray } from "../runnable";
import { createVirtualTimeScheduler } from "../scheduler";
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
  __stream,
} from "../streamable";
import {
  test,
  describe,
  expectArrayEquals,
  expectEquals,
  expectTrue,
  expectFalse,
} from "../testing";

export const tests = describe(
  "streamable",
  test("__stream", () => {
    const streamable = identity<number>();
    const createLooper = (stream: Option<StreamLike<number, number>>) =>
      pipe(
        [0, 1, 2, 3],
        fromArray({ delay: 10 }),
        onNotifyObs(x => {
          if (isSome(stream)) {
            stream.dispatch(x);
          }
        }),
      );

    const obs = async(() => {
      debugger;
      const stream = __stream(streamable);
      const looper = __memo(createLooper, stream);

      __await(looper);

      return __observe(stream ?? emptyObs());
    });

    pipe(obs, toRunnable(), toArray(), console.log);
  }),
  test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(
      createActionReducer<number, number>(sum, returns<number>(0)),
      stream(scheduler),
    );

    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());

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
      const emptyStream = pipe(empty<void, number>(), stream(scheduler));

      emptyStream.dispatch(none);
      emptyStream.dispatch(none);

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
      const emptyStream = pipe(
        empty<void, number>({ delay: 4 }),
        stream(scheduler),
      );

      emptyStream.dispatch(none);
      emptyStream.dispatch(none);

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

    const incrStream = pipe(
      identity<number>(),
      map(incrementBy(100)),
      stream(scheduler),
    );

    pipe(incrStream.observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(incrStream.observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(incrStream.observerCount, expectEquals(0));
  }),
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const incrStream = pipe(
      identity<number>(),
      map(incrementBy(100)),
      stream(scheduler),
    );

    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());

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

    const incrStream = pipe(
      identity<number>(),
      mapReq<number, number, number>(incrementBy(100)),
      mapReq<number, string, number>(x => Number.parseInt(x)),
      stream(scheduler),
    );

    incrStream.dispatch("10");
    incrStream.dispatch("20");
    incrStream.dispatch("30");
    pipe(incrStream, dispose());

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
    const notifyStream = pipe(
      identity<number>(),
      onNotify(x => {
        result.push(x);
      }),
      stream(scheduler),
    );

    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    pipe(notifyStream, dispose());

    expectTrue(notifyStream.isDisposed);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
  test("scan", () => {
    const scheduler = createVirtualTimeScheduler();

    let result: number[] = [];
    const scanStream = pipe(
      identity<number>(),
      scan(sum, returns<number>(0)),
      onNotify(x => {
        result.push(x);
      }),
      stream(scheduler),
    );

    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 3, 6]));
  }),
  test("sink", () => {
    const scheduler = createVirtualTimeScheduler();

    const src = pipe(
      identity<void>(),
      scan((acc, _) => acc + 1, returns<number>(0)),
      lift(takeFirst({ count: 3 })),
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
