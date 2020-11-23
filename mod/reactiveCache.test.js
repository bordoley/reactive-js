'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
var runnable = require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
require('./streamable.js');
var testing = require('./testing.js');
var reactiveCache = require('./reactiveCache.js');

const tests = testing.describe("reactive-cache", testing.test("lifecycle integration", () => {
    // Use microticks to test yielding
    const scheduler$1 = scheduler.createVirtualTimeScheduler({ maxMicroTaskTicks: 1 });
    const cache = reactiveCache.createReactiveCache(scheduler$1, scheduler$1, {
        maxCount: 2,
    });
    let bSubscription = disposable.disposed;
    let cSubscription = disposable.disposed;
    let dSubscription = disposable.disposed;
    let eSubscription = disposable.disposed;
    functions.pipe([
        () => {
            cache.set("a", observable.fromValue()("a"));
            cache.set("b", observable.fromValue()("b"));
            cache.set("c", observable.fromValue()("c"));
        },
        () => {
            // Max size is 2. A is never subscribed to so it is garbage collected.
            functions.pipe(cache.get("a"), testing.expectNone);
            const entryB = cache.get("b");
            functions.pipe(entryB, testing.expectSome);
            bSubscription = functions.pipe(entryB, observable.subscribe(scheduler$1));
            const entryC = cache.get("c");
            functions.pipe(entryC, testing.expectSome);
            cSubscription = functions.pipe(entryC, observable.subscribe(scheduler$1));
            const entryD = cache.set("d", observable.fromValue({ delay: 3 })("d"));
            dSubscription = functions.pipe(entryD, observable.subscribe(scheduler$1));
        },
        () => {
            // Assert that the cache maintain all active values
            // given the active subscription, despite the capacity
            // exceeding the cache's max size.
            functions.pipe(cache.get("b"), testing.expectSome);
            functions.pipe(cache.get("c"), testing.expectSome);
            functions.pipe(cache.get("d"), testing.expectSome);
            functions.pipe(cSubscription, disposable.dispose());
            functions.pipe(dSubscription, disposable.dispose());
            const entryE = cache.set("e", observable.fromValue()("e"));
            eSubscription = functions.pipe(entryE, observable.subscribe(scheduler$1));
        },
        () => {
            // c and d were disposed so ensure they return undefined
            functions.pipe(cache.get("b"), testing.expectSome);
            functions.pipe(cache.get("c"), testing.expectNone);
            functions.pipe(cache.get("d"), testing.expectNone);
            functions.pipe(cache.get("e"), testing.expectSome);
        },
        functions.defer(cache, disposable.dispose()),
        () => {
            // Ensure that disposing the cache disposes all outstanding subscriptions.
            // Note: check these here as these subscriptions require scheduling by the
            // cache to dispose (not done synchronously).
            functions.pipe(bSubscription.isDisposed, testing.expectTrue);
            functions.pipe(eSubscription.isDisposed, testing.expectTrue);
            functions.pipe(cache.get("b"), testing.expectNone);
            functions.pipe(cache.get("c"), testing.expectNone);
            functions.pipe(cache.get("d"), testing.expectNone);
            functions.pipe(cache.get("e"), testing.expectNone);
        },
    ], observable.fromArray({ delay: 1 }), observable.toRunnable({ schedulerFactory: functions.returns(scheduler$1) }), runnable.forEach(x => x()));
}), testing.test("subscribing to disposed value", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const cache = reactiveCache.createReactiveCache(scheduler$1, scheduler$1, {
        maxCount: 1,
    });
    let observable$1 = observable.never();
    let value = "";
    functions.pipe([
        () => {
            observable$1 = reactiveCache.getOrSet(cache, "a", observable.fromValue()("a"));
            reactiveCache.getOrSet(cache, "b", observable.fromValue()("b"));
        },
        () => {
            functions.pipe(observable$1, observable.onNotify(x => {
                value = x;
            }), observable.subscribe(scheduler$1));
        },
        () => {
            functions.pipe(value, testing.expectEquals(""));
        },
    ], observable.fromArray(), observable.toRunnable({ schedulerFactory: functions.returns(scheduler$1) }), runnable.forEach(x => x()));
}), testing.test("getOrSet", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const cache = reactiveCache.createReactiveCache(scheduler$1, scheduler$1, {
        maxCount: 2,
    });
    let value = "";
    functions.pipe([
        () => {
            let obs = reactiveCache.getOrSet(cache, "a", observable.fromValue()("a"));
            obs = reactiveCache.getOrSet(cache, "a", observable.fromValue()("b"));
            functions.pipe(obs, observable.onNotify(x => {
                value = x;
            }), observable.subscribe(scheduler$1));
        },
        () => {
            functions.pipe(value, testing.expectEquals("a"));
        },
    ], observable.fromArray({ delay: 1 }), observable.toRunnable({ schedulerFactory: functions.returns(scheduler$1) }), runnable.forEach(x => x()));
}));

exports.tests = tests;
