'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var disposable = require('./disposable.js');
var runnable = require('./runnable.js');
var scheduler$1 = require('./scheduler.js');
var observable = require('./observable.js');
var dispatcher = require('./dispatcher.js');
var testing = require('./testing.js');
var monad_test = require('./monad.test.js');

const scheduler = scheduler$1.createHostScheduler();
const Observable = {
    concat: observable.concat,
    concatMap: observable.concatMap,
    distinctUntilChanged: observable.distinctUntilChanged,
    empty: observable.empty,
    endWith: observable.endWith,
    fromArray: observable.fromArray,
    fromValue: observable.fromValue,
    generate: observable.generate,
    keep: observable.keep,
    map: observable.map,
    mapTo: observable.mapTo,
    repeat: observable.repeat,
    scan: observable.scan,
    skipFirst: observable.skipFirst,
    startWith: observable.startWith,
    takeFirst: observable.takeFirst,
    takeLast: observable.takeLast,
    takeWhile: observable.takeWhile,
    toRunnable: observable.toRunnable,
};
const tests = testing.describe("observable", testing.test("await_", functions.defer([0, 1, 2, 3, 4], observable.fromArray(), observable.await_(functions.compose(observable.fromValue(), observable.endWith(1))), observable.toRunnable(), runnable.last, testing.expectEquals(0))), testing.describe("buffer", testing.test("with duration and maxBufferSize", functions.defer(observable.concat(functions.pipe([1, 2, 3, 4], observable.fromArray()), functions.pipe([1, 2, 3], observable.fromArray({ delay: 1 })), functions.pipe(4, observable.fromValue({ delay: 8 }))), observable.buffer({ duration: 4, maxBufferSize: 3 }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], functions.arrayEquality()))), testing.test("when duration observable throws", functions.defer(functions.defer([1, 2, 3, 4], observable.fromArray(), observable.buffer({ duration: _ => observable.throws()(functions.raise) }), observable.toRunnable({
    schedulerFactory: functions.defer({ maxMicroTaskTicks: 1 }, scheduler$1.createVirtualTimeScheduler),
}), runnable.toArray()), testing.expectToThrow))), testing.describe("catchError", testing.test("source completes successfully", functions.defer(functions.pipe(1, observable.fromValue()), observable.catchError(_ => observable.fromValue()(2)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1]))), testing.test("source throws, error caught and ignored", () => {
    const error = new Error();
    functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(functions.ignore), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1]));
}), testing.test("source throws, continues with second observable", () => {
    const error = new Error();
    functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(_ => observable.fromValue()(2)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2]));
}), testing.test("source throws, catch throws", () => {
    const error = new Error();
    testing.expectToThrow(() => functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(_ => {
        throw error;
    }), observable.toRunnable(), runnable.toArray()));
})), testing.test("combineLatest", functions.defer(observable.generate(functions.incrementBy(2), functions.returns(1), { delay: 2 }), observable.takeFirst({ count: 3 }), observable.combineLatestWith(functions.pipe(observable.generate(functions.incrementBy(2), functions.returns(0), { delay: 3 }), observable.takeFirst({ count: 2 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
], functions.arrayEquality()))), testing.describe("createObservable", testing.test("disposes the observer if onSubscribe throws", () => {
    const cause = new Error();
    const observable$1 = observable.createObservable(_ => {
        throw cause;
    });
    functions.pipe(() => functions.pipe(observable$1, observable.toRunnable(), runnable.last), testing.expectToThrowError(cause));
}), testing.test("when queuing multiple events", functions.defer(observable.createObservable(dispatcher => {
    dispatcher.dispatch(1);
    dispatcher.dispatch(2);
    dispatcher.dispatch(3);
    functions.pipe(dispatcher, disposable.dispose());
}), observable.toRunnable({
    schedulerFactory: functions.defer({ maxMicroTaskTicks: 1 }, scheduler$1.createVirtualTimeScheduler),
}), runnable.toArray(), testing.expectArrayEquals([1, 2, 3])))), testing.describe("createSubject", testing.test("with replay", () => {
    const subject = observable.createSubject({ replay: 2 });
    functions.pipe([1, 2, 3, 4], runnable.fromArray(), runnable.forEach(dispatcher.dispatchTo(subject)));
    functions.pipe(subject, disposable.dispose());
    functions.pipe(subject, observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3, 4]));
}), testing.test("with multiple observers", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subject = observable.createSubject();
    functions.pipe(subject.observerCount, testing.expectEquals(0));
    const sub1 = functions.pipe(subject, observable.subscribe(scheduler));
    functions.pipe(subject.observerCount, testing.expectEquals(1));
    const sub2 = functions.pipe(subject, observable.subscribe(scheduler));
    functions.pipe(subject.observerCount, testing.expectEquals(2));
    functions.pipe(sub1, disposable.dispose());
    functions.pipe(subject.observerCount, testing.expectEquals(1));
    functions.pipe(sub2, disposable.dispose());
    functions.pipe(subject.observerCount, testing.expectEquals(0));
})), testing.test("exhaustMap", functions.defer([observable.fromArray()([1, 2, 3]), observable.fromArray()([4, 5, 6]), observable.fromArray()([7, 8, 9])], observable.fromArray(), observable.exhaustMap(functions.identity), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.describe("fromPromise", testing.testAsync("when the promise resolves", async () => {
    const factory = () => Promise.resolve(1);
    const result = await functions.pipe(factory, observable.fromPromise, observable.toPromise(scheduler));
    functions.pipe(result, testing.expectEquals(1));
}), testing.testAsync("when the promise reject", async () => {
    const error = new Error();
    const factory = () => Promise.reject(error);
    await functions.pipe(functions.pipe(factory, observable.fromPromise, observable.toPromise(scheduler)), testing.expectPromiseToThrow);
})), testing.test("genMap", functions.defer(undefined, observable.fromValue(), observable.genMap(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("ignoreElements", functions.defer([1, 2, 3], observable.fromArray(), observable.ignoreElements(), observable.endWith(4), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([4]))), testing.describe("merge", testing.test("two arrays", functions.defer(observable.merge(functions.pipe([0, 2, 3, 5, 6], observable.fromArray({ delay: 1 })), functions.pipe([1, 4, 7], observable.fromArray({ delay: 2 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), testing.test("when one source throws", functions.defer(functions.defer([1, 4, 7], observable.fromArray({ delay: 2 }), observable.mergeWith(observable.throws({ delay: 5 })(functions.raise)), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("mergeMap", testing.test("when a mapped observable throws", functions.defer(functions.defer([observable.fromArray({ delay: 1 })([1, 2, 3]), observable.throws({ delay: 2 })(functions.raise)], observable.fromArray(), observable.mergeMap(functions.identity), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when the map function throws", functions.defer(functions.defer([1, 2, 3, 4], observable.fromArray(), observable.mergeMap(x => {
    if (x > 2) {
        functions.raise();
    }
    return observable.fromValue()(x);
}), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.test("never", functions.defer(observable.never(), observable.toRunnable(), runnable.last, testing.expectNone)), testing.describe("onSubscribe", testing.test("when subscribe function returns a teardown function", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const disp = testing.mockFn();
    const f = testing.mockFn(disp);
    functions.pipe(1, observable.fromValue(), observable.onSubscribe(f), observable.subscribe(scheduler));
    functions.pipe(disp, testing.expectToHaveBeenCalledTimes(0));
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    scheduler.run();
    functions.pipe(disp, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
}), testing.test("when callback function throws", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subscription = functions.pipe(1, observable.fromValue(), observable.onSubscribe(functions.raise), observable.subscribe(scheduler));
    functions.pipe(subscription.error, testing.expectSome);
})), testing.describe("retry", testing.test("repeats the observable n times", () => {
    let retried = false;
    const src = observable.createObservable(d => {
        d.dispatch(1);
        if (retried) {
            d.dispatch(2);
            d.dispose();
        }
        else {
            retried = true;
            functions.pipe(d, disposable.dispose({ cause: new Error() }));
        }
    });
    functions.pipe(src, observable.retry(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 1, 2]));
})), testing.describe("scanAsync", testing.test("fast lib, slow acc", functions.defer([1, 2, 3], observable.fromArray(), observable.scanAsync((acc, x) => observable.fromValue({ delay: 4 })(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("slow lib, fast acc", functions.defer([1, 2, 3], observable.fromArray({ delay: 4 }), observable.scanAsync((acc, x) => observable.fromValue()(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("slow lib, slow acc", functions.defer([1, 2, 3], observable.fromArray({ delay: 4 }), observable.scanAsync((acc, x) => observable.fromValue({ delay: 4 })(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("fast lib, fast acc", functions.defer([1, 2, 3], observable.fromArray(), observable.scanAsync((acc, x) => observable.fromValue()(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6])))), testing.test("share", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const shared = functions.pipe([1, 2, 3], observable.fromArray({ delay: 1 }), observable.share(scheduler, { replay: 1 }));
    let result = [];
    functions.pipe(observable.zip(shared, shared), observable.map(([a, b]) => a + b), observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([2, 4, 6]));
}), testing.describe("switchAll", testing.test("with empty source", functions.defer(observable.empty(), observable.switchAll(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]))), testing.test("when source throw", functions.defer(functions.defer(functions.raise, observable.throws(), observable.switchAll(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])), testing.expectToThrow))), testing.test("switchMap", functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.switchMap(_ => functions.pipe([1, 2, 3], observable.fromArray())), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testing.describe("takeLast", testing.test("when pipeline throws", functions.defer(functions.defer(functions.raise, observable.throws(), observable.takeLast(), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("throttle", testing.test("first", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 100 }), observable.throttle(50, { mode: 1 /* First */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 49]))), testing.test("last", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 200 }), observable.throttle(50, { mode: 2 /* Last */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([49, 99, 149, 199]))), testing.test("interval", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 200 }), observable.throttle(75, { mode: 3 /* Interval */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 74, 149, 199]))), testing.test("when duration observable throws", functions.defer(functions.defer([1, 2, 3, 4, 5], observable.fromArray({ delay: 1 }), observable.throttle(_ => observable.throws()(functions.raise)), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("throwIfEmpty", testing.test("when source is empty", functions.defer(functions.defer(observable.empty(), observable.throwIfEmpty(() => undefined), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when source is not empty", functions.defer(1, functions.returns, observable.compute(), observable.throwIfEmpty(() => undefined), observable.toRunnable(), runnable.last, testing.expectEquals(1)))), testing.describe("timeout", testing.test("throws when a timeout occurs", functions.defer(functions.defer(1, observable.fromValue({ delay: 2 }), observable.timeout(1), runnable.toArray()), testing.expectToThrow)), testing.test("when timeout is greater than observed time", functions.defer(1, observable.fromValue({ delay: 2 }), observable.timeout(3), observable.toRunnable(), runnable.last, testing.expectEquals(1)))), testing.describe("toPromise", testing.testAsync("when observable completes without producing a value", async () => {
    await functions.pipe(functions.pipe(observable.empty(), observable.toPromise(scheduler)), testing.expectPromiseToThrow);
})), testing.describe("withLatestFrom", testing.test("when source and latest are interlaced", functions.defer([0, 1, 2, 3], observable.fromArray({ delay: 1 }), observable.withLatestFrom(functions.pipe([0, 1, 2, 3], observable.fromArray({ delay: 2 })), (a, b) => [
    a,
    b,
]), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 0],
    [2, 0],
    [3, 1],
], functions.arrayEquality()))), testing.test("when latest produces no values", functions.defer([0], observable.fromArray({ delay: 1 }), observable.withLatestFrom(observable.empty(), functions.sum), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]))), testing.test("when latest throws", () => {
    const error = new Error();
    functions.pipe(functions.defer([0], observable.fromArray({ delay: 1 }), observable.withLatestFrom(observable.throws()(functions.returns(error)), functions.sum), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])), testing.expectToThrowError(error));
})), testing.describe("zip", testing.test("with non-delayed sources", functions.defer(observable.zip(functions.pipe([1, 2], observable.fromArray()), functions.pipe([1, 2], observable.fromArray(), observable.map(functions.increment)), observable.generate(functions.increment, functions.returns(2))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], functions.arrayEquality()))), testing.test("with synchronous and non-synchronous sources", functions.defer(observable.zip(functions.pipe([1, 2], observable.fromArray({ delay: 1 })), functions.pipe([2, 3], observable.fromIterable()), functions.pipe([3, 4, 5], observable.fromArray({ delay: 1 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], functions.arrayEquality()))), testing.test("fast with slow", functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.zipWith(functions.pipe([1, 2, 3], observable.fromArray({ delay: 5 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], functions.arrayEquality()))), testing.test("when source throws", functions.defer(functions.defer(functions.raise, observable.throws(), observable.zipWith(observable.fromArray()([1, 2, 3])), observable.map(([, b]) => b), observable.toRunnable(), runnable.toArray()), testing.expectToThrow))), testing.test("zipLatestWith", functions.defer([1, 2, 3, 4, 5, 6, 7, 8], observable.fromArray({ delay: 1 }), observable.zipLatestWith(functions.pipe([1, 2, 3, 4], observable.fromArray({ delay: 2 }))), observable.map(([a, b]) => a + b), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 5, 8, 11]))), testing.describe("zipWithLatestFrom", testing.test("when source throws", functions.defer(functions.defer(observable.throws()(functions.raise), observable.zipWithLatestFrom(observable.fromValue()(1), (_, b) => b), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when other throws", functions.defer(functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.zipWithLatestFrom(observable.throws()(functions.raise), (_, b) => b), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when other completes first", functions.defer([1], observable.fromArray({ delay: 1 }), observable.zipWithLatestFrom(observable.fromArray()([2]), (_, b) => b), observable.toRunnable(), runnable.last, testing.expectEquals(2)))), monad_test.createMonadTests(Observable));

exports.tests = tests;
