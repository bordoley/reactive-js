import { dispose } from "./disposable.ts";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "./experimental/testing.ts";
import { empty, fromValue, FlowMode, fromObservable } from "./flowable.ts";
import { increment, pipe, returns, defer } from "./functions.ts";
import {
  onNotify,
  subscribe,
  generate,
  dispatch,
  dispatchTo,
} from "./observable.ts";
import { createVirtualTimeScheduler, schedule } from "./scheduler.ts";
import { stream } from "./streamable.ts";

export const tests = describe(
  "flowables",
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(), stream(scheduler));

    dispatch(emptyStream, FlowMode.Pause);
    dispatch(emptyStream, FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(0));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
  }),

  test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(
      generate(increment, returns(-1), { delay: 1 }),
      fromObservable(),
      stream(scheduler),
    );

    dispatch(generateStream, FlowMode.Resume);

    pipe(
      scheduler,
      schedule(defer(FlowMode.Pause, dispatchTo(generateStream)), {
        delay: 2,
      }),
    );

    pipe(
      scheduler,
      schedule(defer(FlowMode.Resume, dispatchTo(generateStream)), {
        delay: 4,
      }),
    );
    pipe(scheduler, schedule(defer(generateStream, dispose()), { delay: 5 }));

    const f = mockFn();
    const subscription = pipe(
      generateStream,
      onNotify(x => {
        f(scheduler.now, x);
      }),
      subscribe(scheduler),
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
    const fromValueStream = pipe(1, fromValue<number>(), stream(scheduler));

    dispatch(fromValueStream, FlowMode.Resume);
    dispatch(fromValueStream, FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(
      fromValueStream,
      onNotify(f),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
  }),
);
