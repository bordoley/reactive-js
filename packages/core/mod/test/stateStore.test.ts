import { dispose } from "../lib/disposable.ts";
import { pipe, incrementBy } from "../lib/functions.ts";
import {
  test,
  describe,
  expectArrayEquals,
  expectTrue,
} from "../lib/experimental/testing.ts";
import { onNotify, subscribe, startWith, dispatch } from "../lib/observable.ts";
import { createVirtualTimeScheduler } from "../lib/scheduler.ts";
import { toStateStore } from "../lib/stateStore.ts";
import { identity, lift, stream } from "../lib/streamable.ts";

export const tests = describe(
  "stateStore",
  test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = stream(
      pipe(identity<number>(), lift(startWith(0)), toStateStore<number>()),
      scheduler,
    );

    dispatch(stateStream, incrementBy(1));
    dispatch(stateStream, incrementBy(2));
    dispatch(stateStream, incrementBy(3));
    dispatch(stateStream, incrementBy(4));
    dispatch(stateStream, incrementBy(5));
    dispatch(stateStream, incrementBy(6));
    dispatch(stateStream, incrementBy(7));
    dispatch(stateStream, incrementBy(8));
    dispatch(stateStream, incrementBy(9));
    dispatch(stateStream, incrementBy(10));
    dispose(stateStream);

    let result: number[] = [];

    const subscription = pipe(
      stateStream,
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
