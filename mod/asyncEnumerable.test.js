'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
var runnable = require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');
var asyncEnumerable = require('./asyncEnumerable.js');
var testing = require('./testing.js');

const tests = testing.describe("async-enumerable", testing.test("consume", () => {
    const enumerable = asyncEnumerable.fromIterable()([1, 2, 3, 4, 5, 6]);
    functions.pipe(enumerable, asyncEnumerable.consume((acc, next) => asyncEnumerable.notify(acc + next), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(21));
    functions.pipe(enumerable, asyncEnumerable.consume((acc, next) => (acc > 0 ? asyncEnumerable.done(acc + next) : asyncEnumerable.notify(acc + next)), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(3));
}), testing.describe("consumeAsync", testing.test("when the consumer early terminates", functions.defer([1, 2, 3, 4, 5, 6], asyncEnumerable.fromIterable(), asyncEnumerable.consumeAsync((acc, next) => observable.fromValue()(acc > 0 ? asyncEnumerable.done(acc + next) : asyncEnumerable.notify(acc + next)), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(3))), testing.test("when the consumer never terminates", functions.defer([1, 2, 3, 4, 5, 6], asyncEnumerable.fromIterable(), asyncEnumerable.consumeAsync((acc, next) => functions.pipe(acc + next, asyncEnumerable.notify, observable.fromValue()), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(21)))), testing.test("fromArray", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const enumerable = functions.pipe([1, 2, 3, 4, 5, 6], asyncEnumerable.fromArray());
    const enumerator = functions.pipe(enumerable, streamable.stream(scheduler$1));
    const result = [];
    functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler$1));
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}), testing.test("fromIterable", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const enumerator = functions.pipe(asyncEnumerable.fromIterable()([1, 2, 3, 4, 5, 6]), streamable.stream(scheduler$1));
    const result = [];
    let error = option.none;
    const subscription = functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler$1));
    disposable.addTeardown(subscription, e => {
        error = e;
    });
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3, 4, 5, 6]));
    functions.pipe(error, testing.expectNone);
}), testing.test("generate", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler();
    const enumerator = functions.pipe(asyncEnumerable.generate(functions.increment, functions.returns(0)), streamable.stream(scheduler$1));
    const result = [];
    functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler$1));
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}));

exports.tests = tests;
