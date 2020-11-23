import { pipe, increment, returns, defer } from './functions.mjs';
import { dispose } from './disposable.mjs';
import { createVirtualTimeScheduler, schedule } from './scheduler.mjs';
import { onNotify, subscribe, generate } from './observable.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { stream } from './streamable.mjs';
import { describe, test, mockFn, expectToHaveBeenCalledTimes, expectTrue, expectEquals } from './testing.mjs';
import { empty, fromObservable, fromValue } from './flowable.mjs';

const tests = describe("flowables", test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(), stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(0));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generate(increment, returns(-1), { delay: 1 }), fromObservable(), stream(scheduler));
    generateStream.dispatch(1 /* Resume */);
    pipe(scheduler, schedule(defer(2 /* Pause */, dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(defer(1 /* Resume */, dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(defer(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, onNotify(x => {
        f(scheduler.now, x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue(), stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    fromValueStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}));

export { tests };
