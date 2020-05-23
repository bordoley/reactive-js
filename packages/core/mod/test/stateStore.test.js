import { dispose } from "../lib/disposable.js";
import { test, describe, expectArrayEquals, expectTrue, } from "../lib/experimental/testing.js";
import { pipe, incrementBy } from "../lib/functions.js";
import { onNotify, subscribe, startWith, dispatch } from "../lib/observable.js";
import { createVirtualTimeScheduler } from "../lib/scheduler.js";
import { toStateStore } from "../lib/stateStore.js";
import { identity, lift, stream } from "../lib/streamable.js";
export const tests = describe("stateStore", test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = stream(pipe(identity(), lift(startWith(0)), toStateStore()), scheduler);
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
    let result = [];
    const subscription = pipe(stateStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
}));
