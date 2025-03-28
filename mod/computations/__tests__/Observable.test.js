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
import { describe, expectArrayEquals, expectToThrowError, test, testModule, } from "../../__internal__/testing.js";
import { arrayEquality, newInstance, pipe, pipeLazy, returns, tuple, } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../utils.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(Observable);
testModule("Observable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m), ConcurrentReactiveComputationModuleTests(m), describe("takeUntil", 
// Ideally these tests would be part of SequentialReactiveComputationModuleTests
// but writing dependable tests that use real time is slow at best and ripe for
// flakiness. The implementation is shared so only test using Observable.
test("takes until the notifier notifies its first notification", pipeLazy([10, 20, 30, 40, 50], Computation.fromReadonlyArray(m)({ delay: 2 }), Observable.takeUntil(pipe([1], Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true }))), Computation.toReadonlyArray(m)(), expectArrayEquals([10, 20])))), describe("withLatestFrom", 
// Ideally these tests would be part of SequentialReactiveComputationModuleTests
// but writing dependable tests that use real time is slow at best and ripe for
// flakiness. The implementation is shared so only test using Observable.
test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 }))), Computation.toReadonlyArray(m)(), expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
    valuesEquality: arrayEquality(),
}))), test("when latest produces no values", pipeLazy([0], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(Computation.empty(m)(), returns(1)), Computation.toReadonlyArray(m)(), expectArrayEquals([]))), test("when latest throws", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const result = pipe([0], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(Computation.raise(m)({
            raise: returns(error),
        }), returns(1)), Computation.subscribe(m)({ scheduler: vts }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(pipeLazy(result, Disposable.raiseIfDisposedWithError), expectToThrowError(error));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("with selector", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })), (x, y) => x + y), Computation.toReadonlyArray(m)(), expectArrayEquals([0, 1, 3, 4])))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
