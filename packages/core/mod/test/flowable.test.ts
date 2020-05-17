import { dispose } from "../lib/disposable.ts";
import { empty, fromValue, FlowMode, fromObservable } from "../lib/flowable.ts";
import { increment, pipe, returns, bind } from "../lib/functions.ts";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../lib/internal/testing.ts";
import { onNotify, subscribe, generate, dispatch } from "../lib/observable.ts";
import { createVirtualTimeScheduler, schedule } from "../lib/scheduler.ts";
import { stream } from "../lib/streamable.ts";

export const tests = describe(
  "flowables",
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = stream(empty(), scheduler);

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
    const generateStream = stream(
      pipe(generate(increment, returns(-1), { delay: 1 }), fromObservable()),
      scheduler,
    );

    dispatch(generateStream, FlowMode.Resume);

    schedule(scheduler, bind(dispatch, generateStream, FlowMode.Pause), {
      delay: 2,
    });
    schedule(scheduler, bind(dispatch, generateStream, FlowMode.Resume), {
      delay: 4,
    });
    schedule(scheduler, bind(dispose, generateStream), { delay: 5 });

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
    const fromValueStream = stream(fromValue<number>()(1), scheduler);

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
