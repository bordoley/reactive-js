/// <reference types="./Observable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectPromiseToThrow, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowAsync, expectToThrowError, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { mapTo } from "../../computations.js";
import { DispatcherLikeEvent_completed, DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, PauseableLike_pause, PauseableLike_resume, SchedulerLike_now, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import { alwaysTrue, arrayEquality, bind, ignore, increment, incrementBy, lessThan, newInstance, none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, raise, returns, tuple, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import { __bindMethod, __constant, __do, __observe, __state, __stream, } from "../Observable/effects.js";
import * as ReplayPublisher from "../ReplayPublisher.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Observable", describe("backpressureStrategy", testAsync("with a throw backpressure strategy", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    await expectToThrowAsync(pipeLazyAsync(Observable.create(observer => {
        for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
        }
    }), Observable.backpressureStrategy(1, "throw"), Observable.toReadonlyArrayAsync(scheduler)));
})), testAsync("with a drop latest backpressure strategy", pipeLazyAsync(Observable.create(observer => {
    for (let i = 0; i < 10; i++) {
        observer[QueueableLike_enqueue](i);
    }
    observer[DispatcherLike_complete]();
}), Observable.backpressureStrategy(1, "drop-latest"), Observable.toReadonlyArrayAsync(), expectArrayEquals([0]))), testAsync("with a drop-oldest latest backpressure strategy", pipeLazyAsync(Observable.create(observer => {
    for (let i = 0; i < 10; i++) {
        observer[QueueableLike_enqueue](i);
    }
    observer[DispatcherLike_complete]();
}), Observable.backpressureStrategy(1, "drop-oldest"), Observable.toReadonlyArrayAsync(), expectArrayEquals([9]))), test("it passes through notifications", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.backpressureStrategy(1, "drop-latest"), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("catchError", test("when the source throws", () => {
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
], { valuesEquality: arrayEquality() })))), describe("computeDeferred", testAsync("__stream", async () => {
    const result = await pipe(Observable.computeDeferred(() => {
        const stream = __stream(Streamable.identity());
        const push = __bindMethod(stream, QueueableLike_enqueue);
        const result = __observe(stream) ?? 0;
        __do(push, result + 1);
        return result;
    }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync());
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
}), testAsync("__state", async () => {
    const result = await pipe(Observable.computeDeferred(() => {
        const initialState = __constant(() => 0);
        const state = __state(initialState);
        const push = __bindMethod(state, QueueableLike_enqueue);
        const result = __observe(state) ?? -1;
        if (result > -1) {
            __do(push, () => result + 1);
        }
        return result;
    }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync());
    pipe(result ?? [], expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
})), describe("concat", test("concats the input containers in order", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray()), pipe([4, 5, 6], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("concats the input containers in order, when sources have delay", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatMany", test("concating an empty array returns the empty observable", pipeLazy(Observable.concatMany([]), expectEquals(Observable.empty())))), describe("concatMap", testAsync("maps each value to a container and flattens", pipeLazyAsync([0, 1], Observable.fromReadonlyArray(), Observable.concatMap(pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }))), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.concatWith(pipe([2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("decodeWithCharset", test("decoding ascii from runnable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray({ delay: 1 }), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding ascii from enumerable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
})), describe("dispatchTo", test("when backpressure exception is thrown", () => {
    const vts = VirtualTimeScheduler.create();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "throw",
        capacity: 1,
    });
    expectToThrow(pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.dispatchTo(stream), Observable.run()));
}), test("when completed successfully", () => {
    const vts = VirtualTimeScheduler.create();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "overflow",
        capacity: 1,
    });
    let completed = false;
    pipe(stream, EventSource.addEventHandler(ev => {
        if (ev === DispatcherLikeEvent_completed) {
            completed = true;
        }
    }));
    pipe([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.dispatchTo(stream), Observable.toReadonlyArray());
    expectTrue(completed);
}), test("when completed successfully from delayed source", () => {
    const vts = VirtualTimeScheduler.create();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "overflow",
        capacity: 1,
    });
    let completed = false;
    pipe(stream, EventSource.addEventHandler(ev => {
        if (ev === DispatcherLikeEvent_completed) {
            completed = true;
        }
    }));
    pipe([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray({ delay: 1 }), Observable.dispatchTo(stream), Observable.toReadonlyArray());
    expectTrue(completed);
})), describe("empty", test("with delay", () => {
    let disposedTime = -1;
    const scheduler = VirtualTimeScheduler.create();
    pipe(Observable.empty({ delay: 5 }), Observable.subscribe(scheduler), Disposable.onComplete(() => {
        disposedTime = scheduler[SchedulerLike_now];
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disposedTime, expectEquals(5));
})), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.endWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("firstAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the first value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectEquals(1));
})), describe("flatMapAsync", testAsync("mapping a number to a promise", pipeLazyAsync(1, Observable.fromValue(), Observable.flatMapAsync(async (x) => await Promise.resolve(x)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1])))), describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], Observable.fromReadonlyArray(), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("maps the incoming value with the inline generator function, with delayed source", pipeLazy([none, none], Observable.fromReadonlyArray({ delay: 2 }), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("flow", test("a source with delay", () => {
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
})), describe("forkMerge", test("with pure src and inner runnables with side-effects", () => {
    const obs = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.forkMerge(Observable.flatMapIterable(_ => [1, 2]), Observable.flatMapIterable(_ => [3, 4])));
    pipe(obs, Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]));
    expectTrue(obs[ObservableLike_isDeferred]);
    expectTrue(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isPure]);
}), test("runnable with effects src and pure inner runnables", () => {
    const obs = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach(ignore), Observable.forkMerge(mapTo(Observable, 1), mapTo(Observable, 2)));
    pipe(obs, Observable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2]));
    expectTrue(obs[ObservableLike_isDeferred]);
    expectTrue(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isPure]);
}), test("with pure runnable src and pure inner runnables", () => {
    const obs = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forkMerge(mapTo(Observable, 1), mapTo(Observable, 2)));
    pipe(obs, Observable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2]));
    expectTrue(obs[ObservableLike_isDeferred]);
    expectTrue(obs[ObservableLike_isRunnable]);
    expectTrue(obs[ObservableLike_isPure]);
}), test("with multicast src and pure inner transforms", () => {
    const forked = pipe(ReplayPublisher.create(), Observable.forkMerge(mapTo(Observable, 1), mapTo(Observable, 2)));
    expectFalse(forked[ObservableLike_isDeferred]);
    expectFalse(forked[ObservableLike_isRunnable]);
    expectTrue(forked[ObservableLike_isPure]);
}), test("with multicast src and deferred inner transforms", () => {
    const forked = pipe(ReplayPublisher.create(), Observable.forkMerge(Observable.flatMapAsync(_ => Promise.resolve(1)), Observable.flatMapAsync(_ => Promise.resolve(1)), mapTo(Observable, 2)));
    expectTrue(forked[ObservableLike_isDeferred]);
    expectFalse(forked[ObservableLike_isRunnable]);
    expectFalse(forked[ObservableLike_isPure]);
}), test("with runnable pure src and deferred transforms", () => {
    const forked = pipe([], Observable.fromReadonlyArray(), x => x, Observable.forkMerge(Observable.flatMapAsync(_ => Promise.resolve(1)), mapTo(Observable, 2)));
    expectTrue(forked[ObservableLike_isDeferred]);
    expectFalse(forked[ObservableLike_isRunnable]);
    expectFalse(forked[ObservableLike_isPure]);
}), testAsync("src with side-effects is only subscribed to once", async () => {
    const sideEffect = mockFn();
    const src = pipe(0, Observable.fromValue(), Observable.forEach(sideEffect));
    await pipeAsync(src, Observable.forkMerge(Observable.flatMapIterable(_ => [1, 2, 3]), Observable.flatMapIterable(_ => [4, 5, 6])), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(sideEffect, expectToHaveBeenCalledTimes(1));
})), describe("fromAsyncFactory", testAsync("when promise resolves", async () => {
    const result = await pipe(async () => {
        await Promise.resolve(1);
        return 2;
    }, Observable.fromAsyncFactory(), Observable.lastAsync());
    pipe(result, expectEquals(2));
}), testAsync("when promise fails with an exception", async () => {
    await pipe(async () => {
        await Promise.resolve(1);
        raise();
    }, Observable.fromAsyncFactory(), Observable.lastAsync(), expectPromiseToThrow);
}), testAsync("when factory throws an exception", async () => {
    await pipe(async () => {
        raise();
    }, Observable.fromAsyncFactory(), Observable.lastAsync(), expectPromiseToThrow);
})), describe("fromIterable", test("fromIterable with delay", () => {
    const result = [];
    pipe([9, 9, 9, 9], Observable.fromIterable({ delay: 2 }), Observable.withCurrentTime(t => t), Observable.forEach(bind(Array.prototype.push, result)), Observable.run());
    pipe(result, expectArrayEquals([0, 2, 4, 6]));
})), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.ignoreElements(), Observable.toReadonlyArray(), expectArrayEquals([])))), describe("lastAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the last value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectEquals(3));
})), describe("merge", test("validate output runtime type", () => {
    const pureEnumerable = pipe([1, 2, 3], Observable.fromReadonlyArray());
    const enumerableWithSideEffects = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach(ignore));
    const pureRunnable = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }));
    const runnableWithSideEffects = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.forEach(ignore));
    const deferred = pipe(() => Promise.resolve(1), Observable.fromAsyncFactory());
    const multicast = ReplayPublisher.create();
    const merged1 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects, deferred, multicast);
    pipe(merged1[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged1[ObservableLike_isPure], expectEquals(false));
    pipe(merged1[ObservableLike_isRunnable], expectEquals(false));
    const merged2 = Observable.merge(pureEnumerable, pureRunnable, multicast);
    pipe(merged2[ObservableLike_isDeferred], expectEquals(false));
    pipe(merged2[ObservableLike_isPure], expectEquals(true));
    pipe(merged2[ObservableLike_isRunnable], expectEquals(false));
    const merged3 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects, deferred, Observable.never());
    pipe(merged3[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged3[ObservableLike_isPure], expectEquals(false));
    pipe(merged3[ObservableLike_isRunnable], expectEquals(false));
    const merged4 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects);
    pipe(merged4[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged4[ObservableLike_isPure], expectEquals(false));
    pipe(merged4[ObservableLike_isRunnable], expectEquals(true));
    const merged5 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable);
    pipe(merged5[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged5[ObservableLike_isPure], expectEquals(false));
    pipe(merged5[ObservableLike_isRunnable], expectEquals(true));
    const merged6 = Observable.merge(pureEnumerable, enumerableWithSideEffects);
    pipe(merged6[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged6[ObservableLike_isPure], expectEquals(false));
    pipe(merged6[ObservableLike_isRunnable], expectEquals(true));
    const merged7 = Observable.merge(pureEnumerable, pureEnumerable);
    pipe(merged7[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged7[ObservableLike_isPure], expectEquals(true));
    pipe(merged7[ObservableLike_isRunnable], expectEquals(true));
}), test("two arrays", pipeLazy(Observable.merge(pipe([0, 2, 3, 5, 6], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", pipeLazy(pipeLazy(Observable.merge(pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2 })), Observable.throws({ delay: 5 })), Observable.run()), expectToThrow))), describe("mergeAll", test("with queueing", pipeLazy([
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
}), test("when source is not empty", pipeLazy([1], Observable.fromReadonlyArray(), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1]))), test("when source is not empty with delay", pipeLazy([1], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1])))), describe("toEventSource", test("when the source completes without error", () => {
    const result = [];
    const scheduler = VirtualTimeScheduler.create();
    pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toEventSource(scheduler), EventSource.addEventHandler(bind(Array.prototype.push, result)));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2]));
})), describe("toReadonlyArrayAsync", testAsync("with pure delayed source", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 }), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3])))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), (tuple)), Observable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], { valuesEquality: arrayEquality() }))), test("when latest produces no values", pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.empty(), returns(1)), Observable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.throws({ raise: returns(error) }), returns(1)), Observable.run()), expectToThrowError(error));
})), describe("zipLatest", test("zip two delayed observable", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.map(([a, b]) => a + b), Observable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))));
