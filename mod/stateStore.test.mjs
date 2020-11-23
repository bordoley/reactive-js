import { pipe, incrementBy } from './functions.mjs';
import './option.mjs';
import { dispose } from './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import { createVirtualTimeScheduler } from './scheduler.mjs';
import { startWith, onNotify, subscribe } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { identity, lift, stream } from './streamable.mjs';
import { describe, test, expectArrayEquals, expectTrue } from './testing.mjs';
import { toStateStore } from './stateStore.mjs';

const tests = describe("stateStore", test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = pipe(identity(), lift(startWith(0)), toStateStore(), stream(scheduler));
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
    let result = [];
    const subscription = pipe(stateStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
}));

export { tests };
