/// <reference types="./Subject.test.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsSome, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import { ObservableLike_observe, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../concurrent.js";
import { EventListenerLike_notify } from "../../events.js";
import { bind, bindMethod, increment, pipe, returns, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Subject from "../Subject.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";
testModule("Subject", describe("create", test("with replay", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create({ replay: 2 });
    for (const v of [1, 2, 3, 4]) {
        subject[EventListenerLike_notify](v);
    }
    subject[DisposableLike_dispose]();
    const result = [];
    pipe(subject, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create({ autoDispose: true });
    expectFalse(subject[DisposableLike_isDisposed]);
    const sub1 = pipe(subject, Observable.subscribe(scheduler));
    expectFalse(subject[DisposableLike_isDisposed]);
    const sub2 = pipe(subject, Observable.subscribe(scheduler));
    expectFalse(subject[DisposableLike_isDisposed]);
    const sub3 = pipe(Observable.create(observer => {
        subject[ObservableLike_observe](observer);
        subject[ObservableLike_observe](observer);
    }), Observable.subscribe(scheduler));
    expectFalse(subject[DisposableLike_isDisposed]);
    sub3[DisposableLike_dispose]();
    expectFalse(subject[DisposableLike_isDisposed]);
    sub1[DisposableLike_dispose]();
    expectFalse(subject[DisposableLike_isDisposed]);
    sub2[DisposableLike_dispose]();
    expectTrue(subject[DisposableLike_isDisposed]);
}), test("notifying a disposed subject", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create();
    const result = [];
    const subjectSubscription = pipe(subject, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(scheduler));
    const generateSubscription = pipe(Enumerable.generate(increment, returns(-1)), Observable.fromEnumerable({ delay: 3, delayStart: true }), Observable.forEach(bindMethod(subject, EventListenerLike_notify)), Observable.subscribe(scheduler));
    scheduler[SchedulerLike_schedule](() => {
        subject[DisposableLike_dispose]();
    }, { delay: 7 });
    scheduler[SchedulerLike_schedule](() => {
        generateSubscription[DisposableLike_dispose]();
    }, { delay: 10 });
    scheduler[VirtualTimeSchedulerLike_run]();
    expectTrue(subjectSubscription[DisposableLike_isDisposed]);
    pipe(result, expectArrayEquals([0, 1]));
}), test("subscribing to a subject disposed with an error", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create();
    const e = new Error();
    subject[DisposableLike_dispose](e);
    const subscription = pipe(subject, Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(subscription[DisposableLike_error], expectEquals(e));
}), test("notifing an observer that throws an exception on overflow", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const subject = Subject.create();
        const subscription = pipe(subject, Observable.subscribe(vts, {
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        }));
        subject[EventListenerLike_notify](1);
        subject[EventListenerLike_notify](2);
        subject[EventListenerLike_notify](3);
        expectIsSome(subscription[DisposableLike_error]);
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("with autoDispose", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const subject = Subject.create({
            autoDispose: true,
            replay: 2,
        });
        for (const v of [1, 2, 3, 4]) {
            subject[EventListenerLike_notify](v);
        }
        const result = [];
        const subscription = pipe(subject, Observable.forEach(bind(Array.prototype[Array_push], result)), Observable.subscribe(vts));
        vts[SchedulerLike_schedule](() => {
            pipe(result, expectArrayEquals([3, 4]));
            expectFalse(subject[DisposableLike_isDisposed]);
            subscription[DisposableLike_dispose]();
            expectTrue(subject[DisposableLike_isDisposed]);
        });
        vts[VirtualTimeSchedulerLike_run]();
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
})));
