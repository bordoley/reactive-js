/// <reference types="./EventSource.test.d.ts" />

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
import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectIsSome, expectToThrowError, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import ComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, Computation_multicastOfT, } from "../../computations.js";
import * as Observable from "../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../concurrent/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../concurrent.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../events.js";
import { arrayEquality, bind, bindMethod, compose, ignore, incrementBy, isSome, newInstance, none, pick, pipe, pipeLazy, raise, returns, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";
const EventSourceTypes = {
    [Computation_multicastOfT]: EventSource.never(),
};
testModule("EventSource", ComputationModuleTests({
    ...EventSource,
    fromReadonlyArray() {
        return (arr) => ({
            [ComputationLike_isDeferred]: false,
            [ComputationLike_isSynchronous]: false,
            [EventSourceLike_addEventListener](listener) {
                for (let i = 0; i < arr[Array_length]; i++) {
                    listener[EventListenerLike_notify](arr[i]);
                }
                listener[DisposableLike_dispose]();
            },
        });
    },
    toReadonlyArray() {
        return (eventSource) => {
            const result = [];
            const subscription = pipe(eventSource, EventSource.addEventHandler(bindMethod(result, Array_push)));
            if (isSome(subscription[DisposableLike_error])) {
                throw subscription[DisposableLike_error];
            }
            return result;
        };
    },
}, EventSourceTypes), test("combineLatest", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe(EventSource.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 }), Observable.toEventSource(vts)), pipe(Observable.generate(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }), Observable.toEventSource(vts))), EventSource.addEventHandler(bind(result.push, result)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], {
            valuesEquality: arrayEquality(),
        }));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), describe("create", test("when the setup function throws", pipeLazy(EventSource.create(_ => raise()), EventSource.addEventHandler(ignore), pick(DisposableLike_error), expectIsSome))), describe("fromPromise", testAsync("when the promise resolves", async () => {
    const promise = Promise.resolve(1);
    let result = none;
    pipe(promise, EventSource.fromPromise(), EventSource.addEventHandler(e => {
        result = e;
    }));
    await promise;
    pipe(result, expectEquals(1));
}), testAsync("when the promise reject", async () => {
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    const subscription = pipe(promise, EventSource.fromPromise(), EventSource.addEventHandler(ignore));
    try {
        await promise;
    }
    catch (e) { }
    pipe(subscription[DisposableLike_error], expectEquals(error));
})), describe("merge", test("with source that have different delays", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const result = [];
        const [ev1, ev2, ev3] = pipe([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), Observable.toEventSource(vts))));
        pipe(EventSource.merge(ev1, ev2, ev3), EventSource.addEventHandler(bindMethod(result, Array_push)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
})), describe("withLatestFrom", test("when source and latest are interlaced", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.toEventSource(vts), EventSource.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), Observable.toEventSource(vts))), EventSource.addEventHandler(bind(result.push, result)));
        vts[VirtualTimeSchedulerLike_run]();
        expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
            valuesEquality: arrayEquality(),
        })(result);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("when latest produces no values", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.toEventSource(vts), EventSource.withLatestFrom(pipe(Observable.empty({ delay: 0 }), Observable.toEventSource(vts)), returns(1)), EventSource.addEventHandler(bind(result.push, result)));
        vts[VirtualTimeSchedulerLike_run]();
        expectArrayEquals([])(result);
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), test("when latest throws", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const result = pipe([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.toEventSource(vts), EventSource.withLatestFrom(pipe(Observable.raise({ raise: returns(error) }), Observable.toEventSource(vts)), returns(1)), EventSource.addEventHandler(ignore));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(pipeLazy(result, Disposable.raiseIfDisposedWithError), expectToThrowError(error));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
})), describe("zipLatest", test("zip two delayed observable", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        const result = [];
        pipe(EventSource.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true }), Observable.toEventSource(vts)), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }), Observable.toEventSource(vts))), EventSource.map(([a, b]) => a + b), EventSource.addEventHandler(bind(result.push, result)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([2, 5, 8, 11]));
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
})));
((_) => { })(EventSource);
