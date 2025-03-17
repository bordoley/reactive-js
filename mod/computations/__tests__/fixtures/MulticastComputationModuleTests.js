/// <reference types="./MulticastComputationModuleTests.d.ts" />

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
import { describe, expectEquals, expectToThrowAsync, testAsync, } from "../../../__internal__/testing.js";
import * as Observable from "../../../computations/Observable.js";
import { newInstance, pipe, pipeAsync } from "../../../functions.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
const MulticastedComputationModuleTests = (m) => {
    return describe("MulticastComputationModule", describe("fromPromise", testAsync("when the promise resolves", async () => {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
            const promise = Promise.resolve(1);
            await pipeAsync(promise, m.fromPromise(), m.toObservable(), Observable.lastAsync({ scheduler }), expectEquals(1));
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }), testAsync("when the promise reject", async () => {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
            const error = newInstance(Error);
            const promise = Promise.reject(error);
            await expectToThrowAsync(() => pipe(promise, m.fromPromise(), m.toObservable(), Observable.lastAsync({ scheduler })));
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            __disposeResources(env_2);
        }
    }), ComputationTest.isMulticastedAndNotDisposable(pipe(Promise.resolve(true), m.fromPromise()))), describe("never", ComputationTest.isMulticasted(m.never())));
};
export default MulticastedComputationModuleTests;
