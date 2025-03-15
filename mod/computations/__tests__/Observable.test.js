/// <reference types="./Observable.test.d.ts" />

var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowAsync, expectToThrowError, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { __await, __constant, __do, __memo, __observe, __state, __stream, } from "../../computations/Observable/effects.js";
import * as Observable from "../../computations/Observable.js";
import * as Streamable from "../../computations/Streamable.js";
import * as Subject from "../../computations/Subject.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationWithSideEffects, MulticastComputation, PureDeferredComputation, PureSynchronousComputation, StoreLike_value, SynchronousComputationWithSideEffects, } from "../../computations.js";
import { bindMethod, error, ignore, isSome, lessThan, newInstance, none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, raise, returns, tuple, } from "../../functions.js";
import { increment, scale } from "../../math.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, EventListenerLike_notify, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_now, SchedulerLike_schedule, SinkLike_complete, ThrowBackpressureStrategy, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as WritableStore from "../WritableStore.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentDeferredComputationModuleTests from "./fixtures/ConcurrentDeferredComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
import * as ComputationTest from "./fixtures/helpers/ComputationTest.js";
import ComputationOperatorWithSideEffectsTests from "./fixtures/operators/ComputationOperatorWithSideEffectsTests.js";
import HigherOrderComputationOperatorTests from "./fixtures/operators/HigherOrderComputationOperatorTests.js";
import StatefulAsynchronousComputationOperatorTests from "./fixtures/operators/StatefulAsynchronousComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./fixtures/operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessComputationOperatorTests from "./fixtures/operators/StatelessComputationOperatorTests.js";
const ObservableTypes = {
    [Computation_pureSynchronousOfT]: Observable.empty({ delay: 1 }),
    [Computation_synchronousWithSideEffectsOfT]: pipe(Observable.empty(), Observable.forEach(ignore)),
    [Computation_pureDeferredOfT]: pipe(Observable.empty(), Observable.subscribeOn(HostScheduler.create())),
    [Computation_deferredWithSideEffectsOfT]: pipe(Observable.empty(), Observable.subscribeOn(HostScheduler.create()), Observable.forEach(ignore)),
    [Computation_multicastOfT]: Observable.never(),
};
const CombineConstructorTests = (operator) => {
    const { [Computation_pureSynchronousOfT]: pureSynchronousComputationOfT, [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT, [Computation_pureDeferredOfT]: pureDeferredOfT, [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT, [Computation_multicastOfT]: multicastOfT, } = ObservableTypes;
    return describe("CombineConstructorTests", ComputationTest.isPureSynchronous(operator(pureSynchronousComputationOfT, pureSynchronousComputationOfT), " when all inputs are pureSynchronous"), ComputationTest.isSynchronousWithSideEffects(operator(pureSynchronousComputationOfT, synchronousWithSideEffectsOfT), " when combining pureSynchronous and synchronousWithSideEffects inputs"), ComputationTest.isSynchronousWithSideEffects(operator(synchronousWithSideEffectsOfT, synchronousWithSideEffectsOfT), " when all inputs are synchronousWithSideEffects"), ComputationTest.isPureDeferred(operator(pureDeferredOfT, pureDeferredOfT), " when all inputs are PureDeferred"), ComputationTest.isPureDeferred(operator(pureSynchronousComputationOfT, pureDeferredOfT), " when combining pureSynchronous and pureDeferred inputs"), ComputationTest.isPureDeferred(operator(multicastOfT, pureDeferredOfT), " when combining pureDeferred and multicast inputs"), ComputationTest.isDeferredWithSideEffects(operator(pureDeferredOfT, deferredWithSideEffectsOfT, multicastOfT), " when combining multicast, pureDeferred and deferredWithSideEffect inputs"), ComputationTest.isPureDeferred(operator(multicastOfT, multicastOfT, multicastOfT), " when combining multicast inputs"));
};
testModule("Observable", describe("effects", test("calling an effect from outside a computation expression throws", () => {
    expectToThrow(() => __constant(0));
})), ComputationModuleTests(Observable, ObservableTypes), DeferredComputationModuleTests(Observable, ObservableTypes), DeferredReactiveComputationModuleTests(Observable, ObservableTypes), SynchronousComputationModuleTests(Observable), ConcurrentReactiveComputationModuleTests(Observable, ObservableTypes), ConcurrentDeferredComputationModuleTests(Observable), describe("backpressureStrategy", test("with a capacity of 0", pipeLazy([1, 2, 3, 4], Observable.fromReadonlyArray(), Observable.backpressureStrategy({
    capacity: 0,
    backpressureStrategy: DropLatestBackpressureStrategy,
}), Observable.backpressureStrategy({
    capacity: 10000,
    backpressureStrategy: DropLatestBackpressureStrategy,
}), Observable.last(), expectIsNone)), test("with a capacity of 0 and throw backpressure strategy", pipeLazy(pipeLazy([1, 2, 3, 4], Observable.fromReadonlyArray(), Observable.forEach(ignore), Observable.backpressureStrategy({
    capacity: 0,
    backpressureStrategy: ThrowBackpressureStrategy,
}), Observable.run()), expectToThrow)), testAsync("with a throw backpressure strategy", async () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
        await expectToThrowAsync(pipeLazyAsync(Observable.create(async (observer) => {
            await Promise.resolve();
            try {
                for (let i = 0; i < 10; i++) {
                    observer[EventListenerLike_notify](i);
                }
                observer[SinkLike_complete]();
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
            }
        }), Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: ThrowBackpressureStrategy,
        }), Observable.toReadonlyArrayAsync({ scheduler })));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), testAsync("with a drop latest backpressure strategy", async () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
        await pipeAsync(Observable.create(async (observer) => {
            await Promise.resolve();
            for (let i = 0; i < 10; i++) {
                observer[EventListenerLike_notify](i);
            }
            observer[SinkLike_complete]();
        }), Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropLatestBackpressureStrategy,
        }), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([0]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), testAsync("with a drop-oldest latest backpressure strategy", async () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
        await pipeAsync(Observable.create(async (observer) => {
            await Promise.resolve();
            for (let i = 0; i < 10; i++) {
                observer[EventListenerLike_notify](i);
            }
            observer[SinkLike_complete]();
        }), Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropOldestBackpressureStrategy,
        }), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([9]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("it passes through notifications", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.backpressureStrategy({
    capacity: 1,
    backpressureStrategy: DropLatestBackpressureStrategy,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), StatefulSynchronousComputationOperatorTests(ObservableTypes, Observable.backpressureStrategy({
    capacity: 10,
    backpressureStrategy: DropLatestBackpressureStrategy,
}))), describe("catchError", test("when the error handler throws an error from a delayed source", () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    pipe(Observable.empty({ delay: 1 }), Computation.concatWith(Observable)(Observable.raise({ raise: () => e1 })), Observable.catchError(_ => {
        throw e2;
    }), Observable.catchError(e => {
        result = e["cause"];
    }), Observable.toReadonlyArray());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
})), describe("combineLatest", CombineConstructorTests(Observable.combineLatest)), describe("computeDeferred", testAsync("__stream", async () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_4, HostScheduler.create(), false);
        await pipeAsync(Observable.computeDeferred(() => {
            const stream = __stream(Streamable.identity());
            const push = bindMethod(stream, EventListenerLike_notify);
            const result = __observe(stream) ?? 0;
            __do(push, result + 1);
            return result;
        }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync({ scheduler }), x => x ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), testAsync("__state", async () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_5, HostScheduler.create(), false);
        await pipeAsync(Observable.computeDeferred(() => {
            const initialState = __constant(() => 0);
            const state = __state(initialState);
            const push = bindMethod(state, EventListenerLike_notify);
            const result = __observe(state) ?? -1;
            if (result > -1) {
                __do(push, () => result + 1);
            }
            return result;
        }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync({ scheduler }), x => x ?? [], expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), testAsync("awaiting a Multicast Observable", async () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_6, HostScheduler.create(), false);
        const subject = Subject.create({ replay: 2 });
        subject[EventListenerLike_notify](200);
        subject[EventListenerLike_notify](100);
        await pipeAsync(Observable.computeDeferred(() => {
            const result = __await(subject);
            // Need to dispose the subject or the test will hang
            __do(bindMethod(subject, DisposableLike_dispose));
            return result;
        }, { mode: "combine-latest" }), Observable.distinctUntilChanged(), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([200, 100]));
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
}), ComputationTest.isDeferredWithSideEffects(Observable.computeDeferred(() => { }))), describe("computeSynchronous", test("batch mode", () => {
    const result = [];
    pipe(Observable.computeSynchronous(() => {
        const fromValueWithDelay = __constant((delay, value) => pipe([value], Observable.fromReadonlyArray({ delay })));
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), Observable.takeLast(), Observable.forEach(bindMethod(result, Array_push)), Observable.run());
    pipe(result, expectArrayEquals([22]));
}), test("combined-latest mode", () => {
    const result = [];
    pipe(Observable.computeSynchronous(() => {
        const oneTwoThreeDelayed = __constant(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })));
        const createOneTwoThree = __constant((_) => pipe([1, 2, 3], Observable.fromReadonlyArray()));
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Computation.keepType(Observable)(isSome), Observable.forEach(bindMethod(result, Array_push)), Observable.run());
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("when compute function throws", () => {
    const env_7 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_7, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const subscription = pipe(Observable.computeSynchronous(() => {
            raise(error);
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(subscription[DisposableLike_error], expectEquals(error));
    }
    catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
    }
    finally {
        __disposeResources(env_7);
    }
}), test("conditional hooks", pipeLazy(Observable.computeSynchronous(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 5 })));
    const src2 = __constant(Observable.generate(increment, returns(100), { delay: 2 }));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    return v;
}, { mode: "batched" }), Observable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), test("conditional await", pipeLazy(Observable.computeSynchronous(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 5 })));
    const src2 = __constant(Observable.generate(increment, returns(100), { delay: 2 }));
    const src3 = __constant(pipe(1, Observable.fromValue({ delay: 1 }), Observable.repeat(40)));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    else {
        __await(src3);
        return v;
    }
}), Observable.distinctUntilChanged(), Observable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), ComputationTest.isSynchronousWithSideEffects(Observable.computeSynchronous(() => { }))), describe("concat", test("concats the input containers in order, when sources have delay", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("create", ComputationTest.isDeferredWithSideEffects(Observable.create(ignore))), describe("currentTime", test("publish current time from VTS", pipeLazy(Observable.currentTime, Observable.takeFirst({ count: 5 }), Observable.toReadonlyArray(), 
// Only delayed scheduled continuations increment the clock
expectArrayEquals([0, 0, 0, 0, 0]))), ComputationTest.isPureSynchronous(Observable.currentTime)), describe("defer", testAsync("defering a promise converted to an Observable", async () => {
    const env_8 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_8, HostScheduler.create(), false);
        await pipeAsync(Observable.defer(() => pipe(1, Observable.fromValue(), Observable.multicast(scheduler))), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([1]));
    }
    catch (e_8) {
        env_8.error = e_8;
        env_8.hasError = true;
    }
    finally {
        __disposeResources(env_8);
    }
}), ComputationTest.isPureDeferred(Observable.defer(Subject.create))), describe("empty", test("with delay", () => {
    const env_9 = { stack: [], error: void 0, hasError: false };
    try {
        let disposedTime = -1;
        const vts = __addDisposableResource(env_9, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 5 }), Observable.subscribe(vts), DisposableContainer.onComplete(() => {
            disposedTime = vts[SchedulerLike_now];
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disposedTime, expectEquals(5));
    }
    catch (e_9) {
        env_9.error = e_9;
        env_9.hasError = true;
    }
    finally {
        __disposeResources(env_9);
    }
})), describe("exhaust", test("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
    pipe([4, 5, 6], Observable.fromReadonlyArray()),
    pipe([7, 8, 9], Observable.fromReadonlyArray()),
], Observable.fromReadonlyArray(), Observable.exhaust(), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), HigherOrderComputationOperatorTests(ObservableTypes, Observable.exhaust({
    innerType: PureSynchronousComputation,
}), Observable.exhaust({
    innerType: SynchronousComputationWithSideEffects,
}), Observable.exhaust({
    innerType: PureDeferredComputation,
}), Observable.exhaust({
    innerType: DeferredComputationWithSideEffects,
}))), describe("firstAsync", testAsync("empty source", async () => {
    const env_10 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_10, HostScheduler.create(), false);
        await pipeAsync([], Observable.fromReadonlyArray(), Observable.firstAsync({ scheduler }), expectIsNone);
    }
    catch (e_10) {
        env_10.error = e_10;
        env_10.hasError = true;
    }
    finally {
        __disposeResources(env_10);
    }
}), testAsync("it returns the first value", async () => {
    const env_11 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_11, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.firstAsync({ scheduler }), expectEquals(1));
    }
    catch (e_11) {
        env_11.error = e_11;
        env_11.hasError = true;
    }
    finally {
        __disposeResources(env_11);
    }
})), describe("forkMerge", StatelessComputationOperatorTests(ObservableTypes, Observable.forkMerge(_ => ObservableTypes[Computation_multicastOfT], _ => ObservableTypes[Computation_multicastOfT], {
    innerType: MulticastComputation,
}))), describe("fromAsyncIterable", testAsync("infinite immediately resolving iterable", async () => {
    const env_12 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_12, HostScheduler.create(), false);
        const result = await pipe((async function* foo() {
            let i = 0;
            while (true) {
                yield i++;
            }
        })(), AsyncIterable.of(), Observable.fromAsyncIterable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.backpressureStrategy({
            capacity: 5,
            backpressureStrategy: DropLatestBackpressureStrategy,
        }), Observable.lastAsync({ scheduler }));
        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_12) {
        env_12.error = e_12;
        env_12.hasError = true;
    }
    finally {
        __disposeResources(env_12);
    }
}), testAsync("iterable that completes", async () => {
    const env_13 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_13, HostScheduler.create(), false);
        const result = await pipe((async function* foo() {
            yield 1;
            yield 2;
            yield 3;
        })(), AsyncIterable.of(), Observable.fromAsyncIterable(), Observable.buffer(), Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropLatestBackpressureStrategy,
        }), Observable.lastAsync({ scheduler }));
        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }
    catch (e_13) {
        env_13.error = e_13;
        env_13.hasError = true;
    }
    finally {
        __disposeResources(env_13);
    }
}), testAsync("iterable that throws", pipeLazy(async () => {
    const env_14 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_14, HostScheduler.create(), false);
        const e = error();
        const result = await pipe((async function* foo() {
            throw e;
        })(), AsyncIterable.of(), Observable.fromAsyncIterable(), Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropLatestBackpressureStrategy,
        }), Observable.lastAsync({ scheduler }));
        pipe(result, expectEquals(e));
    }
    catch (e_14) {
        env_14.error = e_14;
        env_14.hasError = true;
    }
    finally {
        __disposeResources(env_14);
    }
}, expectToThrowAsync)), ComputationTest.isDeferredWithSideEffects(pipe((async function* foo() {
    let i = 0;
    while (true) {
        yield i++;
    }
})(), AsyncIterable.of(), Observable.fromAsyncIterable()))), describe("fromEventSource", ComputationTest.isMulticastedAndNotDisposable(pipe(EventSource.create(ignore), Observable.fromEventSource()))), describe("fromIterable", test("with delay", pipeLazy([9, 9, 9, 9], Observable.fromIterable({ delay: 2 }), Observable.withCurrentTime(t => t), Observable.toReadonlyArray(), expectArrayEquals([0, 2, 4, 6]))), test("with delay and delayed start", pipeLazy([9, 9, 9, 9], Observable.fromIterable({ delay: 2, delayStart: true }), Observable.withCurrentTime(t => t), Observable.toReadonlyArray(), expectArrayEquals([2, 4, 6, 8])))), describe("fromStore", test("it publishes the current value and all subsequent values", () => {
    const env_15 = { stack: [], error: void 0, hasError: false };
    try {
        const store = WritableStore.create(-1);
        const vts = __addDisposableResource(env_15, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe(store, Observable.fromStore(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        pipe(Observable.generate(increment, returns(-1), { delay: 3 }), Observable.takeFirst({ count: 3 }), Computation.notify(Observable)(store), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }
    catch (e_15) {
        env_15.error = e_15;
        env_15.hasError = true;
    }
    finally {
        __disposeResources(env_15);
    }
}), ComputationTest.isMulticastedAndNotDisposable(pipe(WritableStore.create(-1), Observable.fromStore()))), describe("keyFrame", test("keyframing from 0 to 10 over a duration of 10 clock clicks", pipeLazy(Observable.keyFrame(10), Observable.map(scale(0, 10)), Observable.toReadonlyArray({
    maxMicroTaskTicks: 1,
}), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))), describe("lastAsync", testAsync("empty source", async () => {
    const env_16 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_16, HostScheduler.create(), false);
        await pipeAsync([], Observable.fromReadonlyArray(), Observable.lastAsync({ scheduler }), expectIsNone);
    }
    catch (e_16) {
        env_16.error = e_16;
        env_16.hasError = true;
    }
    finally {
        __disposeResources(env_16);
    }
}), testAsync("it returns the last value", async () => {
    const env_17 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_17, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync({ scheduler }), expectEquals(3));
    }
    catch (e_17) {
        env_17.error = e_17;
        env_17.hasError = true;
    }
    finally {
        __disposeResources(env_17);
    }
})), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([9, 10], Observable.fromReadonlyArray({ delay: 3, delayStart: true })),
], Observable.fromReadonlyArray(), Observable.mergeAll({
    concurrency: 2,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]))), testAsync("without delay, merge all observables as they are produced", async () => {
    const env_18 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_18, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Computation.flatMap(Observable)("mergeAll", x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]));
    }
    catch (e_18) {
        env_18.error = e_18;
        env_18.hasError = true;
    }
    finally {
        __disposeResources(env_18);
    }
}), test("without delay, merge all observables as they are produced", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Computation.concatMap(Observable)(x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]))), HigherOrderComputationOperatorTests(ObservableTypes, Observable.mergeAll({
    innerType: PureSynchronousComputation,
}), Observable.mergeAll({
    innerType: SynchronousComputationWithSideEffects,
}), Observable.mergeAll({
    innerType: PureDeferredComputation,
}), Observable.mergeAll({
    innerType: DeferredComputationWithSideEffects,
}))), describe("multicast", ComputationTest.isMulticastedAndDisposable((() => {
    const env_19 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_19, VirtualTimeScheduler.create(), false);
        return pipe(Observable.empty({ delay: 1 }), Observable.multicast(vts));
    }
    catch (e_19) {
        env_19.error = e_19;
        env_19.hasError = true;
    }
    finally {
        __disposeResources(env_19);
    }
})()), test("shared observable zipped with itself, auto disposing", () => {
    const env_20 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_20, VirtualTimeScheduler.create(), false);
        const shared = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.forEach(ignore), Observable.multicast(vts, { replay: 1, autoDispose: true }));
        let result = [];
        pipe(Observable.zipLatest(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([2, 4, 6]));
    }
    catch (e_20) {
        env_20.error = e_20;
        env_20.hasError = true;
    }
    finally {
        __disposeResources(env_20);
    }
})), describe("onSubscribe", ComputationOperatorWithSideEffectsTests(ObservableTypes, Observable.onSubscribe(ignore)), test("when subscribe function returns a teardown function", () => {
    const env_21 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_21, VirtualTimeScheduler.create(), false);
        const disp = mockFn();
        const f = mockFn(disp);
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(vts));
        pipe(disp, expectToHaveBeenCalledTimes(0));
        pipe(f, expectToHaveBeenCalledTimes(1));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disp, expectToHaveBeenCalledTimes(1));
        pipe(f, expectToHaveBeenCalledTimes(1));
    }
    catch (e_21) {
        env_21.error = e_21;
        env_21.hasError = true;
    }
    finally {
        __disposeResources(env_21);
    }
}), test("when callback function throws", () => {
    const env_22 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_22, VirtualTimeScheduler.create(), false);
        const subscription = pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(raise), Observable.subscribe(vts));
        pipe(subscription[DisposableLike_error], expectIsSome);
    }
    catch (e_22) {
        env_22.error = e_22;
        env_22.hasError = true;
    }
    finally {
        __disposeResources(env_22);
    }
}), test("when callback returns a disposable", () => {
    const env_23 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_23, VirtualTimeScheduler.create(), false);
        const disp = Disposable.create();
        const f = mockFn(disp);
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(vts));
        pipe(disp[DisposableLike_isDisposed], expectFalse());
        pipe(f, expectToHaveBeenCalledTimes(1));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disp[DisposableLike_isDisposed], expectTrue());
        expectIsNone(disp[DisposableLike_error]);
        pipe(f, expectToHaveBeenCalledTimes(1));
    }
    catch (e_23) {
        env_23.error = e_23;
        env_23.hasError = true;
    }
    finally {
        __disposeResources(env_23);
    }
}), test("when callback only performs sideeffects", () => {
    const env_24 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_24, VirtualTimeScheduler.create(), false);
        let called = false;
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(() => {
            called = true;
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(called, expectTrue());
    }
    catch (e_24) {
        env_24.error = e_24;
        env_24.hasError = true;
    }
    finally {
        __disposeResources(env_24);
    }
})), describe("repeat", test("when repeating a finite amount of times, with delayed source.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate with delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws with delayed source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray({ delay: 3 }), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
})), describe("scanMany", test("slow source, fast scan function", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 10,
    delayStart: true,
}), Observable.takeFirst({ count: 10 }), Observable.scanMany((_acc, next) => pipe(next, Observable.fromValue({ delay: 2 })), returns(0)), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), HigherOrderComputationOperatorTests(ObservableTypes, Observable.scanMany((_acc, _next) => Observable.empty(), returns(0), {
    innerType: PureSynchronousComputation,
}), Observable.scanMany((_acc, _next) => pipe(Observable.empty(), Observable.forEach(ignore)), returns(0), { innerType: SynchronousComputationWithSideEffects }), Observable.scanMany((_acc, _next) => pipe(Observable.empty(), Observable.subscribeOn(VirtualTimeScheduler.create())), returns(0), {
    innerType: PureDeferredComputation,
}), Observable.scanMany((_acc, _next) => pipe(Observable.empty(), Observable.forEach(ignore), Observable.subscribeOn(VirtualTimeScheduler.create())), returns(0), {
    innerType: DeferredComputationWithSideEffects,
}))), describe("spring", testAsync("test with spring", async () => {
    const env_25 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_25, HostScheduler.create(), false);
        await pipeAsync(Observable.spring(), Observable.lastAsync({ scheduler }), expectEquals(1));
    }
    catch (e_25) {
        env_25.error = e_25;
        env_25.hasError = true;
    }
    finally {
        __disposeResources(env_25);
    }
}), ComputationTest.isPureSynchronous(Observable.spring())), describe("subscribeOn", StatefulAsynchronousComputationOperatorTests(ObservableTypes, Observable.subscribeOn(VirtualTimeScheduler.create()))), describe("switchAll", test("with empty source", pipeLazy(Observable.empty({ delay: 1 }), Observable.switchAll(), Observable.toReadonlyArray(), expectArrayEquals([]))), test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Computation.flatMap(Observable)("switchAll", _ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("only produce the last observable", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Computation.flatMap(Observable)("switchAll", x => pipe([x, x, x], Observable.fromReadonlyArray({
    delay: 1,
    delayStart: true,
}))), Observable.toReadonlyArray(), expectArrayEquals([3, 3, 3]))), test("overlapping notification", pipeLazy([none, none, none], Observable.fromReadonlyArray({ delay: 4 }), Computation.flatMap(Observable)("switchAll", _ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))), test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Computation.flatMap(Observable)("switchAll", _ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), HigherOrderComputationOperatorTests(ObservableTypes, Observable.switchAll({
    innerType: PureSynchronousComputation,
}), Observable.switchAll({
    innerType: SynchronousComputationWithSideEffects,
}), Observable.switchAll({
    innerType: PureDeferredComputation,
}), Observable.switchAll({
    innerType: DeferredComputationWithSideEffects,
}))), describe("throttle", test("first", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 101 }), Observable.throttle(50, { mode: "first" }), Observable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))), StatefulSynchronousComputationOperatorTests(ObservableTypes, Observable.throttle(1))), describe("throwIfEmpty", test("when source is empty and delayed", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray({ delay: 1 }), Observable.forEach(ignore), Observable.throwIfEmpty(() => error), Observable.run()), expectToThrowError(error));
}), test("when factory throws after a delay", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray({ delay: 1 }), Observable.forEach(ignore), Observable.throwIfEmpty(() => {
        throw error;
    }), Observable.run()), expectToThrowError(error));
}), test("when source is not empty with delay", pipeLazy([1], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1])))), describe("toEventSource", test("when the source completes without error", () => {
    const env_26 = { stack: [], error: void 0, hasError: false };
    try {
        const result = [];
        const vts = __addDisposableResource(env_26, VirtualTimeScheduler.create(), false);
        pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toEventSource(vts), Disposable.addTo(vts), EventSource.addEventHandler(bindMethod(result, Array_push)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 1, 2]));
    }
    catch (e_26) {
        env_26.error = e_26;
        env_26.hasError = true;
    }
    finally {
        __disposeResources(env_26);
    }
})), describe("toPauseableObservable", test("a source with delay", () => {
    const env_27 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_27, VirtualTimeScheduler.create(), false);
        const generateObservable = pipe(Observable.generate(increment, returns(-1), {
            delay: 2,
            delayStart: true,
        }), Observable.toPauseableObservable(vts));
        generateObservable[PauseableLike_resume]();
        vts[SchedulerLike_schedule](() => {
            generateObservable[PauseableLike_pause]();
            pipe(generateObservable[PauseableLike_isPaused][StoreLike_value], expectTrue("expect observable to be paused"));
        }, { delay: 3 });
        vts[SchedulerLike_schedule](() => {
            generateObservable[PauseableLike_resume]();
            pipe(generateObservable[PauseableLike_isPaused][StoreLike_value], expectFalse("expect observable to not be paused"));
        }, { delay: 4 });
        vts[SchedulerLike_schedule](() => generateObservable[DisposableLike_dispose](), { delay: 6 });
        const f = mockFn();
        const subscription = pipe(generateObservable, Observable.forEach((x) => {
            f(x);
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        // pipe(f, expectToHaveBeenCalledTimes(2));
        pipe(f.calls.flat(), expectArrayEquals([0, 1]));
        pipe(subscription[DisposableLike_isDisposed], expectTrue());
    }
    catch (e_27) {
        env_27.error = e_27;
        env_27.hasError = true;
    }
    finally {
        __disposeResources(env_27);
    }
}), test("flow a generating source", () => {
    const env_28 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_28, VirtualTimeScheduler.create(), false);
        const flowed = pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toPauseableObservable(vts), Disposable.addTo(vts));
        vts[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
            delay: 2,
        });
        const f = mockFn();
        const subscription = pipe(flowed, Observable.withCurrentTime(tuple), Observable.forEach(([_, v]) => {
            f(v);
        }), Observable.subscribe(vts), Disposable.addTo(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(f, expectToHaveBeenCalledTimes(3));
        pipe(f.calls.flat(), expectArrayEquals([0, 1, 2]));
        pipe(subscription[DisposableLike_isDisposed], expectTrue());
    }
    catch (e_28) {
        env_28.error = e_28;
        env_28.hasError = true;
    }
    finally {
        __disposeResources(env_28);
    }
}), test("when the source throws", () => {
    const env_29 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_29, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const flowed = pipe(Observable.raise({ raise: () => error }), Observable.toPauseableObservable(vts), Disposable.addTo(vts));
        flowed[PauseableLike_resume]();
        vts[VirtualTimeSchedulerLike_run]();
        pipe(flowed[DisposableLike_error], expectEquals(error));
    }
    catch (e_29) {
        env_29.error = e_29;
        env_29.hasError = true;
    }
    finally {
        __disposeResources(env_29);
    }
})), describe("toReadonlyArrayAsync", testAsync("with pure delayed source", async () => {
    const env_30 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_30, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 }), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([1, 2, 3]));
    }
    catch (e_30) {
        env_30.error = e_30;
        env_30.hasError = true;
    }
    finally {
        __disposeResources(env_30);
    }
}), testAsync("with empty non-runnable source", async () => {
    const env_31 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_31, HostScheduler.create(), false);
        await pipeAsync(EventSource.create(l => l[DisposableLike_dispose]()), Observable.fromEventSource(), Observable.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([]));
    }
    catch (e_31) {
        env_31.error = e_31;
        env_31.hasError = true;
    }
    finally {
        __disposeResources(env_31);
    }
})), describe("withCurrentTime", StatefulSynchronousComputationOperatorTests(ObservableTypes, Observable.withCurrentTime(returns))), describe("zipLatest", CombineConstructorTests(Observable.zipLatest)));
((_) => { })(Observable);
