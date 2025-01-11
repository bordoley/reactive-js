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
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectPromiseToThrow, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowAsync, expectToThrowError, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import DeferredComputationModuleTests from "../../computations/__tests__/fixtures/DeferredComputationModuleTests.js";
import PureStatefulComputationModuleTests from "../../computations/__tests__/fixtures/PureStatefulComputationModuleTests.js";
import PureStatelesssComputationModuleTests from "../../computations/__tests__/fixtures/PureStatelessComputationModuleTests.js";
import { keepType, } from "../../computations.js";
import { DispatcherLikeEvent_completed, DispatcherLike_complete, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, SchedulerLike_now, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStore from "../../events/WritableStore.js";
import { EventListenerLike_notify, StoreLike_value } from "../../events.js";
import { alwaysTrue, arrayEquality, bindMethod, error, ignore, increment, incrementBy, isSome, lessThan, newInstance, none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, raise, returns, scale, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as IndexedQueue from "../../utils/IndexedQueue.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, OverflowBackpressureStrategy, QueueableLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
import * as HostScheduler from "../HostScheduler.js";
import { __await, __bindMethod, __constant, __do, __memo, __observe, __state, __stream, } from "../Observable/effects.js";
import { DeferredObservableWithSideEffectsType, PureDeferredObservableType, RunnableWithSideEffectsType, } from "../Observable.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as Subject from "../Subject.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
const expectIsPureRunnable = (obs) => {
    expectTrue(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isMulticasted]);
    expectTrue(obs[ObservableLike_isPure]);
    expectTrue(obs[ObservableLike_isDeferred]);
};
const expectIsRunnableWithSideEffects = (obs) => {
    expectTrue(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isMulticasted]);
    expectFalse(obs[ObservableLike_isPure]);
    expectTrue(obs[ObservableLike_isDeferred]);
};
const expectIsPureDeferredObservable = (obs) => {
    expectFalse(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isMulticasted]);
    expectTrue(obs[ObservableLike_isPure]);
    expectTrue(obs[ObservableLike_isDeferred]);
};
const expectIsDeferredObservableWithSideEffects = (obs) => {
    expectFalse(obs[ObservableLike_isRunnable]);
    expectFalse(obs[ObservableLike_isMulticasted]);
    expectFalse(obs[ObservableLike_isPure]);
    expectTrue(obs[ObservableLike_isDeferred]);
};
const expectIsMulticastObservable = (obs) => {
    expectFalse(obs[ObservableLike_isRunnable]);
    expectTrue(obs[ObservableLike_isMulticasted]);
    expectTrue(obs[ObservableLike_isPure]);
    expectFalse(obs[ObservableLike_isDeferred]);
};
const testIsPureRunnable = (obs) => test("is PureRunnableLike", pipeLazy(obs, expectIsPureRunnable));
const testIsRunnableWithSideEffects = (obs) => test("is PureRunnableLike", pipeLazy(obs, expectIsRunnableWithSideEffects));
const testIsDeferredObservableWithSideEffects = (obs) => test("is DeferredObservableWithSideEffectsLike", pipeLazy(obs, expectIsDeferredObservableWithSideEffects));
const testIsPureDeferredObservable = (obs) => test("is PureDeferredObservableLike", pipeLazy(obs, expectIsPureDeferredObservable));
const testIsMulticastObservable = (obs) => test("is MulticastObservableLike", pipeLazy(obs, expectIsMulticastObservable));
const PureStatelessObservableOperatorTests = (op) => describe("PureStatelessObservableOperator", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsPureRunnable)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsRunnableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), op, expectIsPureDeferredObservable);
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)), test("with MulticastObservableLike", pipeLazy(new Promise(ignore), Observable.fromPromise(), op, expectIsMulticastObservable)));
const PureStatefulObservableOperator = (op) => describe("PureStatefulObservableOperator", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsPureRunnable)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsRunnableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), op, expectIsPureDeferredObservable);
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)), test("with MulticastObservableLike", pipeLazy(new Promise(ignore), Observable.fromPromise(), op, expectIsPureDeferredObservable)));
const PureDeferredObservableOperatorWithDeferredObservableBaseTests = (op) => describe("PureStatelessObservableOperatorWithDeferredObservableBaseTests", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsPureRunnable)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsRunnableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), op, expectIsPureDeferredObservable);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)));
const DeferringObservableOperatorTests = (op) => describe("DeferringObservableOperatorTests", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsPureDeferredObservable)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsDeferredObservableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), op, expectIsPureDeferredObservable);
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)));
const ObservableOperatorWithSideEffectsTests = (op) => describe("ObservableOperatorWithSideEffects", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsRunnableWithSideEffects)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsRunnableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), x => x, op, expectIsDeferredObservableWithSideEffects);
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)), test("with MulticastObservableLike", pipeLazy(new Promise(ignore), Observable.fromPromise(), op, expectIsDeferredObservableWithSideEffects)));
const AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests = (op) => describe("AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), op, expectIsDeferredObservableWithSideEffects)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), op, expectIsDeferredObservableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), op, expectIsDeferredObservableWithSideEffects);
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), op, expectIsDeferredObservableWithSideEffects)), test("with MulticastObservableLike", pipeLazy(new Promise(ignore), Observable.fromPromise(), op, expectIsDeferredObservableWithSideEffects)));
testModule("Observable", describe("effects", test("calling an effect from outside a computation expression throws", () => {
    expectToThrow(() => __constant(0));
})), DeferredComputationModuleTests(Observable, Observable.toReadonlyArray), PureStatelesssComputationModuleTests(Observable, Observable.fromReadonlyArray, Observable.toReadonlyArray), PureStatefulComputationModuleTests(Observable, Observable.toReadonlyArray), describe("backpressureStrategy", testAsync("with a throw backpressure strategy", async () => {
    const env_7 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_7, HostScheduler.create(), false);
        await expectToThrowAsync(pipeLazyAsync(Observable.create(observer => {
            for (let i = 0; i < 10; i++) {
                observer[QueueableLike_enqueue](i);
            }
        }), Observable.backpressureStrategy(1, ThrowBackpressureStrategy), Observable.toReadonlyArrayAsync(scheduler)));
    }
    catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
    }
    finally {
        __disposeResources(env_7);
    }
}), testAsync("with a drop latest backpressure strategy", async () => {
    const env_8 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_8, HostScheduler.create(), false);
        await pipeAsync(Observable.create(observer => {
            for (let i = 0; i < 10; i++) {
                observer[QueueableLike_enqueue](i);
            }
            observer[DispatcherLike_complete]();
        }), Observable.backpressureStrategy(1, DropLatestBackpressureStrategy), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([0]));
    }
    catch (e_8) {
        env_8.error = e_8;
        env_8.hasError = true;
    }
    finally {
        __disposeResources(env_8);
    }
}), testAsync("with a drop-oldest latest backpressure strategy", async () => {
    const env_9 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_9, HostScheduler.create(), false);
        await pipeAsync(Observable.create(observer => {
            for (let i = 0; i < 10; i++) {
                observer[QueueableLike_enqueue](i);
            }
            observer[DispatcherLike_complete]();
        }), Observable.backpressureStrategy(1, DropOldestBackpressureStrategy), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([9]));
    }
    catch (e_9) {
        env_9.error = e_9;
        env_9.hasError = true;
    }
    finally {
        __disposeResources(env_9);
    }
}), test("it passes through notifications", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.backpressureStrategy(1, DropLatestBackpressureStrategy), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), PureStatefulObservableOperator(Observable.backpressureStrategy(10, DropLatestBackpressureStrategy))), describe("buffer", PureStatefulObservableOperator(Observable.buffer())), describe("catchError", test("when the source throws", () => {
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
}), PureStatefulObservableOperator(Observable.catchError(ignore))), describe("combineLatest", test("combineLatest", pipeLazy(Observable.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 })), pipe(Observable.generate(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }))), Observable.toReadonlyArray(), expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], { valuesEquality: arrayEquality() }))), testIsPureRunnable(Observable.combineLatest(Observable.empty({ delay: 1 }), Observable.empty({ delay: 1 }))), testIsPureDeferredObservable((() => {
    const env_10 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_10, VirtualTimeScheduler.create(), false);
        return Observable.combineLatest(pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)), Observable.empty({ delay: 1 }));
    }
    catch (e_10) {
        env_10.error = e_10;
        env_10.hasError = true;
    }
    finally {
        __disposeResources(env_10);
    }
})()), testIsRunnableWithSideEffects(Observable.combineLatest(Observable.empty({ delay: 1 }), pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)))), testIsPureDeferredObservable(Observable.combineLatest(Observable.empty({ delay: 1 }), Subject.create())), testIsDeferredObservableWithSideEffects(Observable.combineLatest(pipe(async () => {
    throw new Error();
}, Observable.fromAsyncFactory()), Observable.empty({ delay: 1 }), pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore))))), describe("computeDeferred", testAsync("__stream", async () => {
    const env_11 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_11, HostScheduler.create(), false);
        await pipeAsync(Observable.computeDeferred(() => {
            const stream = __stream(Streamable.identity());
            const push = __bindMethod(stream, QueueableLike_enqueue);
            const result = __observe(stream) ?? 0;
            __do(push, result + 1);
            return result;
        }), Observable.takeFirst({ count: 10 }), x => x, Observable.buffer(), Observable.lastAsync(scheduler), x => x ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_11) {
        env_11.error = e_11;
        env_11.hasError = true;
    }
    finally {
        __disposeResources(env_11);
    }
}), testAsync("__state", async () => {
    const env_12 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_12, HostScheduler.create(), false);
        await pipeAsync(Observable.computeDeferred(() => {
            const initialState = __constant(() => 0);
            const state = __state(initialState);
            const push = __bindMethod(state, QueueableLike_enqueue);
            const result = __observe(state) ?? -1;
            if (result > -1) {
                __do(push, () => result + 1);
            }
            return result;
        }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler), x => x ?? [], expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
    }
    catch (e_12) {
        env_12.error = e_12;
        env_12.hasError = true;
    }
    finally {
        __disposeResources(env_12);
    }
}), testAsync("awaiting a Multicast Observable", async () => {
    const env_13 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_13, HostScheduler.create(), false);
        const subject = Subject.create({ replay: 2 });
        subject[EventListenerLike_notify](1);
        await pipeAsync(Observable.computeDeferred(() => {
            const result = __await(subject);
            __do(bindMethod(subject, DisposableLike_dispose));
            return result;
        }), Observable.distinctUntilChanged(), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1]));
    }
    catch (e_13) {
        env_13.error = e_13;
        env_13.hasError = true;
    }
    finally {
        __disposeResources(env_13);
    }
}), testIsDeferredObservableWithSideEffects(Observable.computeDeferred(() => { }))), describe("computeRunnable", test("batch mode", () => {
    const result = [];
    pipe(Observable.computeRunnable(() => {
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
    pipe(Observable.computeRunnable(() => {
        const oneTwoThreeDelayed = __constant(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })));
        const createOneTwoThree = __constant((_) => pipe([1, 2, 3], Observable.fromReadonlyArray()));
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), keepType(Observable.keep)(isSome), Observable.forEach(bindMethod(result, Array_push)), Observable.run());
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("when compute function throws", () => {
    const env_14 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_14, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const subscription = pipe(Observable.computeRunnable(() => {
            raise(error);
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(subscription[DisposableLike_error], expectEquals(error));
    }
    catch (e_14) {
        env_14.error = e_14;
        env_14.hasError = true;
    }
    finally {
        __disposeResources(env_14);
    }
}), test("conditional hooks", pipeLazy(Observable.computeRunnable(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 5 })));
    const src2 = __constant(Observable.generate(increment, returns(100), { delay: 2 }));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    return v;
}, { mode: "batched" }), Observable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), test("conditional await", pipeLazy(Observable.computeRunnable(() => {
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
}), Observable.distinctUntilChanged(), Observable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), testIsRunnableWithSideEffects(Observable.computeRunnable(() => { }))), describe("concat", test("concats the input containers in order", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray()), pipe([4, 5, 6], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("concats the input containers in order, when sources have delay", pipeLazy(Observable.concat(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatAll", test("concating pure Runnables", pipeLazy([
    pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
    pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 2 })),
], Observable.fromReadonlyArray(), Observable.concatAll(), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), PureStatefulObservableOperator(Observable.concatAll()), DeferringObservableOperatorTests(Observable.concatAll({
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.concatAll({
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.concatAll({
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("concatMany", testIsPureRunnable(Observable.concatMany([
    Observable.empty({ delay: 1 }),
    Observable.empty({ delay: 1 }),
])), testIsPureDeferredObservable((() => {
    const env_15 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_15, VirtualTimeScheduler.create(), false);
        return Observable.concatMany([
            pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
            Observable.empty({ delay: 1 }),
        ]);
    }
    catch (e_15) {
        env_15.error = e_15;
        env_15.hasError = true;
    }
    finally {
        __disposeResources(env_15);
    }
})()), testIsRunnableWithSideEffects(Observable.concatMany([
    pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
    Observable.empty({ delay: 1 }),
])), testIsDeferredObservableWithSideEffects(Observable.concatMany([
    Observable.create(ignore),
    Observable.empty({ delay: 1 }),
])), testIsPureDeferredObservable(Observable.concatMany([Subject.create(), Observable.empty({ delay: 1 })])), testIsDeferredObservableWithSideEffects(Observable.concatMany([
    Subject.create(),
    pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
]))), describe("concatMap", testAsync("maps each value to a container and flattens", async () => {
    const env_16 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_16, HostScheduler.create(), false);
        await pipeAsync([0, 1], Observable.fromReadonlyArray(), Observable.concatMap(pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }))), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1, 2, 3, 1, 2, 3]));
    }
    catch (e_16) {
        env_16.error = e_16;
        env_16.hasError = true;
    }
    finally {
        __disposeResources(env_16);
    }
}), test("maps each value to a container and flattens", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.concatMap(pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), PureStatefulObservableOperator(Observable.concatMap(_ => Observable.empty({ delay: 1 }))), DeferringObservableOperatorTests(Observable.concatMap(_ => Observable.empty({ delay: 1 }), {
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.concatMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.concatMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.concatWith(pipe([2, 3, 4], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))), PureStatefulObservableOperator(Observable.concatWith(Observable.empty({ delay: 1 }), Observable.empty({ delay: 1 }))), ObservableOperatorWithSideEffectsTests(Observable.concatWith(pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)))), DeferringObservableOperatorTests((() => {
    const env_17 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_17, VirtualTimeScheduler.create(), false);
        return Observable.concatWith(pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)));
    }
    catch (e_17) {
        env_17.error = e_17;
        env_17.hasError = true;
    }
    finally {
        __disposeResources(env_17);
    }
})()), describe("concat with DeferredObservableWithSideEffectsLikes", test("with PureRunnableLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.concatWith(pipe(async () => {
    throw new Error();
}, Observable.fromAsyncFactory())), expectIsDeferredObservableWithSideEffects)), test("with RunnableWithSideEffectsLike", pipeLazy(Observable.empty({ delay: 1 }), Observable.forEach(ignore), Observable.concatWith(pipe(async () => {
    throw new Error();
}, Observable.fromAsyncFactory())), expectIsDeferredObservableWithSideEffects)), test("with PureDeferredObservableLike", () => {
    const env_18 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_18, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts), Observable.concatWith(pipe(async () => {
            throw new Error();
        }, Observable.fromAsyncFactory())), expectIsDeferredObservableWithSideEffects);
    }
    catch (e_18) {
        env_18.error = e_18;
        env_18.hasError = true;
    }
    finally {
        __disposeResources(env_18);
    }
}), test("with DeferredObservableWithSideEffectsLike", pipeLazy(async () => {
    throw new Error();
}, Observable.fromAsyncFactory(), Observable.concatWith(pipe(async () => {
    throw new Error();
}, Observable.fromAsyncFactory())), expectIsDeferredObservableWithSideEffects)), test("with MulticastObservableLike", () => {
    const env_19 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_19, VirtualTimeScheduler.create(), false);
        pipe(new Promise(ignore), Observable.fromPromise(), Observable.concatWith(pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts))), expectIsPureDeferredObservable);
    }
    catch (e_19) {
        env_19.error = e_19;
        env_19.hasError = true;
    }
    finally {
        __disposeResources(env_19);
    }
}))), describe("create", testIsDeferredObservableWithSideEffects(Observable.create(ignore))), describe("currentTime", test("publish current time from VTS", pipeLazy(Observable.currentTime, Observable.takeFirst({ count: 5 }), Observable.toReadonlyArray(), 
// Only delayed scheduled continuations increment the clock
expectArrayEquals([0, 0, 0, 0, 0]))), testIsPureRunnable(Observable.currentTime)), describe("debug", ObservableOperatorWithSideEffectsTests(Observable.debug())), describe("decodeWithCharset", PureStatefulObservableOperator(Observable.decodeWithCharset())), describe("defer", testAsync("defering a promise converted to an Observable", async () => {
    const env_20 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_20, HostScheduler.create(), false);
        await pipeAsync(Observable.defer(() => pipe(Promise.resolve(1), Observable.fromPromise())), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1]));
    }
    catch (e_20) {
        env_20.error = e_20;
        env_20.hasError = true;
    }
    finally {
        __disposeResources(env_20);
    }
}), testIsPureDeferredObservable(Observable.defer(Subject.create))), describe("dispatchTo", test("when backpressure exception is thrown", () => {
    const env_21 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_21, VirtualTimeScheduler.create(), false);
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        });
        expectToThrow(pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], Observable.fromReadonlyArray(), Observable.dispatchTo(stream), Observable.run()));
    }
    catch (e_21) {
        env_21.error = e_21;
        env_21.hasError = true;
    }
    finally {
        __disposeResources(env_21);
    }
}), test("when completed successfully", () => {
    const env_22 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_22, VirtualTimeScheduler.create(), false);
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: OverflowBackpressureStrategy,
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
    }
    catch (e_22) {
        env_22.error = e_22;
        env_22.hasError = true;
    }
    finally {
        __disposeResources(env_22);
    }
}), test("when completed successfully from delayed source", () => {
    const env_23 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_23, VirtualTimeScheduler.create(), false);
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: OverflowBackpressureStrategy,
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
    }
    catch (e_23) {
        env_23.error = e_23;
        env_23.hasError = true;
    }
    finally {
        __disposeResources(env_23);
    }
}), ObservableOperatorWithSideEffectsTests(Observable.dispatchTo({}))), describe("distinctUntilChanged", PureStatefulObservableOperator(Observable.distinctUntilChanged())), describe("empty", test("with delay", () => {
    const env_24 = { stack: [], error: void 0, hasError: false };
    try {
        let disposedTime = -1;
        const vts = __addDisposableResource(env_24, VirtualTimeScheduler.create(), false);
        pipe(Observable.empty({ delay: 5 }), Observable.subscribe(vts), DisposableContainer.onComplete(() => {
            disposedTime = vts[SchedulerLike_now];
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disposedTime, expectEquals(5));
    }
    catch (e_24) {
        env_24.error = e_24;
        env_24.hasError = true;
    }
    finally {
        __disposeResources(env_24);
    }
}), testIsPureRunnable(Observable.empty({ delay: 1 }))), describe("encodeUtf8", PureStatefulObservableOperator(Observable.encodeUtf8())), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.endWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))), PureStatefulObservableOperator(Observable.endWith(1))), describe("enqueue", ObservableOperatorWithSideEffectsTests(Observable.enqueue(IndexedQueue.create()))), describe("exhaust", test("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
    pipe([4, 5, 6], Observable.fromReadonlyArray()),
    pipe([7, 8, 9], Observable.fromReadonlyArray()),
], Observable.fromReadonlyArray(), Observable.exhaust({
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), PureStatefulObservableOperator(Observable.exhaust()), DeferringObservableOperatorTests(Observable.exhaust({
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.exhaust({
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.exhaust({
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("exhaustMap", test("when the initial observable never disposes", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.exhaustMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), PureStatefulObservableOperator(Observable.exhaustMap(_ => Observable.empty({ delay: 1 }))), DeferringObservableOperatorTests(Observable.exhaustMap(_ => Observable.empty({ delay: 1 }), {
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.exhaustMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.exhaustMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("firstAsync", testAsync("empty source", async () => {
    const env_25 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_25, HostScheduler.create(), false);
        await pipeAsync([], Observable.fromReadonlyArray(), Observable.firstAsync(scheduler), expectIsNone);
    }
    catch (e_25) {
        env_25.error = e_25;
        env_25.hasError = true;
    }
    finally {
        __disposeResources(env_25);
    }
}), testAsync("it returns the first value", async () => {
    const env_26 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_26, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.firstAsync(scheduler), expectEquals(1));
    }
    catch (e_26) {
        env_26.error = e_26;
        env_26.hasError = true;
    }
    finally {
        __disposeResources(env_26);
    }
})), describe("flatMapAsync", testAsync("mapping a number to a promise", async () => {
    const env_27 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_27, HostScheduler.create(), false);
        await pipeAsync(1, Observable.fromValue(), Observable.flatMapAsync(async (x) => await Promise.resolve(x)), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1]));
    }
    catch (e_27) {
        env_27.error = e_27;
        env_27.hasError = true;
    }
    finally {
        __disposeResources(env_27);
    }
}), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.flatMapAsync(async (x) => await Promise.resolve(x)))), describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], Observable.fromReadonlyArray(), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("maps the incoming value with the inline generator function, with delayed source", pipeLazy([none, none], Observable.fromReadonlyArray({ delay: 2 }), Observable.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), ObservableOperatorWithSideEffectsTests(Observable.flatMapIterable(returns([])))), describe("forEach", test("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.forEach((x) => {
        result[Array_push](x + 10);
    }), Observable.run()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), test("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray({ delay: 3 }), Observable.forEach(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), ObservableOperatorWithSideEffectsTests(Observable.forEach(ignore))), describe("forkMerge", testAsync("with pure src and inner runnables with side-effects", async () => {
    const env_28 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_28, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.forkMerge(Observable.flatMapIterable(_ => [1, 2]), Observable.flatMapIterable(_ => [3, 4])), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]));
    }
    catch (e_28) {
        env_28.error = e_28;
        env_28.hasError = true;
    }
    finally {
        __disposeResources(env_28);
    }
}), testAsync("src with side-effects is only subscribed to once", async () => {
    const env_29 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_29, HostScheduler.create(), false);
        const sideEffect = mockFn();
        const src = pipe(0, Observable.fromValue(), Observable.forEach(sideEffect));
        await pipeAsync(src, Observable.forkMerge(Observable.flatMapIterable(_ => [1, 2, 3]), Observable.flatMapIterable(_ => [4, 5, 6])), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1, 2, 3, 4, 5, 6]));
        pipe(sideEffect, expectToHaveBeenCalledTimes(1));
    }
    catch (e_29) {
        env_29.error = e_29;
        env_29.hasError = true;
    }
    finally {
        __disposeResources(env_29);
    }
})), describe("fromAsyncFactory", testAsync("when promise resolves", async () => {
    const env_30 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_30, HostScheduler.create(), false);
        await pipeAsync(async () => {
            await Promise.resolve(1);
            return 2;
        }, Observable.fromAsyncFactory(), Observable.lastAsync(scheduler), expectEquals(2));
    }
    catch (e_30) {
        env_30.error = e_30;
        env_30.hasError = true;
    }
    finally {
        __disposeResources(env_30);
    }
}), testAsync("when promise fails with an exception", async () => {
    const env_31 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_31, HostScheduler.create(), false);
        await pipe(pipe(async () => {
            await Promise.resolve(1);
            raise();
        }, Observable.fromAsyncFactory(), Observable.lastAsync(scheduler)), expectPromiseToThrow);
    }
    catch (e_31) {
        env_31.error = e_31;
        env_31.hasError = true;
    }
    finally {
        __disposeResources(env_31);
    }
}), testAsync("when factory throws an exception", async () => {
    const env_32 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_32, HostScheduler.create(), false);
        await pipe(pipe(async () => {
            raise();
        }, Observable.fromAsyncFactory(), Observable.lastAsync(scheduler)), expectPromiseToThrow);
    }
    catch (e_32) {
        env_32.error = e_32;
        env_32.hasError = true;
    }
    finally {
        __disposeResources(env_32);
    }
}), testIsDeferredObservableWithSideEffects(pipe(async () => {
    raise();
}, Observable.fromAsyncFactory()))), describe("fromAsyncIterable", testAsync("infinite immediately resolving iterable", async () => {
    const env_33 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_33, HostScheduler.create(), false);
        const result = await pipe((async function* foo() {
            let i = 0;
            while (true) {
                yield i++;
            }
        })(), Observable.fromAsyncIterable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler, { capacity: 5 }));
        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_33) {
        env_33.error = e_33;
        env_33.hasError = true;
    }
    finally {
        __disposeResources(env_33);
    }
}), testAsync("iterable that completes", async () => {
    const env_34 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_34, HostScheduler.create(), false);
        const result = await pipe((async function* foo() {
            yield 1;
            yield 2;
            yield 3;
        })(), Observable.fromAsyncIterable(), Observable.buffer(), Observable.lastAsync(scheduler, { capacity: 1 }));
        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }
    catch (e_34) {
        env_34.error = e_34;
        env_34.hasError = true;
    }
    finally {
        __disposeResources(env_34);
    }
}), testAsync("iterable that throws", pipeLazy(async () => {
    const env_35 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_35, HostScheduler.create(), false);
        const e = error();
        const result = await pipe((async function* foo() {
            throw e;
        })(), Observable.fromAsyncIterable(), Observable.lastAsync(scheduler, { capacity: 1 }));
        pipe(result, expectEquals(e));
    }
    catch (e_35) {
        env_35.error = e_35;
        env_35.hasError = true;
    }
    finally {
        __disposeResources(env_35);
    }
}, expectToThrowAsync)), testIsDeferredObservableWithSideEffects(pipe((async function* foo() {
    let i = 0;
    while (true) {
        yield i++;
    }
})(), Observable.fromAsyncIterable()))), describe("fromEventSource", testIsMulticastObservable(pipe(EventSource.create(ignore), Observable.fromEventSource()))), describe("fromIterable", test("with delay", pipeLazy([9, 9, 9, 9], Observable.fromIterable({ delay: 2 }), Observable.withCurrentTime(t => t), Observable.toReadonlyArray(), expectArrayEquals([0, 2, 4, 6]))), test("with delay and delayed start", pipeLazy([9, 9, 9, 9], Observable.fromIterable({ delay: 2, delayStart: true }), Observable.withCurrentTime(t => t), Observable.toReadonlyArray(), expectArrayEquals([2, 4, 6, 8]))), test("when the iterable throws", pipeLazy(pipeLazy((function* Generator() {
    throw newInstance(Error);
})(), Observable.fromIterable(), Observable.run()), expectToThrow)), testIsRunnableWithSideEffects(pipe((function* Generator() {
    throw newInstance(Error);
})(), Observable.fromIterable()))), describe("fromPromise", testAsync("when the promise resolves", async () => {
    const env_36 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_36, HostScheduler.create(), false);
        await pipeAsync(Promise.resolve(1), Observable.fromPromise(), Observable.lastAsync(scheduler), expectEquals(1));
    }
    catch (e_36) {
        env_36.error = e_36;
        env_36.hasError = true;
    }
    finally {
        __disposeResources(env_36);
    }
}), testAsync("when the promise reject", async () => {
    const env_37 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_37, HostScheduler.create(), false);
        await pipeAsync(pipeAsync(Promise.reject(newInstance(Error)), Observable.fromPromise(), Observable.lastAsync(scheduler)), expectPromiseToThrow);
    }
    catch (e_37) {
        env_37.error = e_37;
        env_37.hasError = true;
    }
    finally {
        __disposeResources(env_37);
    }
}), testIsMulticastObservable(pipe(Promise.resolve(true), Observable.fromPromise()))), describe("fromReadonlyArray", testIsPureRunnable(pipe([], Observable.fromReadonlyArray({ delay: 1 })))), describe("fromStore", test("it publishes the current value and all subsequent values", () => {
    const env_38 = { stack: [], error: void 0, hasError: false };
    try {
        const store = WritableStore.create(-1);
        const vts = __addDisposableResource(env_38, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe(store, Observable.fromStore(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        pipe(Observable.generate(increment, returns(-1), { delay: 3 }), Observable.takeFirst({ count: 3 }), Observable.forEach(x => {
            store[StoreLike_value] = x;
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }
    catch (e_38) {
        env_38.error = e_38;
        env_38.hasError = true;
    }
    finally {
        __disposeResources(env_38);
    }
}), testIsMulticastObservable(pipe(WritableStore.create(-1), Observable.fromStore()))), describe("fromValue", testIsPureRunnable(pipe("a", Observable.fromValue({ delay: 1 })))), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.ignoreElements(), Observable.toReadonlyArray(), expectArrayEquals([]))), PureStatelessObservableOperatorTests(Observable.ignoreElements())), describe("keep", PureStatelessObservableOperatorTests(Observable.keep(alwaysTrue))), describe("keyFrame", test("keyframing from 0 to 10 over a duration of 10 clock clicks", pipeLazy(Observable.keyFrame(10), Observable.map(scale(0, 10)), Observable.toReadonlyArray({
    maxMicroTaskTicks: 1,
}), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))), describe("lastAsync", testAsync("empty source", async () => {
    const env_39 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_39, HostScheduler.create(), false);
        await pipeAsync([], Observable.fromReadonlyArray(), Observable.lastAsync(scheduler), expectIsNone);
    }
    catch (e_39) {
        env_39.error = e_39;
        env_39.hasError = true;
    }
    finally {
        __disposeResources(env_39);
    }
}), testAsync("it returns the last value", async () => {
    const env_40 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_40, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync(scheduler), expectEquals(3));
    }
    catch (e_40) {
        env_40.error = e_40;
        env_40.hasError = true;
    }
    finally {
        __disposeResources(env_40);
    }
})), describe("log", ObservableOperatorWithSideEffectsTests(Observable.log())), describe("map", PureStatelessObservableOperatorTests(Observable.map(returns(none)))), describe("merge", test("validate output runtime type", () => {
    const pureRunnable = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }));
    const runnableWithSideEffects = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.forEach(ignore));
    const deferred = pipe(() => Promise.resolve(1), Observable.fromAsyncFactory());
    const multicast = Subject.create();
    const merged1 = Observable.merge(pureRunnable, runnableWithSideEffects, deferred, multicast);
    expectIsDeferredObservableWithSideEffects(merged1);
    const merged2 = Observable.merge(pureRunnable, multicast);
    expectIsPureDeferredObservable(merged2);
    const merged3 = Observable.merge(pureRunnable, runnableWithSideEffects, deferred, Observable.never());
    expectIsDeferredObservableWithSideEffects(merged3);
    const merged4 = Observable.merge(pureRunnable, runnableWithSideEffects);
    expectIsRunnableWithSideEffects(merged4);
    const merged7 = Observable.merge(pureRunnable, pureRunnable);
    expectIsPureRunnable(merged7);
    const merged8 = Observable.merge(Subject.create(), Subject.create());
    expectIsMulticastObservable(merged8);
}), test("two arrays", pipeLazy(Observable.merge(pipe([0, 2, 3, 5, 6], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", pipeLazy(pipeLazy(Observable.merge(pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2 })), Observable.throws({ delay: 5 })), Observable.run()), expectToThrow))), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([9, 10], Observable.fromReadonlyArray({ delay: 3 })),
], Observable.fromReadonlyArray(), Observable.mergeAll({
    concurrency: 2,
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]))), PureStatefulObservableOperator(Observable.mergeAll()), DeferringObservableOperatorTests(Observable.mergeAll({
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.mergeAll({
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.mergeAll({
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("mergeMany", testIsPureRunnable(Observable.mergeMany([
    Observable.empty({ delay: 1 }),
    Observable.empty({ delay: 1 }),
])), testIsPureDeferredObservable((() => {
    const env_41 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_41, VirtualTimeScheduler.create(), false);
        return Observable.mergeMany([
            pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
            Observable.empty({ delay: 1 }),
        ]);
    }
    catch (e_41) {
        env_41.error = e_41;
        env_41.hasError = true;
    }
    finally {
        __disposeResources(env_41);
    }
})()), testIsRunnableWithSideEffects(Observable.mergeMany([
    pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
    Observable.empty({ delay: 1 }),
])), testIsMulticastObservable(Observable.mergeMany([Subject.create(), Observable.empty()])), testIsPureDeferredObservable(Observable.mergeMany([Subject.create(), Observable.empty({ delay: 1 })])), testIsDeferredObservableWithSideEffects(Observable.mergeMany([
    Observable.create(ignore),
    Subject.create(),
    Observable.empty({ delay: 1 }),
]))), describe("mergeMap", testAsync("without delay, merge all observables as they are produced", async () => {
    const env_42 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_42, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray(), Observable.mergeMap(x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]));
    }
    catch (e_42) {
        env_42.error = e_42;
        env_42.hasError = true;
    }
    finally {
        __disposeResources(env_42);
    }
}), test("without delay, merge all observables as they are produced", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.mergeMap(x => pipe([x, x, x], Observable.fromReadonlyArray()), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]))), PureStatefulObservableOperator(Observable.mergeMap(_ => Observable.empty({ delay: 1 }))), DeferringObservableOperatorTests(Observable.mergeMap(_ => Observable.empty({ delay: 1 }), {
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.mergeMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.mergeMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("mergeWith", PureStatefulObservableOperator(Observable.mergeWith(Observable.empty({ delay: 1 }))), ObservableOperatorWithSideEffectsTests(Observable.mergeWith(pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)))), DeferringObservableOperatorTests((() => {
    const env_43 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_43, VirtualTimeScheduler.create(), false);
        return Observable.mergeWith(pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)));
    }
    catch (e_43) {
        env_43.error = e_43;
        env_43.hasError = true;
    }
    finally {
        __disposeResources(env_43);
    }
})()), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.mergeWith(pipe(() => Promise.resolve(1), Observable.fromAsyncFactory(), Observable.forEach(ignore))))), describe("multicast", testIsMulticastObservable((() => {
    const env_44 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_44, VirtualTimeScheduler.create(), false);
        return pipe(Observable.empty({ delay: 1 }), Observable.multicast(vts));
    }
    catch (e_44) {
        env_44.error = e_44;
        env_44.hasError = true;
    }
    finally {
        __disposeResources(env_44);
    }
})()), test("shared observable zipped with itself, auto disposing", () => {
    const env_45 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_45, VirtualTimeScheduler.create(), false);
        const shared = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.forEach(ignore), Observable.multicast(vts, { replay: 1, autoDispose: true }));
        expectIsMulticastObservable(shared);
        let result = [];
        pipe(Observable.zipLatest(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([2, 4, 6]));
    }
    catch (e_45) {
        env_45.error = e_45;
        env_45.hasError = true;
    }
    finally {
        __disposeResources(env_45);
    }
})), describe("never", testIsMulticastObservable(Observable.never())), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const env_46 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_46, VirtualTimeScheduler.create(), false);
        const disp = mockFn();
        const f = mockFn(disp);
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(vts));
        pipe(disp, expectToHaveBeenCalledTimes(0));
        pipe(f, expectToHaveBeenCalledTimes(1));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disp, expectToHaveBeenCalledTimes(1));
        pipe(f, expectToHaveBeenCalledTimes(1));
    }
    catch (e_46) {
        env_46.error = e_46;
        env_46.hasError = true;
    }
    finally {
        __disposeResources(env_46);
    }
}), test("when callback function throws", () => {
    const env_47 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_47, VirtualTimeScheduler.create(), false);
        const subscription = pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(raise), Observable.subscribe(vts));
        pipe(subscription[DisposableLike_error], expectIsSome);
    }
    catch (e_47) {
        env_47.error = e_47;
        env_47.hasError = true;
    }
    finally {
        __disposeResources(env_47);
    }
}), test("when callback returns a disposable", () => {
    const env_48 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_48, VirtualTimeScheduler.create(), false);
        const disp = Disposable.create();
        const f = mockFn(disp);
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(f), Observable.subscribe(vts));
        expectFalse(disp[DisposableLike_isDisposed]);
        pipe(f, expectToHaveBeenCalledTimes(1));
        vts[VirtualTimeSchedulerLike_run]();
        expectTrue(disp[DisposableLike_isDisposed]);
        expectIsNone(disp[DisposableLike_error]);
        pipe(f, expectToHaveBeenCalledTimes(1));
    }
    catch (e_48) {
        env_48.error = e_48;
        env_48.hasError = true;
    }
    finally {
        __disposeResources(env_48);
    }
}), test("when callback only performs sideeffects", () => {
    const env_49 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_49, VirtualTimeScheduler.create(), false);
        let called = false;
        pipe([1], Observable.fromReadonlyArray(), Observable.onSubscribe(() => {
            called = true;
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        expectTrue(called);
    }
    catch (e_49) {
        env_49.error = e_49;
        env_49.hasError = true;
    }
    finally {
        __disposeResources(env_49);
    }
}), ObservableOperatorWithSideEffectsTests(Observable.onSubscribe(ignore))), describe("pairwise", PureStatefulObservableOperator(Observable.pairwise())), describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 }), Observable.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("repeat", test("when repeating forever.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(), Observable.takeFirst({ count: 8 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times, with delayed source.", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.repeat(3), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when repeating with a predicate with delayed source", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.repeat(lessThan(1)), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray(), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), test("when the repeat function throws with delayed source", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], Observable.fromReadonlyArray({ delay: 3 }), Observable.repeat(_ => {
        throw err;
    }), Observable.toReadonlyArray()), expectToThrowError(err));
}), PureDeferredObservableOperatorWithDeferredObservableBaseTests(Observable.repeat())), describe("retry", test("retrys the container on an exception", pipeLazy(Observable.concat(pipe(Observable.generate(increment, returns(0)), Observable.takeFirst({ count: 3 })), Observable.throws()), Observable.retry(alwaysTrue), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("retrys with the default predicate", pipeLazy(Observable.concat(pipe(Observable.generate(increment, returns(0)), Observable.takeFirst({ count: 3 })), Observable.throws()), Observable.retry(), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when source and the retry predicate throw", pipeLazy(pipeLazy(Observable.throws(), Observable.retry(raise), Observable.toReadonlyArray()), expectToThrow)), PureDeferredObservableOperatorWithDeferredObservableBaseTests(Observable.retry(raise))), describe("scan", PureStatefulObservableOperator(Observable.scan((acc, _) => acc, returns(none)))), describe("scanMany", test("slow source, fast scan function", pipeLazy(Observable.generate(increment, returns(-1), { delay: 10 }), Observable.takeFirst({ count: 10 }), Observable.scanMany((_acc, next) => pipe(next, Observable.fromValue({ delay: 2 })), returns(0)), Observable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), PureStatefulObservableOperator(Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none))), DeferringObservableOperatorTests(Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
    innerType: PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
    innerType: RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
    innerType: DeferredObservableWithSideEffectsType,
}))), describe("skipFirst", PureStatefulObservableOperator(Observable.skipFirst())), describe("spring", testAsync("test with spring", async () => {
    const env_50 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_50, HostScheduler.create(), false);
        await pipeAsync(Observable.spring(), Observable.lastAsync(scheduler), expectEquals(1));
    }
    catch (e_50) {
        env_50.error = e_50;
        env_50.hasError = true;
    }
    finally {
        __disposeResources(env_50);
    }
})), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], Observable.fromReadonlyArray(), Observable.startWith(2, 3, 4), Observable.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1]))), PureStatefulObservableOperator(Observable.startWith(1, 2, 3))), describe("subscribeOn", testIsPureDeferredObservable((() => {
    const env_51 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_51, VirtualTimeScheduler.create(), false);
        return pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts));
    }
    catch (e_51) {
        env_51.error = e_51;
        env_51.hasError = true;
    }
    finally {
        __disposeResources(env_51);
    }
})()), testIsDeferredObservableWithSideEffects((() => {
    const env_52 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_52, VirtualTimeScheduler.create(), false);
        return pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore), Observable.subscribeOn(vts));
    }
    catch (e_52) {
        env_52.error = e_52;
        env_52.hasError = true;
    }
    finally {
        __disposeResources(env_52);
    }
})()), testIsMulticastObservable((() => {
    const env_53 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_53, VirtualTimeScheduler.create(), false);
        return pipe(Subject.create(), Observable.subscribeOn(vts));
    }
    catch (e_53) {
        env_53.error = e_53;
        env_53.hasError = true;
    }
    finally {
        __disposeResources(env_53);
    }
})())), describe("switchAll", test("with empty source", pipeLazy(Observable.empty({ delay: 1 }), Observable.switchAll({
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([]))), PureStatefulObservableOperator(Observable.switchAll()), DeferringObservableOperatorTests(Observable.switchAll({
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.switchAll({
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.switchAll({
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("switchMap", test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray()), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("only produce the last observable", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.switchMap(x => pipe([x, x, x], Observable.fromReadonlyArray({
    delay: 1,
    delayStart: true,
})), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([3, 3, 3]))), test("overlapping notification", pipeLazy([none, none, none], Observable.fromReadonlyArray({ delay: 4 }), Observable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))), test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray()), {
    innerType: Observable.PureRunnableType,
}), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), PureStatefulObservableOperator(Observable.switchMap(_ => Observable.empty({ delay: 1 }))), DeferringObservableOperatorTests(Observable.switchMap(_ => Observable.empty({ delay: 1 }), {
    innerType: Observable.PureDeferredObservableType,
})), ObservableOperatorWithSideEffectsTests(Observable.switchMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.RunnableWithSideEffectsType,
})), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.switchMap(_ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), {
    innerType: Observable.DeferredObservableWithSideEffectsType,
}))), describe("takeFirst", PureStatefulObservableOperator(Observable.takeFirst())), describe("takeLast", test("with default count", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray(), Observable.takeLast(), Observable.toReadonlyArray(), expectArrayEquals([5]))), test("when count is 0", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray(), 
// Some implementations special case this
Observable.takeLast({ count: 0 }), Observable.toReadonlyArray(), expectArrayEquals([]))), test("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray(), Observable.takeLast({ count: 3 }), Observable.toReadonlyArray(), expectArrayEquals([3, 4, 5]))), test("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray(), Observable.takeLast({ count: 10 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("with default count", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray(), Observable.takeLast(), Observable.toReadonlyArray(), expectArrayEquals([5]))), PureStatefulObservableOperator(Observable.takeLast())), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 1 }), Observable.takeUntil(pipe([1], Observable.fromReadonlyArray({ delay: 3, delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), PureStatefulObservableOperator(Observable.takeUntil(Observable.empty({ delay: 1 }))), ObservableOperatorWithSideEffectsTests(Observable.takeUntil(pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)))), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.takeUntil(pipe(() => Promise.resolve(1), Observable.fromAsyncFactory(), Observable.forEach(ignore)))), DeferringObservableOperatorTests(Observable.takeUntil(Subject.create()))), describe("takeWhile", PureStatefulObservableOperator(Observable.takeWhile(alwaysTrue))), describe("throttle", test("first", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 100 }), Observable.throttle(50, { mode: "first" }), Observable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))), PureStatefulObservableOperator(Observable.throttle(1))), describe("throws", testIsPureRunnable(Observable.throws())), describe("throwIfEmpty", test("when source is empty", () => {
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
}), test("when source is not empty", pipeLazy([1], Observable.fromReadonlyArray(), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1]))), test("when source is not empty with delay", pipeLazy([1], Observable.fromReadonlyArray({ delay: 1 }), Observable.throwIfEmpty(returns(none)), Observable.toReadonlyArray(), expectArrayEquals([1]))), PureStatefulObservableOperator(Observable.throwIfEmpty(() => newInstance(Error)))), describe("toEventSource", test("when the source completes without error", () => {
    const env_54 = { stack: [], error: void 0, hasError: false };
    try {
        const result = [];
        const vts = __addDisposableResource(env_54, VirtualTimeScheduler.create(), false);
        pipe([0, 1, 2], Observable.fromReadonlyArray(), Observable.toEventSource(vts), EventSource.addEventHandler(bindMethod(result, Array_push)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 1, 2]));
    }
    catch (e_54) {
        env_54.error = e_54;
        env_54.hasError = true;
    }
    finally {
        __disposeResources(env_54);
    }
})), describe("toReadonlyArrayAsync", testAsync("with pure delayed source", async () => {
    const env_55 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_55, HostScheduler.create(), false);
        await pipeAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 }), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([1, 2, 3]));
    }
    catch (e_55) {
        env_55.error = e_55;
        env_55.hasError = true;
    }
    finally {
        __disposeResources(env_55);
    }
}), testAsync("with empty non-runnable source", async () => {
    const env_56 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_56, HostScheduler.create(), false);
        await pipeAsync(EventSource.create(l => l[DisposableLike_dispose]()), Observable.fromEventSource(), Observable.toReadonlyArrayAsync(scheduler), expectArrayEquals([]));
    }
    catch (e_56) {
        env_56.error = e_56;
        env_56.hasError = true;
    }
    finally {
        __disposeResources(env_56);
    }
})), describe("withCurrentTime", PureStatefulObservableOperator(Observable.withCurrentTime(returns))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), (tuple)), Observable.toReadonlyArray(), expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], { valuesEquality: arrayEquality() }))), test("when latest produces no values", pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.empty({ delay: 0 }), returns(1)), Observable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.throws({ raise: returns(error) }), returns(1)), Observable.run()), expectToThrowError(error));
}), PureStatefulObservableOperator(Observable.withLatestFrom(Observable.empty({ delay: 1 }), returns)), ObservableOperatorWithSideEffectsTests(Observable.withLatestFrom(pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)), returns)), AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(Observable.withLatestFrom(pipe(() => Promise.resolve(1), Observable.fromAsyncFactory(), Observable.forEach(ignore)), returns)), DeferringObservableOperatorTests(Observable.withLatestFrom(Subject.create(), returns))), describe("zipLatest", test("zip two delayed observable", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.map(([a, b]) => a + b), Observable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))), testIsPureRunnable(Observable.zipLatest(Observable.empty({ delay: 1 }), Observable.empty({ delay: 1 }))), testIsPureDeferredObservable((() => {
    const env_57 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_57, VirtualTimeScheduler.create(), false);
        return Observable.zipLatest(pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)), Observable.empty({ delay: 1 }));
    }
    catch (e_57) {
        env_57.error = e_57;
        env_57.hasError = true;
    }
    finally {
        __disposeResources(env_57);
    }
})()), testIsRunnableWithSideEffects(Observable.zipLatest(Observable.empty({ delay: 1 }), pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)))), testIsPureDeferredObservable(Observable.zipLatest(Observable.empty({ delay: 1 }), Subject.create())), testIsDeferredObservableWithSideEffects(Observable.zipLatest(pipe(async () => {
    throw new Error();
}, Observable.fromAsyncFactory()), Observable.empty({ delay: 1 }), pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore))))));
((_) => { })(Observable);
