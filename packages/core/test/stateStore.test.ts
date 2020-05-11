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
import { onNotify, subscribe, startWith, dispatch } from "../src/observable";
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

    dispatch(stream,incrementBy(1));
    dispatch(stream,incrementBy(2));
    dispatch(stream,incrementBy(3));
    dispatch(stream,incrementBy(4));
    dispatch(stream,incrementBy(5));
    dispatch(stream,incrementBy(6));
    dispatch(stream,incrementBy(7));
    dispatch(stream,incrementBy(8));
    dispatch(stream,incrementBy(9));
    dispatch(stream,incrementBy(10));
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
