import {
  test,
  describe,
  expectArrayEquals,
  expectTrue,
} from "../src/internal/testing";
import { pipe, incrementBy } from "../src/functions";
import { identity, lift } from "../src/streamable";
import { toStateStore } from "../src/stateStore";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { onNotify, subscribe, startWith } from "../src/observable";
import { dispose } from "../src/disposable";

export const tests = describe(
  "stateStore",
  test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stream = pipe(
      identity<number>(),
      lift(startWith(0)),
      toStateStore<number>(),
    ).stream(scheduler);

    stream.dispatch(incrementBy(1));
    stream.dispatch(incrementBy(2));
    stream.dispatch(incrementBy(3));
    stream.dispatch(incrementBy(4));
    stream.dispatch(incrementBy(5));
    stream.dispatch(incrementBy(6));
    stream.dispatch(incrementBy(7));
    stream.dispatch(incrementBy(8));
    stream.dispatch(incrementBy(9));
    stream.dispatch(incrementBy(10));
    dispose(stream);

    let result: number[] = [];

    const subscription = pipe(
      stream,
      onNotify(x => {
        result.push(x);
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
  }),
);
