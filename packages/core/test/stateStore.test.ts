import { test, describe, expectArrayEquals, expectTrue } from "../src/internal/testing";
import { pipe } from "../src/functions";
import { identity, lift } from "../src/streamable";
import { toStateStore } from "../src/stateStore";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { onNotify, subscribe, startWith } from "../src/observable";

export const tests = describe(
  "stateStore",
  test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stream = pipe(
      identity<number>(),
      lift(startWith(0)),
      toStateStore<number>(),
    ).stream(scheduler);

    stream.dispatch(x => x + 1);
    stream.dispatch(x => x + 2);
    stream.dispatch(x => x + 3);
    stream.dispatch(x => x + 4);
    stream.dispatch(x => x + 5);
    stream.dispatch(x => x + 6);
    stream.dispatch(x => x + 7);
    stream.dispatch(x => x + 8);
    stream.dispatch(x => x + 9);
    stream.dispatch(x => x + 10);
    stream.dispose();

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
