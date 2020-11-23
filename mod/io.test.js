'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
var streamable = require('./streamable.js');
var testing = require('./testing.js');
var io = require('./io.js');
var ioSinkAccumulator = require('./ioSinkAccumulator.js');

const tests = testing.describe("io", testing.test("decodeWithCharset", () => {
    const src = functions.pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], io.fromArray(), io.decodeWithCharset());
    const dest = ioSinkAccumulator.createIOSinkAccumulator((acc, next) => acc + next, functions.returns(""), { replay: 1 });
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler$1));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(String.fromCodePoint(8364)));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("empty", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(option.none, io.empty, streamable.stream(scheduler$1));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(emptyStream, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0].type, testing.expectEquals(2 /* Done */));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(emptyStream.isDisposed);
}), testing.test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const src = functions.pipe(str, io.fromValue(), io.encodeUtf8, io.decodeWithCharset());
    const dest = ioSinkAccumulator.createIOSinkAccumulator((acc, next) => acc + next, functions.returns(""), { replay: 1 });
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler$1));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(str));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("fromValue", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const fromValueStream = functions.pipe(1, io.fromValue(), streamable.stream(scheduler$1));
    fromValueStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(fromValueStream, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(2));
    functions.pipe(f.calls[0][0].type, testing.expectEquals(1 /* Notify */));
    functions.pipe(f.calls[0][0].data, testing.expectEquals(1));
    functions.pipe(f.calls[1][0].type, testing.expectEquals(2 /* Done */));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(fromValueStream.isDisposed);
}), testing.test("map", () => {
    const src = functions.pipe(1, io.fromValue(), io.map(functions.returns(2)));
    const dest = ioSinkAccumulator.createIOSinkAccumulator(functions.sum, functions.returns(0), { replay: 1 });
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler$1));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(2));
    testing.expectTrue(subscription.isDisposed);
}));

exports.tests = tests;
