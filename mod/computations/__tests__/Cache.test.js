/// <reference types="./Cache.test.d.ts" />

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
import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import * as Cache from "../../computations/Cache.js";
import * as Observable from "../../computations/Observable.js";
import { bindMethod, none, pipe, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_dispose, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../utils.js";
testModule("Cache", describe("inMemory", test("it publishes none on subscribe when the key is missing", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const cache = Cache.create(vts, { maxEntries: 1 });
        const result = [];
        pipe([
            tuple(2, () => {
                pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            }),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([none]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("explicitly deleting a key", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const cache = Cache.create(vts, { maxEntries: 1 });
        const result = [];
        pipe([
            tuple(0, () => Cache.set(cache, "abc", 1)),
            tuple(1, () => Cache.removeMany(cache, ["abc"])),
            tuple(2, () => {
                pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            }),
            tuple(3, () => Cache.set(cache, "abc", 2)),
            tuple(4, () => Cache.remove(cache, "abc")),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([none, 2, none]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("integration test", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const cache = Cache.create(vts);
        const result1 = [];
        const abcSubscription1 = pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result1, Array_push)), Observable.subscribe(vts));
        const result2 = [];
        let abcSubscription2 = Disposable.disposed;
        const result3 = [];
        let abcSubscription3 = Disposable.disposed;
        pipe([
            tuple(1, () => Cache.set(cache, "abc", 1)),
            tuple(2, () => {
                abcSubscription2 = pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result2, Array_push)), Observable.subscribe(vts));
            }),
            tuple(3, () => Cache.set(cache, "abc", 2)),
            tuple(4, () => {
                abcSubscription2[DisposableLike_dispose]();
            }),
            tuple(4, () => Cache.setMany(cache, { abc: 2, def: 0 })),
            tuple(5, () => Cache.set(cache, "abc", 3)),
            tuple(6, () => {
                abcSubscription1[DisposableLike_dispose]();
            }),
            tuple(7, () => Cache.set(cache, "abc", 3)),
            tuple(8, () => {
                abcSubscription3 = pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result3, Array_push)), Observable.subscribe(vts));
            }),
            tuple(9, () => {
                abcSubscription3[DisposableLike_dispose]();
            }),
            tuple(10, () => Cache.setMany(cache, {
                abc: 3,
                def: 1,
                ghi: 2,
            })),
        ], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result1, expectArrayEquals([none, 1, 2, 3]));
        pipe(result2, expectArrayEquals([1, 2]));
        pipe(result3, expectArrayEquals([3]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
})), describe("persistent", test("integration test", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const store = {
            abc: 1,
            def: 2,
        };
        const persistentStore = {
            load: (_) => pipe({ ...store }, Observable.fromValue()),
            store: (updates) => pipe(Observable.empty(), Observable.onSubscribe(() => {
                pipe(updates, ReadonlyObjectMap.forEach((v, k) => {
                    store[k] = v;
                }));
            })),
        };
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const cache = Cache.create(vts, { persistentStore, maxEntries: 1 });
        const result1 = [];
        pipe(Cache.get(cache, "abc"), Observable.forEach(bindMethod(result1, Array_push)), Observable.subscribe(vts));
        pipe([[2, () => Cache.setMany(cache, { abc: 4, hgi: 6 })]], ReadonlyArray.forEach(([time, f]) => {
            vts[SchedulerLike_schedule](f, { delay: time });
        }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result1, expectArrayEquals([1, 4]));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
})));
((_) => { })(Cache);
