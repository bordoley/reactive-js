import { decodeWithCharset, empty, encodeUtf8, fromValue, fromObservable, map, createFlowableSinkAccumulator, } from "../lib/flowable.js";
import { increment, pipe, returns, sum, bind } from "../lib/functions.js";
import { onNotify, subscribe, generate, fromArray, dispatch, } from "../lib/observable.js";
import { createVirtualTimeScheduler, schedule } from "../lib/scheduler.js";
import { test, describe, expectEquals, expectTrue, mockFn, expectToHaveBeenCalledTimes, } from "../lib/internal/testing.js";
import { sink, stream } from "../lib/streamable.js";
import { dispose } from "../lib/disposable.js";
export const tests = describe("flowables", test("decodeWithCharset", () => {
    const lib = pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], fromArray(), fromObservable, decodeWithCharset());
    const dest = createFlowableSinkAccumulator((acc, next) => acc + next, returns(""));
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.run();
    pipe(dest.acc, expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
}), test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = stream(empty(), scheduler);
    dispatch(emptyStream, 2);
    dispatch(emptyStream, 1);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals(2));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const lib = pipe(str, fromValue, encodeUtf8, decodeWithCharset());
    const dest = createFlowableSinkAccumulator((acc, next) => acc + next, returns(""));
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.run();
    pipe(dest.acc, expectEquals(str));
    expectTrue(subscription.isDisposed);
}), test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = stream(pipe(generate(increment, returns(0), { delay: 1 }), fromObservable), scheduler);
    dispatch(generateStream, 1);
    schedule(scheduler, bind(dispatch, generateStream, 2), {
        delay: 2,
    });
    schedule(scheduler, bind(dispatch, generateStream, 1), {
        delay: 4,
    });
    schedule(scheduler, bind(dispose, generateStream), { delay: 5 });
    const f = mockFn();
    const subscription = pipe(generateStream, onNotify(x => {
        f(scheduler.now, x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(4));
    pipe(f.calls[0][1].type, expectEquals(1));
    pipe(f.calls[0][1].data, expectEquals(0));
    pipe(f.calls[1][1].type, expectEquals(1));
    pipe(f.calls[1][1].data, expectEquals(1));
    pipe(f.calls[2][1].type, expectEquals(1));
    pipe(f.calls[2][1].data, expectEquals(2));
    pipe(f.calls[3][1].type, expectEquals(2));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = stream(fromValue(1), scheduler);
    dispatch(fromValueStream, 2);
    dispatch(fromValueStream, 2);
    dispatch(fromValueStream, 1);
    dispatch(fromValueStream, 1);
    dispatch(fromValueStream, 2);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(1));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(2));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}), test("map", () => {
    const lib = pipe(fromValue(1), map(_ => 2));
    const dest = createFlowableSinkAccumulator(sum, returns(0));
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.run();
    pipe(dest.acc, expectEquals(2));
    expectTrue(subscription.isDisposed);
}));
