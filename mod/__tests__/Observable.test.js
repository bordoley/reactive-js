/// <reference types="./Observable.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as Enumerable from "../Enumerable.js";
import * as EventSource from "../EventSource.js";
import * as IndexedCollection from "../IndexedCollection.js";
import * as Observable from "../Observable.js";
import { __bindMethod, __do, __observe, __stream, } from "../Observable/effects.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectPromiseToThrow, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowAsync, expectToThrowError, expectTrue, mockFn, test, testAsync, testModule, } from "../__internal__/testing.js";
import { alwaysFalse, alwaysTrue, arrayEquality, bind, bindMethod, compose, greaterThan, identity, ignore, increment, incrementBy, isEven, lessThan, newInstance, none, pipe, pipeLazy, pipeLazyAsync, raise, returns, } from "../functions.js";
import { DispatcherLikeEvent_completed, DispatcherLike_complete, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EnumeratorLike_hasCurrent, EnumeratorLike_move, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, PauseableLike_pause, PauseableLike_resume, PublisherLike_observerCount, QueueableLike_enqueue, ReplayObservableLike_buffer, SchedulerLike_now, SchedulerLike_schedule, SinkLike_notify, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../types.js";
import ReactiveContainerModuleTests from "./fixtures/ReactiveContainerModuleTests.js";
testModule("Observable", ...ReactiveContainerModuleTests(Observable, () => Disposable.disposed, () => ReadonlyArray.toObservable(), () => ReadonlyArray.fromEnumerable()), describe("backpressureStrategy", testAsync("with a throw backpressure strategy", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
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
    }), Observable.run());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
})), describe("combineLatest", test("combineLatest", pipeLazy(Observable.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1)), Observable.delay(2), Observable.takeFirst({ count: 3 })), pipe(Observable.generate(incrementBy(2), returns(0)), Observable.delay(3), Observable.takeFirst({ count: 2 }))), Observable.toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality())))), describe("compute", testAsync("__stream", async () => {
    const result = await pipe(Observable.compute(() => {
        const stream = __stream(Streamable.identity());
        const push = __bindMethod(stream, QueueableLike_enqueue);
        const result = __observe(stream) ?? 0;
        __do(push, result + 1);
        return result;
    }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync());
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
})), describe("concat", test("concats the input containers in order", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray()), pipe([4, 5, 6], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.concatWith(pipe([2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("contains", describe("strict equality comparator", test("source is empty", pipeLazy([], Observable.fromReadonlyArray(), Observable.contains(1), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], Observable.fromReadonlyArray(), Observable.contains(1), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], Observable.fromReadonlyArray(), Observable.contains(1), expectEquals(false)))), describe("custom equality comparator", test("source is empty", pipeLazy([], Observable.fromReadonlyArray(), Observable.contains(1, { equality: (a, b) => a === b }), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], Observable.fromReadonlyArray(), Observable.contains(1, { equality: (a, b) => a === b }), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], Observable.fromReadonlyArray(), Observable.contains(1, { equality: (a, b) => a === b }), expectEquals(false))))), describe("createPublisher", test("with replay", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher({ replay: 2 });
    pipe([1, 2, 3, 4], ReadonlyArray.forEach(bindMethod(publisher, SinkLike_notify)));
    publisher[DisposableLike_dispose]();
    const result = [];
    pipe(publisher, Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher();
    pipe(publisher[PublisherLike_observerCount], expectEquals(0));
    const sub1 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[PublisherLike_observerCount], expectEquals(1));
    const sub2 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[PublisherLike_observerCount], expectEquals(2));
    sub1[DisposableLike_dispose]();
    pipe(publisher[PublisherLike_observerCount], expectEquals(1));
    sub2[DisposableLike_dispose]();
    pipe(publisher[PublisherLike_observerCount], expectEquals(0));
}), test("notifying a disposed publisher", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher();
    const result = [];
    const publisherSubscription = pipe(publisher, Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(scheduler));
    const generateSubscription = pipe(Observable.generate(increment, returns(-1)), Observable.delay(3, { delayStart: true }), Observable.forEach(bindMethod(publisher, SinkLike_notify)), Observable.subscribe(scheduler));
    scheduler[SchedulerLike_schedule](() => {
        publisher[DisposableLike_dispose]();
    }, { delay: 7 });
    scheduler[SchedulerLike_schedule](() => {
        generateSubscription[DisposableLike_dispose]();
    }, { delay: 10 });
    scheduler[VirtualTimeSchedulerLike_run]();
    expectTrue(publisherSubscription[DisposableLike_isDisposed]);
    pipe(result, expectArrayEquals([0, 1]));
}), test("subscribing to a publisher disposed with an error", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher();
    const e = new Error();
    publisher[DisposableLike_dispose](e);
    const subscription = pipe(publisher, Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(subscription[DisposableLike_error], expectEquals(e));
}), test("notifing an observer that throws an exception on overflow", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher();
    const subscription = pipe(publisher, Observable.subscribe(scheduler, {
        backpressureStrategy: "throw",
        capacity: 1,
    }));
    publisher[SinkLike_notify](1);
    publisher[SinkLike_notify](2);
    publisher[SinkLike_notify](3);
    expectIsSome(subscription[DisposableLike_error]);
})), describe("decodeWithCharset", test("decoding ascii from runnable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray(), Observable.delay(1), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding ascii from enumerable", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Observable.toReadonlyArray(), x => x.join(), expectEquals(str));
})), describe("dispatchTo", test("when backpressure exception is thrown", () => {
    const vts = Scheduler.createVirtualTimeScheduler();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "throw",
        capacity: 1,
    });
    expectToThrow(pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.dispatchTo(stream), Observable.run()));
}), test("when completed successfully", () => {
    const vts = Scheduler.createVirtualTimeScheduler();
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
    pipe([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.dispatchTo(stream), Observable.run());
    expectTrue(completed);
})), describe("empty", test("returns an empty enumerator", () => {
    const enumerator = pipe(Observable.empty(), Observable.enumerate());
    expectFalse(enumerator[EnumeratorLike_move]());
    expectTrue(enumerator[DisposableLike_isDisposed]);
}), test("with delay", () => {
    let disposedTime = -1;
    const scheduler = Scheduler.createVirtualTimeScheduler();
    pipe(Observable.empty(), Observable.delay(5, { delayStart: true }), Observable.subscribe(scheduler), Disposable.onComplete(() => {
        disposedTime = scheduler[SchedulerLike_now];
    }));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disposedTime, expectEquals(5));
})), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.endWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("enqueue", test("when backpressure exception is thrown", () => {
    const vts = Scheduler.createVirtualTimeScheduler();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "throw",
        capacity: 1,
    });
    expectToThrow(pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.enqueue(stream), Observable.run()));
}), test("when completed successfully", () => {
    const vts = Scheduler.createVirtualTimeScheduler();
    const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: "overflow",
        capacity: MAX_SAFE_INTEGER,
        replay: MAX_SAFE_INTEGER,
    });
    let completed = false;
    pipe(stream, EventSource.addEventHandler(ev => {
        if (ev === DispatcherLikeEvent_completed) {
            completed = true;
        }
    }));
    pipe([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.enqueue(stream), Observable.subscribe(vts));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(stream[ReplayObservableLike_buffer], IndexedCollection.toReadonlyArray(), expectArrayEquals([1, 2, 2, 2, 2, 3, 3, 3, 4]));
    expectFalse(completed);
})), describe("enumerate", test("with higher order observable and no delay", pipeLazy(Observable.generate(_ => pipe(1, Observable.fromValue()), returns(Observable.empty())), Observable.takeFirst({ count: 100 }), Enumerable.concatAll(), Observable.takeFirst({ count: 10 }), Observable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))), test("calling move on a completed Enumerator", () => {
    const enumerator = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.enumerate());
    while (enumerator[EnumeratorLike_move]()) { }
    expectFalse(enumerator[EnumeratorLike_hasCurrent]);
    expectTrue(enumerator[DisposableLike_isDisposed]);
    expectIsNone(enumerator[DisposableLike_error]);
    expectFalse(enumerator[EnumeratorLike_move]());
})), describe("everySatisfy", test("source is empty", pipeLazy([], Observable.fromReadonlyArray(), Observable.everySatisfy(alwaysFalse), expectEquals(true))), test("source values pass predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.everySatisfy(alwaysTrue), expectEquals(true))), test("source values fail predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.everySatisfy(alwaysFalse), expectEquals(false)))), describe("first", test("returns the first item in the src", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.first(), expectEquals(1)))), describe("firstAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the first value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectEquals(1));
})), describe("flatMapAsync", testAsync("mapping a number to a promise", pipeLazyAsync(1, Observable.fromValue(), Observable.flatMapAsync(async (x) => await Promise.resolve(x)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1])))), describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], Observable.fromReadonlyArray(), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("maps the incoming value with the inline generator function, with delayed source", pipeLazy([none, none], Observable.fromReadonlyArray(), Observable.delay(2), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("flow", test("a source with delay", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const generateObservable = pipe(Observable.generate(increment, returns(-1)), Observable.delay(1, { delayStart: true }), Observable.flow(scheduler));
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
    ], arrayEquality()));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
}), test("flow a generating source", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const flowed = pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.flow(scheduler), Disposable.addTo(scheduler));
    scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
    });
    const f = mockFn();
    const subscription = pipe(flowed, Observable.withCurrentTime((time, v) => [time, v]), Observable.forEach(([time, v]) => {
        f(time, v);
    }), Observable.subscribe(scheduler), Disposable.addTo(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls, expectArrayEquals([
        [2, 0],
        [2, 1],
        [2, 2],
    ], arrayEquality()));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
})), describe("forEach", test("validate return type with multicast observable input", () => {
    const publisher = Observable.createPublisher();
    pipe(publisher[ObservableLike_isDeferred], expectEquals(false));
    pipe(publisher[ObservableLike_isEnumerable], expectEquals(false));
    pipe(publisher[ObservableLike_isPure], expectEquals(true));
    pipe(publisher[ObservableLike_isRunnable], expectEquals(false));
    const lifted = pipe(publisher, Observable.forEach(identity));
    pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
    pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
    pipe(lifted[ObservableLike_isPure], expectEquals(false));
    pipe(lifted[ObservableLike_isRunnable], expectEquals(false));
}), test("validate return type with deferred observable input", () => {
    const src = Observable.create(_ => { });
    pipe(src[ObservableLike_isDeferred], expectEquals(true));
    pipe(src[ObservableLike_isEnumerable], expectEquals(false));
    pipe(src[ObservableLike_isPure], expectEquals(false));
    pipe(src[ObservableLike_isRunnable], expectEquals(false));
    const lifted = pipe(src, Observable.forEach(identity));
    pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
    pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
    pipe(lifted[ObservableLike_isPure], expectEquals(false));
    pipe(lifted[ObservableLike_isRunnable], expectEquals(false));
}), test("validate return type with pure runnable input", () => {
    const src = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1));
    pipe(src[ObservableLike_isDeferred], expectEquals(true));
    pipe(src[ObservableLike_isEnumerable], expectEquals(false));
    pipe(src[ObservableLike_isPure], expectEquals(true));
    pipe(src[ObservableLike_isRunnable], expectEquals(true));
    const lifted = pipe(src, Observable.forEach(identity));
    pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
    pipe(lifted[ObservableLike_isEnumerable], expectEquals(false));
    pipe(lifted[ObservableLike_isPure], expectEquals(false));
    pipe(lifted[ObservableLike_isRunnable], expectEquals(true));
}), test("validate return type with pure enumable input", () => {
    const src = pipe([1, 2, 3], Observable.fromReadonlyArray());
    pipe(src[ObservableLike_isDeferred], expectEquals(true));
    pipe(src[ObservableLike_isEnumerable], expectEquals(true));
    pipe(src[ObservableLike_isPure], expectEquals(true));
    pipe(src[ObservableLike_isRunnable], expectEquals(true));
    const lifted = pipe(src, Observable.forEach(identity));
    pipe(lifted[ObservableLike_isDeferred], expectEquals(true));
    pipe(lifted[ObservableLike_isEnumerable], expectEquals(true));
    pipe(lifted[ObservableLike_isPure], expectEquals(false));
    pipe(lifted[ObservableLike_isRunnable], expectEquals(true));
}), test("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach((x) => {
        result.push(x + 10);
    }), Observable.run()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), test("when the effect function throws with enumerable source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.forEach(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), test("when the effect function throws with runnable source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.delay(3), Observable.forEach(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
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
    pipe([9, 9, 9, 9], Observable.fromIterable(), Observable.delay(2), Observable.withCurrentTime(t => t), Observable.forEach(bind(Array.prototype.push, result)), Observable.run());
    pipe(result, expectArrayEquals([0, 2, 4, 6]));
})), describe("lastAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the last value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectEquals(3));
})), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.ignoreElements(), Observable.toReadonlyArray(), expectArrayEquals([])))), describe("merge", test("validate output runtime type", () => {
    const pureEnumerable = pipe([1, 2, 3], Observable.fromReadonlyArray());
    const enumerableWithSideEffects = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach(ignore));
    const pureRunnable = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2));
    const runnableWithSideEffects = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2), Observable.forEach(ignore));
    const deferred = pipe(() => Promise.resolve(1), Observable.fromAsyncFactory());
    const multicast = Observable.createPublisher();
    const merged1 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects, deferred, multicast);
    pipe(merged1[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged1[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged1[ObservableLike_isPure], expectEquals(false));
    pipe(merged1[ObservableLike_isRunnable], expectEquals(false));
    const merged2 = Observable.merge(pureEnumerable, pureRunnable, multicast);
    pipe(merged2[ObservableLike_isDeferred], expectEquals(false));
    pipe(merged2[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged2[ObservableLike_isPure], expectEquals(true));
    pipe(merged2[ObservableLike_isRunnable], expectEquals(false));
    const merged3 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects, deferred);
    pipe(merged3[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged3[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged3[ObservableLike_isPure], expectEquals(false));
    pipe(merged3[ObservableLike_isRunnable], expectEquals(false));
    const merged4 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable, runnableWithSideEffects);
    pipe(merged4[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged4[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged4[ObservableLike_isPure], expectEquals(false));
    pipe(merged4[ObservableLike_isRunnable], expectEquals(true));
    const merged5 = Observable.merge(pureEnumerable, enumerableWithSideEffects, pureRunnable);
    pipe(merged5[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged5[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged5[ObservableLike_isPure], expectEquals(false));
    pipe(merged5[ObservableLike_isRunnable], expectEquals(true));
    const merged6 = Observable.merge(pureEnumerable, enumerableWithSideEffects);
    pipe(merged6[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged6[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged6[ObservableLike_isPure], expectEquals(false));
    pipe(merged6[ObservableLike_isRunnable], expectEquals(true));
    const merged7 = Observable.merge(pureEnumerable, pureEnumerable);
    pipe(merged7[ObservableLike_isDeferred], expectEquals(true));
    pipe(merged7[ObservableLike_isEnumerable], expectEquals(false));
    pipe(merged7[ObservableLike_isPure], expectEquals(true));
    pipe(merged7[ObservableLike_isRunnable], expectEquals(true));
}), test("two arrays", pipeLazy(Observable.merge(pipe([0, 2, 3, 5, 6], Observable.fromReadonlyArray(), Observable.delay(1, { delayStart: true })), pipe([1, 4, 7], Observable.fromReadonlyArray(), Observable.delay(2, { delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", pipeLazy(pipeLazy(Observable.merge(pipe([1, 4, 7], Observable.fromReadonlyArray(), Observable.delay(2)), pipe(Observable.throws(), Observable.delay(5))), Observable.run()), expectToThrow))), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Observable.fromReadonlyArray(), Observable.delay(3)),
    pipe([2, 4, 6], Observable.fromReadonlyArray(), Observable.delay(3)),
    pipe([9, 10], Observable.fromReadonlyArray(), Observable.delay(3)),
], Observable.fromReadonlyArray(), Runnable.mergeAll({
    concurrency: 2,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10])))), describe("last", test("empty source", () => {
    const result = pipe([], Observable.fromReadonlyArray(), Observable.last());
    pipe(result, expectIsNone);
}), test("it returns the last value", () => {
    const result = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.last());
    pipe(result, expectEquals(3));
}), test("it returns the last value when delayed", () => {
    const result = pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(3), Observable.last());
    pipe(result, expectEquals(3));
})), describe("noneSatisfy", test("no values satisfy the predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.noneSatisfy(greaterThan(5)), expectTrue)), test("empty input", pipeLazy([], Observable.fromReadonlyArray(), Observable.noneSatisfy(greaterThan(5)), expectTrue)), test("some satisfy", pipeLazy([1, 2, 30, 4, 3], Observable.fromReadonlyArray(), Observable.noneSatisfy(greaterThan(5)), expectFalse))), describe("repeat", test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times, with delayed source.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when repeating with a predicate with delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), test("when the repeat function throws with delayed source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.delay(3), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
})), describe("retry", test("retrys the container on an exception", pipeLazy(Observable.concat(pipe(Observable.generate(increment, returns(0)), Observable.takeFirst({ count: 3 })), Observable.throws()), Observable.retry(alwaysTrue), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("someSatisfy", test("some satisfies predicate", pipeLazy([1, 2, 30, 4], Observable.fromReadonlyArray(), Observable.someSatisfy(greaterThan(5)), expectTrue)), test("some satisfies predicate with delay", pipeLazy([1, 2, 30, 4], Observable.fromReadonlyArray(), Observable.delay(1), Observable.someSatisfy(greaterThan(5)), expectTrue))), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.startWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], ReadonlyArray.toObservable(), Observable.delay(1), Observable.takeUntil(pipe([1], ReadonlyArray.toObservable(), Observable.delay(3, { delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], ReadonlyArray.toObservable(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), test("when callback function throws", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const subscription = pipe([1], ReadonlyArray.toObservable(), Observable.onSubscribe(raise), Observable.subscribe(scheduler));
    pipe(subscription[DisposableLike_error], expectIsSome);
}), test("when call back returns a disposable", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const disp = Disposable.create();
    const f = mockFn(disp);
    pipe([1], ReadonlyArray.toObservable(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    expectFalse(disp[DisposableLike_isDisposed]);
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler[VirtualTimeSchedulerLike_run]();
    expectTrue(disp[DisposableLike_isDisposed]);
    expectIsNone(disp[DisposableLike_error]);
    pipe(f, expectToHaveBeenCalledTimes(1));
})), describe("share", test("shared observable zipped with itself", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], ReadonlyArray.toObservable(), Observable.delay(1), Observable.forEach(ignore), Observable.share(scheduler, { replay: 1 }));
    let result = [];
    pipe(Observable.zip(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(bind(Array.prototype.push, result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([2, 4, 6]));
})), describe("throttle", test("first", pipeLazy(Observable.generate(increment, returns(-1)), Observable.delay(1, { delayStart: true }), Observable.takeFirst({ count: 100 }), Observable.throttle(50, { mode: "first" }), Observable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Observable.generate(increment, returns(-1)), Observable.delay(1, { delayStart: true }), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Observable.generate(increment, returns(-1)), Observable.delay(1, { delayStart: true }), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199])))), describe("throwIfEmpty", test("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => error), Observable.run()), expectToThrowError(error));
}), test("when source is empty and delayed", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.delay(1), Observable.throwIfEmpty(() => error), Observable.run()), expectToThrowError(error));
}), test("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => {
        throw error;
    }), Observable.run()), expectToThrowError(error));
}), test("when factory throws after a delay", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.delay(1), Observable.throwIfEmpty(() => {
        throw error;
    }), Observable.run()), expectToThrowError(error));
}), test("when source is not empty", pipeLazy([1], Observable.fromReadonlyArray(), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1]))), test("when source is not empty with delay", pipeLazy([1], Observable.fromReadonlyArray(), Observable.delay(1), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1])))), describe("toEventSource", test("when the source completes without error", () => {
    const result = [];
    pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toEventSource(), EventSource.addEventHandler(bind(Array.prototype.push, result)));
    pipe(result, expectArrayEquals([0, 1, 2]));
})), describe("toIterable", test("when the source completes without error", () => {
    const iter = pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toIterable());
    pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
})), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1), Observable.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2)), (a, b) => [a, b]), Observable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", pipeLazy([0], Observable.fromReadonlyArray(), Observable.delay(1), Observable.withLatestFrom(Observable.empty(), returns(1)), Observable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], Observable.fromReadonlyArray(), Observable.delay(1), Observable.withLatestFrom(Observable.throws({ raise: returns(error) }), returns(1)), Observable.run()), expectToThrowError(error));
})), describe("zip", test("when all inputs are the same length", pipeLazy(Observable.zip(pipe([1, 2, 3, 4, 5], Observable.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
], arrayEquality()))), test("when inputs are different length", pipeLazy(Observable.zip(pipe([1, 2, 3], Observable.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], Observable.fromReadonlyArray()), pipe([1, 2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([
    [1, 5, 1],
    [2, 4, 2],
    [3, 3, 3],
], arrayEquality()))), test("with synchronous and non-synchronous sources", pipeLazy(Observable.zip(pipe([1, 2], Observable.fromReadonlyArray(), Observable.delay(1)), pipe([2, 3], Observable.fromReadonlyArray()), pipe([3, 4, 5, 6], Observable.fromReadonlyArray(), Observable.delay(1))), Observable.toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), test("fast with slow", pipeLazy(Observable.zip(pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1)), pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(5))), Observable.toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), test("when source throws", pipeLazy(pipeLazy(Observable.zip(Observable.throws(), pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.map(([, b]) => b), Observable.run()), expectToThrow))), describe("zipLatest", test("zip two delayed observable", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray(), Observable.delay(1, { delayStart: true })), pipe([1, 2, 3, 4], Observable.fromReadonlyArray(), Observable.delay(2, { delayStart: true }))), Observable.map(([a, b]) => a + b), Observable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))), describe("zipWith", test("when inputs are different lengths", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.zipWith(pipe([1, 2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality())))), test("composite operators with both enumerable and runnable sources", () => {
    const op = compose(Observable.map(incrementBy(2)), Observable.keep(isEven), Observable.map(incrementBy(2)), Observable.buffer({ count: 3 }), Observable.takeFirst({ count: 3 }), Observable.skipFirst(), Observable.takeWhile(lessThan(100)), Observable.pairwise());
    const enumerated = pipe(Observable.generate(increment, returns(-1)), op, Observable.toReadonlyArray());
    const observed = pipe(Observable.generate(increment, returns(-1)), Observable.delay(5), op, Observable.toReadonlyArray());
    pipe(observed, expectArrayEquals(enumerated));
}));
((_) => { })(Observable);
