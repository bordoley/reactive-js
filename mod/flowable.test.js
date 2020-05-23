import { dispose } from "./disposable.js";
import { test, describe, expectEquals, expectTrue, mockFn, expectToHaveBeenCalledTimes, } from "./experimental/testing.js";
import { empty, fromValue, fromObservable } from "./flowable.js";
import { increment, pipe, returns, defer } from "./functions.js";
import { onNotify, subscribe, generate, dispatch, dispatchTo, } from "./observable.js";
import { createVirtualTimeScheduler, schedule } from "./scheduler.js";
import { stream } from "./streamable.js";
export const tests = describe("flowables", test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = stream(empty(), scheduler);
    dispatch(emptyStream, 2);
    dispatch(emptyStream, 1);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(0));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = stream(pipe(generate(increment, returns(-1), { delay: 1 }), fromObservable()), scheduler);
    dispatch(generateStream, 1);
    schedule(scheduler, defer(2, dispatchTo(generateStream)), {
        delay: 2,
    });
    schedule(scheduler, defer(1, dispatchTo(generateStream)), {
        delay: 4,
    });
    schedule(scheduler, defer(generateStream, dispose), { delay: 5 });
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
    const fromValueStream = stream(fromValue()(1), scheduler);
    dispatch(fromValueStream, 1);
    dispatch(fromValueStream, 1);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}));
