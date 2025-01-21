/// <reference types="./Flowable.test.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectFalse, expectToHaveBeenCalledTimes, expectToThrowAsync, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import { FlowableLike_flow, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { StoreLike_value } from "../../events.js";
import { bindMethod, error, increment, invoke, newInstance, none, pipe, pipeLazy, returns, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Flowable from "../Flowable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Flowable", describe("dispatchTo", test("dispatching a pauseable observable into a stream with backpressure", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const src = pipe(Observable.generate(increment, returns(-1), {
            delay: 1,
            delayStart: true,
        }), Observable.takeFirst({ count: 5 }), Flowable.fromRunnable());
        const dest = Streamable.identity()[StreamableLike_stream](vts, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        });
        const dispatchToSubscription = pipe(src, Flowable.dispatchTo(dest), Observable.subscribe(vts));
        const result = [];
        pipe(dest, Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        expectTrue(dispatchToSubscription[DisposableLike_isDisposed]);
        pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
})), describe("fromAsyncIterable", testAsync("infinite immediately resolving iterable", async () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
        let timeout = none;
        const stream = pipe((async function* foo() {
            let i = 0;
            while (true) {
                await new Promise(resolve => {
                    timeout = setTimeout(resolve, 25);
                });
                yield i++;
                timeout = none;
            }
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }), DisposableContainer.onDisposed(_ => {
            if (timeout !== none) {
                clearTimeout(timeout);
            }
        }));
        stream[PauseableLike_resume]();
        scheduler[SchedulerLike_schedule](_ => stream[PauseableLike_pause](), {
            delay: 20,
        });
        scheduler[SchedulerLike_schedule](_ => stream[PauseableLike_resume](), {
            delay: 40,
        });
        const result = await pipe(stream, Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler));
        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), testAsync("iterable that completes", async () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
        const stream = pipe((async function* foo() {
            yield 1;
            yield 2;
            yield 3;
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
        stream[PauseableLike_resume]();
        const result = await pipe(stream, Observable.buffer(), Observable.lastAsync(scheduler));
        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), testAsync("iterable that throws", pipeLazy(async () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_4, HostScheduler.create(), false);
        const e = error();
        const stream = pipe((async function* foo() {
            throw e;
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
        stream[PauseableLike_resume]();
        await pipe(stream, Observable.lastAsync(scheduler));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}, expectToThrowAsync))), describe("fromRunnable", test("a source with delay", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create(), false);
        const generateObservable = pipe(Observable.generate(increment, returns(-1), {
            delay: 1,
            delayStart: true,
        }), Flowable.fromRunnable(), invoke(FlowableLike_flow, vts));
        generateObservable[PauseableLike_resume]();
        vts[SchedulerLike_schedule](() => {
            generateObservable[PauseableLike_pause]();
            expectTrue(generateObservable[PauseableLike_isPaused][StoreLike_value]);
        }, { delay: 2 });
        vts[SchedulerLike_schedule](() => {
            generateObservable[PauseableLike_resume]();
            expectFalse(generateObservable[PauseableLike_isPaused][StoreLike_value]);
        }, { delay: 4 });
        vts[SchedulerLike_schedule](() => generateObservable[DisposableLike_dispose](), { delay: 6 });
        const f = mockFn();
        const subscription = pipe(generateObservable, Observable.forEach((x) => {
            f(x);
        }), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        // pipe(f, expectToHaveBeenCalledTimes(2));
        pipe(f.calls.flat(), expectArrayEquals([0, 1]));
        pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("flow a generating source", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        const flowed = pipe([0, 1, 2], Observable.fromReadonlyArray(), Flowable.fromRunnable(), invoke(FlowableLike_flow, vts), Disposable.addTo(vts));
        vts[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
            delay: 2,
        });
        const f = mockFn();
        const subscription = pipe(flowed, Observable.withCurrentTime(tuple), Observable.forEach(([_, v]) => {
            f(v);
        }), Observable.subscribe(vts), Disposable.addTo(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(f, expectToHaveBeenCalledTimes(3));
        pipe(f.calls.flat(), expectArrayEquals([0, 1, 2]));
        pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
}), test("when the source throws", () => {
    const env_7 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_7, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const flowed = pipe(Observable.throws({ raise: () => error }), Flowable.fromRunnable(), invoke(FlowableLike_flow, vts), Disposable.addTo(vts));
        flowed[PauseableLike_resume]();
        vts[VirtualTimeSchedulerLike_run]();
        pipe(flowed[DisposableLike_error], expectEquals(error));
    }
    catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
    }
    finally {
        __disposeResources(env_7);
    }
})));
((_) => { })(Flowable);
