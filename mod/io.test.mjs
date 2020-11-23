import { pipe, returns, sum } from './functions.mjs';
import { none } from './option.mjs';
import './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import { createVirtualTimeScheduler } from './scheduler.mjs';
import { subscribe, onNotify } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { sink, stream } from './streamable.mjs';
import { describe, test, mockFn, expectToHaveBeenCalledTimes, expectEquals, expectTrue } from './testing.mjs';
import './flowable.mjs';
import { fromArray, decodeWithCharset, empty, fromValue, encodeUtf8, map } from './io.mjs';
import { createIOSinkAccumulator } from './ioSinkAccumulator.mjs';

const tests = describe("io", test("decodeWithCharset", () => {
    const src = pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], fromArray(), decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
}), test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(none, empty, stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals(2 /* Done */));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const src = pipe(str, fromValue(), encodeUtf8, decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(str));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue(), stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(1 /* Notify */));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(2 /* Done */));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}), test("map", () => {
    const src = pipe(1, fromValue(), map(returns(2)));
    const dest = createIOSinkAccumulator(sum, returns(0), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(2));
    expectTrue(subscription.isDisposed);
}));

export { tests };
