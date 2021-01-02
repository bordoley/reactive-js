import { dispose } from "../disposable";
import { empty, fromObservable, fromValue } from "../flowable";
import { defer, increment, pipe, returns } from "../functions";
import { dispatchTo, generate, subscribe } from "../observable";

import { createVirtualTimeScheduler, schedule } from "../scheduler";
import { stream } from "../streamable";
import {
  describe,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "flowables",
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(), stream(scheduler));

    emptyStream.dispatch('pause');
    emptyStream.dispatch('resume');

    const f = mockFn();
    const subscription = pipe(emptyStream, subscribe(scheduler, f));
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

    generateStream.dispatch('resume');

    pipe(
      scheduler,
      schedule(defer('pause', dispatchTo(generateStream)), {
        delay: 2,
      }),
    );

    pipe(
      scheduler,
      schedule(defer('resume', dispatchTo(generateStream)), {
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
    const fromValueStream = pipe(1, fromValue<number>(), stream(scheduler));

    fromValueStream.dispatch('resume');
    fromValueStream.dispatch('resume');

    const f = mockFn();
    const subscription = pipe(fromValueStream, subscribe(scheduler, f));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
  }),
);
