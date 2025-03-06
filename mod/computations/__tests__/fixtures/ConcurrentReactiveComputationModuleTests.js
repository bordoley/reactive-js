/// <reference types="./ConcurrentReactiveComputationModuleTests.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectToThrowAsync, test, testAsync, } from "../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../../concurrent/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run, } from "../../../concurrent.js";
import { arrayEquality, bind, incrementBy, isSome, newInstance, none, pipe, returns, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
const ConcurrentReactiveComputationModuleTests = (m, computationType) => {
    const { [Computation_pureSynchronousOfT]: pureSynchronousComputationOfT, [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT, [Computation_pureDeferredOfT]: pureDeferredOfT, [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT, [Computation_multicastOfT]: multicastOfT, } = computationType;
    return describe("ConcurrentReactiveComputationModule", describe("combineLatest", test("combineLatest from two interspersing sources", () => {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe(m.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 }), m.fromObservable(vts)), pipe(Observable.generate(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }), m.fromObservable(vts))), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
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
    }), ...pipe([
        pureSynchronousComputationOfT &&
            ComputationTest.isPureSynchronous(m.combineLatest(pureSynchronousComputationOfT, pureSynchronousComputationOfT), " when all inputs are pureSynchronous"),
        pureSynchronousComputationOfT &&
            synchronousWithSideEffectsOfT &&
            ComputationTest.isSynchronousWithSideEffects(m.combineLatest(pureSynchronousComputationOfT, synchronousWithSideEffectsOfT), " when combining pureSynchronous and synchronousWithSideEffects inputs"),
        synchronousWithSideEffectsOfT &&
            ComputationTest.isSynchronousWithSideEffects(m.combineLatest(synchronousWithSideEffectsOfT, synchronousWithSideEffectsOfT), " when all inputs are synchronousWithSideEffects"),
        pureDeferredOfT &&
            ComputationTest.isPureDeferred(m.combineLatest(pureDeferredOfT, pureDeferredOfT), " when all inputs are PureDeferred"),
        pureSynchronousComputationOfT &&
            pureDeferredOfT &&
            ComputationTest.isPureDeferred(m.combineLatest(pureSynchronousComputationOfT, pureDeferredOfT), " when combining pureSynchronous and pureDeferred inputs"),
        multicastOfT &&
            pureDeferredOfT &&
            ComputationTest.isPureDeferred(m.combineLatest(multicastOfT, pureDeferredOfT), " when combining pureDeferred and multicast inputs"),
        pureDeferredOfT &&
            deferredWithSideEffectsOfT &&
            multicastOfT &&
            ComputationTest.isDeferredWithSideEffects(m.combineLatest(pureDeferredOfT, deferredWithSideEffectsOfT, multicastOfT), " when combining multicast, pureDeferred and deferredithSideEffect inputs"),
        multicastOfT &&
            ComputationTest.isMulticasted(m.combineLatest(multicastOfT, multicastOfT, multicastOfT), " when coming multicast inputs"),
    ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray())), describe("fromPromise", testAsync("when the promise resolves", async () => {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
            const promise = Promise.resolve(1);
            let result = none;
            await pipe(promise, m.fromPromise(), m.toObservable(), Observable.forEach(e => {
                result = e;
            }), Observable.lastAsync(scheduler));
            pipe(result, expectEquals(1));
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            __disposeResources(env_2);
        }
    }), testAsync("when the promise reject", async () => {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
            const error = newInstance(Error);
            const promise = Promise.reject(error);
            await expectToThrowAsync(() => pipe(promise, m.fromPromise(), m.toObservable(), Observable.lastAsync(scheduler)));
        }
        catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    }), ComputationTest.isMulticasted(pipe(Promise.resolve(true), m.fromPromise()))));
};
export default ConcurrentReactiveComputationModuleTests;
