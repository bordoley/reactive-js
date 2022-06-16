import { ignoreElements, startWith } from "../container";
import { addTeardown, dispose } from "../disposable";
import {
  defer,
  increment,
  incrementBy,
  pipe,
  returns,
  sum,
} from "../functions";
import {
  StreamLike,
  __memo,
  __observe,
  buffer,
  concatT,
  dispatchTo,
  fromArray,
  fromArrayT,
  generate,
  keepT,
  observable,
  onNotify as onNotifyObs,
  subscribe,
  takeFirst,
  toRunnable,
} from "../observable";
import { none } from "../option";
import { toArray } from "../runnable";
import { createVirtualTimeScheduler, schedule } from "../scheduler";
import {
  __stream,
  createActionReducer,
  empty,
  flow,
  identity,
  lift,
  map,
  mapReq,
  mapTo,
  onNotify,
  scan,
  sink,
  stream,
} from "../streamable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectTrue,
  expectToHaveBeenCalledTimes,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "streamable",
  test("__stream", () => {
    const streamable = identity<number>();
    const createLooper = (stream: StreamLike<number, number>) =>
      pipe(
        [0, 1, 2, 3],
        fromArray({ delay: 10 }),
        onNotifyObs(x => {
          stream.dispatch(x);
        }),
        ignoreElements(keepT),
      );

    const obs = observable(() => {
      const stream = __stream(streamable);
      const runLooper = __memo(createLooper, stream);
      __observe(runLooper);

      return __observe(stream) ?? -1;
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
      subscribe(scheduler, x => {
        result.push(x);
      }),
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
        subscribe(scheduler, x => {
          result.push(x);
        }),
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
        subscribe(scheduler, x => {
          result.push(x);
        }),
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
      subscribe(scheduler, x => {
        result = x;
      }),
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
      subscribe(scheduler, x => {
        result = x;
      }),
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
      lift(startWith({ ...concatT, ...fromArrayT }, none)),
    );

    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    expectFalse(subscription.isDisposed);

    scheduler.run();

    expectTrue(subscription.isDisposed);
    pipe(result, expectEquals(3));
  }),
  describe(
    "flow",
    test("empty source", () => {
      const scheduler = createVirtualTimeScheduler();
      const emptyStream = pipe([], fromArray(), flow(), stream(scheduler));

      emptyStream.dispatch("pause");
      emptyStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(emptyStream, subscribe(scheduler, f));
      scheduler.run();

      pipe(f, expectToHaveBeenCalledTimes(0));
      expectTrue(subscription.isDisposed);
      expectTrue(emptyStream.isDisposed);
    }),

    test("generate source", () => {
      const scheduler = createVirtualTimeScheduler();
      const generateStream = pipe(
        generate(increment, returns(-1), { delay: 1 }),
        flow({ scheduler }),
        stream(scheduler),
      );

      generateStream.dispatch("resume");

      pipe(
        scheduler,
        schedule(defer("pause", dispatchTo(generateStream)), {
          delay: 2,
        }),
      );

      pipe(
        scheduler,
        schedule(defer("resume", dispatchTo(generateStream)), {
          delay: 4,
        }),
      );
      pipe(scheduler, schedule(defer(generateStream, dispose()), { delay: 5 }));

      const f = mockFn();
      const subscription = pipe(
        generateStream,
        subscribe(scheduler, x => {
          f(scheduler.now, x);
        }),
      );

      scheduler.run();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls[0][1], expectEquals(0));
      pipe(f.calls[1][1], expectEquals(1));
      pipe(f.calls[2][1], expectEquals(2));

      expectTrue(subscription.isDisposed);
    }),

    test("fromValue", () => {
      const scheduler = createVirtualTimeScheduler();
      const fromValueStream = pipe([1], fromArray(), flow(), stream(scheduler));

      fromValueStream.dispatch("resume");
      fromValueStream.dispatch("resume");

      const f = mockFn();
      const subscription = pipe(fromValueStream, subscribe(scheduler, f));

      scheduler.run();

      pipe(f, expectToHaveBeenCalledTimes(1));
      pipe(f.calls[0][0], expectEquals(1));
      expectTrue(subscription.isDisposed);
      expectTrue(fromValueStream.isDisposed);
    }),
  ),
);
