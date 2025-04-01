/// <reference types="./SynchronousObservable.test.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectToThrow, expectToThrowError, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { arrayEquality, bindMethod, isSome, newInstance, pipe, pipeLazy, pipeLazyAsync, raise, returns, tuple, } from "../../functions.js";
import { increment, scale } from "../../math.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_error, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as Computation from "../Computation.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as ReactiveSource from "../ReactiveSource.js";
import * as Runnable from "../Runnable.js";
import * as SynchronousObservable from "../SynchronousObservable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredAsynchronousReactiveComputationModuleTests from "./fixtures/DeferredAsynchronousReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(SynchronousObservable);
testModule("SynchronousObservable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m), DeferredAsynchronousReactiveComputationModuleTests(m), describe("combineLatest", test("combineLatest from two interspersing sources", pipeLazy(SynchronousObservable.combineLatest(pipe([3, 5, 7], Computation.fromReadonlyArray(m, { delay: 2 })), pipe([2, 4], Computation.fromReadonlyArray(m, { delay: 3 }))), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], {
    valuesEquality: arrayEquality(),
})))), describe("compute", test("batch mode", () => {
    const result = [];
    pipe(SynchronousObservable.compute(() => {
        const fromValueWithDelay = __constant((delay, value) => pipe([value], Computation.fromReadonlyArray(m, { delay })));
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), SynchronousObservable.takeLast(), SynchronousObservable.forEach(bindMethod(result, Array_push)), SynchronousObservable.toRunnable(), Runnable.last());
    pipe(result, expectArrayEquals([22]));
}), test("combined-latest mode", () => {
    const result = [];
    pipe(SynchronousObservable.compute(() => {
        const oneTwoThreeDelayed = __constant(pipe([1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 })));
        const createOneTwoThree = __constant((_) => pipe([1, 2, 3], Computation.fromReadonlyArray(m)));
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), SynchronousObservable.keep(isSome), SynchronousObservable.forEach(bindMethod(result, Array_push)), SynchronousObservable.toRunnable(), Runnable.last());
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("when compute function throws", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const subscription = pipe(SynchronousObservable.compute(() => {
            raise(error);
        }), ReactiveSource.subscribe({ scheduler: vts }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(subscription[DisposableLike_error], expectEquals(error));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("conditional hooks", pipeLazy(SynchronousObservable.compute(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Computation.fromReadonlyArray(m, { delay: 5 })));
    const src2 = __constant(SynchronousObservable.genPure(function* () {
        let x = 100;
        while (true) {
            x++;
            yield x;
        }
    }, { delay: 2 }));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    return v;
}, { mode: "batched" }), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), test("conditional await", pipeLazy(SynchronousObservable.compute(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Computation.fromReadonlyArray(m, { delay: 5 })));
    const src2 = __constant(SynchronousObservable.genPure(function* () {
        let x = 100;
        while (true) {
            x++;
            yield x;
        }
    }, { delay: 2 }));
    const src3 = __constant(pipe([1], Computation.fromReadonlyArray(m, { delay: 1, delayStart: true }), SynchronousObservable.repeat(40)));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    else {
        __await(src3);
        return v;
    }
}), SynchronousObservable.distinctUntilChanged(), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5])))), describe("keyFrame", test("keyframing from 0 to 10 over a duration of 10 clock clicks", pipeLazy(SynchronousObservable.keyFrame(10), SynchronousObservable.map(scale(0, 10)), SynchronousObservable.toRunnable({
    maxMicroTaskTicks: 1,
}), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))), 
// Ideally these tests would be part of SequentialReactiveComputationModuleTests
// but writing dependable tests that use real time is slow at best and ripe for
// flakiness. The implementation is shared so only test using Observable.
describe("merge", test("with sources that have the same delays", () => {
    const [ev1, ev2, ev3] = pipe([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ], ReadonlyArray.map(Computation.fromReadonlyArray(m, { delay: 3 })));
    pipe(SynchronousObservable.merge(ev1, ev2, ev3), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}), test("with sources that have the different delays", pipeLazy(SynchronousObservable.merge(pipe([0, 2, 3, 5, 6], Computation.fromReadonlyArray(m, { delay: 1, delayStart: true })), pipe([1, 4, 7], Computation.fromReadonlyArray(m, { delay: 2, delayStart: true }))), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const subscription = pipe(SynchronousObservable.merge(pipe([1, 4, 7], Computation.fromReadonlyArray(m, { delay: 2 })), SynchronousObservable.concat(SynchronousObservable.delay(5), Computation.raise(m)())), ReactiveSource.subscribe({ scheduler: vts }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(pipeLazy(subscription, Disposable.raiseIfDisposedWithError), expectToThrow);
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("merging merged sources", () => {
    pipe(SynchronousObservable.merge(SynchronousObservable.merge(pipe([1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 })), SynchronousObservable.concat(SynchronousObservable.delay(3), Computation.empty(m)(), pipe([4, 5, 6], Computation.fromReadonlyArray(m, { delay: 1 }))), m.merge(SynchronousObservable.concat(SynchronousObservable.delay(6), Computation.empty(m)(), pipe([7, 8, 9], Computation.fromReadonlyArray(m, { delay: 1 }))), SynchronousObservable.concat(SynchronousObservable.delay(9), Computation.empty(m)(), pipe([10, 11, 12], Computation.fromReadonlyArray(m, { delay: 1 })))))), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
})), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Computation.fromReadonlyArray(m, { delay: 3 })),
    pipe([2, 4, 6], Computation.fromReadonlyArray(m, { delay: 3 })),
    pipe([9, 10], Computation.fromReadonlyArray(m, { delay: 3, delayStart: true })),
], Computation.fromReadonlyArray(m), SynchronousObservable.mergeAll({
    concurrency: 2,
}), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]))), 
/*
testAsync(
  "without delay, merge all observables as they are produced",
  async () => {
    using scheduler = HostScheduler.create();
    await pipeAsync(
      [1, 2, 3],
      SynchronousObservable.fromReadonlyArray(),
      Computation.flatMap(Observable)<number, number>("mergeAll", x =>
        pipe([x, x, x], SynchronousObservable.fromReadonlyArray<number>()),
      ),
      SynchronousObservable.toReadonlyArrayAsync({ scheduler }),
      expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
    );
  },
),*/
test("without delay, merge all observables as they are produced", pipeLazy([1, 2, 3], Computation.fromReadonlyArray(m), SynchronousObservable.map(x => pipe([x, x, x], Computation.fromReadonlyArray(m))), SynchronousObservable.mergeAll({
    concurrency: 1,
}), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("spring", testAsync("test with spring", pipeLazyAsync(SynchronousObservable.spring(), SynchronousObservable.toRunnable({ maxMicroTaskTicks: 1 }), Runnable.last(), expectEquals(1)))), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([10, 20, 30, 40, 50], Computation.fromReadonlyArray(m, { delay: 2 }), SynchronousObservable.takeUntil(pipe([1], Computation.fromReadonlyArray(m, { delay: 3, delayStart: true }))), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([10, 20])))), describe("throttle", test("first", pipeLazy(SynchronousObservable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), SynchronousObservable.takeFirst({ count: 101 }), SynchronousObservable.throttle(50, { mode: "first" }), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(SynchronousObservable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), SynchronousObservable.takeFirst({ count: 200 }), SynchronousObservable.throttle(50, { mode: "last" }), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(SynchronousObservable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), SynchronousObservable.takeFirst({ count: 200 }), SynchronousObservable.throttle(75, { mode: "interval" }), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199])))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 }), SynchronousObservable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 2 }))), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
    valuesEquality: arrayEquality(),
}))), test("when latest produces no values", pipeLazy([0], Computation.fromReadonlyArray(m, { delay: 1 }), SynchronousObservable.withLatestFrom(Computation.empty(m)(), returns(1)), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const result = pipe([0], Computation.fromReadonlyArray(m, { delay: 1 }), SynchronousObservable.withLatestFrom(Computation.raise(m)({
            raise: returns(error),
        }), returns(1)), ReactiveSource.subscribe({ scheduler: vts }));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(pipeLazy(result, Disposable.raiseIfDisposedWithError), expectToThrowError(error));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("with selector", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 1 }), SynchronousObservable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m, { delay: 2 })), (x, y) => x + y), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 3, 4])))), describe("zipLatest", test("zip two delayed sources", pipeLazy(SynchronousObservable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m, { delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Computation.fromReadonlyArray(m, { delay: 2, delayStart: true }))), m.map(([a, b]) => a + b), SynchronousObservable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
((_) => { })(SynchronousObservable);
