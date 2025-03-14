/// <reference types="./PauseableEventSource.test.d.ts" />

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
import { describe, expectArrayEquals, expectIsNone, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { StreamableLike_stream } from "../../computations.js";
import { bindMethod, pipe, returns } from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_error, DisposableLike_isDisposed, ThrowBackpressureStrategy, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as PauseableEventSource from "../PauseableEventSource.js";
import * as Streamable from "../Streamable.js";
testModule("PauseableEventSource", describe("enqueue", test("a pauseable observable enqueueing into a stream with backpressure", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const dest = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        });
        const enqueueSubscription = pipe(Observable.generate(increment, returns(-1), {
            delay: 1,
            delayStart: true,
        }), Observable.takeFirst({ count: 5 }), Observable.toPauseableEventSource(vts), PauseableEventSource.enqueue(dest));
        const result = [];
        pipe(dest, Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(enqueueSubscription[DisposableLike_isDisposed], expectTrue());
        pipe(enqueueSubscription[DisposableLike_error], expectIsNone);
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
((_) => { })(PauseableEventSource);
