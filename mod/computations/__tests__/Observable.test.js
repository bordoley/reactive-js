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
import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import * as Source from "../Source.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(Observable);
testModule("Observable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m), ConcurrentReactiveComputationModuleTests(m), DeferredReactiveComputationModuleTests(m), 
/*describe(
  "computeDeferred",
  testAsync("__stream", async () => {
    await pipeAsync(
      Observable.computeDeferred(() => {
        const stream = __stream(Streamable.identity<number>());
        const push = bindMethod(stream, EventListenerLike_notify);

        const result = __observe<number>(stream) ?? 0;
        __do(push, result + 1);

        return result;
      }),
      Observable.takeFirst<number>({ count: 10 }),
      Observable.buffer<number>(),
      Source.lastAsync<number[]>(),
      x => x ?? [],
      expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    );
  }),
  testAsync("__state", async () => {
    await pipeAsync(
      Observable.computeDeferred(() => {
        const initialState = __constant((): number => 0);
        const state = __state(initialState);
        const push = bindMethod(state, EventListenerLike_notify);
        const result = __observe<number>(state) ?? -1;

        if (result > -1) {
          __do(push, () => result + 1);
        }

        return result;
      }),
      Observable.takeFirst({ count: 10 }),
      Observable.buffer(),
      Source.lastAsync<readonly number[]>(),
      x => x ?? [],
      expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]),
    );
  }),
  testAsync("awaiting a Multicast Observable", async () => {
    const publisher = Publisher.create<number>();

   (async () =>{
      publisher[EventListenerLike_notify](200);
      await pipe(Observable.delay(10), Source.lastAsync());
      publisher[EventListenerLike_notify](100);
      await pipe(Observable.delay(10), Source.lastAsync());
      publisher[SinkLike_complete]();
    })()
   
    await pipeAsync(
      Observable.computeDeferred(
        () => {
          const result = __observe(publisher);

          // Need to dispose the subject or the test will hang
          //__do(f);

          return result;
        },
        { mode: "combine-latest" },
      ),
      Observable.distinctUntilChanged<number>(),
      Source.toReadonlyArrayAsync<number>(),
      expectArrayEquals([200, 100]),
    );
  }),
),*/
describe("combineLatest", test("combineLatest from two interspersing sources", pipeLazy(Observable.combineLatest(pipe([3, 5, 7], Computation.fromReadonlyArray(m)({ delay: 2 })), pipe([2, 4], Computation.fromReadonlyArray(m)({ delay: 3 }))), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], {
    valuesEquality: arrayEquality(),
})))), describe("computeSynchronous", test("batch mode", () => {
    const result = [];
    pipe(Observable.computeSynchronous(() => {
        const fromValueWithDelay = __constant((delay, value) => pipe([value], Computation.fromReadonlyArray(m)({ delay })));
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), Observable.takeLast(), Observable.forEach(bindMethod(result, Array_push)), Observable.toRunnable(), Runnable.last());
    pipe(result, expectArrayEquals([22]));
}), test("combined-latest mode", () => {
    const result = [];
    pipe(Observable.computeSynchronous(() => {
        const oneTwoThreeDelayed = __constant(pipe([1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 })));
        const createOneTwoThree = __constant((_) => pipe([1, 2, 3], Computation.fromReadonlyArray(m)()));
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Observable.keep(isSome), Observable.forEach(bindMethod(result, Array_push)), Observable.toRunnable(), Runnable.last());
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("when compute function throws", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const subscription = pipe(Observable.computeSynchronous(() => {
            raise(error);
        }), Source.subscribe({ scheduler: vts }));
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
}), test("conditional hooks", pipeLazy(Observable.computeSynchronous(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)({ delay: 5 })));
    const src2 = __constant(Observable.genPure(function* () {
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
}, { mode: "batched" }), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]))), test("conditional await", pipeLazy(Observable.computeSynchronous(() => {
    const src = __constant(pipe([0, 1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)({ delay: 5 })));
    const src2 = __constant(Observable.genPure(function* () {
        let x = 100;
        while (true) {
            x++;
            yield x;
        }
    }, { delay: 2 }));
    const src3 = __constant(pipe([1], Computation.fromReadonlyArray(m)({ delay: 1, delayStart: true }), Observable.repeat(40)));
    const v = __await(src);
    if (v % 2 === 0) {
        __memo(increment, 1);
        return __await(src2);
    }
    else {
        __await(src3);
        return v;
    }
}), Observable.distinctUntilChanged(), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5])))), describe("keyFrame", test("keyframing from 0 to 10 over a duration of 10 clock clicks", pipeLazy(Observable.keyFrame(10), Observable.map(scale(0, 10)), Observable.toRunnable({
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
    ], ReadonlyArray.map(Computation.fromReadonlyArray(m)({ delay: 3 })));
    pipe(Observable.merge(ev1, ev2, ev3), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}), test("with sources that have the different delays", pipeLazy(Observable.merge(pipe([0, 2, 3, 5, 6], Computation.fromReadonlyArray(m)({ delay: 1, delayStart: true })), pipe([1, 4, 7], Computation.fromReadonlyArray(m)({ delay: 2, delayStart: true }))), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const subscription = pipe(Observable.merge(pipe([1, 4, 7], Computation.fromReadonlyArray(m)({ delay: 2 })), Observable.concat(Observable.delay(5), Computation.raise(m)())), Source.subscribe({ scheduler: vts }));
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
    pipe(Observable.merge(Observable.merge(pipe([1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 })), Observable.concat(Observable.delay(3), Computation.empty(m)(), pipe([4, 5, 6], Computation.fromReadonlyArray(m)({ delay: 1 }))), m.merge(Observable.concat(Observable.delay(6), Computation.empty(m)(), pipe([7, 8, 9], Computation.fromReadonlyArray(m)({ delay: 1 }))), Observable.concat(Observable.delay(9), Computation.empty(m)(), pipe([10, 11, 12], Computation.fromReadonlyArray(m)({ delay: 1 })))))), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
})), describe("mergeAll", test("with queueing", pipeLazy([
    pipe([1, 3, 5], Computation.fromReadonlyArray(m)({ delay: 3 })),
    pipe([2, 4, 6], Computation.fromReadonlyArray(m)({ delay: 3 })),
    pipe([9, 10], Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true })),
], Computation.fromReadonlyArray(m)(), Observable.mergeAll({
    concurrency: 2,
}), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]))), 
/*
testAsync(
  "without delay, merge all observables as they are produced",
  async () => {
    using scheduler = HostScheduler.create();
    await pipeAsync(
      [1, 2, 3],
      Observable.fromReadonlyArray(),
      Computation.flatMap(Observable)<number, number>("mergeAll", x =>
        pipe([x, x, x], Observable.fromReadonlyArray<number>()),
      ),
      Observable.toReadonlyArrayAsync({ scheduler }),
      expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
    );
  },
),*/
test("without delay, merge all observables as they are produced", pipeLazy([1, 2, 3], Computation.fromReadonlyArray(m)(), Observable.map(x => pipe([x, x, x], Computation.fromReadonlyArray(m)())), Observable.mergeAll({
    concurrency: 1,
}), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("spring", testAsync("test with spring", pipeLazyAsync(Observable.spring(), Observable.toRunnable({ maxMicroTaskTicks: 1 }), Runnable.last(), expectEquals(1)))), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([10, 20, 30, 40, 50], Computation.fromReadonlyArray(m)({ delay: 2 }), Observable.takeUntil(pipe([1], Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true }))), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([10, 20])))), describe("throttle", test("first", pipeLazy(Observable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 101 }), Observable.throttle(50, { mode: "first" }), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Observable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Observable.genPure(function* counter() {
    let x = 0;
    while (true) {
        yield x;
        x++;
    }
}, {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199])))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 }))), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
    valuesEquality: arrayEquality(),
}))), test("when latest produces no values", pipeLazy([0], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(Computation.empty(m)(), returns(1)), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const result = pipe([0], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(Computation.raise(m)({
            raise: returns(error),
        }), returns(1)), Source.subscribe({ scheduler: vts }));
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
}), test("with selector", pipeLazy([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })), (x, y) => x + y), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 3, 4])))), describe("zipLatest", test("zip two delayed sources", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m)({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Computation.fromReadonlyArray(m)({ delay: 2, delayStart: true }))), m.map(([a, b]) => a + b), Observable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
//((_: Observable.Signature) => {})(Observable);
