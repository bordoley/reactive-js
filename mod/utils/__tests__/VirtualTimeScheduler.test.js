/// <reference types="./VirtualTimeScheduler.test.d.ts" />

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
import { expectArrayEquals, expectEquals, expectIsNone, expectIsSome, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { pipe, raise } from "../../functions.js";
import { DisposableLike_error, DisposableLike_isDisposed, SchedulerLike_requestYield, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, delayMs, } from "../../utils.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("VirtualTimeScheduler", test("non-nested, non-delayed continuations", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const result = [];
        vts[SchedulerLike_schedule](function* () {
            result[Array_push](0);
        });
        vts[SchedulerLike_schedule](function* () {
            result[Array_push](1);
        });
        vts[SchedulerLike_schedule](function* () {
            result[Array_push](2);
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 1, 2]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("non-nested, yielding continuation", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        const result = [];
        vts[SchedulerLike_schedule](function* () {
            for (let i = 0; i < 10; i++) {
                result[Array_push](i);
                yield;
            }
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("nested, yielding continuation", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        const result = [];
        vts[SchedulerLike_schedule](function* () {
            for (let i = 0; i <= 4; i++) {
                result[Array_push](i);
                vts[SchedulerLike_schedule](function* () {
                    for (let j = 100; j < 102; j++) {
                        result[Array_push](j);
                        yield;
                    }
                });
                yield;
            }
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([
            0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101, 4, 100, 101,
        ]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("nested continuation, rescheduled on scheduler", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        const result = [];
        vts[SchedulerLike_schedule](function* () {
            vts[SchedulerLike_schedule](function* () {
                for (let j = 0; j < 4; j++) {
                    result[Array_push](j);
                    yield;
                }
            });
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 1, 2, 3]));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), test("root scheduler yields with delay, children rescheduled on root scheduler", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        const result = [];
        vts[SchedulerLike_schedule](function* () {
            for (let i = 0; i < 4; i++) {
                result[Array_push](i);
                vts[SchedulerLike_schedule](function* () {
                    for (let j = 100; j < 102; j++) {
                        result[Array_push](j);
                        yield;
                    }
                });
                yield;
            }
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101]));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("when continuation throws an exception", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        const disposable = vts[SchedulerLike_schedule](function* () {
            raise("throwing");
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(disposable[DisposableLike_error], expectIsSome);
        pipe(vts[DisposableLike_error], expectIsNone);
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
}), test("scheduling a continuation after being disposed does nothing.", () => {
    const env_7 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_7, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        vts[VirtualTimeSchedulerLike_run]();
        const disposable = vts[SchedulerLike_schedule](function* () { });
        pipe(disposable[DisposableLike_isDisposed], expectTrue("scheduled continuation should be immediately disposed"));
        pipe(disposable[DisposableLike_error], expectIsNone);
    }
    catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
    }
    finally {
        __disposeResources(env_7);
    }
}), test("requesting yield", () => {
    const env_8 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_8, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 100,
        }), false);
        let runCount = 0;
        vts[SchedulerLike_schedule](function* () {
            vts[SchedulerLike_requestYield]();
            if (runCount < 1) {
                runCount++;
                yield;
            }
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(runCount, expectEquals(1));
    }
    catch (e_8) {
        env_8.error = e_8;
        env_8.hasError = true;
    }
    finally {
        __disposeResources(env_8);
    }
}), test("with multiple delayed continuations with same delay", () => {
    const env_9 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_9, VirtualTimeScheduler.create({
            maxMicroTaskTicks: 1,
        }), false);
        let count = 0;
        vts[SchedulerLike_schedule](function* () {
            yield delayMs(1);
            count++;
        });
        vts[SchedulerLike_schedule](function* () {
            yield delayMs(1);
            count++;
        });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(count, expectEquals(2));
    }
    catch (e_9) {
        env_9.error = e_9;
        env_9.hasError = true;
    }
    finally {
        __disposeResources(env_9);
    }
}))();
