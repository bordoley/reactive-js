/// <reference types="./PauseableScheduler.test.d.ts" />

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
import { expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { PauseableLike_resume, SchedulerLike_now, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import * as PauseableScheduler from "../PauseableScheduler.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("PauseableScheduler", test("with disposed continuations", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const pauseableScheduler = __addDisposableResource(env_1, PauseableScheduler.create(vts), false);
        let result = [];
        pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](0);
        });
        const s1 = pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](1);
        });
        const s2 = pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](2);
        });
        pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](3);
        });
        pauseableScheduler[PauseableLike_resume]();
        s1[DisposableLike_dispose]();
        s2[DisposableLike_dispose]();
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 3]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("with delayed continuations", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const pauseableScheduler = __addDisposableResource(env_2, PauseableScheduler.create(vts), false);
        let result = [];
        pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](pauseableScheduler[SchedulerLike_now]);
        }, { delay: 3 });
        pauseableScheduler[SchedulerLike_schedule](() => {
            result[Array_push](pauseableScheduler[SchedulerLike_now]);
        }, { delay: 5 });
        pauseableScheduler[PauseableLike_resume]();
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([3, 5]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}));
