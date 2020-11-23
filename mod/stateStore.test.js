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
require('./dispatcher.js');
var streamable = require('./streamable.js');
var testing = require('./testing.js');
var stateStore = require('./stateStore.js');

const tests = testing.describe("stateStore", testing.test("toStateStore", () => {
    const scheduler$1 = scheduler.createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = functions.pipe(streamable.identity(), streamable.lift(observable.startWith(0)), stateStore.toStateStore(), streamable.stream(scheduler$1));
    stateStream.dispatch(functions.incrementBy(1));
    stateStream.dispatch(functions.incrementBy(2));
    stateStream.dispatch(functions.incrementBy(3));
    stateStream.dispatch(functions.incrementBy(4));
    stateStream.dispatch(functions.incrementBy(5));
    stateStream.dispatch(functions.incrementBy(6));
    stateStream.dispatch(functions.incrementBy(7));
    stateStream.dispatch(functions.incrementBy(8));
    stateStream.dispatch(functions.incrementBy(9));
    stateStream.dispatch(functions.incrementBy(10));
    functions.pipe(stateStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(stateStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler$1));
    scheduler$1.run();
    functions.pipe(result, testing.expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    testing.expectTrue(subscription.isDisposed);
}));

exports.tests = tests;
