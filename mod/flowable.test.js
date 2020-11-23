'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
var dispatcher = require('./dispatcher.js');
var streamable = require('./streamable.js');
var testing = require('./testing.js');
var flowable = require('./flowable.js');

const tests = testing.describe("flowables", testing.test("empty", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(flowable.empty(), streamable.stream(scheduler$1));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(emptyStream, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(0));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(emptyStream.isDisposed);
}), testing.test("fromObservable", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const generateStream = functions.pipe(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), flowable.fromObservable(), streamable.stream(scheduler$1));
    generateStream.dispatch(1 /* Resume */);
    functions.pipe(scheduler$1, scheduler.schedule(functions.defer(2 /* Pause */, dispatcher.dispatchTo(generateStream)), {
        delay: 2,
    }));
    functions.pipe(scheduler$1, scheduler.schedule(functions.defer(1 /* Resume */, dispatcher.dispatchTo(generateStream)), {
        delay: 4,
    }));
    functions.pipe(scheduler$1, scheduler.schedule(functions.defer(generateStream, disposable.dispose()), { delay: 5 }));
    const f = testing.mockFn();
    const subscription = functions.pipe(generateStream, observable.onNotify(x => {
        f(scheduler$1.now, x);
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(3));
    functions.pipe(f.calls[0][1], testing.expectEquals(0));
    functions.pipe(f.calls[1][1], testing.expectEquals(1));
    functions.pipe(f.calls[2][1], testing.expectEquals(2));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("fromValue", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const fromValueStream = functions.pipe(1, flowable.fromValue(), streamable.stream(scheduler$1));
    fromValueStream.dispatch(1 /* Resume */);
    fromValueStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(fromValueStream, observable.onNotify(f), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(1));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(fromValueStream.isDisposed);
}));

exports.tests = tests;
