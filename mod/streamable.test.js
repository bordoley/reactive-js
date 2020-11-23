'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');
var testing = require('./testing.js');

const tests = testing.describe("streamable", testing.test("createActionReducer", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const actionReducerStream = functions.pipe(streamable.createActionReducer(functions.sum, functions.returns(0)), streamable.stream(scheduler$1));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    functions.pipe(actionReducerStream, disposable.dispose());
    let result = [];
    functions.pipe(actionReducerStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([0, 1, 3]));
}), testing.describe("empty", testing.test("with no delay", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(streamable.empty(), streamable.stream(scheduler$1));
    emptyStream.dispatch(option.none);
    emptyStream.dispatch(option.none);
    let result = [];
    const subscription = functions.pipe(emptyStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([]));
    testing.expectTrue(emptyStream.isDisposed);
    testing.expectTrue(subscription.isDisposed);
}), testing.test("with delay", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(streamable.empty({ delay: 4 }), streamable.stream(scheduler$1));
    emptyStream.dispatch(option.none);
    emptyStream.dispatch(option.none);
    let result = [];
    let disposedTime = 0;
    const subscription = functions.pipe(emptyStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler$1));
    disposable.addTeardown(subscription, _ => {
        disposedTime = scheduler$1.now;
    });
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([]));
    testing.expectTrue(emptyStream.isDisposed);
    testing.expectTrue(subscription.isDisposed);
    functions.pipe(disposedTime, testing.expectEquals(4));
})), testing.test("with multiple observers", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.map(functions.incrementBy(100)), streamable.stream(scheduler$1));
    functions.pipe(incrStream.observerCount, testing.expectEquals(0));
    const sub1 = functions.pipe(incrStream, observable.subscribe(scheduler$1));
    functions.pipe(incrStream.observerCount, testing.expectEquals(1));
    const sub2 = functions.pipe(incrStream, observable.subscribe(scheduler$1));
    functions.pipe(incrStream.observerCount, testing.expectEquals(2));
    functions.pipe(sub1, disposable.dispose());
    functions.pipe(incrStream.observerCount, testing.expectEquals(1));
    functions.pipe(sub2, disposable.dispose());
    functions.pipe(incrStream.observerCount, testing.expectEquals(0));
}), testing.test("map", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.map(functions.incrementBy(100)), streamable.stream(scheduler$1));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    functions.pipe(incrStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(incrStream, observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([110, 120, 130]));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("mapReq", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.mapReq(functions.incrementBy(100)), streamable.mapReq(x => Number.parseInt(x)), streamable.stream(scheduler$1));
    incrStream.dispatch("10");
    incrStream.dispatch("20");
    incrStream.dispatch("30");
    functions.pipe(incrStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(incrStream, observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([110, 120, 130]));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("onNotify", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    let result = [];
    const notifyStream = functions.pipe(streamable.identity(), streamable.onNotify(x => {
        result.push(x);
    }), streamable.stream(scheduler$1));
    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    functions.pipe(notifyStream, disposable.dispose());
    testing.expectTrue(notifyStream.isDisposed);
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}), testing.test("scan", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    let result = [];
    const scanStream = functions.pipe(streamable.identity(), streamable.scan(functions.sum, functions.returns(0)), streamable.onNotify(x => {
        result.push(x);
    }), streamable.stream(scheduler$1));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([1, 3, 6]));
}), testing.test("sink", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const src = functions.pipe(streamable.identity(), streamable.scan((acc, _) => acc + 1, functions.returns(0)), streamable.lift(observable.takeFirst({ count: 3 })));
    let result = 0;
    const dest = functions.pipe(streamable.identity(), streamable.scan((acc, _) => acc + 1, functions.returns(0)), streamable.onNotify(v => {
        result = v;
    }), streamable.mapTo(option.none), streamable.lift(observable.startWith(option.none)));
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler$1));
    testing.expectFalse(subscription.isDisposed);
    scheduler$1.run();
    testing.expectTrue(subscription.isDisposed);
    functions.pipe(result, testing.expectEquals(3));
}));

exports.tests = tests;
