/// <reference types="./VirtualTimeScheduler.test.d.ts" />

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
import { Array_push } from "../../__internal__/constants.js";
import { expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { pipe } from "../../functions.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("VirtualTimeScheduler", test("non-nested, non-delayed continuations", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const result = [];
        vts[SchedulerLike_schedule](() => {
            result[Array_push](0);
        });
        vts[SchedulerLike_schedule](() => {
            result[Array_push](1);
        });
        vts[SchedulerLike_schedule](() => {
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
        let i = 0;
        vts[SchedulerLike_schedule](ctx => {
            while (i < 10) {
                result[Array_push](i);
                i++;
                ctx[ContinuationContextLike_yield]();
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
        let i = 0;
        vts[SchedulerLike_schedule]((ctx) => {
            let j = 100;
            while (i <= 4) {
                result[Array_push](i);
                i++;
                vts[SchedulerLike_schedule]((ctx) => {
                    while (j < 102) {
                        result[Array_push](j);
                        j++;
                        ctx[ContinuationContextLike_yield]();
                    }
                });
                ctx[ContinuationContextLike_yield]();
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
        vts[SchedulerLike_schedule](() => {
            let j = 0;
            vts[SchedulerLike_schedule]((ctx) => {
                while (j < 4) {
                    result[Array_push](j);
                    j++;
                    ctx[ContinuationContextLike_yield]();
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
        let i = 0;
        vts[SchedulerLike_schedule]((ctx) => {
            let j = 100;
            while (i < 4) {
                result[Array_push](i);
                i++;
                vts[SchedulerLike_schedule]((ctx) => {
                    while (j < 102) {
                        result[Array_push](j);
                        j++;
                        ctx[ContinuationContextLike_yield]();
                    }
                });
                ctx[ContinuationContextLike_yield]();
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
}));
