/// <reference types="./Flowable.test.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectToHaveBeenCalledTimes, expectToThrowAsync, expectTrue, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import { FlowableLike_flow, PauseableLike_pause, PauseableLike_resume, SchedulerLike_schedule, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { bind, error, increment, invoke, newInstance, pipe, pipeLazy, returns, tuple, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Flowable from "../Flowable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Flowable", describe("dispatchTo", test("dispatching a pauseable observable into a stream with backpressure", () => {
    const scheduler = VirtualTimeScheduler.create();
    const src = pipe(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Observable.takeFirst({ count: 5 }), Flowable.fromRunnable());
    const dest = Streamable.identity()[StreamableLike_stream](scheduler, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
    });
    const dispatchToSubscription = pipe(src, Flowable.dispatchTo(dest), Observable.subscribe(scheduler));
    const result = [];
    pipe(dest, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    expectTrue(dispatchToSubscription[DisposableLike_isDisposed]);
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
})), describe("fromAsyncIterable", testAsync("infinite immediately resolving iterable", async () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
        const stream = pipe((async function* foo() {
            let i = 0;
            while (true) {
                yield i++;
            }
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
        stream[PauseableLike_resume]();
        const result = await pipe(stream, Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler));
        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), testAsync("iterable that completes", async () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
        const stream = pipe((async function* foo() {
            yield 1;
            yield 2;
            yield 3;
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
        stream[PauseableLike_resume]();
        const result = await pipe(stream, Observable.buffer(), Observable.lastAsync(scheduler));
        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), testAsync("iterable that throws", pipeLazy(async () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
        const e = error();
        const stream = pipe((async function* foo() {
            throw e;
        })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
        stream[PauseableLike_resume]();
        await pipe(stream, Observable.lastAsync(scheduler));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}, expectToThrowAsync))), describe("fromRunnable", test("a source with delay", () => {
    const scheduler = VirtualTimeScheduler.create();
    const generateObservable = pipe(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 1, delayStart: true }), Flowable.fromRunnable(), invoke(FlowableLike_flow, scheduler));
    generateObservable[PauseableLike_resume](),
        scheduler[SchedulerLike_schedule](() => generateObservable[PauseableLike_pause](), {
            delay: 2,
        });
    scheduler[SchedulerLike_schedule](() => generateObservable[PauseableLike_resume](), {
        delay: 4,
    });
    scheduler[SchedulerLike_schedule](() => generateObservable[DisposableLike_dispose](), {
        delay: 6,
    });
    const f = mockFn();
    const subscription = pipe(generateObservable, Observable.forEach((x) => {
        f(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls.flat(), expectArrayEquals([0, 1]));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
}), test("flow a generating source", () => {
    const scheduler = VirtualTimeScheduler.create();
    const flowed = pipe([0, 1, 2], Observable.fromReadonlyArray(), Flowable.fromRunnable(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
    scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
    });
    const f = mockFn();
    const subscription = pipe(flowed, Observable.withCurrentTime(tuple), Observable.forEach(([_, v]) => {
        f(v);
    }), Observable.subscribe(scheduler), Disposable.addTo(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls.flat(), expectArrayEquals([0, 1, 2]));
    pipe(subscription[DisposableLike_isDisposed], expectTrue);
}), test("when the source throws", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const error = newInstance(Error);
        const flowed = pipe(Observable.throws({ raise: () => error }), Flowable.fromRunnable(), invoke(FlowableLike_flow, vts), Disposable.addTo(vts));
        flowed[PauseableLike_resume]();
        vts[VirtualTimeSchedulerLike_run]();
        pipe(flowed[DisposableLike_error], expectEquals(error));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
})));
((_) => { })(Flowable);
