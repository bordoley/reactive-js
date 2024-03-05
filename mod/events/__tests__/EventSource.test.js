/// <reference types="./EventSource.test.d.ts" />

var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
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
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectIsSome, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import PureStatelessComputationModuleTests from "../../computations/__tests__/fixtures/PureStatelessComputationModuleTests.js";
import * as Observable from "../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../concurrent/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../concurrent.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../events.js";
import { bind, compose, ignore, isSome, newInstance, none, pick, pipe, pipeLazy, raise, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";
testModule("EventSource", PureStatelessComputationModuleTests(EventSource, () => (arr) => ({
    [EventSourceLike_addEventListener](listener) {
        for (let i = 0; i < arr[Array_length]; i++) {
            listener[EventListenerLike_notify](arr[i]);
        }
        listener[DisposableLike_dispose]();
    },
}), () => (eventSource) => {
    const result = [];
    const subscription = pipe(eventSource, EventSource.addEventHandler(bind(Array.prototype[Array_push], result)));
    if (isSome(subscription[DisposableLike_error])) {
        throw subscription[DisposableLike_error];
    }
    return result;
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
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const result = [];
        const [ev1, ev2, ev3] = pipe([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), Observable.toEventSource(vts))));
        pipe(EventSource.merge(ev1, ev2, ev3), EventSource.addEventHandler(bind(Array.prototype[Array_push], result)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
})), describe("mergeWith", test("with source that have different delays", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const result = [];
        const [ev1, ev2] = pipe([
            [1, 3, 5],
            [2, 4, 6],
        ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), Observable.toEventSource(vts))));
        pipe(ev1, EventSource.mergeWith(ev2), EventSource.addEventHandler(bind(Array.prototype[Array_push], result)));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
})));
((_) => { })(EventSource);
