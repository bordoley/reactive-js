import { pipe, sum, returns, incrementBy } from './functions.mjs';
import { none } from './option.mjs';
import { dispose, addTeardown } from './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import { createVirtualTimeScheduler } from './scheduler.mjs';
import { onNotify, subscribe, buffer, takeFirst, startWith } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { createActionReducer, stream, empty, identity, map, mapReq, onNotify as onNotify$1, scan, lift, mapTo, sink } from './streamable.mjs';
import { describe, test, expectArrayEquals, expectTrue, expectEquals, expectFalse } from './testing.mjs';

const tests = describe("streamable", test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(createActionReducer(sum, returns(0)), stream(scheduler));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());
    let result = [];
    pipe(actionReducerStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3]));
}), describe("empty", test("with no delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    const subscription = pipe(emptyStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([]));
    expectTrue(emptyStream.isDisposed);
    expectTrue(subscription.isDisposed);
}), test("with delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty({ delay: 4 }), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    let disposedTime = 0;
    const subscription = pipe(emptyStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    addTeardown(subscription, _ => {
        disposedTime = scheduler.now;
    });
    scheduler.run();
    pipe(result, expectArrayEquals([]));
    expectTrue(emptyStream.isDisposed);
    expectTrue(subscription.isDisposed);
    pipe(disposedTime, expectEquals(4));
})), test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity(), map(incrementBy(100)), stream(scheduler));
    pipe(incrStream.observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(incrStream.observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(incrStream.observerCount, expectEquals(0));
}), test("map", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity(), map(incrementBy(100)), stream(scheduler));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
}), test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity(), mapReq(incrementBy(100)), mapReq(x => Number.parseInt(x)), stream(scheduler));
    incrStream.dispatch("10");
    incrStream.dispatch("20");
    incrStream.dispatch("30");
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
}), test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const notifyStream = pipe(identity(), onNotify$1(x => {
        result.push(x);
    }), stream(scheduler));
    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    pipe(notifyStream, dispose());
    expectTrue(notifyStream.isDisposed);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("scan", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const scanStream = pipe(identity(), scan(sum, returns(0)), onNotify$1(x => {
        result.push(x);
    }), stream(scheduler));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 3, 6]));
}), test("sink", () => {
    const scheduler = createVirtualTimeScheduler();
    const src = pipe(identity(), scan((acc, _) => acc + 1, returns(0)), lift(takeFirst({ count: 3 })));
    let result = 0;
    const dest = pipe(identity(), scan((acc, _) => acc + 1, returns(0)), onNotify$1(v => {
        result = v;
    }), mapTo(none), lift(startWith(none)));
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    expectFalse(subscription.isDisposed);
    scheduler.run();
    expectTrue(subscription.isDisposed);
    pipe(result, expectEquals(3));
}));

export { tests };
