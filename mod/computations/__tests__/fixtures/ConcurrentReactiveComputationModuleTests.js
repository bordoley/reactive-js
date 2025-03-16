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
import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectToThrow, expectToThrowAsync, expectToThrowError, test, testAsync, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Observable from "../../../computations/Observable.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import { arrayEquality, bind, bindMethod, compose, newInstance, pipe, pipeAsync, pipeLazy, returns, tuple, } from "../../../functions.js";
import { incrementBy } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests from "./operators/AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests.js";
import ComputationOperatorWithSideEffectsTests from "./operators/ComputationOperatorWithSideEffectsTests.js";
import StatefulAsynchronousComputationOperatorTests from "./operators/StatefulAsynchronousComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessAsynchronousComputationOperatorTests from "./operators/StatelessAsynchronousComputationOperatorTests.js";
const ConcurrentReactiveComputationModuleTests = (m, computations) => {
    const { [Computation_pureSynchronousOfT]: pureSynchronousOfT, [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT, [Computation_pureDeferredOfT]: pureDeferredOfT, [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT, [Computation_multicastOfT]: multicastOfT, } = computations;
    return describe("ConcurrentReactiveComputationModule", describe("combineLatest", testAsync("combineLatest from two interspersing sources", async () => {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
            await pipeAsync(m.combineLatest(pipe(Computation.generate(Observable)(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 }), m.fromObservable(scheduler)), pipe(Computation.generate(Observable)(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }), m.fromObservable(scheduler))), m.toReadonlyArrayAsync({ scheduler }), expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], {
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
    })), describe("forkMerge", testAsync("with pure src and inner runnables with side-effects", async () => {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
            await pipeAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(scheduler), m.forkMerge(_ => pipe(Promise.resolve(1), m.fromPromise()), _ => pipe(Promise.resolve(2), m.fromPromise())), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2]));
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            __disposeResources(env_2);
        }
    }), test("with pure src and inner runnables with side-effects", () => {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
            const result = [];
            pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts), m.forkMerge(_ => pipe([1, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts)), _ => pipe([2, 4], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts))), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(result, expectArrayEquals([1, 2, 3, 4]));
        }
        catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    })), describe("fromPromise", testAsync("when the promise resolves", async () => {
        const env_4 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_4, HostScheduler.create(), false);
            const promise = Promise.resolve(1);
            await pipeAsync(promise, m.fromPromise(), m.toObservable(), Observable.lastAsync({ scheduler }), expectEquals(1));
        }
        catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        }
        finally {
            __disposeResources(env_4);
        }
    }), testAsync("when the promise reject", async () => {
        const env_5 = { stack: [], error: void 0, hasError: false };
        try {
            const scheduler = __addDisposableResource(env_5, HostScheduler.create(), false);
            const error = newInstance(Error);
            const promise = Promise.reject(error);
            await expectToThrowAsync(() => pipe(promise, m.fromPromise(), m.toObservable(), Observable.lastAsync({ scheduler })));
        }
        catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        }
        finally {
            __disposeResources(env_5);
        }
    }), ComputationTest.isMulticastedAndNotDisposable(pipe(Promise.resolve(true), m.fromPromise()))), describe("merge", test("with sources that have the same delays", () => {
        const env_6 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
            const result = [];
            const [ev1, ev2, ev3] = pipe([
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
            ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), m.fromObservable(vts))));
            pipe(m.merge(ev1, ev2, ev3), m.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        }
        catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        }
        finally {
            __disposeResources(env_6);
        }
    }), test("with sources that have the different delays", () => {
        const env_7 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_7, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe(m.merge(pipe([0, 2, 3, 5, 6], Observable.fromReadonlyArray({ delay: 1, delayStart: true }), m.fromObservable(vts)), pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2, delayStart: true }), m.fromObservable(vts))), m.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]));
        }
        catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        }
        finally {
            __disposeResources(env_7);
        }
    }), test("when one source throws", () => {
        const env_8 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_8, VirtualTimeScheduler.create(), false);
            const subscription = pipe(m.merge(pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2 }), m.fromObservable(vts)), pipe(Observable.raise({ delay: 5 }), m.fromObservable(vts))), m.toObservable(), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(pipeLazy(subscription, Disposable.raiseIfDisposedWithError), expectToThrow);
        }
        catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        }
        finally {
            __disposeResources(env_8);
        }
    }), test("merging merged sources", () => {
        const env_9 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_9, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe(m.merge(m.merge(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts)), pipe(Observable.empty({ delay: 3 }), Computation.concatWith(Observable)(pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 }))), m.fromObservable(vts)), m.merge(pipe(Observable.empty({ delay: 6 }), Computation.concatWith(Observable)(pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 1 }))), m.fromObservable(vts)), pipe(Observable.empty({ delay: 9 }), Computation.concatWith(Observable)(pipe([10, 11, 12], Observable.fromReadonlyArray({ delay: 1 }))), m.fromObservable(vts))))), m.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
        }
        catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        }
        finally {
            __disposeResources(env_9);
        }
    }), pureSynchronousOfT &&
        ComputationTest.isPureSynchronous(m.merge(pureSynchronousOfT, pureSynchronousOfT)), pureSynchronousOfT &&
        synchronousWithSideEffectsOfT &&
        ComputationTest.isSynchronousWithSideEffects(m.merge(synchronousWithSideEffectsOfT, pureSynchronousOfT)), pureDeferredOfT &&
        ComputationTest.isPureDeferred(m.merge(pureDeferredOfT, pureDeferredOfT)), multicastOfT &&
        ComputationTest.isMulticastedAndNotDisposable(m.merge(multicastOfT, multicastOfT)), multicastOfT &&
        pureDeferredOfT &&
        ComputationTest.isPureDeferred(m.merge(multicastOfT, pureDeferredOfT)), multicastOfT &&
        pureDeferredOfT &&
        deferredWithSideEffectsOfT &&
        ComputationTest.isDeferredWithSideEffects(m.merge(multicastOfT, pureDeferredOfT, deferredWithSideEffectsOfT))), describe("never", ComputationTest.isMulticasted(m.never())), describe("takeUntil", test("takes until the notifier notifies its first notification", () => {
        const env_10 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_10, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe([10, 20, 30, 40, 50], Observable.fromReadonlyArray({ delay: 2 }), m.fromObservable(vts), m.takeUntil(pipe([1], Observable.fromValue({ delay: 3 }), m.fromObservable(vts))), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            expectArrayEquals([10, 20])(result);
        }
        catch (e_10) {
            env_10.error = e_10;
            env_10.hasError = true;
        }
        finally {
            __disposeResources(env_10);
        }
    }), pureSynchronousOfT &&
        StatefulSynchronousComputationOperatorTests(computations, m.takeUntil(pureSynchronousOfT)), synchronousWithSideEffectsOfT &&
        ComputationOperatorWithSideEffectsTests(computations, m.takeUntil(synchronousWithSideEffectsOfT)), pureDeferredOfT &&
        StatefulAsynchronousComputationOperatorTests(computations, m.takeUntil(pureDeferredOfT)), deferredWithSideEffectsOfT &&
        AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests(computations, m.takeUntil(deferredWithSideEffectsOfT)), multicastOfT &&
        StatelessAsynchronousComputationOperatorTests(computations, m.takeUntil(multicastOfT))), describe("withLatestFrom", test("when source and latest are interlaced", () => {
        const env_11 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_11, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts), m.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), m.fromObservable(vts))), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
                valuesEquality: arrayEquality(),
            })(result);
        }
        catch (e_11) {
            env_11.error = e_11;
            env_11.hasError = true;
        }
        finally {
            __disposeResources(env_11);
        }
    }), test("when latest produces no values", () => {
        const env_12 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_12, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe([0], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts), m.withLatestFrom(pipe(Observable.empty({ delay: 0 }), m.fromObservable(vts)), returns(1)), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            expectArrayEquals([])(result);
        }
        catch (e_12) {
            env_12.error = e_12;
            env_12.hasError = true;
        }
        finally {
            __disposeResources(env_12);
        }
    }), test("when latest throws", () => {
        const env_13 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_13, VirtualTimeScheduler.create(), false);
            const error = newInstance(Error);
            const result = pipe([0], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts), m.withLatestFrom(pipe(Observable.raise({ raise: returns(error) }), m.fromObservable(vts)), returns(1)), m.toObservable(), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(pipeLazy(result, Disposable.raiseIfDisposedWithError), expectToThrowError(error));
        }
        catch (e_13) {
            env_13.error = e_13;
            env_13.hasError = true;
        }
        finally {
            __disposeResources(env_13);
        }
    }), test("with selector", () => {
        const env_14 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_14, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), m.fromObservable(vts), m.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 }), m.fromObservable(vts)), (x, y) => x + y), m.toObservable(), Observable.forEach(bind(result.push, result)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            expectArrayEquals([0, 1, 3, 4])(result);
        }
        catch (e_14) {
            env_14.error = e_14;
            env_14.hasError = true;
        }
        finally {
            __disposeResources(env_14);
        }
    }), pureSynchronousOfT &&
        StatefulSynchronousComputationOperatorTests(computations, m.withLatestFrom(pureSynchronousOfT)), synchronousWithSideEffectsOfT &&
        ComputationOperatorWithSideEffectsTests(computations, m.withLatestFrom(synchronousWithSideEffectsOfT)), pureDeferredOfT &&
        StatefulAsynchronousComputationOperatorTests(computations, m.withLatestFrom(pureDeferredOfT)), deferredWithSideEffectsOfT &&
        AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests(computations, m.withLatestFrom(deferredWithSideEffectsOfT)), multicastOfT &&
        StatelessAsynchronousComputationOperatorTests(computations, m.withLatestFrom(multicastOfT))), describe("zipLatest", test("zip two delayed sources", () => {
        const env_15 = { stack: [], error: void 0, hasError: false };
        try {
            const vts = __addDisposableResource(env_15, VirtualTimeScheduler.create(), false);
            const result = [];
            pipe(m.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true }), m.fromObservable(vts)), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }), m.fromObservable(vts))), x => x, m.map(([a, b]) => a + b), m.toObservable(), Observable.forEach(v => result.push(v)), Observable.subscribe(vts));
            vts[VirtualTimeSchedulerLike_run]();
            pipe(result, expectArrayEquals([2, 5, 8, 11]));
        }
        catch (e_15) {
            env_15.error = e_15;
            env_15.hasError = true;
        }
        finally {
            __disposeResources(env_15);
        }
    })));
};
export default ConcurrentReactiveComputationModuleTests;
