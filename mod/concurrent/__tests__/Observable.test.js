/// <reference types="./Observable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectToHaveBeenCalledTimes, expectToThrowError, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, PauseableLike_pause, PauseableLike_resume, SchedulerLike_now, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { alwaysTrue, arrayEquality, bind, ignore, increment, incrementBy, lessThan, newInstance, none, pipe, pipeLazy, pipeLazyAsync, raise, returns, tuple, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Observable", describe("catchError", test("when the source throws", () => {
    const e1 = "e1";
    let result = none;
    pipe(Observable.throws({ raise: () => e1 }), Observable.catchError((e) => {
        result = e.message;
    }), Observable.toReadonlyArray());
    pipe(result, expectEquals(e1));
}), test("when the error handler throws an error", () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    pipe(Observable.throws({ raise: () => e1 }), Observable.catchError(_ => {
        throw e2;
    }), Observable.catchError(e => {
        result = e["cause"];
    }), Observable.toReadonlyArray());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
}), test("when the error handler throws an error from a delayed source", () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    pipe(Observable.empty({ delay: 1 }), Observable.concatWith(Observable.throws({ raise: () => e1 })), Observable.catchError(_ => {
        throw e2;
    }), Observable.catchError(e => {
        result = e["cause"];
    }), Observable.toReadonlyArray());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
})), describe("combineLatest", test("combineLatest", pipeLazy(Observable.combineLatest(pipe(Enumerable.generate(incrementBy(2), returns(1)), Observable.fromEnumerable({ delay: 2 }), Observable.takeFirst({ count: 3 })), pipe(Enumerable.generate(incrementBy(2), returns(0)), Observable.fromEnumerable({ delay: 3 }), Observable.takeFirst({ count: 2 }))), Observable.toReadonlyArray(), expectArrayEquals([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
], { valuesEquality: arrayEquality() })))), describe("concat", test("concats the input containers in order", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray()), pipe([4, 5, 6], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("concats the input containers in order, when sources have delay", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatMany", test("concating an empty array returns the empty observable", pipeLazy(Observable.concatMany([]), expectEquals(Observable.empty())))), describe("concatMap", testAsync("maps each value to a container and flattens", pipeLazyAsync([0, 1], Observable.fromReadonlyArray(), Observable.concatMap(pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }))), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.concatWith(pipe([2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("decodeWithCharset", test("decoding ascii from runnable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray({ delay: 1 }), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding ascii from enumerable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
})), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.endWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("flow", test("a source with delay", () => {
    const scheduler = VirtualTimeScheduler.create();
    const generateObservable = pipe(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Observable.flow(scheduler));
    generateObservable[PauseableLike_resume](),
        scheduler[SchedulerLike_schedule](() => generateObservable[PauseableLike_pause](), {
            delay: 2,
        });
    scheduler[SchedulerLike_schedule](() => generateObservable[PauseableLike_resume](), {
        delay: 4,
    });
    scheduler[SchedulerLike_schedule](() => generateObservable[DisposableLike_dispose](), {
        delay: 6,
    });
    const f = mockFn();
    const subscription = pipe(generateObservable, Observable.forEach((x) => {
        f(scheduler[SchedulerLike_now], x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls, expectArrayEquals([
        [1, 0],
        [2, 1],
        [5, 2],
    ], { valuesEquality: arrayEquality() }));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
}), test("flow a generating source", () => {
    const scheduler = VirtualTimeScheduler.create();
    const flowed = pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.flow(scheduler), Disposable.addTo(scheduler));
    scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
    });
    const f = mockFn();
    const subscription = pipe(flowed, Observable.withCurrentTime(tuple), Observable.forEach(([time, v]) => {
        f(time, v);
    }), Observable.subscribe(scheduler), Disposable.addTo(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls, expectArrayEquals([
        [2, 0],
        [2, 1],
        [2, 2],
    ], { valuesEquality: arrayEquality() }));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
})), describe("forEach", test("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach((x) => {
        result.push(x + 10);
    }), Observable.run()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), test("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray({ delay: 3 }), Observable.forEach(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
})), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.ignoreElements(), Observable.toReadonlyArray(), expectArrayEquals([])))), describe("lastAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the last value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectEquals(3));
})), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([9, 10], Observable.fromReadonlyArray({ delay: 3 })),
], Observable.fromReadonlyArray(), Observable.mergeAll({
    concurrency: 2,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10])))), describe("mergeMap", testAsync("without delay, merge all observables as they are produced", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.mergeMap(x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const scheduler = VirtualTimeScheduler.create();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), test("when callback function throws", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subscription = pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(raise), Observable.subscribe(scheduler));
    pipe(subscription[DisposableLike_error], expectIsSome);
}), test("when call back returns a disposable", () => {
    const scheduler = VirtualTimeScheduler.create();
    const disp = Disposable.create();
    const f = mockFn(disp);
    pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    expectFalse(disp[DisposableLike_isDisposed]);
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler[VirtualTimeSchedulerLike_run]();
    expectTrue(disp[DisposableLike_isDisposed]);
    expectIsNone(disp[DisposableLike_error]);
    pipe(f, expectToHaveBeenCalledTimes(1));
})), describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 }), Observable.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("repeat", test("when repeating forever.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(), Observable.takeFirst({ count: 8 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times, with delayed source.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when repeating with a predicate with delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), test("when the repeat function throws with delayed source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray({ delay: 3 }), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
})), describe("retry", test("retrys the container on an exception", pipeLazy(Observable.concat(pipe(Enumerable.generate(increment, returns(0)), Observable.fromEnumerable(), Observable.takeFirst({ count: 3 })), Observable.throws()), Observable.retry(alwaysTrue), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("retrys with the default predicate", pipeLazy(Observable.concat(pipe(Enumerable.generate(increment, returns(0)), Observable.fromEnumerable(), Observable.takeFirst({ count: 3 })), Observable.throws()), Observable.retry(), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("share", test("shared observable zipped with itself", () => {
    const scheduler = VirtualTimeScheduler.create();
    const shared = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.forEach(ignore), Observable.share(scheduler, { replay: 1 }));
    let result = [];
    pipe(Observable.zipLatest(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([2, 4, 6]));
})), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.startWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("switchMap", test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray()), {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3])))), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 1 }), Observable.takeUntil(pipe([1], Observable.fromReadonlyArray({ delay: 3, delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("throttle", test("first", pipeLazy(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Observable.takeFirst({ count: 100 }), Observable.throttle(50, { mode: "first" }), Observable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199])))), describe("throwIfEmpty", test("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => error), Observable.toReadonlyArray()), expectToThrowError(error));
}), test("when source is empty and delayed", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(() => error), Observable.run()), expectToThrowError(error));
}), test("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => {
        throw error;
    }), Observable.toReadonlyArray()), expectToThrowError(error));
}), test("when factory throws after a delay", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(() => {
        throw error;
    }), Observable.run()), expectToThrowError(error));
}), test("when source is not empty", pipeLazy([1], Observable.fromReadonlyArray(), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1]))), test("when source is not empty with delay", pipeLazy([1], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1])))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), (tuple)), Observable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], { valuesEquality: arrayEquality() }))), test("when latest produces no values", pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.empty(), returns(1)), Observable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.throws({ raise: returns(error) }), returns(1)), Observable.run()), expectToThrowError(error));
})), describe("zipLatest", test("zip two delayed observable", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.map(([a, b]) => a + b), Observable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))));
