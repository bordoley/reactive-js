import { dispose } from "../disposable";
import { incrementBy, pipe } from "../functions";
import { startWith, subscribe } from "../observable";
import { createVirtualTimeScheduler } from "../scheduler";
import { toStateStore } from "../stateStore";
import { identity, lift, stream } from "../streamable";
import { describe, expectArrayEquals, expectTrue, test } from "../testing";

export const tests = describe(
  "stateStore",
  test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = pipe(
      identity<number>(),
      lift(startWith(0)),
      toStateStore<number>(),
      stream(scheduler),
    );

    stateStream.dispatch(incrementBy(1));
    stateStream.dispatch(incrementBy(2));
    stateStream.dispatch(incrementBy(3));
    stateStream.dispatch(incrementBy(4));
    stateStream.dispatch(incrementBy(5));
    stateStream.dispatch(incrementBy(6));
    stateStream.dispatch(incrementBy(7));
    stateStream.dispatch(incrementBy(8));
    stateStream.dispatch(incrementBy(9));
    stateStream.dispatch(incrementBy(10));
    pipe(stateStream, dispose());

    let result: number[] = [];

    const subscription = pipe(
      stateStream,
      subscribe(scheduler, x => {
        result.push(x);
      }),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
  }),
);
