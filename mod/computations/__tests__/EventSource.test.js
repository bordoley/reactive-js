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
import { Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectIsNone, expectIsSome, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { Computation_multicastOfT, ProducerLike_consume, StreamableLike_stream, } from "../../computations.js";
import { bindMethod, ignore, invoke, pick, pipe, pipeLazy, raise, returns, } from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_error, DisposableLike_isDisposed, ThrowBackpressureStrategy, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import MulticastedComputationModuleTests from "./fixtures/MulticastComputationModuleTests.js";
const EventSourceTypes = {
    [Computation_multicastOfT]: EventSource.never(),
};
testModule("EventSource", ComputationModuleTests(EventSource, EventSourceTypes), ConcurrentReactiveComputationModuleTests(EventSource, EventSourceTypes), MulticastedComputationModuleTests(EventSource), describe("create", test("when the setup function throws", pipeLazy(EventSource.create(_ => raise()), EventSource.addEventHandler(ignore), pick(DisposableLike_error), expectIsSome))), describe("createPauseable", test("a pauseable observable enqueueing into a stream with backpressure", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const dest = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        });
        pipe(Computation.generate(Observable)(increment, returns(-1), { delay: 1, delayStart: true }), Observable.takeFirst({ count: 5 }), Observable.toPauseableEventSource(vts), EventSource.toProducer(), invoke(ProducerLike_consume, dest));
        const result = [];
        pipe(dest, Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(dest[DisposableLike_isDisposed], expectTrue());
        pipe(dest[DisposableLike_error], expectIsNone);
        pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
})));
((_) => { })(EventSource);
